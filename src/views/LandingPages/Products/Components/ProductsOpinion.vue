<template>
  <div :class="typeSize === 'mobile' ? '' : 'container-fluid'">
    <div v-if="currentRouteName === 'products-pos'" class="row">
      <div
        :class="
          typeSize === 'desktop' || typeSize === 'tablet'
            ? 'col-md-5 mt-6'
            : 'col-12 mt-6'
        "
      >
        <h2 class="font-weight-bold">
          Top used POS that reach thousands of users.
        </h2>
      </div>
      <div
        :class="
          typeSize === 'desktop' || typeSize === 'tablet' ? 'col-md-1' : ''
        "
      ></div>
      <div
        v-if="typeSize === 'desktop' || typeSize === 'tablet'"
        class="col-md-6"
      >
        <div class="row">
          <div class="col-lg-4">
            <!-- <p class="lead mt-6 text-end"></p> -->
          </div>
          <div class="col-lg-4 mt-6">
            <h2>20%</h2>
            <p class="lead text-start">Faster Transaction Processing</p>
          </div>
          <div class="col-lg-4 mt-6">
            <h2>40%</h2>
            <p class="lead text-start">Reduction in Manual Stock Counts</p>
          </div>
        </div>
      </div>

      <div
        v-if="typeSize === 'mobile' || typeSize === 'medium'"
        class="row mt-4"
      >
        <div class="col-6">
          <h2>20%</h2>
          <p class="lead text-start">Faster Transaction Processing</p>
        </div>
        <div class="col-6">
          <h2>40%</h2>
          <p class="lead text-start">Reduction in Manual Stock Counts</p>
        </div>
      </div>
    </div>
    <div v-if="currentRouteName === 'products-bom'" class="row">
      <div
        class="col-md-12 mt-6 d-flex flex-column align-items-center justify-content-center"
      >
        <div
          class="row"
          :class="typeSize === 'mobile' ? '' : 'justify-content-between'"
        >
          <div
            v-if="typeSize === 'medium'"
            class="d-flex col-lg-12 justify-content-between"
          >
            <div
              v-for="(item, index) in items"
              :key="index"
              class="text-center"
            >
              <h2 class="mb-0">{{ item.percentage }}</h2>
              <p class="lead mb-0">{{ item.description }}</p>
            </div>
          </div>
          <div
            v-else
            v-for="(item, index) in items"
            :key="index"
            class="col-lg-4 col-md-12 mb-3 d-flex align-items-center"
          >
            <h2 class="mb-0">{{ item.percentage }}</h2>
            <p class="lead mb-0 ms-2">{{ item.description }}</p>
          </div>
        </div>
      </div>
      <div class="mt-6"></div>
    </div>
    <div v-if="currentRouteName === 'products-fm'" class="row mx-auto mt-7">
      <h2
        class="font-weight-bold"
        :style="
          typeSize === 'mobile'
            ? 'padding-right: 10px'
            : typeSize === 'medium' || typeSize === 'tablet'
            ? 'padding-right: 250px'
            : 'padding-right: 750px'
        "
      >
        Every feature You need, all in a single system
      </h2>
      <p class="mt-4" style="margin-right: 150px">
        Find quick answers to commonly asked questions about Stellar. Have a
        question not answered?
      </p>
    </div>
    <div v-if="currentRouteName === 'products-fm'" class="row mx-auto">
      <div :class="typeSize === 'desktop' ? 'col-md-6' : 'col-12 '">
        <div
          class="card mt-4"
          :style="`background-image: url(${financialStatements});background-size: cover; background-position: top center;`"
          style="
            border-radius: 10px;
            overflow: hidden;
            width: 100%;
            height: 408px;
          "
        ></div>
      </div>
      <div
        :class="
          typeSize === 'desktop'
            ? 'col-md-6'
            : 'col-12 d-flex flex-column align-items-center justify-content-center text-center mt-3'
        "
        :style="typeSize === 'desktop' ? 'padding-left: 100px' : ''"
      >
        <img
          class="opacity-7 mt-3 mb-4"
          src="@/assets/img/icon-caption-info.svg"
          style="height: 35px; width: 35px"
          alt="icon-caption"
        />
        <p class="lead mt-4">
          Implementing Stellar Gelora's ERP software has been a game-changer for
          our business. From day one, the team at Stellar Gelora worked closely
          with us to customize the system to meet our specific needs. The point
          of sales integration has streamlined our sales processes, allowing us
          to manage our inventory more effectively and serve our customers
          better.
        </p>
        <p class="mt-5" style="font-weight: bold">Naila Agung Sarasati</p>
        <p class="mt-n2 mb-5">CEO & Co-Founder of Wanderloom Labs</p>
        <hr :class="`horizontal dark`" />
        <div v-if="typeSize === 'desktop'" class="row mt-5">
          <div class="col-lg-6">
            <h2 class="text-start">25%</h2>
            <p class="text-start">Increase in Revenue Accuracy</p>
          </div>
          <div class="col-lg-6">
            <h2 class="text-start">100%</h2>
            <p class="text-start">Compliance Rate</p>
          </div>
        </div>
      </div>
      <div v-if="typeSize !== 'desktop'" class="mt-n5 mb-5">
        <hr :class="`horizontal dark`" />
        <div
          :class="typeSize === 'medium' || typeSize === 'mobile' ? '' : 'row'"
        >
          <div
            :class="
              typeSize === 'medium' || typeSize === 'mobile' ? '' : 'col-3'
            "
          ></div>
          <div
            :class="
              typeSize === 'medium' || typeSize === 'mobile' ? '' : 'col-7'
            "
          >
            <div class="row">
              <div class="col-6">
                <h2 class="text-start">25%</h2>
                <p
                  :class="
                    typeSize === 'mobile' ? 'text-start text-sm' : 'text-start'
                  "
                >
                  Increase in Revenue Accuracy
                </p>
              </div>
              <div class="col-6">
                <h2 class="text-start">100%</h2>
                <p
                  :class="
                    typeSize === 'mobile' ? 'text-start text-sm' : 'text-start'
                  "
                >
                  Compliance Rate
                </p>
              </div>
            </div>
          </div>
          <div
            :class="
              typeSize === 'medium' || typeSize === 'mobile' ? '' : 'col-2'
            "
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import financialStatements from "@/assets/img/financial-statements-image.svg";
import { computed, ref, watch } from "vue";
import { useWindowsWidth } from "@/assets/js/useWindowsWidth";

const { type } = useWindowsWidth();
let typeSize = ref(type);

watch(
  () => type.value,
  (newValue) => {
    typeSize.value = newValue;
  }
);
import { useRoute } from "vue-router";
const currentRouteName = computed(() => {
  return useRoute().name;
});

// const cardImageStyle = computed(() => {
//   switch (typeSize.value) {
//     case "mobile":
//       return {
//         borderRadius: "10px",
//         overflow: "hidden",
//         width: "100%",
//         height: "204px",
//       };
//     case "medium":
//       return {
//         borderRadius: "10px",
//         overflow: "hidden",
//         width: "100%",
//         height: "408px",
//       };
//     case "tablet":
//       return {
//         borderRadius: "10px",
//         overflow: "hidden",
//         width: "100%",
//         height: "408px",
//       };
//     default:
//       // desktop
//       return {
//         borderRadius: "10px",
//         overflow: "hidden",
//         width: "100%",
//         height: "408px",
//       };
//   }
// });

const items = ref([
  {
    percentage: "100%",
    description: "Customized based on your needs",
  },
  {
    percentage: "40%",
    description: "Decrease in operational costs.",
  },
  {
    percentage: "20%",
    description: "Improved data accuracy for informed decisions.",
  },
]);
</script>
