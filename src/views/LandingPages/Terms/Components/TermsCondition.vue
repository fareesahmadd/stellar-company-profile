<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 mt-10">
        <p class="font-weight-bold text-dark">On this page</p>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-for="(title, index) in titles" :key="index">
            <a
              class="nav-link text-info"
              :class="{ active: currentSection === title }"
              :href="'#' + title.replace(/\s+/g, '-').toLowerCase()"
              @click.prevent="scrollToSection(title)"
            >
              {{ title }}
            </a>
          </li>
        </ul>
      </div>
      <div class="col-md-9 mt-8 mb-6">
        <h2>{{ currentData.title }}</h2>
        <div v-for="(desc, index) in descriptions" :key="index" class="mt-3">
          <div :id="titles[index].replace(/\s+/g, '-').toLowerCase()">
            <p v-html="desc"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, computed } from "vue";
import { useRoute } from "vue-router";

const currentRouteName = computed(() => useRoute().name);

const data = ref({
  id: 1,
  title: "Terms & Condition",
  description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin sem in convallis vestibulum. Suspendisse consequat in libero non facilisis. Nullam dapibus blandit viverra. In sed ante ac eros fermentum lobortis eget in turpis. Sed maximus et odio id facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius leo eget condimentum tempus. Quisque cursus eleifend tellus, aliquet consequat augue pharetra vulputate. Curabitur congue arcu non ante molestie, in malesuada.<br/>
    <strong>Incontuniendo</strong><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/><br/>
    <strong>Crescent Moon</strong><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  `,
});

const dataPrivacy = ref({
  id: 2,
  title: "Privacy Policy",
  description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin sem in convallis vestibulum. Suspendisse consequat in libero non facilisis. Nullam dapibus blandit viverra. In sed ante ac eros fermentum lobortis eget in turpis. Sed maximus et odio id facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius leo eget condimentum tempus. Quisque cursus eleifend tellus, aliquet consequat augue pharetra vulputate. Curabitur congue arcu non ante molestie, in malesuada.<br/>
    <strong>Subtitle</strong><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/><br/>
    <strong>Crescent Moon</strong><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  `,
});

const body = document.getElementsByTagName("body")[0];
const currentSection = ref("");

const currentData = computed(() => {
  return currentRouteName.value === "privacy-policy"
    ? dataPrivacy.value
    : data.value;
});

const descriptions = computed(() => {
  return currentData.value.description.split(/<br\s*\/?>\s*<br\s*\/?>/);
});

const titles = computed(() => {
  const regex = /<strong>(.*?)<\/strong>/g;
  const matches = [];
  let match;

  while ((match = regex.exec(currentData.value.description)) !== null) {
    matches.push(match[1]); // Menyimpan hanya isi dari tag <strong>
  }

  return matches;
});

const scrollToSection = (title) => {
  const id = title.replace(/\s+/g, "-").toLowerCase(); // Membuat ID dari title
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    currentSection.value = title; // Mengupdate bagian yang aktif
  }
};

onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});

onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>

<style scoped>
/* Tambahkan gaya tambahan jika diperlukan */
</style>
