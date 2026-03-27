<template>
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

    <div class="bg-white w-[1000px] max-h-[90vh] overflow-y-auto rounded-2xl p-6 shadow-xl">

      <!-- Header -->
      <div class="flex justify-between mb-4">
        <h2 class="text-xl font-bold">{{ viaje.nombre }}</h2>
        <button @click="$emit('close')">✕</button>
      </div>

      <!-- Info -->
      <div class="grid grid-cols-3 gap-6 mb-6">

        <div>
          <p class="text-gray-400 text-sm">Ruta</p>
          <p class="font-semibold">{{ viaje.origen }} → {{ viaje.destino }}</p>
        </div>

        <div>
          <p class="text-gray-400 text-sm">Operador</p>
          <p class="font-semibold">{{ viaje.operador }}</p>
        </div>

        <div>
          <p class="text-gray-400 text-sm">Pipa</p>
          <p class="font-semibold">{{ viaje.pipa }}</p>
        </div>

        <div>
          <p class="text-gray-400 text-sm">Kilómetros</p>
          <p class="font-semibold">{{ viaje.km }} km</p>
        </div>

        <div>
          <p class="text-gray-400 text-sm">Consumo</p>
          <p class="font-semibold">{{ viaje.consumo }} km/l</p>
        </div>

      </div>

      <!-- Mapa -->
      <div class="w-full h-80 rounded-xl overflow-hidden mb-4">

        <div ref="mapContainer" class="w-full h-80 rounded-xl overflow-hidden mb-4"></div>

      </div>

      <!-- Incidencias -->
      <div class="bg-gray-50 p-4 rounded-xl">
        <h3 class="font-semibold mb-2">Incidencias</h3>
        <p class="text-sm text-gray-500">
          Ninguna registrada
        </p>
      </div>

    </div>

  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: "/leaflet/marker-icon.png",
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

const props = defineProps({
  viaje: Object
});

const mapContainer = ref(null);

onMounted(() => {
  const map = L.map(mapContainer.value);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  if (props.viaje.estado === "Finalizado") {
    
    const latlngs = props.viaje.ruta.map(p => [p.lat, p.lng]);

    const polyline = L.polyline(latlngs, {
      color: "#16a34a",
      weight: 5,
    }).addTo(map);

    // Inicio
    L.marker(latlngs[0]).addTo(map).bindPopup("Inicio");

    // Fin
    L.marker(latlngs[latlngs.length - 1]).addTo(map).bindPopup("Destino");

    map.fitBounds(polyline.getBounds());

  } else if (props.viaje.estado === "En ruta") {

    // 🔴 Ubicación actual
    const marker = L.marker([props.viaje.lat, props.viaje.lng])
      .addTo(map)
      .bindPopup("En tránsito")
      .openPopup();

    map.setView([props.viaje.lat, props.viaje.lng], 10);

    // 🔥 Simulación de movimiento (si hay ruta mock)
    if (props.viaje.ruta && props.viaje.ruta.length) {
      let index = 0;

      setInterval(() => {
        if (index < props.viaje.ruta.length) {
          const point = props.viaje.ruta[index];
          marker.setLatLng([point.lat, point.lng]);
          map.panTo([point.lat, point.lng]);
          index++;
        }
      }, 2000);
    }
  }
});
</script>