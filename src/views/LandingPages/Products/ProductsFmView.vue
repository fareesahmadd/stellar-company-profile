<script setup>
import { onMounted, onUnmounted, ref, watch, computed } from "vue";
import { useWindowsWidth } from "@/assets/js/useWindowsWidth";

const { type } = useWindowsWidth();
let typeSize = ref(type);

watch(
  () => type.value,
  (newValue) => {
    typeSize.value = newValue;
  }
);

//example components
import NavbarDefault from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";
import Header from "../../../examples/Header.vue";
// import FilledInfoCard from "../../examples/cards/infoCards/FilledInfoCard.vue";

// import logo from "@/assets/img/stellar-logo-light.svg";
import ProductFaq from "./Components/ProductFaq.vue";
import ProductsNavbar from "./Components/ProductsNavbar.vue";
import AboutClient from "../AboutUs/Sections/AboutClient.vue";

import ProductsFeatures from "./Components/ProductsFeatures.vue";
import ProductsSolutions from "./Components/ProductsSolutions.vue";
import ProductsOpinion from "./Components/ProductsOpinion.vue";
import ProductsFooter from "./Components/ProductsFooter.vue";
// import FAQ from "./Components/FAQ.vue";

//images
import imageHeader from "@/assets/img/products/products-fm-header.svg";
import imageHeaderTablet from "@/assets/img/products/header-fm-tablet.svg";
import imageHeaderMedium from "@/assets/img/products/header-fm-medium.svg";
import imageHeaderMobile from "@/assets/img/products/header-fm-mobile.svg";

import bottomVue from "@/assets/img/bottom-background.svg";

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

const backgroundImage = computed(() => {
  switch (type.value) {
    case "mobile":
      return imageHeaderMobile;
    case "medium":
      return imageHeaderMedium;
    case "tablet":
      return imageHeaderTablet;
    default:
      return imageHeader;
  }
});
</script>
<style scoped>
.gradient-background {
  background: linear-gradient(to bottom, #ffffff, #e4e4f0);
}
.gradient-title {
  background: linear-gradient(90deg, #1b2361, #4d57a3, #949ac8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block; /* Ensure it behaves like inline text */
}
</style>

<template>
  <NavbarDefault
    :sticky="true"
    class="position-sticky z-index-sticky top-0"
    style="border-radius: 0"
  />
  <ProductsNavbar
    v-if="typeSize !== 'mobile'"
    class="position-relative z-index-2"
    title="Financial Management"
  />
  <Header id="overview">
    <div
      :class="
        typeSize === 'desktop'
          ? 'page-header min-vh-100 mt-n8'
          : typeSize === 'mobile'
          ? 'page-header min-vh-100 mt-n6'
          : 'page-header min-vh-100'
      "
      :style="`background-image: url(${backgroundImage}); background-size:cover; background-position: top center; background-repeat: no-repeat;`"
      loading="lazy"
    >
      <div
        :class="
          typeSize === 'mobile'
            ? 'container mt-5 '
            : typeSize === 'medium'
            ? 'container mt-5 mb-8'
            : 'container mt-5 mb-10'
        "
      >
        <div
          :class="typeSize === 'desktop' ? 'row mt-10 mb-10' : 'row mt-5 mb-10'"
        >
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1
              v-if="typeSize === 'desktop'"
              class="gradient-title text-dark me-2"
            >
              Get real-time analytics keep stay sharp.
            </h1>
            <h2
              v-if="typeSize !== 'desktop'"
              :class="
                typeSize === 'tablet'
                  ? 'gradient-title text-dark me-2 px-6'
                  : typeSize === 'mobile'
                  ? 'gradient-title text-dark me-2 '
                  : 'gradient-title text-dark me-2 px-8'
              "
            >
              Get real-time analytics keep stay sharp.
            </h2>
            <p
              :class="
                typeSize === 'desktop'
                  ? 'lead  text-dark mt-3'
                  : 'lead text-md text-dark mt-3'
              "
              :style="{ fontWeight: '200' }"
            >
              Tracking your financial performance, identifying trends, and
              optimizing your strategies in real-time. Sharpen your focus on
              what matters most.
            </p>
            <a
              href="/"
              :class="
                typeSize !== 'desktop'
                  ? 'btn btn-sm mb-0 bg-info px-4 py-2 text-white'
                  : 'btn btn-sm mb-0 bg-info px-5 py-3 mt-4 text-white'
              "
              >Book a Meeting</a
            >
          </div>
          <!-- <div v-if="typeSize !== 'desktop'" class="card mt-5"></div> -->

          <!-- <div v-if="typeSize !== 'desktop'" class="card mt-5"></div> -->
          <!-- <div v-if="typeSize !== 'desktop'" class="card mt-5"></div> -->
          <!-- <div v-if="typeSize !== 'desktop'" class="card mt-5"></div> -->

          <div v-if="typeSize === 'desktop'" class="card mt-10"></div>
        </div>
      </div>
    </div>
  </Header>
  <div class="container-fluid" v-bind:style="{ backgroundColor: '#0f1423' }">
    <AboutClient />
  </div>
  <div class="container-fluid bg-white mt-n6">
    <ProductsFeatures class="mt-6 mb-3" id="features" />
    <hr :class="`horizontal dark`" id="solutions" />
    <ProductsSolutions
      class="mt-6 mb-4"
      style="position: relative; z-index: 0"
    />
  </div>
  <div class="container-fluid gradient-background mt-n7">
    <ProductsOpinion class="gradient-background" />
  </div>

  <div class="container-fluid bg-white mt-n7">
    <ProductsFooter class="mt-7 mb-4" id="resources" />
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
