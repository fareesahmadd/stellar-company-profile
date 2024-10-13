<script setup>
import { onMounted, onUnmounted } from "vue";

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
import ProductsFooter from "./Components/ProductsFooter.vue";
// import FAQ from "./Components/FAQ.vue";

//images
import imageHeader from "@/assets/img/products-fm-header.svg";
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
</script>

<template>
  <NavbarDefault
    :sticky="true"
    class="position-sticky z-index-sticky top-0"
    style="border-radius: 0"
  />
  <ProductsNavbar
    class="position-relative z-index-2"
    title="Financial Management"
  />
  <Header id="overview">
    <div
      class="page-header min-vh-75 mt-n7"
      :style="`background-image: url(${imageHeader});background-size: cover`"
      style="width: 100%; height: 1005px"
      loading="lazy"
    >
      <div class="container">
        <div class="row mt-n8">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1 class="text-dark mt-n10 me-2">
              Get real-time analytics keep stay sharp.
            </h1>
            <p class="lead text-dark mt-3" :style="{ fontWeight: '200' }">
              Tracking your financial performance, identifying trends, and
              optimizing your strategies in real-time. Sharpen your focus on
              what matters most.
            </p>
            <a
              href="/"
              class="btn btn-sm mb-0 bg-info px-5 py-3 mt-4 text-white"
              >Book a Meeting</a
            >
          </div>
        </div>
      </div>
    </div>
  </Header>
  <div>
    <AboutClient />
  </div>
  <div class="container-fluid bg-white mt-n6">
    <ProductsFeatures class="mt-6 mb-3" id="features" />
    <hr :class="`horizontal dark`" id="solutions" />
    <ProductsSolutions
      class="mt-6 mb-4"
      style="position: relative; z-index: 0"
    />
    <ProductsFooter class="mt-7 mb-4" id="resources" />
    <ProductFaq class="mb-4" id="faq" />
  </div>

  <Header class="mt-n4">
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
