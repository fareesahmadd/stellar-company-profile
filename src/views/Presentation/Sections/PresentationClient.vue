<template>
  <div>
    <div class="row py-6" v-if="typeSize === 'desktop'">
      <div class="col-md-3 d-flex flex-column align-items-center">
        <p class="lead mt-3">Trusted by industry leaders</p>
      </div>
      <div class="col-md-9 mt-3">
        <div class="row">
          <div class="col text-center">
            <img :src="logos.sony" alt="Sony Logo" class="logo" />
          </div>
          <div class="col text-center">
            <img :src="logos.sony" alt="Sony Logo" class="logo" />
          </div>
          <div class="col text-center">
            <img :src="logos.fujifilm" alt="Fujifilm Logo" class="logo" />
          </div>
          <div class="col text-center">
            <img :src="logos.canon" alt="Canon Logo" class="logo" />
          </div>
          <div class="col text-center">
            <img :src="logos.sigma" alt="Sigma Logo" class="logo" />
          </div>
        </div>
      </div>
    </div>
    <div class="py-6" v-if="typeSize === 'mobile'">
      <div class="row">
        <div class="col-12 d-flex flex-column align-items-center">
          <p class="mt-3">Trusted by industry leaders</p>
        </div>
      </div>
      <div class="row py-3">
        <div class="col-6 d-flex flex-column align-items-start">
          <img :src="logos.sony" alt="Sony Logo" />
        </div>
        <div class="col-6 d-flex flex-column align-items-end">
          <img :src="logos.sony" alt="Sony Logo" />
        </div>
      </div>
      <div class="row py-3">
        <div class="col-6 d-flex flex-column align-items-start">
          <img :src="logos.fujifilm" alt="Fujifilm Logo" />
        </div>
        <div class="col-6 d-flex flex-column align-items-end">
          <img :src="logos.canon" alt="Canon Logo" />
        </div>
      </div>
      <div class="row pt-3">
        <div class="col-12 d-flex flex-column align-items-center">
          <img :src="logos.sigma" alt="Sigma Logo" />
        </div>
      </div>
    </div>
    <div class="py-6" v-if="typeSize === 'tablet'">
      <div class="row">
        <div class="col-12 d-flex flex-column align-items-center">
          <p class="mt-3">Trusted by industry leaders</p>
        </div>
      </div>
      <div class="d-flex flex-wrap">
        <img
          :src="logos.sony"
          alt="Sony Logo"
          style="margin-left: 70px; margin-right: 70px"
        />
        <img :src="logos.sony" alt="Sony Logo" style="margin-right: 70px" />
        <img
          :src="logos.fujifilm"
          alt="Fujifilm Logo"
          style="margin-right: 70px"
        />
        <img :src="logos.canon" alt="Canon Logo" style="margin-right: 70px" />
        <img :src="logos.sigma" alt="Sigma Logo" />
      </div>
    </div>
    <div class="py-6" v-if="typeSize === 'medium'">
      <div class="row">
        <div class="col-12 d-flex flex-column align-items-center">
          <p class="mt-3">Trusted by industry leaders</p>
        </div>
      </div>
      <div class="mt-5">
        <img :src="logos.sony" alt="Sony Logo" style="padding-left: 150px" />
        <img :src="logos.sony" alt="Sony Logo" class="px-5" />
        <img :src="logos.fujifilm" alt="Fujifilm Logo" />
      </div>
      <div class="mt-7">
        <img :src="logos.canon" alt="Canon Logo" style="padding-left: 250px" />
        <img :src="logos.sigma" alt="Sigma Logo" style="padding-left: 50px" />
      </div>
    </div>
  </div>
</template>

<script setup>
import sonyLogo from "@/assets/img/sony-logo-grey.svg";
import fujifilm from "@/assets/img/fujifilm-logo-grey.svg";
import sigma from "@/assets/img/sigma-logo-grey.svg";
import canon from "@/assets/img/canon-logo-grey.svg";

const logos = {
  sony: sonyLogo,
  fujifilm: fujifilm,
  sigma: sigma,
  canon: canon,
};

import { ref, watch } from "vue";
import { useWindowsWidth } from "@/assets/js/useWindowsWidth";

// set nav color on mobile && desktop

const { type } = useWindowsWidth();
let typeSize = ref(type);

watch(
  () => type.value,
  (newValue) => {
    typeSize.value = newValue;
  }
);
</script>
