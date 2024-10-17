<template>
  <div
    class="info-horizontal border-radius-xl d-block d-md-flex"
    :class="`${color.background ?? ''}`"
    :style="cardStyle"
  >
    <img :src="props.imageName" :style="imageStyle" />
    <div class="ps-0 ps-md-3 mt-3 mt-md-0">
      <h5 :class="`text-${color.text ?? ''} `">{{ title }}</h5>
      <p :class="`text-${color.text ?? ''}`">
        {{ description }}
      </p>
      <a
        v-if="routeName !== 'presentation'"
        :href="action.route"
        class="icon-move-right"
        :class="`text-${action.label.color ?? 'success'}`"
      >
        {{ action.label.text }}
        <i class="fas fa-arrow-right text-sm ms-1"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  color: {
    text: String,
    background: {
      validator(value) {
        return [
          "primary",
          "secondary",
          "info",
          "success",
          "warning",
          "error",
          "light",
          "dark",
          "white",
        ].includes(value);
      },
    },
    default() {
      return {
        text: "",
        background: "bg-gray-100",
      };
    },
  },
  imageName: {
    type: String,
    required: true,
  },
  routeName: {
    type: Boolean,
    required: true,
  },
  icon: {
    type: Object,
    required: false,
    component: String,
    color: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  action: {
    type: Object,
    required: false,
    label: {
      type: Object,
      required: true,
      text: String,
      color: String,
    },
    route: {
      type: String,
      required: true,
    },
  },
});

import { watch, ref, computed } from "vue";
import { useWindowsWidth } from "@/assets/js/useWindowsWidth";

// set nav color on mobile && desktop

const { type } = useWindowsWidth();
let typeSize = ref(type);

watch(
  () => type.value,
  (newValue) => {
    typeSize.value = newValue;
  }
);

// Dynamic card style based on typeSize
const cardStyle = computed(() => {
  switch (typeSize.value) {
    case "tablet":
      return { width: "auto", height: "220px" };
    case "medium":
      return { width: "auto", height: "200px" };
    case "mobile":
      return { width: "auto", height: "180px" };
    default:
      // desktop
      return { width: "auto", height: "170px" };
  }
});

// Dynamic image style based on typeSize
const imageStyle = computed(() => {
  switch (typeSize.value) {
    case "tablet":
      return { width: "32px", height: "32px" };
    case "medium":
      return { width: "40px", height: "40px" };
    case "mobile":
      return { width: "28px", height: "28px" };
    default:
      // desktop
      return { width: "40px", height: "40px" };
  }
});
</script>
