<script setup>
import { onMounted, onUnmounted, computed, ref, watch } from "vue";

import { useWindowsWidth } from "../../assets/js/useWindowsWidth";

//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";

import logo from "@/assets/img/stellar-logo-light.svg";

// sections
import PresentationStories from "./Sections/PresentationStories.vue";
import PresentationFaq from "./Sections/PresentationFaq.vue";
import PresentationTestimonial from "./Sections/PresentationTestimonial.vue";
import PresentationProducts from "./Sections/PresentationProducts.vue";
import PresentationSolutions from "./Sections/PresentationSolutions.vue";
import PresentationSuperiority from "./Sections/PresentationSuperiority.vue";
import PresentationClient from "./Sections/PresentationClient.vue";

//images
import vueMkHeader from "@/assets/img/presentations/header-home-image.svg";
import vueMkHeaderMobile from "@/assets/img/presentations/header-home-image-mobile.svg";
import vueMkHeaderMedium from "@/assets/img/presentations/header-home-image-medium.svg";
import vueMkHeaderTablet from "@/assets/img/presentations/header-home-image-tablet.svg";

import bottomVue from "@/assets/img/bottom-background.svg";
const { type } = useWindowsWidth();
let typeSize = ref(type);

watch(
  () => type.value,
  (newValue) => {
    typeSize.value = newValue;
  }
);

const footerTitleStyle = computed(() => {
  switch (typeSize.value) {
    case "tablet":
      return { marginLeft: "0px", marginRight: "90px" };
    case "medium":
      return { paddingRight: "130px" };
    case "mobile":
      return {};
    default:
      // desktop
      return { marginLeft: "50px", marginRight: "200px" };
  }
});

const backgroundImage = computed(() => {
  switch (type.value) {
    case "mobile":
      return vueMkHeaderMobile;
    case "medium":
      return vueMkHeaderMedium;
    case "tablet":
      return vueMkHeaderTablet;
    case "desktop":
      return vueMkHeader;
    default:
      return vueMkHeaderMobile; // Fallback image
  }
});

const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <NavbarDefault
    :sticky="true"
    class="position-sticky z-index-sticky top-0"
    style="border-radius: 0"
  />
  <Header>
    <div
      class="page-header min-vh-100"
      :style="`background-image: url(${backgroundImage}); background-size: cover; background-position: center; background-repeat: no-repeat;`"
      loading="lazy"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1
              class="text-white pt-6 me-2"
              :style="{ display: 'inline-block' }"
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
          <div class="card mt-10"></div>
          <div class="card mt-10"></div>
          <div class="card mt-10"></div>
        </div>
      </div>
    </div>
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
      <div
        class="container"
        v-if="typeSize === 'desktop' || typeSize === 'tablet'"
      >
        <div :class="typeSize === 'desktop' ? 'row' : 'row py-5'">
          <div class="col-md-6">
            <h2 class="font-weight-bold text-white" :style="footerTitleStyle">
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
      <div
        class="container"
        v-if="typeSize === 'medium' || typeSize === 'mobile'"
      >
        <div class="row mt-4" :style="footerTitleStyle">
          <h3 class="font-weight-bold text-white">
            Custom ERP, tailored for Your business
          </h3>
          <div class="container">
            <p class="text-white text-md mt-2">
              Need something specific? Let’s craft an ERP solution that matches
              your business perfectly. Ready to customize? Let's talk!
            </p>
            <div
              :class="
                typeSize === 'mobile'
                  ? 'd-flex justify-content-center'
                  : 'd-flex justify-content-start'
              "
            >
              <a href="/" class="btn mb-4 bg-light text-info mt-2"
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
