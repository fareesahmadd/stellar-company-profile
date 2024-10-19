<template>
  <div :class="typeSize === 'mobile' ? '' : 'container-fluid'">
    <div class="row py-5" v-if="typeSize !== 'mobile'">
      <div
        :class="
          typeSize === 'mobile' ? 'text-center mb-5' : 'text-center mb-5 px-9'
        "
      >
        <h2
          :class="
            typeSize === 'mobile'
              ? 'font-weight-bold '
              : 'font-weight-bold px-11'
          "
        >
          Every business is unique, so is Yours.
        </h2>
      </div>
      <div
        :class="typeSize === 'mobile' ? 'col-12 px-3 mb-3' : 'col-md-4 px-3'"
      >
        <div
          class="card"
          :style="`background-image: url(${vueMkHeader})`"
          style="
            border-radius: 10px;
            overflow: hidden;
            width: 100%;
            height: 100%;
          "
        >
          <div class="card-title px-3 py-3">
            <i class="fas fa-palette fa-2x text-white"></i>
          </div>
          <div class="card-body d-flex flex-column justify-content-end">
            <h5 class="card-title text-white mt-8">
              Personalized Customization
            </h5>
            <p class="card-text text-white" style="font-size: 15px">
              Adapt Stellar ERP to your unique retail processes, ensuring a
              perfect fit for your business needs.
            </p>
          </div>
        </div>
      </div>
      <div :class="typeSize === 'mobile' ? 'col-6 px-3' : 'col-md-4 px-4'">
        <div class="row">
          <div class="card" style="border-radius: 10px" :style="cardStyle">
            <div class="card-body">
              <i class="fas fa-store fa-2x text-info"></i>
              <h5
                :class="
                  typeSize === 'mobile'
                    ? 'card-title mt-3 text-md'
                    : 'card-title mt-3'
                "
              >
                Premium Meets Practical
              </h5>
              <p
                class="card-text"
                :style="
                  typeSize === 'mobile' ? 'font-size: 14px' : 'font-size: 15px'
                "
              >
                Elevate operations with our premium retail solutions without
                breaking the bank.
              </p>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="card" style="border-radius: 10px" :style="cardStyle">
            <div class="card-body">
              <i class="fas fa-palette fa-2x text-info"></i>
              <h5
                :class="
                  typeSize === 'mobile'
                    ? 'card-title mt-3 text-md'
                    : 'card-title mt-3'
                "
              >
                Designed for Retail
              </h5>
              <p
                class="card-text"
                :style="
                  typeSize === 'mobile' ? 'font-size: 13px' : 'font-size: 15px'
                "
              >
                Stellar ERP ecosystem is built to address all retail-specific
                challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div :class="typeSize === 'mobile' ? 'col-6 px-4' : 'col-md-4 px-4'">
        <div class="row">
          <div class="card" style="border-radius: 10px" :style="cardStyle">
            <div class="card-body">
              <i class="fas fa-palette fa-2x text-info"></i>
              <h5
                :class="
                  typeSize === 'mobile'
                    ? 'card-title mt-3 text-md'
                    : 'card-title mt-3'
                "
              >
                Worldwide Scalability
              </h5>
              <p
                class="card-text"
                :style="
                  typeSize === 'mobile' ? 'font-size: 14px' : 'font-size: 15px'
                "
              >
                Expand with a system designed for multiple locations,
                currencies, and regulations.
              </p>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="card" style="border-radius: 10px" :style="cardStyle">
            <div class="card-body">
              <i class="fas fa-palette fa-2x text-info"></i>
              <h5
                :class="
                  typeSize === 'mobile'
                    ? 'card-title mt-3 text-md'
                    : 'card-title mt-3'
                "
              >
                24/7 Customer Support
              </h5>
              <p
                class="card-text"
                :style="
                  typeSize === 'mobile' ? 'font-size: 14px' : 'font-size: 15px'
                "
              >
                Our dedicated team of retail ERP experts is always available to
                assist you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="typeSize === 'mobile'"
      class="d-flex flex-column align-items-center py-5"
    >
      <div
        :class="
          typeSize === 'mobile' ? 'text-center mb-5' : 'text-center mb-5 px-9'
        "
      >
        <h2
          :class="
            typeSize === 'mobile'
              ? 'font-weight-bold '
              : 'font-weight-bold px-11'
          "
        >
          Every business is unique, so is Yours.
        </h2>
      </div>
      <div
        class="card"
        :style="`background-image: url(${vueMkHeader})`"
        style="border-radius: 10px; overflow: hidden; width: auto; height: 100%"
      >
        <div class="card-title px-3 py-3">
          <i class="fas fa-palette fa-2x text-white"></i>
        </div>
        <div class="card-body d-flex flex-column justify-content-end">
          <h5 class="card-title text-white mt-8">Personalized Customization</h5>
          <p class="card-text text-white" style="font-size: 15px">
            Adapt Stellar ERP to your unique retail processes, ensuring a
            perfect fit for your business needs.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-6 mt-2">
          <div class="card" style="border-radius: 10px" :style="cardStyle">
            <div class="card-body">
              <img
                src="@/assets/img/icons/icon-price-tag.svg"
                alt="icon-price-tag"
                class="img-fluid"
                :style="imageStyle"
              />

              <h5
                :class="
                  typeSize === 'mobile'
                    ? 'card-title mt-3 text-sm'
                    : 'card-title mt-3'
                "
              >
                Premium Meets Practical
              </h5>
              <p
                class="card-text"
                :style="
                  typeSize === 'mobile' ? 'font-size: 12px' : 'font-size: 15px'
                "
              >
                Elevate operations with our premium retail solutions without
                breaking the bank.
              </p>
            </div>
          </div>
        </div>
        <div class="col-6 mt-2">
          <div class="card" style="border-radius: 10px" :style="cardStyle">
            <div class="card-body">
              <img
                src="@/assets/img/icons/icon-support.svg"
                alt="icon-support"
                class="img-fluid"
                :style="imageStyle"
              />
              <h5
                :class="
                  typeSize === 'mobile'
                    ? 'card-title mt-3 text-sm'
                    : 'card-title mt-3'
                "
              >
                Worldwide Scalability
              </h5>
              <p
                class="card-text"
                :style="
                  typeSize === 'mobile' ? 'font-size: 12px' : 'font-size: 15px'
                "
              >
                Expand with a system designed for multiple locations,
                currencies, and regulations.
              </p>
            </div>
          </div>
        </div>
        <div class="col-6 mt-2">
          <div class="card" style="border-radius: 10px" :style="cardStyle">
            <div class="card-body">
              <img
                src="@/assets/img/icons/icon-cashier.svg"
                alt="icon-cashier"
                class="img-fluid"
                :style="imageStyle"
              />
              <h5
                :class="
                  typeSize === 'mobile'
                    ? 'card-title mt-3 text-sm'
                    : 'card-title mt-3'
                "
              >
                Designed for Retail
              </h5>
              <p
                class="card-text"
                :style="
                  typeSize === 'mobile' ? 'font-size: 12px' : 'font-size: 15px'
                "
              >
                Stellar ERP ecosystem is built to address all retail-specific
                challenges.
              </p>
            </div>
          </div>
        </div>
        <div class="col-6 mt-2">
          <div class="card" style="border-radius: 10px" :style="cardStyle">
            <div class="card-body">
              <img
                src="@/assets/img/icons/icon-support.svg"
                alt="icon-support"
                class="img-fluid"
                :style="imageStyle"
              />
              <h5
                :class="
                  typeSize === 'mobile'
                    ? 'card-title mt-3 text-sm'
                    : 'card-title mt-3'
                "
              >
                24/7 Customer Support
              </h5>
              <p
                class="card-text"
                :style="
                  typeSize === 'mobile' ? 'font-size: 12px' : 'font-size: 15px'
                "
              >
                Our dedicated team of retail ERP experts is always available to
                assist you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import vueMkHeader from "@/assets/img/background-home.png";
import { ref, watch, computed } from "vue";
import { useWindowsWidth } from "@/assets/js/useWindowsWidth";

const { type } = useWindowsWidth();
let typeSize = ref(type);

watch(
  () => type.value,
  (newValue) => {
    typeSize.value = newValue;
  }
);

const cardStyle = computed(() => {
  switch (typeSize.value) {
    case "tablet":
      return { width: "auto", height: "220px" };
    case "medium":
      return { width: "auto", height: "200px" };
    case "mobile":
      return { width: "auto", height: "320px" };
    default:
      // desktop
      return { width: "auto", height: "170px" };
  }
});

const imageStyle = computed(() => {
  switch (typeSize.value) {
    case "mobile":
      return { width: "24px", height: "24px" };
    case "medium":
      return { width: "32px", height: "32px" };
    case "tablet":
      return { width: "32px", height: "32px" };
    default:
      // desktop
      return { width: "auto", height: "auto" };
  }
});
</script>
