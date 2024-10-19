<style scoped>
.gradient-title {
  background: linear-gradient(90deg, #1b2361, #4d57a3, #949ac8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block; /* Ensure it behaves like inline text */
}
</style>
<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useWindowsWidth } from "@/assets/js/useWindowsWidth";

const { type } = useWindowsWidth();
let typeSize = ref(type);

watch(
  () => type.value,
  (newValue) => {
    typeSize.value = newValue;
  }
);

// Example components
import NavbarDefault from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";
import Header from "../../../examples/Header.vue";

// import PresentationClient from "../../Presentation/Sections/PresentationClient.vue";
import AboutClient from "../AboutUs/Sections/AboutClient.vue";

import ProductFaq from "./Components/ProductFaq.vue";
import ProductsOpinion from "./Components/ProductsOpinion.vue";
import ProductsFeatures from "./Components/ProductsFeatures.vue";
import ProductsSolutions from "./Components/ProductsSolutions.vue";
import ProductsFooter from "./Components/ProductsFooter.vue";
import ProductsNavbar from "./Components/ProductsNavbar.vue";
import ProductsAdditional from "./Components/ProductsAdditional.vue";

// Images
import imageHeader from "@/assets/img/products-bom-header-image.svg";
import bottomVue from "@/assets/img/bottom-background.svg";
// import vueMkHeader from "@/assets/img/superiority-image.svg";

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
</script>

<template>
  <NavbarDefault
    :sticky="true"
    class="position-sticky z-index-sticky top-0 z-index-4"
    style="border-radius: 0"
  ></NavbarDefault>
  <ProductsNavbar
    v-if="typeSize !== 'mobile'"
    class="position-relative z-index-2"
    title="Back-Office Management"
  />

  <Header :class="typeSize !== 'mobile' ? 'pt-5' : ''" id="overview">
    <div
      class="page-header min-vh-100"
      :style="`background-image: url(${imageHeader}); background-position: top;`"
      loading="lazy"
    >
      <div class="container">
        <div class="row mt-5">
          <div class="col-lg-6 mb-10">
            <h1
              class="gradient-title text-dark pt-6 me-2"
              :style="{ display: 'inline-block ' }"
            >
              Enhance every purchase
            </h1>
            <p class="lead mt-3" :style="{ fontWeight: '200' }">
              Make every purchase a win, with a POS system that’s as smooth as
              your brand. It’s time to turn up the experience and make every
              sale unforgettable.
            </p>
            <a
              href="/"
              class="btn btn-sm mb-0 bg-info px-5 py-3 mt-3 text-white"
              >Book a Meeting</a
            >
          </div>
          <div class="col-lg-6"></div>
        </div>
        <!-- <PresentationClient class="mt-0 mb-0" /> -->
      </div>
    </div>
  </Header>

  <div class="container-fluid bg-white mt-n6">
    <ProductsOpinion class="container-fluid mt-6 mb-3" />
    <hr :class="`horizontal dark`" />
    <ProductsFeatures class="container-fluid mt-6 mb-3" id="features" />

    <ProductsSolutions class="mt-6 mb-4" id="solutions" />
    <ProductsAdditional class="container-fluid" />
    <AboutClient />
    <hr :class="`horizontal dark`" />
    <ProductsFooter class="mt-4 mb-4" id="resources" />
    <ProductFaq class="mt-2 mb-6" id="faq" />
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
