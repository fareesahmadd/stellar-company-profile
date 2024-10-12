<script setup>
import { onMounted, onUnmounted } from "vue";

// Example components
import NavbarDefault from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";
import TermsCondition from "./Components/TermsCondition.vue";
// import Header from "../../../examples/Header.vue";

import ProductsNavbar from "../Products/Components/ProductsNavbar.vue";

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
    title="Term & Condition"
  />

  <TermsCondition class="bg-white" />

  <DefaultFooter />
</template>
