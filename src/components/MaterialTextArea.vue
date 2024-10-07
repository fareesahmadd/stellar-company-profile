<script setup>
defineProps({
  id: {
    type: String,
    default: "message",
  },
  rows: {
    type: Number,
    default: 4,
  },
  placeholder: {
    type: String,
    default: "",
  },
  labelClass: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div>
    <div class="text-sm mb-0">
      <label :for="id" :class="labelClass"><slot /></label>
    </div>
    <div class="input-group input-group-lg input-group-outline mt-n2">
      <textarea
        name="message"
        class="form-control bg-white"
        :id="id"
        :placeholder="placeholder"
        :rows="rows"
      />
    </div>
  </div>
</template>
