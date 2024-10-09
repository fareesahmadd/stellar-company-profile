<template>
  <nav
    class="navbar navbar-expand justify-content-between bg-info px-5 position-fixed z-index-sticky top-0"
    style="border-radius: 0; margin-top: 62px; width: 100%"
  >
    <a class="navbar-brand text-white" href="#">{{ title }}</a>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a
          class="nav-link text-white"
          :class="{ active: currentSection === 'overview' }"
          href="#overview"
          @click="scrollToSection('overview')"
          >Overview</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link text-white"
          :class="{ active: currentSection === 'features' }"
          href="#features"
          @click="scrollToSection('features')"
          >Features</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link text-white"
          :class="{ active: currentSection === 'solutions' }"
          href="#solutions"
          @click="scrollToSection('solutions')"
          >Solutions</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link text-white"
          :class="{ active: currentSection === 'resources' }"
          href="#resources"
          @click="scrollToSection('resources')"
          >Resources</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link text-white"
          :class="{ active: currentSection === 'faq' }"
          href="#faq"
          @click="scrollToSection('faq')"
          >FAQ</a
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
import { onMounted, onUnmounted, ref } from "vue";

// Hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});

// State for current section
const currentSection = ref("overview"); // Set default section

const scrollToSection = (section) => {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    currentSection.value = section; // Update current section
  }
};
</script>
<style>
.nav-link {
  position: relative;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ffffff; /* Ganti dengan warna hover yang diinginkan */
}

.nav-link.active {
  font-weight: bolder; /* Menonjolkan teks */
}

.nav-link.active::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px; /* Ketebalan garis */
  background: #ffffff; /* Warna garis */
  bottom: -8px; /* Jarak garis dari teks */
  left: 0;
}
</style>
