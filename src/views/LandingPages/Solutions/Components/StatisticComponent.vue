<template>
  <div class="container-fluid">
    <div class="d-flex justify-content-center">
      <div
        v-for="(statistic, index) in statistics"
        :key="index"
        class="statistic-item mx-3"
      >
        <img :src="statistic.img" alt="" class="img-fluid" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import statisticOne from "@/assets/img/solutions/card-statistic-1.svg";
import statisticTwo from "@/assets/img/solutions/card-statistic-2.svg";
import statisticThree from "@/assets/img/solutions/card-statistic-3.svg";
import statisticFour from "@/assets/img/solutions/card-statistic-4.svg";

const statistics = ref([
  { img: statisticOne },
  { img: statisticTwo },
  { img: statisticThree },
  { img: statisticFour },
]);
</script>

<style scoped>
.statistic-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
}

.statistic-item img {
  max-height: 100%; /* Pastikan gambar tidak melebihi tinggi item */
  max-width: 150%; /* Perbesar lebar gambar */
  object-fit: contain; /* Memastikan gambar tidak terdistorsi */
}
</style>
