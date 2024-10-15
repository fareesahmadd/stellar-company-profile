<template>
  <div>
    <div class="row py-6">
      <div class="col-md-3 d-flex flex-column align-items-center">
        <p class="lead mt-3">Trusted by industry leaders</p>
      </div>
      <div class="col-md-9 d-flex flex-column justify-content-center">
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
    </div>
  </div>
</template>

<script>
import sonyLogo from "@/assets/img/sony-logo-grey.svg";
import fujifilm from "@/assets/img/fujifilm-logo-grey.svg";
import sigma from "@/assets/img/sigma-logo-grey.svg";
import canon from "@/assets/img/canon-logo-grey.svg";

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
};
</script>
