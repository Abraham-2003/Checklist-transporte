<template>
  <div class="flex h-screen bg-gray-100">

    <!-- Sidebar -->
    <Sidebar />

    <!-- Contenido -->
    <div class="flex-1 p-6 overflow-auto">

      <div class="max-w-7xl mx-auto">

        <div class="bg-white rounded-2xl shadow-lg border border-gray-100">

          <!-- Header -->
          <div class="p-6 border-b flex justify-between items-center">
            <div>
              <h2 class="text-xl font-bold text-gray-900">Pipas</h2>
              <p class="text-sm text-gray-500">Gestión de unidades</p>
            </div>

            <button class="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-black transition">
              + Agregar
            </button>
          </div>

          <!-- Tabla -->
          <div class="overflow-x-auto">

            <table class="w-full text-sm">

              <thead class="bg-gray-50 text-gray-600 uppercase text-xs">
                <tr>
                  <th class="px-6 py-3 text-left">Unidad</th>
                  <th class="px-6 py-3 text-left">Placas</th>
                  <th class="px-6 py-3 text-left">Operador</th>
                  <th class="px-6 py-3 text-left">Estado</th>
                  <th class="px-6 py-3 text-left">Acción</th>
                </tr>
              </thead>

              <tbody class="divide-y">

                <tr
                  v-for="pipa in pipas"
                  :key="pipa.id"
                  class="hover:bg-gray-50 transition"
                >

                  <td class="px-6 py-4 font-semibold text-gray-900">
                    {{ pipa.nombre }}
                  </td>

                  <td class="px-6 py-4 text-gray-600">
                    {{ pipa.placas }}
                  </td>

                  <td class="px-6 py-4 text-gray-600">
                    {{ pipa.operador }}
                  </td>

                  <td class="px-6 py-4">
                    <span class="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-semibold">
                      Activa
                    </span>
                  </td>

                  <td class="px-6 py-4">
                    <button
                      @click="selectPipa(pipa)"
                      class="text-gray-900 font-semibold hover:underline"
                    >
                      Ver detalle
                    </button>
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>

    <!-- Modal -->
    <PipaModal
      v-if="pipaSeleccionada"
      :pipa="pipaSeleccionada"
      @close="pipaSeleccionada = null"
    />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from '../components/Sidebar.vue'
import PipaModal from '../components/PipaModal.vue'

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
        nombre: 'Vigencia',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
      }
    ]
  },
  {
    id: 1,
    nombre: 'Pipa 02',
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
        nombre: 'Vigencia',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
      }
    ]
  },
  {
    id: 1,
    nombre: 'Pipa 03',
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
        nombre: 'Vigencia',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
      }
    ]
  },
  {
    id: 1,
    nombre: 'Pipa 04',
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
        nombre: 'Vigencia',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
      }
    ]
  },
  {
    id: 1,
    nombre: 'Pipa 05',
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
        nombre: 'Vigencia',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
      }
    ]
  },
  {
    id: 1,
    nombre: 'Pipa 06',
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
        nombre: 'Vigencia',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
      }
    ]
  },
  {
    id: 1,
    nombre: 'Pipa 07',
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
        nombre: 'Vigencia',
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