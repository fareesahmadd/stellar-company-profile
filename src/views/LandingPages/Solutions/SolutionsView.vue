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

// import logo from "@/assets/img/stellar-logo-light.svg";
import PresentationClient from "../../Presentation/Sections/PresentationClient.vue";
import PresentationFaq from "../../Presentation/Sections/PresentationFaq.vue";

import SolutionsUnique from "./SolutionsUnique.vue";
import SolutionsIndustry from "./SolutionsIndustry.vue";
import SolutionsBenefit from "./SolutionsBenefit.vue";
import StatisticComponent from "./Components/StatisticComponent.vue";

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
    class="position-sticky z-index-sticky top-0 z-index-4"
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
              Full-range of services
            </h1>
            <p class="lead px-5 mt-3" :style="{ fontWeight: '200' }">
              Our innovative solutions are the rocket fuel your business needs
              to blast off Imagine automating tedious tasks
            </p>
            <a
              href="/"
              class="btn btn-sm mb-0 bg-info px-5 py-3 mt-4 text-white"
              >Explore</a
            >
          </div>
        </div>
        <StatisticComponent class="container-fluid mt-6 mb-4" />
        <PresentationClient class="mt-0 mb-0" />
      </div>
    </div>
  </Header>
  <div class="bg-white mt-n6">
    <SolutionsUnique class="container-fluid mt-6 mb-4" />
    <hr :class="`horizontal dark`" />
    <SolutionsIndustry class="mt-6 mb-4" />
    <!-- <hr :class="`horizontal dark`" /> -->
    <SolutionsBenefit class="gradient-background mb-4" />
    <!-- <hr :class="`horizontal dark`" /> -->
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
