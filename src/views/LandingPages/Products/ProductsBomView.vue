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
<script setup>
import { onMounted, onUnmounted } from "vue";

// Example components
import NavbarDefault from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";
import Header from "../../../examples/Header.vue";

// import PresentationClient from "../../Presentation/Sections/PresentationClient.vue";
import PresentationFaq from "../../Presentation/Sections/PresentationFaq.vue";
import AboutClient from "../AboutUs/Sections/AboutClient.vue";

import ProductsOpinion from "./Components/ProductsOpinion.vue";
import ProductsFeatures from "./Components/ProductsFeatures.vue";
import ProductsSolutions from "./Components/ProductsSolutions.vue";
import ProductsFooter from "./Components/ProductsFooter.vue";
import ProductsNavbar from "./Components/ProductsNavbar.vue";

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
    class="position-relative z-index-2"
    title="Back-Office Management"
  />

  <Header class="pt-5" id="overview">
    <div
      class="page-header min-vh-100"
      :style="`background-image: url(${imageHeader}); background-position: top;`"
      loading="lazy"
    >
      <div class="container">
        <div class="row mt-5">
          <div class="col-lg-6 mb-10">
            <h1
              class="text-dark pt-6 me-2"
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
    <ProductsOpinion class="mt-6 mb-3" />
    <hr :class="`horizontal dark`" />
    <ProductsFeatures class="mt-6 mb-3" id="features" />

    <!-- <hr :class="`horizontal dark`" /> -->
    <ProductsSolutions class="mt-6 mb-4" id="solutions" />

    <!-- <SolutionsIndustry class="mt-6 mb-4" /> -->
    <AboutClient />
    <hr :class="`horizontal dark`" />
    <ProductsFooter class="mt-4 mb-4" id="resources" />
    <!-- <hr :class="`horizontal dark`" /> -->
    <PresentationFaq class="mb-4" id="faq" />
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
