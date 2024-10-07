<template>
  <div>
    <div class="row py-6">
      <div class="col-md-4">
        <div><p class="lead px-5 mt-2">Trusted by industry leaders</p></div>
      </div>
      <div class="col-md-8">
        <div class="d-flex flex-wrap">
          <img :src="logos.sony" alt="Sony Logo" class="m-3" />
          <img :src="logos.sony" alt="Sony Logo" class="m-3" />
          <img :src="logos.fujifilm" alt="Fujifilm Logo" class="m-3" />
          <img :src="logos.canon" alt="Canon Logo" class="m-3" />
          <img :src="logos.sigma" alt="Sigma Logo" class="m-3" />
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
