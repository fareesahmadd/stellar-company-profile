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

//example components
import NavbarDefault from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";
import Header from "../../../examples/Header.vue";
// import FilledInfoCard from "../../examples/cards/infoCards/FilledInfoCard.vue";

// import logo from "@/assets/img/stellar-logo-light.svg";
// import PresentationClient from "../../Presentation/Sections/PresentationClient.vue";
import PresentationFaq from "../../Presentation/Sections/PresentationFaq.vue";
import AboutCounter from "./Sections/AboutCounter.vue";
import AboutStory from "./Sections/AboutStory.vue";
import AboutValues from "./Sections/AboutValues.vue";
import AboutClient from "./Sections/AboutClient.vue";

import headerImageOne from "@/assets/img/about-header-1.svg";
import headerImageTwo from "@/assets/img/about-header-2.svg";
import headerImageThree from "@/assets/img/about-header-3.svg";

// import SolutionsUnique from "./SolutionsUnique.vue";
// import SolutionsIndustry from "./SolutionsIndustry.vue";
// import SolutionsBenefit from "./SolutionsBenefit.vue";

//images
import imageHeader from "@/assets/img/background-header-light.svg";
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
// import { useRoute } from "vue-router";
// const currentRouteName = computed(() => {
//   return useRoute().name;
// });
</script>

<style scoped>
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
  <Header>
    <div
      class="page-header min-vh-100"
      :style="`background-image: url(${imageHeader});`"
      loading="lazy"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1
              class="gradient-title text-dark pt-6 me-2"
              :style="{ display: 'inline-block ' }"
            >
              We're building software for the business solutions
            </h1>
            <p class="lead mt-3" :style="{ fontWeight: '200' }">
              Let us help you transform your challenges into opportunities with
              innovative technology that meets the demands of today and
              tomorrow.
            </p>
            <!-- <a
              href="/"
              class="btn btn-sm mb-0 bg-info px-5 py-3 mt-4 text-white"
              >Explore</a
            > -->
          </div>
        </div>
        <div class="row mt-7">
          <div class="col-4">
            <div
              class="card blur shadow-lg my-sm-0 my-sm-0 mt-0 mb-5"
              style="
                border-radius: 10px;
                overflow: hidden;
                width: 342px;
                height: 440px;
              "
              :style="`background-image: url(${headerImageOne});background-size: cover; background-position: center;`"
            ></div>
          </div>
          <div class="col-4 mt-7">
            <div
              class="card d-flex blur shadow-lg my-sm-0 my-sm-0 mt-0 mb-5"
              style="
                border-radius: 10px;
                overflow: hidden;
                width: 342px;
                height: 440px;
              "
              :style="`background-image: url(${headerImageTwo});background-size: cover; background-position: center;`"
            ></div>
          </div>
          <div class="col-4">
            <div
              class="card d-flex blur shadow-lg my-sm-0 my-sm-0 mt-0 mb-5"
              style="
                border-radius: 10px;
                overflow: hidden;
                width: 342px;
                height: 440px;
              "
              :style="`background-image: url(${headerImageThree});background-size: cover; background-position: center;`"
            ></div>
          </div>
        </div>
        <AboutClient class="mt-0 mb-0" />
      </div>
    </div>
  </Header>
  <div class="container-fluid bg-white mt-n6">
    <AboutStory class="mt-6 mb-4 px-7" />
    <hr :class="`horizontal dark`" />
    <AboutCounter class="mt-5 px-7" />
    <AboutValues class="mb-4" />
    <hr :class="`horizontal dark`" />

    <PresentationFaq class="mb-4" />
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
