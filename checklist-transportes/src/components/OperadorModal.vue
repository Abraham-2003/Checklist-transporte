<template>
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

    <div class="bg-white w-[900px] max-h-[90vh] overflow-y-auto rounded-2xl p-6 shadow-xl">

      <!-- Header -->
      <div class="flex justify-between mb-6">
        <h2 class="text-xl font-bold">{{ operador.nombre }}</h2>
        <button @click="$emit('close')">✕</button>
      </div>

      <!-- Info -->
      <div class="grid grid-cols-2 gap-6 mb-6">

        <div>
          <p class="text-gray-400 text-sm">Teléfono</p>
          <p class="font-semibold">{{ operador.telefono }}</p>
        </div>

        <div>
          <p class="text-gray-400 text-sm">Licencia</p>
          <p class="font-semibold">{{ operador.licencia }}</p>
        </div>

        <div>
          <p class="text-gray-400 text-sm">Estado</p>
          <p class="font-semibold">{{ operador.estado }}</p>
        </div>

      </div>

      <!-- Documentos -->
      <div>
        <h3 class="font-semibold mb-3">Documentación</h3>

        <div class="grid grid-cols-2 gap-4">

          <div
            v-for="doc in operador.documentos"
            :key="doc.nombre"
            class="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div class="p-2 text-sm font-semibold bg-gray-50">
              {{ doc.nombre }}
            </div>

            <iframe
              :src="doc.url"
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
  operador: Object
});
</script>