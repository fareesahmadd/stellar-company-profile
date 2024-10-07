<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";
import Header from "../../../examples/Header.vue";
// import FilledInfoCard from "../../examples/cards/infoCards/FilledInfoCard.vue";

// import logo from "@/assets/img/stellar-logo-light.svg";
import PresentationClient from "../../Presentation/Sections/PresentationClient.vue";
import PresentationFaq from "../../Presentation/Sections/PresentationFaq.vue";

import SolutionsUnique from "../Solutions/SolutionsUnique.vue";
import SolutionsIndustry from "../Solutions/SolutionsIndustry.vue";
import SolutionsBenefit from "../Solutions/SolutionsBenefit.vue";

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
              class="text-dark pt-6 me-2"
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
        <PresentationClient class="mt-0 mb-0" />
      </div>
    </div>
  </Header>
  <div class="container-fluid bg-white mt-n6">
    <SolutionsUnique class="mt-6 mb-4" />
    <hr :class="`horizontal dark`" />
    <SolutionsIndustry class="mt-6 mb-4" />
    <hr :class="`horizontal dark`" />
    <SolutionsBenefit class="mb-4" />
    <hr :class="`horizontal dark`" />
    <PresentationFaq class="mb-4" />
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
