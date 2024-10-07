<template>
  <!-- <button @click="setStaticLocation">Set Static Location</button>
  <div>Latitude: {{ lat }} , Longitude: {{ lng }}</div> -->
  <div
    ref="mapContainer"
    class="mt-6"
    style="width: 500px; height: 400px"
  ></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import L from 'leaflet'

const lat = ref(-6.274738376525346)
const lng = ref(106.77334160000001)
const map = ref()
const mapContainer = ref()

onMounted(() => {
  map.value = L.map(mapContainer.value).setView([lat.value, lng.value], 13)
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map.value)

  // Tambahkan marker untuk lokasi statis
  L.marker([lat.value, lng.value]).addTo(map.value)
})

function setStaticLocation() {
  map.value.setView([lat.value, lng.value], 13)
  L.marker([lat.value, lng.value], { draggable: true })
    .addTo(map.value)
    .on('dragend', (event) => {
      console.log(event)
    })
}
</script>

<style scoped></style>
