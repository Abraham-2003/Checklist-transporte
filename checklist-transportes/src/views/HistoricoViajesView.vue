<template>
  <div class="flex h-screen bg-gray-100">
    <Sidebar />

    <div class="flex-1 p-6 overflow-auto">

      <!-- Header -->
      <div class="mb-6">
        <h1 class="text-2xl font-bold">Histórico de viajes</h1>
        <p class="text-gray-500 text-sm">
          Registro y seguimiento de viajes realizados
        </p>
      </div>

      <!-- Tabla -->
      <div class="bg-white rounded-2xl shadow-md overflow-hidden">

        <table class="w-full text-sm">

          <thead class="bg-gray-50 text-gray-600">
            <tr>
              <th class="px-6 py-3 text-left">Ruta</th>
              <th class="px-6 py-3 text-left">Operador</th>
              <th class="px-6 py-3 text-left">Pipa</th>
              <th class="px-6 py-3 text-left">Fecha</th>
              <th class="px-6 py-3 text-left">Estado</th>
            </tr>
          </thead>

          <tbody>

            <tr
              v-for="viaje in viajes"
              :key="viaje.id"
              @click="selectViaje(viaje)"
              class="border-t hover:bg-gray-50 cursor-pointer transition"
            >
              <td class="px-6 py-4 font-semibold">
                {{ viaje.origen }} → {{ viaje.destino }}
              </td>

              <td class="px-6 py-4">
                {{ viaje.operador }}
              </td>

              <td class="px-6 py-4">
                {{ viaje.pipa }}
              </td>

              <td class="px-6 py-4">
                {{ viaje.fecha }}
              </td>

              <td class="px-6 py-4">
                <span
                  class="px-3 py-1 rounded-full text-xs font-semibold"
                  :class="estadoColor(viaje.estado)"
                >
                  {{ viaje.estado }}
                </span>
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

    <!-- Modal -->
    <ViajeDetalleModal
      v-if="viajeSeleccionado"
      :viaje="viajeSeleccionado"
      @close="viajeSeleccionado = null"
    />

  </div>
</template>

<script setup>
import { ref } from "vue";
import Sidebar from "../components/Sidebar.vue";
import ViajeDetalleModal from "../components/ViajeDetalleModal.vue";

const viajes = ref([
  {
    id: 1,
    origen: "CDMX",
    destino: "Puebla",
    operador: "Juan Pérez",
    pipa: "Pipa 01",
    fecha: "2026-03-20",
    estado: "Completado",

    ruta: [
      { lat: 19.43, lng: -99.13 },
      { lat: 19.10, lng: -98.20 }
    ],

    evidencias: ["/docs/foto1.jpg"],

    // 🔥 AGREGA ESTO
    paradas: [],
    incidencias: [],
    gasEsperado: 5000,
    gasReal: 4800
  },
  {
    id: 1,
    origen: "CDMX",
    destino: "Puebla",
    operador: "Juan Pérez",
    pipa: "Pipa 01",
    fecha: "2026-03-20",
    estado: "Completado",

    ruta: [
      { lat: 19.43, lng: -99.13 },
      { lat: 19.10, lng: -98.20 }
    ],

    evidencias: ["/docs/foto1.jpg"],

    // 🔥 AGREGA ESTO
    paradas: [],
    incidencias: [],
    gasEsperado: 5000,
    gasReal: 4800
  },
  {
    id: 1,
    origen: "CDMX",
    destino: "Puebla",
    operador: "Juan Pérez",
    pipa: "Pipa 01",
    fecha: "2026-03-20",
    estado: "Completado",

    ruta: [
      { lat: 19.43, lng: -99.13 },
      { lat: 19.10, lng: -98.20 }
    ],

    evidencias: ["/docs/foto1.jpg"],

    // 🔥 AGREGA ESTO
    paradas: [],
    incidencias: [],
    gasEsperado: 5000,
    gasReal: 4800
  },
  {
    id: 1,
    origen: "CDMX",
    destino: "Puebla",
    operador: "Juan Pérez",
    pipa: "Pipa 01",
    fecha: "2026-03-20",
    estado: "Completado",

    ruta: [
      { lat: 19.43, lng: -99.13 },
      { lat: 19.10, lng: -98.20 }
    ],

    evidencias: ["/docs/foto1.jpg"],

    // 🔥 AGREGA ESTO
    paradas: [],
    incidencias: [],
    gasEsperado: 5000,
    gasReal: 4800
  },
  {
  id: 10,
  nombre: "Viaje 010",
  origen: "CDMX",
  destino: "Toluca",
  estado: "Completado",
  operador: "Luis Ramírez",
  pipa: "Pipa 07",
  fecha: "27/03/2026",

  // 🔥 Ruta (mapa)
  ruta: [
    { lat: 19.43, lng: -99.13 }, // CDMX
    { lat: 19.35, lng: -99.25 },
    { lat: 19.29, lng: -99.65 }, // Toluca
  ],

  // 🛑 Paradas
  paradas: [
    {
      nombre: "Punto A",
      hora: "09:30",
      lat: 19.38,
      lng: -99.20,
      evidencia: [
        "https://picsum.photos/200?1",
        "https://picsum.photos/200?2"
      ]
    },
    {
      nombre: "Punto B",
      hora: "11:00",
      lat: 19.33,
      lng: -99.40,
      evidencia: [
        "https://picsum.photos/200?3"
      ]
    },
    {
      nombre: "Punto C",
      hora: "13:15",
      lat: 19.30,
      lng: -99.55,
      evidencia: [
        "https://picsum.photos/200?4"
      ]
    }
  ],

  // ⛽ GASOLINA (vehículo)
  gasolinaInicial: 100,
  gasolinaFinal: 65,
  gasolinaEsperada: 70,

  // 🔥 GAS LP (carga)
  gasLpInicial: 5000,
  gasLpFinal: 3200,
  gasLpEsperado: 3000,

  // ⚠️ Incidencias
  incidencias: [
    {
      tipo: "Parada no autorizada",
      descripcion: "Se detectó una detención fuera de ruta",
      hora: "10:15"
    }
  ],

  // 📸 Evidencias generales
  evidencias: [
    "https://picsum.photos/300?1",
    "https://picsum.photos/300?2",
    "https://picsum.photos/300?3"
  ]
}
]);

const viajeSeleccionado = ref(null);

const selectViaje = (v) => {
  viajeSeleccionado.value = v;
};

const estadoColor = (estado) => {
  if (estado === "Completado") return "bg-green-100 text-green-700";
  if (estado === "En curso") return "bg-blue-100 text-blue-700";
  if (estado === "Cancelado") return "bg-red-100 text-red-700";
};
</script>