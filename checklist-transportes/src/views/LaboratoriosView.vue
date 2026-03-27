<template>
  <div class="flex h-screen bg-gray-100">
    <Sidebar />

    <div class="flex-1 p-6 overflow-auto">

      <!-- Header -->
      <div class="flex justify-between items-center mb-6">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">
            Laboratorios
          </h1>
          <p class="text-gray-500 text-sm">
            Gestión de laboratorios y análisis
          </p>
        </div>

        <button
          @click="mostrarCrear = true"
          class="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
        >
          + Nuevo laboratorio
        </button>
      </div>

      <!-- Tabla -->
      <div class="bg-white rounded-2xl shadow-md overflow-hidden">

        <table class="w-full text-sm">

          <thead class="bg-gray-50 text-gray-600">
            <tr>
              <th class="px-6 py-3 text-left">Nombre</th>
              <th class="px-6 py-3 text-left">Responsable</th>
              <th class="px-6 py-3 text-left">Teléfono</th>
              <th class="px-6 py-3 text-left">Ubicación</th>
              <th class="px-6 py-3 text-left">Estado</th>
            </tr>
          </thead>

          <tbody>

            <tr
              v-for="lab in laboratorios"
              :key="lab.id"
              @click="selectLab(lab)"
              class="border-t hover:bg-gray-50 cursor-pointer"
            >
              <td class="px-6 py-4 font-semibold">
                {{ lab.nombre }}
              </td>

              <td class="px-6 py-4">
                {{ lab.responsable }}
              </td>

              <td class="px-6 py-4">
                {{ lab.telefono }}
              </td>

              <td class="px-6 py-4">
                {{ lab.ubicacion }}
              </td>

              <td class="px-6 py-4">
                <span
                  class="px-3 py-1 rounded-full text-xs font-semibold"
                  :class="estadoColor(lab.estado)"
                >
                  {{ lab.estado }}
                </span>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>

    <!-- Modal detalle -->
    <LaboratorioDetalleModal
      v-if="labSeleccionado"
      :lab="labSeleccionado"
      @close="labSeleccionado = null"
    />

    <!-- Modal crear -->
    <CrearLaboratorioModal
      v-if="mostrarCrear"
      @close="mostrarCrear = false"
      @crear="agregarLab"
    />

  </div>
</template>

<script setup>
import { ref } from "vue";
import Sidebar from "../components/Sidebar.vue";
import CrearLaboratorioModal from "../components/CrearLaboratorioModal.vue";
import LaboratorioDetalleModal from "../components/LaboratorioDetalleModal.vue";

const laboratorios = ref([
  {
    id: 1,
    nombre: "Lab Central",
    responsable: "Dra. Martínez",
    telefono: "5512345678",
    ubicacion: "CDMX",
    estado: "Activo"
  },
  {
    id: 1,
    nombre: "Lab Central",
    responsable: "Dra. Martínez",
    telefono: "5512345678",
    ubicacion: "CDMX",
    estado: "Activo"
  },
  {
    id: 1,
    nombre: "Lab Central",
    responsable: "Dra. Martínez",
    telefono: "5512345678",
    ubicacion: "CDMX",
    estado: "Activo"
  },
  {
    id: 1,
    nombre: "Lab Central",
    responsable: "Dra. Martínez",
    telefono: "5512345678",
    ubicacion: "CDMX",
    estado: "Activo"
  },
  {
    id: 1,
    nombre: "Lab Central",
    responsable: "Dra. Martínez",
    telefono: "5512345678",
    ubicacion: "CDMX",
    estado: "Activo"
  },
  {
    id: 1,
    nombre: "Lab Central",
    responsable: "Dra. Martínez",
    telefono: "5512345678",
    ubicacion: "CDMX",
    estado: "Activo"
  },
  {
    id: 1,
    nombre: "Lab Central",
    responsable: "Dra. Martínez",
    telefono: "5512345678",
    ubicacion: "CDMX",
    estado: "Activo"
  },
  {
    id: 1,
    nombre: "Lab Central",
    responsable: "Dra. Martínez",
    telefono: "5512345678",
    ubicacion: "CDMX",
    estado: "Activo"
  },
  {
    id: 1,
    nombre: "Lab Central",
    responsable: "Dra. Martínez",
    telefono: "5512345678",
    ubicacion: "CDMX",
    estado: "Activo"
  },
  {
    id: 1,
    nombre: "Lab Central",
    responsable: "Dra. Martínez",
    telefono: "5512345678",
    ubicacion: "CDMX",
    estado: "Activo"
  },
]);

const labSeleccionado = ref(null);
const mostrarCrear = ref(false);

const selectLab = (lab) => {
  labSeleccionado.value = lab;
};

const agregarLab = (nuevo) => {
  laboratorios.value.push({
    id: Date.now(),
    ...nuevo
  });
  mostrarCrear.value = false;
};

const estadoColor = (estado) => {
  if (estado === "Activo") return "bg-green-100 text-green-700";
  if (estado === "Inactivo") return "bg-gray-200 text-gray-600";
};
</script>