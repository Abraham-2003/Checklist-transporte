<template>
  <div class="max-w-sm mx-auto min-h-screen bg-gray-100 flex flex-col">

    <!-- MAPA REAL -->
    <div id="map" class="h-56 w-full z-0"></div>

    <!-- CONTENIDO -->
    <div class="p-4 -mt-6">

      <!-- CARD PRINCIPAL -->
      <div class="bg-white rounded-2xl shadow-xl p-5 mb-4">

        <h1 class="text-lg font-bold mb-3">Inicio de viaje</h1>

        <!-- RUTA -->
        <div class="mb-4">
          <p class="text-sm text-gray-400">Origen</p>
          <p class="font-semibold">{{ viaje.origen }}</p>

          <p class="text-xs text-gray-400 my-1">↓</p>

          <p class="text-sm text-gray-400">Destino</p>
          <p class="font-semibold">{{ viaje.destino }}</p>
        </div>

        <!-- PARADAS -->
        <div class="mb-4">
          <p class="text-sm font-semibold mb-2">Paradas</p>
          <ul class="text-sm text-gray-600 space-y-1">
            <li v-for="(p, i) in viaje.paradas" :key="i">
              • {{ p }}
            </li>
          </ul>
        </div>

        <!-- INFO -->
        <div class="grid grid-cols-2 gap-3 text-sm mb-4">
          <div>
            <p class="text-gray-400 text-xs">Pipa</p>
            <p class="font-semibold">{{ viaje.pipa }}</p>
          </div>
          <div>
            <p class="text-gray-400 text-xs">Gas esperado</p>
            <p class="font-semibold">{{ viaje.gas }}</p>
          </div>
        </div>

      </div>

      <!-- FORM -->
      <div class="bg-white rounded-2xl shadow p-4 space-y-4">

        <div>
          <label class="text-sm">Nivel de gas inicial</label>
          <input
            type="number"
            class="w-full border p-2 rounded-lg mt-1"
            placeholder="Litros"
          />
        </div>

        <div>
          <label class="text-sm">Evidencia fotográfica</label>
          <input type="file" class="w-full mt-1" />
        </div>

        <div>
          <label class="text-sm">Observaciones</label>
          <textarea class="w-full border p-2 rounded-lg mt-1"></textarea>
        </div>

        <button
          @click="comenzar"
          class="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
        >
          Iniciar viaje
        </button>

      </div>

    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { onMounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const router = useRouter()
const route = useRoute()

const viaje = {
  id: route.params.id,
  origen: 'CDMX',
  destino: 'Toluca',
  paradas: ['Caseta La Venta', 'Gasolinera El Mirador'],
  pipa: 'P-23',
  gas: '20,000 L'
}

// Coordenadas mock
const origenCoords = [19.4326, -99.1332] // CDMX
const destinoCoords = [19.2826, -99.6557] // Toluca

onMounted(() => {
  const map = L.map('map').setView(origenCoords, 10)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map)

  // Marker origen
  L.marker(origenCoords)
    .addTo(map)
    .bindPopup('Origen: CDMX')

  // Marker destino
  L.marker(destinoCoords)
    .addTo(map)
    .bindPopup('Destino: Toluca')

  // Línea de ruta
  L.polyline([origenCoords, destinoCoords], {
    weight: 4
  }).addTo(map)
})

const comenzar = () => {
  router.push(`/operador/en-curso/${route.params.id}`)
}
</script>