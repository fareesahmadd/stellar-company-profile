<template>
  <div>
    <div v-if="currentRouteName === 'products-pos'" class="container-fluid">
      <div class="row py-5">
        <div class="text-center mb-5">
          <div class="row">
            <div
              :class="
                typeSize === 'mobile'
                  ? 'col-1'
                  : typeSize === 'desktop'
                  ? 'col-4'
                  : 'col-2'
              "
            ></div>
            <div
              :class="
                typeSize === 'mobile'
                  ? 'col-10'
                  : typeSize === 'desktop'
                  ? 'col-4'
                  : 'col-8'
              "
            >
              <button class="btn btn-outline-info btn-sm mt-4" disabled>
                Solutions
              </button>
              <h2
                v-if="typeSize === 'desktop' || typeSize === 'tablet'"
                class="font-weight-bold"
              >
                Empower your business with flexible POS software.
              </h2>
              <h3
                v-if="typeSize === 'medium' || typeSize === 'mobile'"
                class="font-weight-bold"
              >
                Empower your business with flexible POS software.
              </h3>
            </div>
          </div>
        </div>
        <div
          :class="
            typeSize === 'mobile' || typeSize === 'medium'
              ? 'col-12 mb-3'
              : 'col-md-4 mb-3'
          "
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
              <i :class="`${cards[0].icon} fa-2x text-white`"></i>
            </div>
            <div class="card-body d-flex flex-column justify-content-end">
              <h5
                :class="
                  typeSize === 'mobile' || typeSize === 'medium'
                    ? 'card-title text-white mt-8 text-md'
                    : 'card-title text-white mt-8'
                "
              >
                {{ cards[0].title }}
              </h5>
              <p
                :class="
                  typeSize === 'mobile' || typeSize === 'medium'
                    ? 'card-text text-white text-sm'
                    : 'card-text text-white'
                "
                style="font-size: 15px"
              >
                {{ cards[0].description }}
              </p>
            </div>
          </div>
        </div>
        <div
          :class="
            typeSize === 'mobile' || typeSize === 'medium'
              ? 'col-12'
              : 'col-md-8'
          "
        >
          <div class="row">
            <div
              class="col-6 mb-3"
              v-for="(card, index) in cards.slice(1, 5)"
              :key="index"
            >
              <div
                class="card d-flex flex-column"
                style="border-radius: 10px; margin-bottom: 20px; height: 100%"
              >
                <div class="card-body d-flex flex-column flex-grow-1">
                  <i :class="`${card.icon} fa-2x text-info`"></i>
                  <h5
                    :class="
                      typeSize === 'mobile' || typeSize === 'medium'
                        ? 'card-title mt-3 text-md'
                        : 'card-title mt-3'
                    "
                  >
                    {{ card.title }}
                  </h5>
                  <p
                    :class="
                      typeSize === 'mobile' || typeSize === 'medium'
                        ? 'card-text text-sm'
                        : 'card-text'
                    "
                    style="font-size: 15px"
                  >
                    {{ card.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          :class="
            typeSize === 'desktop'
              ? 'text-center px-11 mt-7 mb-4'
              : 'text-center  mt-7 mb-4'
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
            typeSize === 'desktop'
              ? 'text-center mb-5 px-11'
              : 'text-center mb-5'
          "
        >
          <p :class="typeSize === 'desktop' ? 'px-4' : ''">
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

    <div
      v-if="currentRouteName === 'products-bom'"
      :class="typeSize === 'mobile' ? '' : 'container-fluid'"
    >
      <div :class="typeSize === 'mobile' ? 'row ' : 'row py-5'">
        <div
          :class="
            typeSize === 'mobile' ? 'text-center mb-1' : 'text-center mb-1'
          "
        >
          <button class="btn btn-outline-info btn-sm mt-4" disabled>
            Solutions
          </button>
          <h2 v-if="typeSize !== 'mobile'" class="font-weight-bold">
            We’re better. Here’s why...
          </h2>
          <h3 v-if="typeSize === 'mobile'" class="'font-weight-bold '">
            We’re better. Here’s why...
          </h3>
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
            typeSize === 'mobile' || typeSize === 'medium'
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
          <div :class="typeSize === 'medium' ? 'col-12 ' : 'col-lg-12 mx-auto'">
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

const cards = ref([
  {
    icon: "fas fa-palette",
    title: "Personalized Customization",
    description:
      "Adapt Stellar ERP to your unique retail processes, ensuring a perfect fit for your business needs.",
  },
  {
    icon: "fas fa-store",
    title: "Premium Meets Practical",
    description:
      "Elevate operations with our premium retail solutions without breaking the bank.",
  },
  {
    icon: "fas fa-palette",
    title: "Designed for Retail",
    description:
      "Stellar ERP ecosystem is built to address all retail-specific challenges.",
  },
  {
    icon: "fas fa-globe",
    title: "Worldwide Scalability",
    description:
      "Expand with a system designed for multiple locations, currencies, and regulations.",
  },
  {
    icon: "fas fa-headset",
    title: "24/7 Customer Support",
    description:
      "Our dedicated team of retail ERP experts is always available to assist you.",
  },
]);
</script>

<style scoped>
.gradient-background {
  background: linear-gradient(to bottom, #ffffff, #e4e4f0);
}
.card {
  display: flex;
  flex-direction: column;
  height: 100%; /* Memastikan card mengisi ruang kolom */
}
.card-body {
  flex-grow: 1; /* Membuat body card tumbuh untuk mengisi ruang yang tersedia */
}
</style>
