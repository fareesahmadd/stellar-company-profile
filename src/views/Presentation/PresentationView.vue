<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";
// import FilledInfoCard from "../../examples/cards/infoCards/FilledInfoCard.vue";

import logo from "@/assets/img/stellar-logo-light.svg";

// sections
// import PresentationCounter from "./Sections/PresentationCounter.vue";
import PresentationStories from "./Sections/PresentationStories.vue";
import PresentationFaq from "./Sections/PresentationFaq.vue";
import PresentationTestimonial from "./Sections/PresentationTestimonial.vue";
import PresentationProducts from "./Sections/PresentationProducts.vue";
import PresentationSolutions from "./Sections/PresentationSolutions.vue";
import PresentationSuperiority from "./Sections/PresentationSuperiority.vue";
import PresentationClient from "./Sections/PresentationClient.vue";

//images
import vueMkHeader from "@/assets/img/background-home-12.png";
import bottomVue from "@/assets/img/bottom-background.svg";

import vueMkHeader2 from "@/assets/img/background-home-11.png";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
// import { useRoute } from "vue-router";
// const currentRouteName = computed(() => {
//   return useRoute().name;
// });
</script>

<template>
  <div class="container-fluid position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>
  <Header>
    <div
      class="page-header min-vh-100"
      :style="`background-image: url(${vueMkHeader})`"
      loading="lazy"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1
              class="text-white pt-3 mt-n5 me-2"
              :style="{ display: 'inline-block ' }"
            >
              <img :src="logo" alt="Logo" class="logo" />
              <br />
              Your company deserves a great business setup
            </h1>
            <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '200' }">
              Stellar takes your business to a whole new level with its modern
              interface, extensive library, and an array of tools and features
              essential for growth and innovation.
            </p>
            <a
              href="/"
              class="btn btn-sm mb-0 bg-light px-5 py-3 mt-4 text-info"
              >Book a Meeting</a
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="page-header min-vh-80"
      :style="`background-image: url(${vueMkHeader2})`"
      loading="lazy"
    />
  </Header>
  <div class="container-fluid bg-white mt-n6">
    <PresentationClient class="mt-6 mb-4" />
    <hr :class="`horizontal dark`" />
    <PresentationSuperiority class="mt-2 mb-6" />
    <hr :class="`horizontal dark`" />
    <PresentationProducts class="mt-2" />
  </div>

  <div class="container-fluid bg-light">
    <PresentationSolutions class="mt-2" />
  </div>
  <div class="container-fluid bg-white">
    <PresentationTestimonial class="mt-2 mb-6" />
  </div>
  <div class="container-fluid bg-light">
    <PresentationStories class="mt-2" />
  </div>
  <div class="container-fluid bg-white">
    <PresentationFaq class="mt-2 mb-6" />
  </div>
  <Header class="mt-n6">
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
