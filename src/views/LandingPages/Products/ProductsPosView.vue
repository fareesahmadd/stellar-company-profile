<style scoped>
.gradient-title {
  background: linear-gradient(90deg, #1b2361, #4d57a3, #949ac8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block; /* Ensure it behaves like inline text */
}
</style>
<script setup>
import { onMounted, onUnmounted } from "vue";

// Example components
import NavbarDefault from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";
import Header from "../../../examples/Header.vue";

import PresentationClient from "../../Presentation/Sections/PresentationClient.vue";

import ProductFaq from "./Components/ProductFaq.vue";
import ProductsOpinion from "./Components/ProductsOpinion.vue";
import ProductsFeatures from "./Components/ProductsFeatures.vue";
import ProductsSolutions from "./Components/ProductsSolutions.vue";
import ProductsFooter from "./Components/ProductsFooter.vue";
import ProductsNavbar from "./Components/ProductsNavbar.vue";

// Images
import imageHeader from "@/assets/img/background-header-light.svg";
import bottomVue from "@/assets/img/bottom-background.svg";
import vueMkHeader from "@/assets/img/superiority-image.svg";

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
    class="position-relative z-index-2"
    title="Point of Sales (POS)"
  />

  <!-- <nav
    class="navbar navbar-expand justify-content-between bg-info px-5 position-fixed z-index-sticky top-0"
    style="border-radius: 0; margin-top: 62px; width: 100%"
  >
    <a class="navbar-brand text-white" href="#">Point of Sales (POS)</a>
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
  </nav> -->
  <!-- </Header> -->

  <Header id="overview">
    <div
      class="page-header min-vh-100"
      :style="`background-image: url(${imageHeader}); background-size: cover; background-position: center;`"
      loading="lazy"
    >
      <div class="container">
        <div class="row mt-6">
          <div class="col-lg-6">
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
              class="btn btn-sm mb-0 bg-info px-5 py-3 mt-4 text-white"
              >Book a Meeting</a
            >
          </div>
          <div class="col-lg-6">
            <div
              class="card mt-4"
              :style="`background-image: url(${vueMkHeader});background-size: cover; background-position: top left;`"
              style="
                border-radius: 10px;
                overflow: hidden;
                width: 100%;
                height: 400px;
              "
            ></div>
          </div>
        </div>
        <PresentationClient class="mt-0 mb-0" />
      </div>
    </div>
  </Header>

  <div class="container-fluid bg-white mt-n6">
    <ProductsOpinion class="mt-6 mb-3" />
    <hr :class="`horizontal dark`" id="features" />
    <ProductsFeatures class="mt-6 mb-3" />

    <hr :class="`horizontal dark`" />
    <ProductsSolutions class="mt-6 mb-4" id="solutions" />
    <hr :class="`horizontal white mt-n7`" id="resources" />
    <ProductsFooter class="mt-4 mb-4" />
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
