<template>
  <div :class="typeSize === 'mobile' ? '' : 'container-fluid'">
    <div
      :class="
        typeSize === 'mobile'
          ? 'card gradient-background card-body shadow-none '
          : 'card gradient-background card-body shadow-none mx-3 mx-md-4'
      "
      style="border-radius: 30px"
    >
      <div :class="typeSize === 'desktop' ? 'row px-7 mt-7' : 'row px-3 mt-7'">
        <div class="col-md-6 mt-3">
          <h2
            v-if="typeSize === 'desktop'"
            class="text-dark mb-0"
            style="margin-right: 80px"
          >
            Achieve success through data-driven decisions
          </h2>
          <h3 v-if="typeSize !== 'desktop'" class="text-dark mb-0">
            Achieve success through data-driven decisions
          </h3>
          <p
            class="lead mt-4"
            :style="typeSize === 'desktop' ? 'margin-right: 80px' : ''"
          >
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
        <div
          :class="
            typeSize === 'mobile'
              ? 'text-center  mt-7 mb-4'
              : 'text-center px-11 mt-7 mb-4'
          "
        >
          <img
            class="opacity-7"
            src="@/assets/img/icon-caption-info.svg"
            :style="
              typeSize === 'mobile'
                ? 'height: 28px; width: 28px'
                : 'height: 35px; width: 35px'
            "
            alt="icon-caption"
          />
        </div>
        <div
          :class="
            typeSize === 'desktop'
              ? 'text-center mb-5 px-11'
              : typeSize === 'mobile'
              ? 'text-center mb-5'
              : 'text-center mb-5 px-5'
          "
        >
          <p :class="typeSize === 'desktop' ? 'px-4' : ''">
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
import overallPerformance from "@/assets/img/overall-performance-image.svg";
import { ref, watch } from "vue";
import { useWindowsWidth } from "@/assets/js/useWindowsWidth";

const { type } = useWindowsWidth();
let typeSize = ref(type);

watch(
  () => type.value,
  (newValue) => {
    typeSize.value = newValue;
  }
);
</script>

<style scoped>
.gradient-background {
  background: linear-gradient(to bottom, #ffffff, #e4e4f0);
}
</style>
