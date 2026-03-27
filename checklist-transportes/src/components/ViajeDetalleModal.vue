<template>
  <div class="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

    <div class="bg-white w-[1100px] max-h-[90vh] overflow-y-auto rounded-2xl p-6">

      <!-- Header -->
      <div class="flex justify-between mb-6">
        <h2 class="text-xl font-bold">
          {{ viaje.origen }} → {{ viaje.destino }}
        </h2>
        <button @click="$emit('close')">✕</button>
      </div>

      <!-- INFO GENERAL -->
      <div class="grid grid-cols-4 gap-4 mb-6">

        <div>
          <p class="text-gray-400 text-sm">Operador</p>
          <p class="font-semibold">{{ viaje.operador }}</p>
        </div>

        <div>
          <p class="text-gray-400 text-sm">Pipa</p>
          <p class="font-semibold">{{ viaje.pipa }}</p>
        </div>

        <div>
          <p class="text-gray-400 text-sm">Estado</p>
          <p class="font-semibold">{{ viaje.estado }}</p>
        </div>

        <div>
          <p class="text-gray-400 text-sm">Fecha</p>
          <p class="font-semibold">{{ viaje.fecha }}</p>
        </div>

      </div>

      <!-- MAPA -->
      <div class="mb-6">
        <h3 class="font-semibold mb-2">Ruta</h3>
        <div id="map" class="w-full h-80 rounded-xl"></div>
      </div>

      <!-- PARADAS -->
      <div class="mb-6">
        <h3 class="font-semibold mb-3">Paradas realizadas</h3>

        <div class="space-y-4">

          <div
            v-for="(p, i) in viaje.paradas"
            :key="i"
            class="bg-gray-50 p-4 rounded-xl"
          >
            <div class="flex justify-between mb-2">
              <p class="font-semibold">
                {{ p.nombre }}
              </p>
              <p class="text-sm text-gray-500">
                {{ p.hora }}
              </p>
            </div>

            <!-- Evidencia -->
            <div v-if="p.evidencia?.length" class="flex gap-2 mt-2">
              <img
                v-for="(img, j) in p.evidencia"
                :key="j"
                :src="img"
                class="w-24 h-24 object-cover rounded-lg"
              />
            </div>

          </div>

        </div>
      </div>

      <!-- GASOLINA -->
      <div class="mb-6">
        <h3 class="font-semibold mb-3">Consumo de gasolina (vehículo)</h3>

        <div class="grid grid-cols-4 gap-4">

          <div class="card">
            <p class="label">Inicial</p>
            <p class="value">{{ viaje.gasolinaInicial }} L</p>
          </div>

          <div class="card">
            <p class="label">Final</p>
            <p class="value">{{ viaje.gasolinaFinal }} L</p>
          </div>

          <div class="card">
            <p class="label">Esperado</p>
            <p class="value">{{ viaje.gasolinaEsperada }} L</p>
          </div>

          <div class="card" :class="gasolinaClase">
            <p class="label">Diferencia</p>
            <p class="value">{{ diferenciaGasolina }} L</p>
          </div>

        </div>
      </div>

      <!-- GAS LP -->
      <div class="mb-6">
        <h3 class="font-semibold mb-3">Control de Gas LP (carga)</h3>

        <div class="grid grid-cols-4 gap-4">

          <div class="card">
            <p class="label">Salida</p>
            <p class="value">{{ viaje.gasLpInicial }} L</p>
          </div>

          <div class="card">
            <p class="label">Final real</p>
            <p class="value">{{ viaje.gasLpFinal }} L</p>
          </div>

          <div class="card">
            <p class="label">Final esperado</p>
            <p class="value">{{ viaje.gasLpEsperado }} L</p>
          </div>

          <div class="card" :class="gasLpClase">
            <p class="label">Diferencia</p>
            <p class="value">{{ diferenciaGasLp }} L</p>
          </div>

        </div>
      </div>

      <!-- INCIDENCIAS -->
      <div class="mb-6">
        <h3 class="font-semibold mb-2">Incidencias</h3>

        <div v-if="viaje.incidencias?.length">

          <div
            v-for="(inc, i) in viaje.incidencias"
            :key="i"
            class="bg-red-50 border border-red-200 p-3 rounded-lg mb-2"
          >
            <p class="font-semibold text-red-700">
              {{ inc.tipo }}
            </p>
            <p class="text-sm text-gray-600">
              {{ inc.descripcion }}
            </p>
            <p class="text-xs text-gray-400">
              {{ inc.hora }}
            </p>
          </div>

        </div>

        <p v-else class="text-sm text-gray-500">
          Sin incidencias
        </p>

      </div>

      <!-- EVIDENCIAS GENERALES -->
      <div>
        <h3 class="font-semibold mb-2">Evidencias generales</h3>

        <div class="flex gap-3 flex-wrap">
          <img
            v-for="(img, i) in viaje.evidencias"
            :key="i"
            :src="img"
            class="w-32 h-32 object-cover rounded-lg"
          />
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const props = defineProps({
  viaje: Object
});

/* MAPA */
onMounted(() => {
  if (!props.viaje.ruta?.length) return;

  const map = L.map("map").setView(
    [props.viaje.ruta[0].lat, props.viaje.ruta[0].lng],
    7
  );

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

  const latlngs = props.viaje.ruta.map(p => [p.lat, p.lng]);

  L.polyline(latlngs, { color: "blue" }).addTo(map);

  // Inicio
  L.marker(latlngs[0]).addTo(map).bindPopup("Inicio");

  // Fin
  L.marker(latlngs[latlngs.length - 1])
    .addTo(map)
    .bindPopup("Destino");

  // Paradas
  props.viaje.paradas?.forEach((p, i) => {
    if (p.lat && p.lng) {
      L.marker([p.lat, p.lng])
        .addTo(map)
        .bindPopup(`Parada ${i + 1}: ${p.nombre}`);
    }
  });
});

/* GASOLINA */
const diferenciaGasolina = computed(() => {
  return (props.viaje.gasolinaFinal || 0) - (props.viaje.gasolinaEsperada || 0);
});

const gasolinaClase = computed(() => {
  const diff = diferenciaGasolina.value;

  if (diff > 10) return "bg-red-100 text-red-700";
  if (diff > 0) return "bg-yellow-100 text-yellow-700";
  return "bg-green-100 text-green-700";
});

/* GAS LP */
const diferenciaGasLp = computed(() => {
  return (props.viaje.gasLpFinal || 0) - (props.viaje.gasLpEsperado || 0);
});

const gasLpClase = computed(() => {
  const diff = diferenciaGasLp.value;

  if (Math.abs(diff) > 20) return "bg-red-100 text-red-700";
  if (Math.abs(diff) > 5) return "bg-yellow-100 text-yellow-700";
  return "bg-green-100 text-green-700";
});
</script>

<style scoped>
.card {
  background: #f9fafb;
  padding: 16px;
  border-radius: 12px;
}

.label {
  font-size: 12px;
  color: #6b7280;
}

.value {
  font-size: 18px;
  font-weight: bold;
}
</style>