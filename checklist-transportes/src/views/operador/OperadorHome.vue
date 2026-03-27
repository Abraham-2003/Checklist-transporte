<template>
  <div class="max-w-sm mx-auto min-h-screen bg-gray-100 flex flex-col">

    <!-- HEADER -->
    <div class="bg-gray-900 text-white p-5 rounded-b-3xl shadow-lg">
      <p class="text-sm text-gray-300">Bienvenido</p>
      <h1 class="text-xl font-bold">{{ operador.nombre }}</h1>
      <p class="text-xs text-gray-400 mt-1">Unidad: {{ operador.unidad }}</p>
    </div>

    <!-- CONTENIDO -->
    <div class="p-4 -mt-6">

      <!-- TARJETA PRINCIPAL -->
      <div
        v-if="viaje"
        class="bg-white rounded-2xl shadow-xl p-5 border border-gray-100"
      >
        <!-- STATUS -->
        <div class="flex justify-between items-center mb-3">
          <span class="text-sm font-semibold text-gray-700">
            Viaje asignado
          </span>

          <span
            class="text-xs px-3 py-1 rounded-full font-semibold"
            :class="viaje.estado === 'pendiente'
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-green-100 text-green-700'"
          >
            {{ viaje.estado }}
          </span>
        </div>

        <!-- RUTA -->
        <div class="mb-4">
          <p class="text-lg font-bold text-gray-900">
            {{ viaje.origen }}
          </p>
          <p class="text-xs text-gray-400">↓</p>
          <p class="text-lg font-bold text-gray-900">
            {{ viaje.destino }}
          </p>
        </div>

        <!-- INFO -->
        <div class="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-4">
          <div>
            <p class="text-gray-400 text-xs">Pipa</p>
            <p class="font-semibold">{{ viaje.pipa }}</p>
          </div>
          <div>
            <p class="text-gray-400 text-xs">Gas esperado</p>
            <p class="font-semibold">{{ viaje.gas }}</p>
          </div>
        </div>

        <!-- BOTON -->
        <button
          @click="verDetalle(viaje.id)"
          class="w-full bg-gray-900 text-white py-2.5 rounded-xl font-semibold hover:bg-gray-800 transition"
        >
          Ver detalles
        </button>
      </div>

      <!-- SIN VIAJE -->
      <div
        v-else
        class="bg-white rounded-2xl shadow p-6 text-center text-gray-500"
      >
        No tienes viajes asignados
      </div>

      <!-- INFO OPERADOR EXTRA -->
      <div class="mt-6 bg-white rounded-2xl p-4 shadow-sm">
        <p class="text-sm font-semibold text-gray-700 mb-2">
          Información del operador
        </p>

        <div class="text-sm text-gray-600 space-y-1">
          <p><strong>Nombre:</strong> {{ operador.nombre }}</p>
          <p><strong>Licencia:</strong> {{ operador.licencia }}</p>
          <p><strong>Estado:</strong> Activo</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const operador = {
  nombre: 'Juan Pérez',
  unidad: 'P-23',
  licencia: 'LIC-99821'
}

const viaje = {
  id: 1,
  origen: 'CDMX',
  destino: 'Toluca',
  pipa: 'P-23',
  gas: '20,000 L',
  estado: 'pendiente'
}

const verDetalle = (id) => {
  router.push(`/operador/viaje/${id}`)
}
</script>