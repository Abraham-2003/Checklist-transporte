<template>
  <div class="flex h-screen bg-gray-100">
    <Sidebar />

    <div class="flex-1 p-6 overflow-auto">
      <!-- Header -->
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-900">Viajes</h1>
        <p class="text-gray-500 text-sm">Monitoreo y control de rutas</p>
        <div class="mb-4 flex justify-end">
          <button
            @click="abrirModalCrear"
            class="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition"
          >
            + Asignar viaje
          </button>
        </div>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div
          v-for="viaje in viajes"
          :key="viaje.id"
          @click="selectViaje(viaje)"
          class="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition cursor-pointer hover:-translate-y-1"
        >
          <!-- Header -->
          <div class="flex justify-between items-center mb-3">
            <h2 class="font-bold text-gray-900">
              {{ viaje.nombre }}
            </h2>

            <span
              class="px-3 py-1 text-xs rounded-full font-semibold"
              :class="estadoColor(viaje.estado)"
            >
              {{ viaje.estado }}
            </span>
          </div>

          <!-- Ruta -->
          <p class="text-sm text-gray-500 mb-2">
            {{ viaje.origen }} → {{ viaje.destino }}
          </p>

          <!-- Info -->
          <div class="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p class="text-gray-400">Pipa</p>
              <p class="font-semibold">{{ viaje.pipa }}</p>
            </div>

            <div>
              <p class="text-gray-400">Operador</p>
              <p class="font-semibold">{{ viaje.operador }}</p>
            </div>

            <div>
              <p class="text-gray-400">Km</p>
              <p class="font-semibold">{{ viaje.km }} km</p>
            </div>

            <div>
              <p class="text-gray-400">Consumo</p>
              <p class="font-semibold">{{ viaje.consumo }} km/l</p>
            </div>
          </div>

          <!-- Alertas -->
          <div v-if="viaje.alerta" class="mt-3 text-xs text-red-500 font-semibold">
            ⚠ {{ viaje.alerta }}
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <ViajeModal
      v-if="viajeSeleccionado"
      :viaje="viajeSeleccionado"
      @close="viajeSeleccionado = null"
    />
    <CrearViajeModal v-if="mostrarModalCrear" @close="mostrarModalCrear = false" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Sidebar from "../components/Sidebar.vue";
import ViajeModal from "../components/ViajeModal.vue";
import CrearViajeModal from "../components/CrearViajeModal.vue";

const mostrarModalCrear = ref(false);

const abrirModalCrear = () => {
  mostrarModalCrear.value = true;
};

const viajes = ref([
  {
    id: 1,
    nombre: "Viaje 001",
    origen: "CDMX",
    destino: "Puebla",
    estado: "En ruta",
    pipa: "Pipa 01",
    operador: "Juan Pérez",
    km: 120,
    consumo: 3.2,
    alerta: "Consumo elevado",
    lat: 19.43,
    lng: -99.13,
  },
  {
    id: 2,
    nombre: "Viaje 001",
    origen: "CDMX",
    destino: "Puebla",
    estado: "En ruta",
    pipa: "Pipa 01",
    operador: "Juan Pérez",
    km: 120,
    consumo: 3.2,
    alerta: "Consumo elevado",
    lat: 19.43,
    lng: -99.13,
  },
  {
    id: 3,
    nombre: "Viaje 001",
    origen: "CDMX",
    destino: "Puebla",
    estado: "En ruta",
    pipa: "Pipa 01",
    operador: "Juan Pérez",
    km: 120,
    consumo: 3.2,
    lat: 19.43,
    lng: -99.13,
  },
  {
    id: 4,
    nombre: "Viaje 002",
    origen: "CDMX",
    destino: "Querétaro",
    estado: "Finalizado",
    pipa: "Pipa 02",
    operador: "Carlos López",
    km: 210,
    consumo: 3.6,
    alerta: null,
    ruta: [
      { lat: 19.43, lng: -99.13 },
      { lat: 19.6, lng: -99.3 },
      { lat: 20.59, lng: -100.39 },
    ],
  },
  {
    id: 5,
    nombre: "Viaje 001",
    origen: "CDMX",
    destino: "Puebla",
    estado: "En ruta",
    pipa: "Pipa 01",
    operador: "Juan Pérez",
    km: 120,
    consumo: 3.2,
    lat: 19.43,
    lng: -99.13,
  },
  {
    id: 6,
    nombre: "Viaje 001",
    origen: "CDMX",
    destino: "Puebla",
    estado: "En ruta",
    pipa: "Pipa 01",
    operador: "Juan Pérez",
    km: 120,
    consumo: 3.2,
    lat: 19.43,
    lng: -99.13,
  },
]);

const viajeSeleccionado = ref(null);

const selectViaje = (viaje) => {
  viajeSeleccionado.value = viaje;
};

const estadoColor = (estado) => {
  if (estado === "En ruta") return "bg-blue-100 text-blue-700";
  if (estado === "Finalizado") return "bg-green-100 text-green-700";
  if (estado === "Detenido") return "bg-yellow-100 text-yellow-700";
};
</script>
