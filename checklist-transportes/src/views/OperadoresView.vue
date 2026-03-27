<template>
  <div class="flex h-screen bg-gray-100">
    <Sidebar />

    <div class="flex-1 p-6 overflow-auto">

      <!-- Header -->
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-900">Operadores</h1>
        <p class="text-gray-500 text-sm">Gestión de personal operativo</p>
      </div>

      <!-- Tabla -->
      <div class="bg-white rounded-2xl shadow-md overflow-hidden">

        <table class="w-full text-sm">

          <thead class="bg-gray-50 text-gray-600">
            <tr>
              <th class="text-left px-6 py-3">Nombre</th>
              <th class="text-left px-6 py-3">Teléfono</th>
              <th class="text-left px-6 py-3">Licencia</th>
              <th class="text-left px-6 py-3">Estado</th>
            </tr>
          </thead>

          <tbody>

            <tr
              v-for="op in operadores"
              :key="op.id"
              @click="selectOperador(op)"
              class="border-t hover:bg-gray-50 cursor-pointer transition"
            >
              <td class="px-6 py-4 font-semibold text-gray-900">
                {{ op.nombre }}
              </td>

              <td class="px-6 py-4">
                {{ op.telefono }}
              </td>

              <td class="px-6 py-4">
                {{ op.licencia }}
              </td>

              <td class="px-6 py-4">
                <span
                  class="px-3 py-1 text-xs rounded-full font-semibold"
                  :class="estadoColor(op.estado)"
                >
                  {{ op.estado }}
                </span>
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

    <OperadorModal
      v-if="operadorSeleccionado"
      :operador="operadorSeleccionado"
      @close="operadorSeleccionado = null"
    />

  </div>
</template>

<script setup>
import { ref } from "vue";
import Sidebar from "../components/Sidebar.vue";
import OperadorModal from "../components/OperadorModal.vue";

const operadores = ref([
  {
    id: 1,
    nombre: "Juan Pérez",
    telefono: "5512345678",
    licencia: "Tipo E",
    estado: "Disponible",
    documentos: [
      { nombre: "Licencia", url: "/docs/licencia.pdf" },
      { nombre: "INE", url: "/docs/ine.pdf" },
      { nombre: "Tarjeta circulación", url: "/docs/tarjeta.pdf" }
    ]
  },
  {
    id: 2,
    nombre: "Carlos López",
    telefono: "5587654321",
    licencia: "Tipo B",
    estado: "En viaje",
    documentos: [
      { nombre: "Licencia", url: "/docs/licencia.pdf" }
    ]
  },
  {
    id: 2,
    nombre: "Carlos López",
    telefono: "5587654321",
    licencia: "Tipo B",
    estado: "En viaje",
    documentos: [
      { nombre: "Licencia", url: "/docs/licencia.pdf" }
    ]
  },
  {
    id: 2,
    nombre: "Carlos López",
    telefono: "5587654321",
    licencia: "Tipo B",
    estado: "Disponible",
    documentos: [
      { nombre: "Licencia", url: "/docs/licencia.pdf" }
    ]
  },
  {
    id: 2,
    nombre: "Carlos López",
    telefono: "5587654321",
    licencia: "Tipo B",
    estado: "Disponible",
    documentos: [
      { nombre: "Licencia", url: "/docs/licencia.pdf" }
    ]
  },
  {
    id: 2,
    nombre: "Carlos López",
    telefono: "5587654321",
    licencia: "Tipo B",
    estado: "Disponible",
    documentos: [
      { nombre: "Licencia", url: "/docs/licencia.pdf" }
    ]
  },
  {
    id: 2,
    nombre: "Carlos López",
    telefono: "5587654321",
    licencia: "Tipo B",
    estado: "Disponible",
    documentos: [
      { nombre: "Licencia", url: "/docs/licencia.pdf" }
    ]
  },
  {
    id: 2,
    nombre: "Carlos López",
    telefono: "5587654321",
    licencia: "Tipo B",
    estado: "En viaje",
    documentos: [
      { nombre: "Licencia", url: "/docs/licencia.pdf" }
    ]
  },
  {
    id: 2,
    nombre: "Carlos López",
    telefono: "5587654321",
    licencia: "Tipo B",
    estado: "Disponible",
    documentos: [
      { nombre: "Licencia", url: "/docs/licencia.pdf" }
    ]
  },
  {
    id: 2,
    nombre: "Carlos López",
    telefono: "5587654321",
    licencia: "Tipo B",
    estado: "En viaje",
    documentos: [
      { nombre: "Licencia", url: "/docs/licencia.pdf" }
    ]
  },
]);

const operadorSeleccionado = ref(null);

const selectOperador = (op) => {
  operadorSeleccionado.value = op;
};

const estadoColor = (estado) => {
  if (estado === "Disponible") return "bg-green-100 text-green-700";
  if (estado === "En viaje") return "bg-blue-100 text-blue-700";
  if (estado === "Inactivo") return "bg-gray-200 text-gray-600";
};
</script>