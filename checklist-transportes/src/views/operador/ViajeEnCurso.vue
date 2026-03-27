<template>
  <div class="max-w-sm mx-auto h-screen bg-gray-100 relative overflow-hidden">

    <!-- MAPA REAL -->
    <div id="map" class="absolute inset-0 z-0"></div>

    <!-- HEADER FLOTANTE -->
    <div class="absolute top-4 left-4 right-4 bg-white rounded-xl shadow-md p-3 z-10">
      <p class="text-xs text-gray-400">En curso</p>
      <p class="font-semibold text-sm">CDMX → Toluca</p>
      <p class="text-xs text-gray-500">Ubicación en tiempo real</p>
    </div>

    <!-- BOTÓN CENTRAR -->
    <button
      @click="centrarMapa"
      class="absolute right-4 bottom-40 bg-white p-3 rounded-full shadow-md z-10"
    >
      📍
    </button>

    <!-- BOTTOM SHEET -->
   <div
  class="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl p-4 z-10 transition-all duration-300"
  :class="expandido ? 'h-[75%]' : 'h-28'"
>
  <!-- HANDLE -->
  <div
    class="w-10 h-1.5 bg-gray-300 rounded-full mx-auto mb-3 cursor-pointer"
    @click="toggleSheet"
  ></div>

  <!-- EXPANDIDO -->
  <div v-if="expandido" class="space-y-4">

    <h2 class="font-bold text-lg">Opciones de viaje</h2>

    <!-- LISTA DE ACCIONES -->
    <div class="space-y-3">

      <!-- PARADA -->
      <div class="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
        <div class="flex items-center gap-3">
          <span class="text-lg">🛑</span>
          <div>
            <p class="text-sm font-semibold">Solicitar parada</p>
            <p class="text-xs text-gray-500">Agregar punto en ruta</p>
          </div>
        </div>
        <button class="text-sm font-semibold text-gray-900">
          Abrir
        </button>
      </div>

      <!-- INCIDENCIA -->
      <div class="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
        <div class="flex items-center gap-3">
          <span class="text-lg">⚠️</span>
          <div>
            <p class="text-sm font-semibold">Reportar incidencia</p>
            <p class="text-xs text-gray-500">Falla o retraso</p>
          </div>
        </div>
        <button class="text-sm font-semibold text-gray-900">
          Abrir
        </button>
      </div>

    </div>

    <!-- BOTÓN PRINCIPAL -->
    <button class="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold mt-4">
      Finalizar viaje
    </button>

  </div>

  <!-- COMPACTO -->
  <div v-else class="flex justify-between items-center">
    <div>
      <p class="font-semibold text-sm">Viaje en curso</p>
      <p class="text-xs text-gray-500">Desliza para opciones</p>
    </div>

    <button class="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm">
      Finalizar
    </button>
  </div>
</div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const expandido = ref(false)
let map = null
let marker = null
let routeLine = null

// Punto actual (CDMX)
const coords = {
  lat: 19.4326,
  lng: -99.1332
}

// Destino mock (puedes cambiarlo)
const destino = {
  lat: 19.2826, // Toluca aprox
  lng: -99.6557
}

onMounted(() => {
  map = L.map('map').setView([coords.lat, coords.lng], 10)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map)

  // Marker actual
  marker = L.marker([coords.lat, coords.lng]).addTo(map)

  // Marker destino
  L.marker([destino.lat, destino.lng]).addTo(map)

  // 🔥 LÍNEA DE RUTA
  routeLine = L.polyline(
  [
    [coords.lat, coords.lng],
    [19.38, -99.30],
    [19.34, -99.45],
    [destino.lat, destino.lng]
  ],
  {
    weight: 4,
    opacity: 0.8
  }
).addTo(map)
})

// Centrar mapa
const centrarMapa = () => {
  map.setView([coords.lat, coords.lng], 15)
}

// Toggle panel
const toggleSheet = () => {
  expandido.value = !expandido.value
}
</script>