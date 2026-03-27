<template>
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

    <div class="bg-white w-[600px] rounded-2xl p-6 shadow-xl">

      <div class="flex justify-between mb-4">
        <h2 class="text-xl font-bold">Nuevo laboratorio</h2>
        <button @click="$emit('close')">✕</button>
      </div>

      <div class="space-y-4">

        <div>
          <label class="text-sm text-gray-500">Nombre</label>
          <input v-model="form.nombre" class="input" />
        </div>

        <div>
          <label class="text-sm text-gray-500">Responsable</label>
          <input v-model="form.responsable" class="input" />
        </div>

        <div>
          <label class="text-sm text-gray-500">Teléfono</label>
          <input v-model="form.telefono" class="input" />
        </div>

        <div>
          <label class="text-sm text-gray-500">Ubicación</label>
          <input v-model="form.ubicacion" class="input" />
        </div>

        <div>
          <label class="text-sm text-gray-500">Estado</label>
          <select v-model="form.estado" class="input">
            <option>Activo</option>
            <option>Inactivo</option>
          </select>
        </div>

      </div>

      <div class="mt-6 flex justify-end gap-3">
        <button @click="$emit('close')" class="px-4 py-2 bg-gray-200 rounded-xl">
          Cancelar
        </button>

        <button
          @click="crear"
          class="px-4 py-2 bg-blue-600 text-white rounded-xl"
        >
          Crear
        </button>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["crear"]);

const form = ref({
  nombre: "",
  responsable: "",
  telefono: "",
  ubicacion: "",
  estado: "Activo"
});

const crear = () => {
  emit("crear", form.value);
};
</script>

<style>
.input {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ddd;
  margin-top: 5px;
}
</style>