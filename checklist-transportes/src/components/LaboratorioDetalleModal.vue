<template>
  <div class="fixed inset-0 bg-black/50 flex justify-center items-center">

    <div class="bg-white w-[600px] p-6 rounded-2xl">

      <div class="flex justify-between mb-4">
        <h2 class="text-xl font-bold">{{ lab.nombre }}</h2>
        <button @click="$emit('close')">✕</button>
      </div>

      <div class="space-y-3 text-sm">

        <p><strong>Responsable:</strong> {{ lab.responsable }}</p>
        <p><strong>Teléfono:</strong> {{ lab.telefono }}</p>
        <p><strong>Ubicación:</strong> {{ lab.ubicacion }}</p>
        <p><strong>Estado:</strong> {{ lab.estado }}</p>

      </div>

    </div>

  </div>
</template>

<script setup>
defineProps({
  lab: Object
});
</script>