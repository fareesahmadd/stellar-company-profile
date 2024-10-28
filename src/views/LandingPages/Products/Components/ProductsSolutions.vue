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
            :style="`background-image: url(${vueMkHeader});background-size: cover; background-repeat: no-repeat;`"
            style="
              border-radius: 10px;
              overflow: hidden;
              width: 100%;
              height: 100%;
            "
          >
            <div class="card-title px-3 py-3">
              <img
                :src="cards[0].icon"
                alt="icon-paint"
                class="img-fluid"
                :style="imageStyle"
              />
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
                  <div>
                    <img
                      :src="card.icon"
                      alt="icon-paint"
                      :style="imageStyle"
                    />
                  </div>
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
                  src="@/assets/img/products/bom-1.png"
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
                  src="@/assets/img/products/bom-2.png"
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
import vueMkHeader from "@/assets/img/products/item-5-header.png";

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

const cards = ref([
  {
    icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUgMzVDMy42NzM5MiAzNSAyLjQwMjE1IDM0LjQ3MzIgMS40NjQ0NyAzMy41MzU1QzAuNTI2Nzg0IDMyLjU5NzkgMCAzMS4zMjYxIDAgMzBWMTBDMCA4LjY3MzkyIDAuNTI2Nzg0IDcuNDAyMTUgMS40NjQ0NyA2LjQ2NDQ3QzIuNDAyMTUgNS41MjY3OCAzLjY3MzkyIDUgNSA1SDM1QzM2LjMyNjEgNSAzNy41OTc5IDUuNTI2NzggMzguNTM1NSA2LjQ2NDQ3QzM5LjQ3MzIgNy40MDIxNSA0MCA4LjY3MzkyIDQwIDEwVjMwQzQwIDMxLjMyNjEgMzkuNDczMiAzMi41OTc5IDM4LjUzNTUgMzMuNTM1NUMzNy41OTc5IDM0LjQ3MzIgMzYuMzI2MSAzNSAzNSAzNUg1Wk0zMi41IDE3LjVDMzEuODM3IDE3LjUgMzEuMjAxMSAxNy43NjM0IDMwLjczMjIgMTguMjMyMkMzMC4yNjM0IDE4LjcwMTEgMzAgMTkuMzM3IDMwIDIwQzMwIDIwLjY2MyAzMC4yNjM0IDIxLjI5ODkgMzAuNzMyMiAyMS43Njc4QzMxLjIwMTEgMjIuMjM2NiAzMS44MzcgMjIuNSAzMi41IDIyLjVDMzMuMTYzIDIyLjUgMzMuNzk4OSAyMi4yMzY2IDM0LjI2NzggMjEuNzY3OEMzNC43MzY2IDIxLjI5ODkgMzUgMjAuNjYzIDM1IDIwQzM1IDE5LjMzNyAzNC43MzY2IDE4LjcwMTEgMzQuMjY3OCAxOC4yMzIyQzMzLjc5ODkgMTcuNzYzNCAzMy4xNjMgMTcuNSAzMi41IDE3LjVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
    title: "Customizable User Experience",
    description:
      "From tailored dashboards to bespoke workflows, our solution enhances efficiency and suits your unique retail setup.",
  },
  {
    icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MSA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQyNTJfNDAzOSkiPgo8cGF0aCBkPSJNMC4zMzMwMDggMzIuNUMwLjMzMzAwOCAzMy40OTQ2IDAuNzI4MDk2IDM0LjQ0ODQgMS40MzEzNiAzNS4xNTE2QzIuMTM0NjIgMzUuODU0OSAzLjA4ODQ1IDM2LjI1IDQuMDgzMDEgMzYuMjVIMzYuNTgzQzM3LjU3NzYgMzYuMjUgMzguNTMxNCAzNS44NTQ5IDM5LjIzNDcgMzUuMTUxNkMzOS45Mzc5IDM0LjQ0ODQgNDAuMzMzIDMzLjQ5NDYgNDAuMzMzIDMyLjVWMTVDNDAuMzMzIDE0LjAwNTQgMzkuOTM3OSAxMy4wNTE2IDM5LjIzNDcgMTIuMzQ4M0MzOC41MzE0IDExLjY0NTEgMzcuNTc3NiAxMS4yNSAzNi41ODMgMTEuMjVINC4wODMwMUMzLjA4ODQ1IDExLjI1IDIuMTM0NjIgMTEuNjQ1MSAxLjQzMTM2IDEyLjM0ODNDMC43MjgwOTYgMTMuMDUxNiAwLjMzMzAwOCAxNC4wMDU0IDAuMzMzMDA4IDE1TDAuMzMzMDA4IDMyLjVaTTUuMzMzMDEgNy41QzUuMzMzMDEgNy44MzE1MiA1LjQ2NDcgOC4xNDk0NiA1LjY5OTEyIDguMzgzODhDNS45MzM1NSA4LjYxODMgNi4yNTE0OSA4Ljc1IDYuNTgzMDEgOC43NUgzNC4wODNDMzQuNDE0NSA4Ljc1IDM0LjczMjUgOC42MTgzIDM0Ljk2NjkgOC4zODM4OEMzNS4yMDEzIDguMTQ5NDYgMzUuMzMzIDcuODMxNTIgMzUuMzMzIDcuNUMzNS4zMzMgNy4xNjg0OCAzNS4yMDEzIDYuODUwNTQgMzQuOTY2OSA2LjYxNjEyQzM0LjczMjUgNi4zODE3IDM0LjQxNDUgNi4yNSAzNC4wODMgNi4yNUg2LjU4MzAxQzYuMjUxNDkgNi4yNSA1LjkzMzU1IDYuMzgxNyA1LjY5OTEyIDYuNjE2MTJDNS40NjQ3IDYuODUwNTQgNS4zMzMwMSA3LjE2ODQ4IDUuMzMzMDEgNy41Wk0xMC4zMzMgMi41QzEwLjMzMyAyLjgzMTUyIDEwLjQ2NDcgMy4xNDk0NiAxMC42OTkxIDMuMzgzODhDMTAuOTMzNSAzLjYxODMgMTEuMjUxNSAzLjc1IDExLjU4MyAzLjc1SDI5LjA4M0MyOS40MTQ1IDMuNzUgMjkuNzMyNSAzLjYxODMgMjkuOTY2OSAzLjM4Mzg4QzMwLjIwMTMgMy4xNDk0NiAzMC4zMzMgMi44MzE1MiAzMC4zMzMgMi41QzMwLjMzMyAyLjE2ODQ4IDMwLjIwMTMgMS44NTA1NCAyOS45NjY5IDEuNjE2MTJDMjkuNzMyNSAxLjM4MTcgMjkuNDE0NSAxLjI1IDI5LjA4MyAxLjI1SDExLjU4M0MxMS4yNTE1IDEuMjUgMTAuOTMzNSAxLjM4MTcgMTAuNjk5MSAxLjYxNjEyQzEwLjQ2NDcgMS44NTA1NCAxMC4zMzMgMi4xNjg0OCAxMC4zMzMgMi41WiIgZmlsbD0iIzI5MzU5MSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzQyNTJfNDAzOSI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMzMzMDA4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
    title: "Optimized for E-Commerce",
    description:
      "Seamlessly integrate and manage your store with optimized POS.",
  },
  {
    icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MSA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQyNTJfNDA1NikiPgo8cGF0aCBkPSJNMC42NjY5OTIgNUMwLjY2Njk5MiAzLjY3MzkyIDEuMTkzNzggMi40MDIxNSAyLjEzMTQ2IDEuNDY0NDdDMy4wNjkxNCAwLjUyNjc4NCA0LjM0MDkxIDAgNS42NjY5OSAwTDM1LjY2NyAwQzM2Ljk5MzEgMCAzOC4yNjQ4IDAuNTI2Nzg0IDM5LjIwMjUgMS40NjQ0N0M0MC4xNDAyIDIuNDAyMTUgNDAuNjY3IDMuNjczOTIgNDAuNjY3IDVWMzVDNDAuNjY3IDM2LjMyNjEgNDAuMTQwMiAzNy41OTc5IDM5LjIwMjUgMzguNTM1NUMzOC4yNjQ4IDM5LjQ3MzIgMzYuOTkzMSA0MCAzNS42NjcgNDBINS42NjY5OUM0LjM0MDkxIDQwIDMuMDY5MTQgMzkuNDczMiAyLjEzMTQ2IDM4LjUzNTVDMS4xOTM3OCAzNy41OTc5IDAuNjY2OTkyIDM2LjMyNjEgMC42NjY5OTIgMzVWNVpNMjIuOTkyIDE2LjQ3TDE3LjI2NyAxNy4xODc1TDE3LjA2MiAxOC4xMzc1TDE4LjE4NyAxOC4zNDVDMTguOTIyIDE4LjUyIDE5LjA2NyAxOC43ODUgMTguOTA3IDE5LjUxNzVMMTcuMDYyIDI4LjE4NzVDMTYuNTc3IDMwLjQzIDE3LjMyNDUgMzEuNDg1IDE5LjA4MiAzMS40ODVDMjAuNDQ0NSAzMS40ODUgMjIuMDI3IDMwLjg1NSAyMi43NDQ1IDI5Ljk5TDIyLjk2NDUgMjguOTVDMjIuNDY0NSAyOS4zOSAyMS43MzQ1IDI5LjU2NSAyMS4yNDk1IDI5LjU2NUMyMC41NjIgMjkuNTY1IDIwLjMxMiAyOS4wODI1IDIwLjQ4OTUgMjguMjMyNUwyMi45OTIgMTYuNDdaTTIwLjY2NyAxMy43NUMyMS4zMyAxMy43NSAyMS45NjU5IDEzLjQ4NjYgMjIuNDM0OCAxMy4wMTc4QzIyLjkwMzYgMTIuNTQ4OSAyMy4xNjcgMTEuOTEzIDIzLjE2NyAxMS4yNUMyMy4xNjcgMTAuNTg3IDIyLjkwMzYgOS45NTEwNyAyMi40MzQ4IDkuNDgyMjNDMjEuOTY1OSA5LjAxMzM5IDIxLjMzIDguNzUgMjAuNjY3IDguNzVDMjAuMDA0IDguNzUgMTkuMzY4MSA5LjAxMzM5IDE4Ljg5OTIgOS40ODIyM0MxOC40MzA0IDkuOTUxMDcgMTguMTY3IDEwLjU4NyAxOC4xNjcgMTEuMjVDMTguMTY3IDExLjkxMyAxOC40MzA0IDEyLjU0ODkgMTguODk5MiAxMy4wMTc4QzE5LjM2ODEgMTMuNDg2NiAyMC4wMDQgMTMuNzUgMjAuNjY3IDEzLjc1WiIgZmlsbD0iIzI5MzU5MSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzQyNTJfNDA1NiI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNjY2OTkyKSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
    title: "Covered with long term support",
    description:
      "Ensuring your POS system stays up-to-date and running smoothly.",
  },
  {
    icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MSA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQyNTJfNDA2MykiPgo8cGF0aCBkPSJNMzEuOTQwNSAzNy41QzM1LjI4MDUgMzcuNSAzNy44MzMgMzQuNjEyNSAzNy44MzMgMzEuMjVWMTIuNUgyLjgzMzAxVjMxLjI1QzIuODMzMDEgMzQuNjEyNSA1LjM4NTUxIDM3LjUgOC43MjU1MSAzNy41SDMxLjk0MDVaTTE0LjA4MyAxNy41SDI2LjU4M0MyNi45MTQ1IDE3LjUgMjcuMjMyNSAxNy42MzE3IDI3LjQ2NjkgMTcuODY2MUMyNy43MDEzIDE4LjEwMDUgMjcuODMzIDE4LjQxODUgMjcuODMzIDE4Ljc1QzI3LjgzMyAxOS4wODE1IDI3LjcwMTMgMTkuMzk5NSAyNy40NjY5IDE5LjYzMzlDMjcuMjMyNSAxOS44NjgzIDI2LjkxNDUgMjAgMjYuNTgzIDIwSDE0LjA4M0MxMy43NTE1IDIwIDEzLjQzMzUgMTkuODY4MyAxMy4xOTkxIDE5LjYzMzlDMTIuOTY0NyAxOS4zOTk1IDEyLjgzMyAxOS4wODE1IDEyLjgzMyAxOC43NUMxMi44MzMgMTguNDE4NSAxMi45NjQ3IDE4LjEwMDUgMTMuMTk5MSAxNy44NjYxQzEzLjQzMzUgMTcuNjMxNyAxMy43NTE1IDE3LjUgMTQuMDgzIDE3LjVaTTIuMzMzMDEgMi41QzEuODAyNTcgMi41IDEuMjkzODcgMi43MTA3MSAwLjkxODc5NCAzLjA4NTc5QzAuNTQzNzIxIDMuNDYwODYgMC4zMzMwMDggMy45Njk1NyAwLjMzMzAwOCA0LjVMMC4zMzMwMDggNy41QzAuMzMzMDA4IDguMDMwNDMgMC41NDM3MjEgOC41MzkxNCAwLjkxODc5NCA4LjkxNDIxQzEuMjkzODcgOS4yODkyOSAxLjgwMjU3IDkuNSAyLjMzMzAxIDkuNUgzOC4zMzNDMzguODYzNCA5LjUgMzkuMzcyMSA5LjI4OTI5IDM5Ljc0NzIgOC45MTQyMUM0MC4xMjIzIDguNTM5MTQgNDAuMzMzIDguMDMwNDMgNDAuMzMzIDcuNVY0LjVDNDAuMzMzIDMuOTY5NTcgNDAuMTIyMyAzLjQ2MDg2IDM5Ljc0NzIgMy4wODU3OUMzOS4zNzIxIDIuNzEwNzEgMzguODYzNCAyLjUgMzguMzMzIDIuNUgyLjMzMzAxWiIgZmlsbD0iIzI5MzU5MSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzQyNTJfNDA2MyI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMzMzMDA4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
    title: "Real-time inventory management",
    description:
      "Simplify inventory control with real-time updates and intuitive management tools.",
  },
  {
    icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MSA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQyNTJfNDA1OCkiPgo8cGF0aCBkPSJNMTkuNjU3IDE4LjI2MDFDMTkuOTYzNSAxOC40MzU2IDIwLjIxODIgMTguNjg4OSAyMC4zOTUzIDE4Ljk5NDVDMjAuNTcyNSAxOS4zIDIwLjY2NTggMTkuNjQ2OSAyMC42NjU4IDIwLjAwMDFDMjAuNjY1OCAyMC4zNTMzIDIwLjU3MjUgMjAuNzAwMiAyMC4zOTUzIDIxLjAwNThDMjAuMjE4MiAyMS4zMTEzIDE5Ljk2MzUgMjEuNTY0NiAxOS42NTcgMjEuNzQwMUwzLjc0OTQ5IDMwLjk3MDFDMi40NDk0OSAzMS43MjUxIDAuNjY2OTkyIDMwLjg2MjYgMC42NjY5OTIgMjkuMjMwMVYxMC43NzAxQzAuNjY2OTkyIDkuMTM3NjIgMi40NDk0OSA4LjI3NTEyIDMuNzQ5NDkgOS4wMzAxMkwxOS42NTcgMTguMjYwMVoiIGZpbGw9IiMyOTM1OTEiLz4KPHBhdGggZD0iTTM5LjY1NyAxOC4yNjAxQzM5Ljk2MzUgMTguNDM1NiA0MC4yMTgyIDE4LjY4ODkgNDAuMzk1NCAxOC45OTQ1QzQwLjU3MjUgMTkuMyA0MC42NjU4IDE5LjY0NjkgNDAuNjY1OCAyMC4wMDAxQzQwLjY2NTggMjAuMzUzMyA0MC41NzI1IDIwLjcwMDIgNDAuMzk1NCAyMS4wMDU4QzQwLjIxODIgMjEuMzExMyAzOS45NjM1IDIxLjU2NDYgMzkuNjU3IDIxLjc0MDFMMjMuNzQ5NSAzMC45NzAxQzIyLjQ0OTUgMzEuNzI1MSAyMC42NjcgMzAuODYyNiAyMC42NjcgMjkuMjMwMVYxMC43NzAxQzIwLjY2NyA5LjEzNzYyIDIyLjQ0OTUgOC4yNzUxMiAyMy43NDk1IDkuMDMwMTJMMzkuNjU3IDE4LjI2MDFaIiBmaWxsPSIjMjkzNTkxIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNDI1Ml80MDU4Ij4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC42NjY5OTIpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==",
    title: "Faster operations, gain more revenue",
    description:
      "Accelerate your business growth with a POS system that boosts efficiency.",
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
