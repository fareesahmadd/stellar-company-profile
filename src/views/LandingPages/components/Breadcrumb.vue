<template>
  <nav aria-label="breadcrumb">
    <div class="breadcrumb text-white">
      <router-link class="text-white" to="/">Home</router-link>
      <i
        class="fas fa-chevron-right fa-2x px-3 text-white"
        style="font-size: x-small"
      ></i>
      <router-link class="text-white" :to="{ name: 'blogs' }">Blog</router-link>
      <i
        v-if="currentRouteName === 'blog-details'"
        class="fas fa-chevron-right fa-2x px-3 text-white"
        style="font-size: x-small"
      ></i>
      <span v-if="currentRouteName === 'blog-details'" aria-current="page">{{
        title
      }}</span>
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const currentRouteName = computed(() => {
  return useRoute().name;
});

const route = useRoute();
const title = computed(() => {
  const blogTitle = route.params.title;
  return blogTitle ? decodeURIComponent(blogTitle) : "Blog";
});
</script>

<style scoped>
.breadcrumb {
  background: none;
  display: flex;
  align-items: center;
}
.breadcrumb a {
  text-decoration: none;
}
</style>
