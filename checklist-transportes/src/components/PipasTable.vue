<template>
  <div class="flex">
    <!-- Sidebar -->
    <Sidebar />
  <div class="bg-white p-6 rounded-2xl shadow-md">

    <h2 class="text-xl font-bold mb-4">Pipas</h2>

    <table class="w-full text-left">
      <thead>
        <tr class="text-gray-500 text-sm border-b">
          <th class="py-2">Unidad</th>
          <th>Placas</th>
          <th>Operador</th>
          <th>Estado</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="pipa in pipas"
          :key="pipa.id"
          @click="selectPipa(pipa)"
          class="border-b hover:bg-gray-100 cursor-pointer transition"
        >
          <td class="py-3 font-semibold">{{ pipa.nombre }}</td>
          <td>{{ pipa.placas }}</td>
          <td>{{ pipa.operador }}</td>
          <td>
            <span class="text-green-600 font-semibold">
              Activa
            </span>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal -->
    <PipaModal
      v-if="pipaSeleccionada"
      :pipa="pipaSeleccionada"
      @close="pipaSeleccionada = null"
    />

  </div>
  </div>
</template>

<script setup>
import Sidebar from "../components/Sidebar.vue";
import { ref } from 'vue'
import PipaModal from './PipaModal.vue'

const pipas = ref([
  {
    id: 1,
    nombre: 'Pipa 01',
    placas: 'ABC-123',
    operador: 'Juan Pérez',
    modelo: 'Kenworth T800',
    anio: 2020,
    capacidad: '30,000 L',
    documentos: [
      {
        nombre: 'Tarjeta de circulación',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
      },
      {
        nombre: 'Seguro',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
      }
    ]
  }
])

const pipaSeleccionada = ref(null)

const selectPipa = (pipa) => {
  pipaSeleccionada.value = pipa
}
</script>