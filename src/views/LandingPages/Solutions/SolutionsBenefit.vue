<script setup>
import { ref, watch, computed } from "vue";
import { useWindowsWidth } from "@/assets/js/useWindowsWidth";

const { type } = useWindowsWidth();
let typeSize = ref(type);

const cardStyle = computed(() => {
  switch (typeSize.value) {
    case "tablet":
      return { width: "auto", height: "220px" };
    case "medium":
      return { width: "auto", height: "200px" };
    case "mobile":
      return { width: "auto", height: "170px", marginTop: "20px" };
    default:
      // desktop
      return { width: "auto", height: "165px" };
  }
});

watch(
  () => type.value,
  (newValue) => {
    typeSize.value = newValue;
  }
);
</script>

<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <div v-if="typeSize !== 'mobile'" class="col-md-6">
          <button
            class="btn btn-outline-info btn-sm mt-4"
            style="margin-right: 150px"
            disabled
          >
            Key Benefits
          </button>
          <h2 class="font-weight-bold" style="margin-right: 150px">
            Every feature You need, all in one ecosystem.
          </h2>
          <p class="mt-4" style="margin-right: 150px">
            Stellar products engineered to offer holistic solutions for every
            aspect of your business operations.
          </p>
          <p class="font-weight-bold" style="margin-right: 150px">
            <i
              class="fa fa-check-circle text-info"
              style="margin-right: 10px"
              aria-hidden="true"
            ></i
            >Affordable, High-Quality ERP Solutions
          </p>
          <p class="font-weight-bold" style="margin-right: 150px">
            <i
              class="fa fa-check-circle text-info"
              style="margin-right: 10px"
              aria-hidden="true"
            ></i
            >Specifically made for your business needs
          </p>
          <p class="font-weight-bold" style="margin-right: 150px">
            <i
              class="fa fa-check-circle text-info"
              style="margin-right: 10px"
              aria-hidden="true"
            ></i
            >All services, one integrated system
          </p>
        </div>
        <div v-if="typeSize !== 'mobile'" class="col-md-6">
          <div class="container">
            <div class="row mt-4">
              <div class="col-md-6 mb-4">
                <div class="card" :style="cardStyle">
                  <div class="card-body">
                    <h3 class="card-title mt-3">100%</h3>
                    <p class="card-text">
                      ERP’s customization based on their business needs
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 mb-4">
                <div class="card" :style="cardStyle">
                  <div class="card-body">
                    <h3 class="card-title mt-3">40%</h3>
                    <p class="card-text">Faster decision-making process</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 mb-4">
                <div class="card" :style="cardStyle">
                  <div class="card-body">
                    <h3 class="card-title mt-3">30%</h3>
                    <p class="card-text">
                      Less cost compared to similar solutions in the market.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 mb-4">
                <div class="card" :style="cardStyle">
                  <div class="card-body">
                    <h3 class="card-title mt-3">4.8/5</h3>
                    <p class="card-text">
                      By users, our commitment to premium quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="typeSize === 'mobile'">
          <button class="btn btn-outline-info btn-sm mt-4" disabled>
            Key Benefits
          </button>
          <h3 class="font-weight-bold">
            Every feature You need, all in one ecosystem.
          </h3>
          <p class="mt-4 text-sm">
            Stellar products engineered to offer holistic solutions for every
            aspect of your business operations.
          </p>
          <p class="font-weight-bold text-sm">
            <i
              class="fa fa-check-circle text-info"
              style="margin-right: 10px"
              aria-hidden="true"
            ></i
            >Affordable, High-Quality ERP Solutions
          </p>
          <p class="font-weight-bold text-sm">
            <i
              class="fa fa-check-circle text-info"
              style="margin-right: 10px"
              aria-hidden="true"
            ></i
            >Specifically made for your business needs
          </p>
          <p class="font-weight-bold text-sm">
            <i
              class="fa fa-check-circle text-info"
              style="margin-right: 10px"
              aria-hidden="true"
            ></i
            >All services, one integrated system
          </p>
          <!-- </div> -->
          <div class="row">
            <div class="col-6">
              <div class="card" :style="cardStyle">
                <div class="card-body text-center">
                  <h5 class="card-title mt-3">100%</h5>
                  <p class="card-text text-xs">
                    ERP’s customization based on their business needs
                  </p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="card" :style="cardStyle">
                <div class="card-body text-center">
                  <h5 class="card-title mt-3">40%</h5>
                  <p class="card-text text-xs">
                    Faster decision-making process
                  </p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="card" :style="cardStyle">
                <div class="card-body text-center">
                  <h5 class="card-title mt-3">30%</h5>
                  <p class="card-text text-xs">
                    Less cost compared to similar solutions in the market.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="card" :style="cardStyle">
                <div class="card-body text-center">
                  <h5 class="card-title mt-3">4.8/5</h5>
                  <p class="card-text text-xs">
                    By users, our commitment to premium quality.
                  </p>
                </div>
                <!-- </div>
              </div> -->
              </div>
            </div>
          </div>
        </div>
        <div
          :class="
            typeSize === 'mobile'
              ? 'text-center mt-7 mb-4'
              : 'text-center px-11 mt-7 mb-4'
          "
        >
          <img
            class="opacity-7"
            src="@/assets/img/icon-caption-info.svg"
            style="height: 35px; width: 35px"
            alt="icon-caption"
          />
        </div>
        <div
          :class="
            typeSize === 'mobile'
              ? 'text-center mb-5'
              : 'text-center mb-5 px-11'
          "
        >
          <p :class="typeSize === 'mobile' ? 'text-sm quote' : 'px-7 quote'">
            Implementing Stellar Gelora's ERP software has been a game-changer
            for our business. From day one, the team at Stellar Gelora worked
            closely with us to customize the system to meet our specific needs.
            The point of sales integration has streamlined our sales processes,
            allowing us to manage our inventory more effectively and serve our
            customers better.
          </p>
          <p
            :class="
              typeSize === 'mobile' ? 'text-sm quote font-weight-bold' : ''
            "
          >
            Naila Agung Sarasati
          </p>
          <p
            :class="
              typeSize === 'mobile'
                ? 'text-xs quote mt-n3'
                : 'px-7 quote mt-n3 font-weight-bold'
            "
          >
            CEO & Co-Founder of Wanderloom Labs
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
