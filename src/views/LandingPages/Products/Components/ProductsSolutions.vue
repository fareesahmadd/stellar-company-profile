<template>
  <div>
    <div v-if="currentRouteName === 'products-pos'" class="container-fluid">
      <div class="row py-5">
        <div class="text-center mb-5 px-9">
          <button class="btn btn-outline-info btn-sm mt-4" disabled>
            Solutions
          </button>
          <h2 class="font-weight-bold px-10">
            Empower your business with flexible POS software.
          </h2>
        </div>
        <div class="col-md-4 px-3">
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
        <div class="col-md-4 px-4">
          <div class="row">
            <div class="card" style="border-radius: 10px">
              <div class="card-body">
                <i class="fas fa-store fa-2x text-info"></i>
                <h5 class="card-title mt-3">Premium Meets Practical</h5>
                <p class="card-text" style="font-size: 15px">
                  Elevate operations with our premium retail solutions without
                  breaking the bank.
                </p>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="card" style="border-radius: 10px">
              <div class="card-body">
                <i class="fas fa-palette fa-2x text-info"></i>
                <h5 class="card-title mt-3">Designed for Retail</h5>
                <p class="card-text" style="font-size: 15px">
                  Stellar ERP ecosystem is built to address all retail-specific
                  challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 px-4">
          <div class="row">
            <div class="card" style="border-radius: 10px">
              <div class="card-body">
                <i class="fas fa-palette fa-2x text-info"></i>
                <h5 class="card-title mt-3">Worldwide Scalability</h5>
                <p class="card-text" style="font-size: 15px">
                  Expand with a system designed for multiple locations,
                  currencies, and regulations.
                </p>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="card" style="border-radius: 10px">
              <div class="card-body">
                <i class="fas fa-palette fa-2x text-info"></i>
                <h5 class="card-title mt-3">24/7 Customer Support</h5>
                <p class="card-text" style="font-size: 15px">
                  Our dedicated team of retail ERP experts is always available
                  to assist you.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center px-11 mt-7 mb-4">
          <img
            class="opacity-7"
            src="@/assets/img/icon-caption-info.svg"
            style="height: 35px; width: 35px"
            alt="icon-caption"
          />
        </div>
        <div class="text-center mb-5 px-11">
          <p class="px-4">
            Implementing Stellar Gelora's ERP software has been a game-changer
            for our business. From day one, the team at Stellar Gelora worked
            closely with us to customize the system to meet our specific needs.
            The point of sales integration has streamlined our sales processes,
            allowing us to manage our inventory more effectively and serve our
            customers better.
          </p>
          <p>Naila Agung Sarasati</p>
          <p class="mt-n3" style="font-weight: bold">
            CEO & Co-Founder of Wanderloom Labs
          </p>
        </div>
      </div>
    </div>

    <div v-if="currentRouteName === 'products-bom'" class="container-fluid">
      <div class="row py-5">
        <div class="text-center mb-1 px-9">
          <button class="btn btn-outline-info btn-sm mt-4" disabled>
            Solutions
          </button>
          <h2 class="font-weight-bold px-10">We’re better. Here’s why...</h2>
        </div>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-none">
              <div
                class="card-body d-flex flex-column align-items-center justify-content-start"
                style="text-align: center"
              >
                <img
                  src="@/assets/img/product-bom-solution-image-3.svg"
                  alt="Point of Sale"
                  class="mb-4 img-fluid"
                />
                <h5
                  class="card-title font-weight-bold"
                  style="font-size: large"
                >
                  Effortless Workflow Automation
                </h5>
                <p class="card-text text-muted" style="font-size: smaller">
                  Stellar automates repetitive tasks, streamlining operations
                  and freeing up your team to focus on strategic initiatives.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-none">
              <div
                class="card-body d-flex flex-column align-items-center justify-content-start"
                style="text-align: center"
              >
                <img
                  src="@/assets/img/product-bom-solution-image-3.svg"
                  alt="Point of Sale"
                  class="mb-4 img-fluid"
                />
                <h5
                  class="card-title font-weight-bold"
                  style="font-size: large"
                >
                  Unified Data Management
                </h5>
                <p class="card-text text-muted" style="font-size: smaller">
                  Centralized approach reduces errors, enhances collaboration,
                  and provides real-time insights across your organization.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-none">
              <div
                class="card-body d-flex flex-column align-items-center justify-content-center"
                style="text-align: center"
              >
                <img
                  src="@/assets/img/product-bom-solution-image-3.svg"
                  alt="Point of Sale"
                  class="mb-4 img-fluid"
                />
                <h5
                  class="card-title font-weight-bold"
                  style="font-size: large"
                >
                  Comprehensive HR Integration
                </h5>
                <p class="card-text text-muted" style="font-size: smaller">
                  From recruitment to payroll, our integrated solution
                  simplifies every management aspect, Improve accuracy, reduce
                  administrative.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="row px-7 mt-7">
          <div class="col-md-6 mt-3">
            <h2 class="text-dark mb-0" style="margin-right: 80px">
              Achieve success through data-driven decisions
            </h2>
            <p class="lead mt-4" style="margin-right: 80px">
              Elevate your brand to new heights ensuring your message reaches
              its full potential and captivates your audience.
            </p>
          </div>
          <div class="col-md-6">
            <div
              class="card mt-4"
              :style="`background-image: url(${overallPerformance});background-size: cover; background-position: top center;`"
              style="
                border-radius: 10px;
                overflow: hidden;
                width: 100%;
                height: 380px;
              "
            ></div>
          </div>
        </div> -->
        <!-- <div class="row">
          <div class="text-center px-11 mt-7 mb-4">
            <img
              class="opacity-7"
              src="@/assets/img/icon-caption-info.svg"
              style="height: 35px; width: 35px"
              alt="icon-caption"
            />
          </div>
          <div class="text-center mb-5 px-11">
            <p class="px-4">
              Implementing Stellar Gelora's ERP software has been a game-changer
              for our business. From day one, the team at Stellar Gelora worked
              closely with us to customize the system to meet our specific
              needs. The point of sales integration has streamlined our sales
              processes, allowing us to manage our inventory more effectively
              and serve our customers better.
            </p>
            <p>Naila Agung Sarasati</p>
            <p class="mt-n3" style="font-weight: bold">
              CEO & Co-Founder of Wanderloom Labs
            </p>
          </div>
        </div> -->
      </div>
    </div>

    <div class="container-fluid" v-if="currentRouteName === 'products-fm'">
      <div class="row">
        <div
          :class="
            typeSize === 'mobile'
              ? 'text-center mb-5 '
              : 'text-center mb-5 px-11'
          "
        >
          <button class="btn btn-outline-info btn-sm mt-4" disabled>
            Solutions
          </button>
          <h2 v-if="typeSize !== 'mobile'" class="font-weight-bold">
            Industry-Specific ERP Solutions
          </h2>
          <h3 v-if="typeSize === 'mobile'" class="font-weight-bold">
            Industry-Specific ERP Solutions
          </h3>
          <p>
            We understand that every industry has unique challenges and
            requirements. Our ERP solutions are designed to address the specific
            needs of various sectors.
          </p>
        </div>
        <div class="row mt-n4" v-if="typeSize !== 'mobile'">
          <div class="col-lg-7 mx-auto">
            <div class="nav-wrapper position-relative end-0">
              <ul class="nav nav-pills nav-fill p-1" role="tablist">
                <li
                  class="nav-item"
                  v-for="industry in industries"
                  :key="industry.id"
                >
                  <a
                    class="nav-link mb-0 px-4 py-1"
                    :class="{ active: activeTab === industry.id }"
                    @click="setActiveTab(industry.id)"
                    role="tab"
                  >
                    {{ industry.name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <IndustryView :id="activeTab" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import vueMkHeader from "@/assets/img/background-home.png";

import IndustryView from "../../Solutions/Components/IndustryView.vue";

import { onMounted, computed, ref, watch } from "vue";
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

import setNavPills from "@/assets/js/nav-pills.js";

onMounted(() => {
  setNavPills();
});

const activeTab = ref("revenue"); // Default active tab
const industries = [
  { id: "revenue", name: "Revenue" },
  { id: "expenses", name: "Expenses" },
  { id: "tax", name: "Tax" },
  { id: "forecasting", name: "Forecasting" },
];

const setActiveTab = (tabId) => {
  activeTab.value = tabId;
};
</script>

<style scoped>
.gradient-background {
  background: linear-gradient(to bottom, #ffffff, #e4e4f0);
}
</style>
