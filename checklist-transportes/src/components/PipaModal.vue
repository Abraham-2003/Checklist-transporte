<template>
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div
      class="bg-white w-[900px] max-h-[90vh] overflow-y-auto rounded-2xl p-6 shadow-xl"
    >
      <!-- Header -->
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold">{{ pipa.nombre }}</h2>
        <button @click="$emit('close')" class="text-gray-500 hover:text-black">✕</button>
      </div>

      <!-- Info -->
      <div class="grid grid-cols-2 gap-6">
        <!-- Vehículo -->
        <div>
          <h3 class="font-semibold mb-2">Información del vehículo</h3>
          <p><strong>Modelo:</strong> {{ pipa.modelo }}</p>
          <p><strong>Año:</strong> {{ pipa.anio }}</p>
          <p><strong>Capacidad:</strong> {{ pipa.capacidad }}</p>
          <p><strong>Placas:</strong> {{ pipa.placas }}</p>
        </div>

        <!-- Operador -->
        <div>
          <h3 class="font-semibold mb-2">Operador asignado</h3>
          <p>{{ pipa.operador }}</p>
        </div>
      </div>

      <!-- Documentos -->
      <div class="mt-6">
        <h3 class="font-semibold mb-3">Documentación</h3>

        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="doc in pipa.documentos"
            :key="doc.nombre"
            class="border rounded-xl p-3 hover:shadow-md transition"
          >
            <p class="text-sm font-semibold mb-2">
              {{ doc.nombre }}
            </p>

            <!-- Preview PDF -->
            <iframe
              :src="`https://docs.google.com/gview?url=${doc.url}&embedded=true`"
              class="w-full h-40"
            ></iframe>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  pipa: Object,
});
</script>
