<template>
  <div class="flex h-screen bg-gray-100">
    <Sidebar />

    <div class="flex-1 p-6 overflow-auto">

      <!-- Header -->
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-900">Asignar viaje</h1>
        <p class="text-gray-500 text-sm">
          Configuración y asignación de ruta
        </p>
      </div>

      <div class="grid grid-cols-3 gap-6">

        <!-- FORMULARIO -->
        <div class="col-span-2 bg-white p-6 rounded-2xl shadow-md">

          <!-- Operador -->
          <div class="mb-4">
            <label class="text-sm text-gray-500">Operador</label>
            <select v-model="form.operador" class="input">
              <option disabled value="">Selecciona operador</option>
              <option
                v-for="op in operadoresDisponibles"
                :key="op.id"
                :value="op"
              >
                {{ op.nombre }}
              </option>
            </select>
          </div>

          <!-- Pipa -->
          <div class="mb-4">
            <label class="text-sm text-gray-500">Pipa</label>
            <select v-model="form.pipa" class="input">
              <option disabled value="">Selecciona pipa</option>
              <option
                v-for="p in pipasDisponibles"
                :key="p.id"
                :value="p"
              >
                {{ p.nombre }}
              </option>
            </select>
          </div>

          <!-- Ruta -->
          <div class="mb-4">
            <label class="text-sm text-gray-500">Origen</label>
            <input v-model="form.origen" class="input" />
          </div>

          <div class="mb-4">
            <label class="text-sm text-gray-500">Destino</label>
            <input v-model="form.destino" class="input" />
          </div>

          <!-- Paradas -->
          <div class="mb-4">
            <label class="text-sm text-gray-500">Paradas</label>

            <div
              v-for="(parada, index) in form.paradas"
              :key="index"
              class="flex gap-2 mb-2"
            >
              <input
                v-model="form.paradas[index]"
                placeholder="Punto A / B / C"
                class="input"
              />
              <button @click="removeParada(index)">❌</button>
            </div>

            <button @click="addParada" class="text-blue-600 text-sm">
              + Agregar parada
            </button>
          </div>

          <!-- Hora -->
          <div class="mb-4">
            <label class="text-sm text-gray-500">Hora de salida</label>
            <input type="time" v-model="form.hora" class="input" />
          </div>

          <!-- Gas -->
          <div class="mb-4">
            <label class="text-sm text-gray-500">Gas inicial (litros)</label>
            <input type="number" v-model="form.gasInicial" class="input" />
          </div>

          <!-- Botón -->
          <button
            @click="crearViaje"
            class="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Asignar viaje
          </button>

        </div>

        <!-- RESUMEN -->
        <div class="bg-white p-6 rounded-2xl shadow-md">

          <h3 class="font-semibold mb-4">Resumen</h3>

          <p class="text-sm text-gray-500 mb-2">
            {{ form.origen }} → {{ form.destino }}
          </p>

          <p class="text-sm">
            <strong>Operador:</strong> {{ form.operador?.nombre || '-' }}
          </p>

          <p class="text-sm">
            <strong>Pipa:</strong> {{ form.pipa?.nombre || '-' }}
          </p>

          <p class="text-sm">
            <strong>Hora:</strong> {{ form.hora || '-' }}
          </p>

          <p class="text-sm">
            <strong>Gas:</strong> {{ form.gasInicial || '-' }}
          </p>

          <div class="mt-3">
            <p class="text-sm font-semibold">Paradas:</p>
            <ul class="text-sm text-gray-600">
              <li v-for="(p, i) in form.paradas" :key="i">
                • {{ p }}
              </li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Sidebar from "../components/Sidebar.vue";

const operadores = ref([
  { id: 1, nombre: "Juan Pérez", estado: "Disponible" },
  { id: 2, nombre: "Carlos López", estado: "En viaje" }
]);

const pipas = ref([
  { id: 1, nombre: "Pipa 01", estado: "Disponible" },
  { id: 2, nombre: "Pipa 02", estado: "En uso" }
]);

const operadoresDisponibles = computed(() =>
  operadores.value.filter(o => o.estado === "Disponible")
);

const pipasDisponibles = computed(() =>
  pipas.value.filter(p => p.estado === "Disponible")
);

const form = ref({
  operador: "",
  pipa: "",
  origen: "",
  destino: "",
  paradas: [],
  hora: "",
  gasInicial: ""
});

const addParada = () => {
  form.value.paradas.push("");
};

const removeParada = (index) => {
  form.value.paradas.splice(index, 1);
};

const crearViaje = () => {
  console.log("Viaje creado:", form.value);
  alert("Viaje asignado correctamente 🚛");
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