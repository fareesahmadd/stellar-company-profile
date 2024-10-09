<template>
  <div
    class="row py-6 text-center"
    v-bind:style="{ backgroundColor: isProductFmPage ? '#0f1423' : '' }"
  >
    <div class="col-12">
      <p class="lead mt-2" v-if="!isNotAboutPage">
        Top leading companies trust us
      </p>
      <p class="lead mt-2" v-if="isNotAboutPage">Trusted by industry leaders</p>
    </div>
    <div class="col-lg-12 col-md-12 col-sm-12">
      <div class="d-flex justify-content-center flex-wrap">
        <img :src="logos.sony" alt="Sony Logo" class="m-4" />
        <img :src="logos.sony" alt="Sony Logo" class="m-4" />
        <img :src="logos.fujifilm" alt="Fujifilm Logo" class="m-4" />
        <img :src="logos.canon" alt="Canon Logo" class="m-4" />
        <img :src="logos.sigma" alt="Sigma Logo" class="m-4" />
      </div>
    </div>
  </div>
</template>

<script>
import sonyLogo from "@/assets/img/sony-logo-grey.svg";
import fujifilm from "@/assets/img/fujifilm-logo-grey.svg";
import sigma from "@/assets/img/sigma-logo-grey.svg";
import canon from "@/assets/img/canon-logo-grey.svg";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      logos: {
        sony: sonyLogo,
        fujifilm: fujifilm,
        sigma: sigma,
        canon: canon,
      },
    };
  },
  computed: {
    currentRouteName() {
      return useRoute().name;
    },
    isNotAboutPage() {
      return this.currentRouteName !== "about";
    },
    isProductFmPage() {
      return this.currentRouteName === "products-fm";
    },
  },
};
</script>
