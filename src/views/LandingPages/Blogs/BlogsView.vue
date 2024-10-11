<script setup>
import { onMounted, computed } from "vue";

// Example components
// import Breadcrumbs from "@/examples/Breadcrumbs.vue";
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";
import Header from "../../../examples/Header.vue";

import Breadcrumb from "../components/Breadcrumb.vue";

import BlogsRecent from "./Components/BlogsRecent.vue";
import BlogsList from "./Components/BlogsList.vue";
import BlogDetails from "./Components/BlogDetails.vue";
import BlogsComment from "./Components/BlogsComment.vue";

// Image imports
import bottomVue from "@/assets/img/bottom-background.svg";
import imageHeader from "@/assets/img/blogs-header-image.svg";
import imageHeaderDetail from "@/assets/img/blogs-detail-header-image.svg";

// Material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});

import { useRoute } from "vue-router";
const currentRouteName = computed(() => {
  return useRoute().name;
});

const headerImage = computed(() => {
  return currentRouteName.value !== "blogs" ? imageHeaderDetail : imageHeader;
});
</script>

<style scoped>
.card {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.pagination {
  padding: 1rem 0;
}
</style>
<template>
  <DefaultNavbar
    :sticky="true"
    class="position-sticky z-index-sticky top-0"
    style="border-radius: 0"
  />
  <Header>
    <div
      class="page-header min-vh-45"
      :style="`background-image: url(${headerImage}); background-position: top center;`"
      loading="lazy"
      style="height: auto; width: 100%"
    >
      <div class="container-fluid px-5">
        <h2 class="text-white">Discover New Drops</h2>
        <Breadcrumb />
      </div>
    </div>
  </Header>
  <div class="container-fluid py-5">
    <div class="row">
      <div class="col-8" style="padding-right: 40px">
        <BlogsList v-if="currentRouteName === 'blogs'" />
        <section v-if="currentRouteName === 'blog-details'">
          <BlogDetails class="mb-5" />
          <hr :class="`horizontal dark`" class="mt-n1" />
          <BlogsComment class="mt-5" />
        </section>
      </div>
      <div class="col-4">
        <BlogsRecent />
      </div>
    </div>
  </div>
  <!-- </div> -->

  <Header>
    <div
      class="page-header min-vh-50"
      :style="`background-image: url(${bottomVue})`"
      loading="lazy"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2
              class="font-weight-bold text-white"
              style="margin-left: 50px; margin-right: 100px"
            >
              Custom ERP, tailored for Your business
            </h2>
          </div>
          <div class="col-md-6">
            <div class="container">
              <p class="text-white text-lg mt-n2">
                Need something specific? Let’s craft an ERP solution that
                matches your business perfectly. Ready to customize? Let's talk!
              </p>
              <a href="/" class="btn btn mb-0 bg-light text-info"
                >Book a Meeting</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </Header>
  <DefaultFooter />
</template>
