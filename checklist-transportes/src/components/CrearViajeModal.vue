<template>
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

    <div class="bg-white w-[900px] rounded-2xl p-6 shadow-xl">

      <!-- Header -->
      <div class="flex justify-between mb-6">
        <h2 class="text-xl font-bold">Asignar nuevo viaje</h2>
        <button @click="$emit('close')">✕</button>
      </div>

      <div class="grid grid-cols-2 gap-6">

        <!-- IZQUIERDA -->
        <div>

          <!-- Operador -->
          <div class="mb-4">
            <label class="text-sm text-gray-500">Operador</label>
            <select v-model="form.operador" class="input">
              <option disabled value="">Selecciona operador</option>
              <option v-for="op in operadores" :key="op.id">
                {{ op.nombre }}
              </option>
            </select>
          </div>

          <!-- Pipa -->
          <div class="mb-4">
            <label class="text-sm text-gray-500">Pipa</label>
            <select v-model="form.pipa" class="input">
              <option disabled value="">Selecciona pipa</option>
              <option v-for="p in pipas" :key="p.id">
                {{ p.nombre }}
              </option>
            </select>
          </div>

          <!-- Origen -->
          <div class="mb-4">
            <label class="text-sm text-gray-500">Origen</label>
            <input v-model="form.origen" class="input" />
          </div>

          <!-- Destino -->
          <div class="mb-4">
            <label class="text-sm text-gray-500">Destino</label>
            <input v-model="form.destino" class="input" />
          </div>

          <!-- Hora -->
          <div class="mb-4">
            <label class="text-sm text-gray-500">Hora salida</label>
            <input type="time" v-model="form.hora" class="input" />
          </div>

        </div>

        <!-- DERECHA -->
        <div>

          <!-- Gas -->
          <div class="mb-4">
            <label class="text-sm text-gray-500">Gas inicial</label>
            <input type="number" v-model="form.gas" class="input" />
          </div>

          <!-- Paradas -->
          <div class="mb-4">
            <label class="text-sm text-gray-500">Paradas</label>

            <div
              v-for="(p, i) in form.paradas"
              :key="i"
              class="flex gap-2 mb-2"
            >
              <input v-model="form.paradas[i]" class="input" />
              <button @click="removeParada(i)">❌</button>
            </div>

            <button @click="addParada" class="text-blue-600 text-sm">
              + Agregar parada
            </button>
          </div>

          <!-- RESUMEN -->
          <div class="bg-gray-50 p-4 rounded-xl mt-4">
            <p class="text-sm font-semibold mb-2">Resumen</p>

            <p class="text-xs text-gray-500">
              {{ form.origen }} → {{ form.destino }}
            </p>

            <p class="text-xs">
              {{ form.operador || '-' }} | {{ form.pipa || '-' }}
            </p>

            <p class="text-xs">
              Hora: {{ form.hora || '-' }}
            </p>
          </div>

        </div>

      </div>

      <!-- Footer -->
      <div class="mt-6 flex justify-end gap-3">
        <button
          @click="$emit('close')"
          class="px-4 py-2 bg-gray-200 rounded-xl"
        >
          Cancelar
        </button>

        <button
          @click="crearViaje"
          class="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          Crear viaje
        </button>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";

const operadores = ref([
  { id: 1, nombre: "Juan Pérez" },
  { id: 2, nombre: "Carlos López" }
]);

const pipas = ref([
  { id: 1, nombre: "Pipa 01" },
  { id: 2, nombre: "Pipa 02" }
]);

const form = ref({
  operador: "",
  pipa: "",
  origen: "",
  destino: "",
  hora: "",
  gas: "",
  paradas: []
});

const addParada = () => {
  form.value.paradas.push("");
};

const removeParada = (i) => {
  form.value.paradas.splice(i, 1);
};

const crearViaje = () => {
  console.log("Nuevo viaje:", form.value);

  // 🔥 aquí después mandarías a backend

  alert("Viaje creado 🚛");
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