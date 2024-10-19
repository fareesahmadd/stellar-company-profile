<template>
  <div class="container-fluid">
    <div
      class="card gradient-background card-body shadow-none mx-3 mx-md-4"
      style="border-radius: 30px"
    >
      <div class="row px-7 mt-7">
        <div class="col-md-6 mt-3">
          <h2 class="text-dark mb-0" style="margin-right: 80px">
            Achieve success through data-driven decisions
          </h2>
          <p class="lead mt-4" style="margin-right: 80px">
            Elevate your brand to new heights ensuring your message reaches its
            full potential and captivates your audience.
          </p>
        </div>
        <div class="col-md-6">
          <div
            class="card mt-4"
            :style="`background-image: url(${overallPerformance});background-size: cover; background-position: top center;`"
            style="
              border-radius: 10px;
              overflow: hidden;
              width: 100%;
              height: 380px;
            "
          ></div>
        </div>
      </div>
      <div class="row">
        <div class="text-center px-11 mt-7 mb-4">
          <img
            class="opacity-7"
            src="@/assets/img/icon-caption-info.svg"
            style="height: 35px; width: 35px"
            alt="icon-caption"
          />
        </div>
        <div class="text-center mb-5 px-11">
          <p class="px-4">
            Implementing Stellar Gelora's ERP software has been a game-changer
            for our business. From day one, the team at Stellar Gelora worked
            closely with us to customize the system to meet our specific needs.
            The point of sales integration has streamlined our sales processes,
            allowing us to manage our inventory more effectively and serve our
            customers better.
          </p>
          <p>Naila Agung Sarasati</p>
          <p class="mt-n3" style="font-weight: bold">
            CEO & Co-Founder of Wanderloom Labs
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { computed } from "vue";
// import { useRoute } from "vue-router";
import overallPerformance from "@/assets/img/overall-performance-image.svg";
// import financialStatements from "@/assets/img/financial-statements-image.svg";

// const currentRouteName = computed(() => {
//   return useRoute().name;
// });
</script>

<style scoped>
.gradient-background {
  background: linear-gradient(to bottom, #ffffff, #e4e4f0);
}
</style>
