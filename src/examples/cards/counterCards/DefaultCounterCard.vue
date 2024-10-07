<script setup>
import CountTo from "vue-count-to/src";

defineProps({
  count: {
    type: Number,
    required: true,
  },
  suffix: {
    type: String,
    default: "",
  },
  duration: {
    type: Number,
    default: 4000,
  },
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
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
      ].includes(value);
    },
  },
  divider: {
    validator(value) {
      return ["vertical", "horizontal"].includes(value);
    },
  },
  dividerSize: {
    type: String,
    default: "100px",
    validator(value) {
      return /^(\d+(\.\d+)?(px|em|rem|%)?)$/.test(value);
    },
  },
});
</script>
<template>
  <div class="text-center">
    <h1 :class="`text-gradient text-${color ?? 'success'}`">
      <CountTo :start-val="0" :end-val="count" :duration="duration" />{{
        suffix
      }}
    </h1>
    <h5 class="mt-3">{{ title }}</h5>
    <p class="text-sm font-weight-normal">
      {{ description }}
    </p>
  </div>
  <hr
    :class="`${divider ? divider : ''} dark`"
    :style="{
      height: dividerSize,
      // width: dividerSize,
      borderWidth: divider === 'horizontal' ? dividerSize : '0',
      borderStyle: 'solid',
    }"
  />
</template>
