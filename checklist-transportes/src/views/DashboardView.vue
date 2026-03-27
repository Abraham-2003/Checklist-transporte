<template>
  <div class="flex">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Contenido -->
    <div class="flex-1 bg-gray-100 p-6">
      <!-- Header -->
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p class="text-gray-500">Resumen general de la operación</p>
      </div>

      <!-- KPIs -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div
          v-for="card in kpis"
          :key="card.title"
          class="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
        >
          <p class="text-gray-500 text-sm mb-1">
            {{ card.title }}
          </p>

          <h2 class="text-3xl font-bold" :class="card.color">
            {{ card.value }}
          </h2>
        </div>
      </div>

      <!-- Segunda fila -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Consumo -->
        <div
          class="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
        >
          <h3 class="font-bold mb-4 text-gray-800">Consumo</h3>

          <div class="space-y-3">
            <div>
              <p class="text-gray-500 text-sm">Promedio</p>
              <p class="text-xl font-bold">3.5 km/l</p>
            </div>

            <div>
              <p class="text-gray-500 text-sm">Alertas activas</p>
              <p class="text-xl font-bold text-yellow-500 animate-pulse">2</p>
            </div>
          </div>
        </div>

        <!-- Operadores -->
        <div
          class="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
        >
          <h3 class="font-bold mb-4 text-gray-800">Operadores</h3>

          <div class="space-y-3">
            <div>
              <p class="text-gray-500 text-sm">Activos</p>
              <p class="text-xl font-bold">10</p>
            </div>

            
          </div>
        </div>
      </div>

      <!-- GPS -->
      <div
        class="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 mt-6"
      >
        <h3 class="font-bold mb-4 text-gray-800">Ubicación en tiempo real</h3>

        <!-- Select de viajes -->
        <select
          v-model="viajeSeleccionado"
          class="mb-4 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
        >
          <option disabled value="">Selecciona un viaje</option>
          <option v-for="viaje in viajes" :key="viaje.id" :value="viaje">
            {{ viaje.nombre }}
          </option>
        </select>

        <!-- Mapa -->
        <div class="w-full h-64 rounded-xl overflow-hidden">
          <iframe
            v-if="viajeSeleccionado"
            :src="getMapUrl(viajeSeleccionado.lat, viajeSeleccionado.lng)"
            width="100%"
            height="100%"
            style="border: 0"
            loading="lazy"
          >
          </iframe>

          <div v-else class="w-full h-full flex items-center justify-center bg-gray-200">
            <p class="text-gray-500">Selecciona un viaje</p>
          </div>
        </div>

        <!-- Info -->
        <p v-if="viajeSeleccionado" class="text-sm text-gray-500 mt-3">
          Lat: {{ viajeSeleccionado.lat }} | Lng: {{ viajeSeleccionado.lng }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../components/Sidebar.vue";
import { ref, onMounted } from 'vue'

const viajes = ref([
  {
    id: 1,
    nombre: 'Pipa 01 - CDMX → Puebla',
    lat: 19.4326,
    lng: -99.1332
  },
  {
    id: 2,
    nombre: 'Pipa 02 - CDMX → Querétaro',
    lat: 19.50,
    lng: -99.20
  }
])

const viajeSeleccionado = ref('')

// 🔥 Generador de mapa
const getMapUrl = (lat, lng) => {
  return `https://maps.google.com/maps?q=${lat},${lng}&z=14&output=embed`
}

// 🔥 Simulación de movimiento

const kpis = [
  { title: "Viajes activos", value: 8, color: "text-blue-600" },
  { title: "Finalizados hoy", value: 15, color: "text-green-600" },
  { title: "Incidencias", value: 3, color: "text-red-500" },
  { title: "Pipas disponibles", value: 12, color: "text-gray-900" },
];
</script>
