<template>
  <div>
    <div v-if="currentRouteName === 'products-pos'" class="container-fluid">
      <div class="row">
        <div class="text-center mb-5">
          <button class="btn btn-outline-info btn-sm mt-4" disabled>
            Features
          </button>
          <div class="row">
            <div
              :class="
                typeSize === 'mobile'
                  ? 'col-1'
                  : typeSize === 'desktop'
                  ? 'col-4'
                  : 'col-3'
              "
            ></div>
            <div
              :class="
                typeSize === 'mobile'
                  ? 'col-10'
                  : typeSize === 'desktop'
                  ? 'col-4'
                  : 'col-6'
              "
            >
              <h2
                v-if="typeSize === 'desktop' || typeSize === 'tablet'"
                class="font-weight-bold"
              >
                Complete point of sales In one stop
              </h2>
              <h3
                v-if="typeSize === 'mobile' || typeSize === 'medium'"
                class="font-weight-bold"
              >
                Complete point of sales In one stop
              </h3>
            </div>
            <!-- <div class="col-3"></div> -->
          </div>
          <div class="row">
            <div
              :class="
                typeSize === 'mobile'
                  ? ''
                  : typeSize === 'desktop'
                  ? 'col-2'
                  : 'col-1'
              "
            ></div>
            <div
              :class="
                typeSize === 'mobile'
                  ? 'col-12'
                  : typeSize === 'desktop'
                  ? 'col-8'
                  : 'col-10'
              "
            >
              <p
                :class="
                  typeSize === 'mobile' || typeSize === 'medium' ? '' : ''
                "
              >
                Say goodbye to juggling multiple tools—our POS platform is your
                one-stop-shop for a smarter, more efficient retail experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="card h-100 shadow-none">
            <div
              class="card-body d-flex flex-column align-items-start justify-content-start"
            >
              <img
                src="@/assets/img/products/pos-1.png"
                alt="Point of Sale"
                class="mb-4 img-fluid"
              />
              <h5 class="card-title font-weight-bold">
                Unified Sales Interface
              </h5>
              <p class="card-text text-muted">
                Manage in-store and online sales from a single, intuitive
                interface that ensures a consistent customer experience
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 shadow-none">
            <div
              class="card-body d-flex flex-column align-items-start justify-content-start"
            >
              <img
                src="@/assets/img/products/pos-2.png"
                alt="Point of Sale"
                class="mb-4 img-fluid"
              />
              <h5 class="card-title font-weight-bold">
                Real-Time Inventory Sync
              </h5>
              <p class="card-text text-muted">
                Automatically update inventory levels with every sale, keeping
                your stock data accurate and up-to-date.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 shadow-none">
            <div
              class="card-body d-flex flex-column align-items-start justify-content-start"
            >
              <img
                src="@/assets/img/products/pos-3.png"
                alt="Finance App"
                class="mb-4 img-fluid"
              />
              <h5 class="card-title font-weight-bold">Customizable Receipts</h5>
              <p class="card-text text-muted">
                Personalize your receipts with branding, promotions, and
                messages to enhance customer engagement and retention.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card h-100 shadow-none">
            <div
              class="card-body d-flex flex-column align-items-start justify-content-start"
            >
              <img
                src="@/assets/img/products/pos-4.png"
                alt="Point of Sale"
                class="mb-4 img-fluid"
              />
              <h5 class="card-title font-weight-bold">Advanced Reporting</h5>
              <p class="card-text text-muted">
                Access detailed sales analytics and reports to track
                performance, identify trends, and make data-driven decisions.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100 shadow-none">
            <div
              class="card-body d-flex flex-column align-items-start justify-content-start"
            >
              <img
                src="@/assets/img/products/pos-5.png"
                alt="Point of Sale"
                class="mb-4 img-fluid"
              />
              <h5 class="card-title font-weight-bold">
                Integrated Payment Processing
              </h5>
              <p class="card-text text-muted">
                Support multiple payment methods, including credit cards, mobile
                wallets, and gift cards, all seamlessly integrated.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100 shadow-none">
            <div
              class="card-body d-flex flex-column align-items-start justify-content-start"
            >
              <img
                src="@/assets/img/products/pos-6.png"
                alt="Finance App"
                class="mb-4 img-fluid"
              />
              <h5 class="card-title font-weight-bold">
                Customer Loyalty Programs
              </h5>
              <p class="card-text text-muted">
                Build and manage loyalty programs directly, rewarding repeat
                customers and driving long-term business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- if route is product back office management -->
    <div
      v-if="currentRouteName === 'products-bom'"
      :class="typeSize === 'mobile' ? 'row' : 'row py-3 px-5'"
    >
      <div class="col-md-6 px-3" v-if="typeSize === 'desktop'">
        <button class="btn btn-outline-info btn-sm mt-4" disabled>
          Features
        </button>
        <h2 class="text-dark mb-0" style="margin-right: 50px">
          Get Your ops in gear with elite back-office solutions
        </h2>
        <p class="lead mt-4" style="margin-right: 50px">
          By centralizing and automating key processes, Stellar’s helps you
          reduce errors, save time, and empower your team to focus on strategic
          growth.
        </p>
      </div>

      <div class="col-md-6" v-if="typeSize === 'desktop'">
        <div class="row">
          <div class="col-md-6">
            <div
              v-for="(feature, index) in bomFeatures.slice(0, 2)"
              :key="index"
              class="mb-3"
            >
              <div class="card" style="border-radius: 10px; height: 261px">
                <div class="card-body">
                  <img
                    :src="feature.icon"
                    :alt="feature.title"
                    class="img-fluid"
                    :style="imageStyle"
                  />
                  <!-- <i :class="`fa ${feature.icon} fa-2x text-info`"></i> -->
                  <h5 class="card-title mt-3">{{ feature.title }}</h5>
                  <p class="card-text" style="font-size: 15px">
                    {{ feature.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div
              v-for="(feature, index) in bomFeatures.slice(2)"
              :key="index"
              class="mb-3"
            >
              <div class="card" style="border-radius: 10px; height: 261px">
                <div class="card-body">
                  <img
                    :src="feature.icon"
                    :alt="feature.title"
                    class="img-fluid"
                    :style="imageStyle"
                  />
                  <!-- <i :class="`fa ${feature.icon} fa-2x text-info`"></i> -->
                  <h5 class="card-title mt-3">{{ feature.title }}</h5>
                  <p class="card-text" style="font-size: 15px">
                    {{ feature.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tablet Mode -->
      <div v-if="typeSize !== 'desktop'" class="col-12">
        <button class="btn btn-outline-info btn-sm mt-4" disabled>
          Features
        </button>
        <h2 class="text-dark mb-0">
          Get Your ops in gear with elite back-office solutions
        </h2>
        <p class="lead mt-4">
          By centralizing and automating key processes, Stellar’s helps you
          reduce errors, save time, and empower your team to focus on strategic
          growth.
        </p>

        <div class="row mt-4">
          <div
            v-for="(feature, index) in bomFeatures"
            :key="index"
            :class="typeSize === 'tablet' ? 'col-3 mb-3' : 'col-6 mb-3'"
          >
            <div
              class="card"
              :style="
                typeSize === 'medium'
                  ? 'border-radius: 10px; height: 250px'
                  : 'border-radius: 10px; height: 330px'
              "
            >
              <div class="card-body">
                <i :class="`fa ${feature.icon}  fa-2x text-info`"></i>
                <h5
                  :class="
                    typeSize === 'mobile'
                      ? 'card-title mt-3 text-sm'
                      : 'card-title mt-3 '
                  "
                >
                  {{ feature.title }}
                </h5>
                <p
                  :class="
                    typeSize === 'mobile' ? 'card-text text-sm' : 'card-text '
                  "
                  style="font-size: 15px"
                >
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="currentRouteName === 'products-fm'"
      :class="typeSize === 'mobile' ? '' : 'container-fluid'"
    >
      <div class="row py-5">
        <div
          :class="
            typeSize === 'mobile' ||
            typeSize === 'tablet' ||
            typeSize === 'medium'
              ? 'text-center mb-1 '
              : 'text-center mb-1 px-9'
          "
        >
          <button
            :class="
              typeSize === 'mobile'
                ? 'btn btn-outline-info btn-sm '
                : 'btn btn-outline-info btn-sm mt-5'
            "
            disabled
          >
            Features
          </button>
          <h2
            :class="
              typeSize === 'mobile' || typeSize === 'medium'
                ? 'font-weight-bold '
                : 'font-weight-bold px-10'
            "
          >
            Master Your finances
          </h2>
          <p
            :class="
              typeSize === 'mobile' || typeSize === 'medium' ? '' : 'mx-9'
            "
          >
            Our platform is designed to provide you with the tools needed to
            manage your financial operations with precision and ease.
          </p>
        </div>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-none">
              <div
                class="card-body d-flex flex-column align-items-center justify-content-start"
                style="text-align: center"
              >
                <img
                  src="@/assets/img/products/fm-1.png"
                  alt="Point of Sale"
                  class="mb-4 img-fluid"
                />
                <h5
                  class="card-title font-weight-bold"
                  style="font-size: large"
                >
                  Automated Invoicing and Billing
                </h5>
                <p class="card-text text-muted" style="font-size: smaller">
                  Automated billing cycles, recurring invoices, and payment
                  reminders to ensure timely payments.
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
                  Real-Time Financial Reporting
                </h5>
                <p class="card-text text-muted" style="font-size: smaller">
                  Profit and loss statements, balance sheets, and cash flow
                  statements, to monitor your business’s financial health.
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
                  src="@/assets/img/products/fm-3.png"
                  alt="Point of Sale"
                  class="mb-4 img-fluid"
                />
                <h5
                  class="card-title font-weight-bold"
                  style="font-size: large"
                >
                  Budgeting and Forecasting
                </h5>
                <p class="card-text text-muted" style="font-size: smaller">
                  Plan your financial future with tools that allow you to create
                  budgets, forecast revenue, and compare projection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useWindowsWidth } from "@/assets/js/useWindowsWidth";

const { type } = useWindowsWidth();
let typeSize = ref(type);

watch(
  () => type.value,
  (newValue) => {
    typeSize.value = newValue;
  }
);
const currentRouteName = computed(() => {
  return useRoute().name;
});

const bomFeatures = ref([
  {
    title: "Customizable Dashboards",
    description:
      "Gain real-time insights into your operations with customizable dashboards that highlight top-notch data.",
    icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQyMzRfMjc3MikiPgo8cGF0aCBkPSJNMjAgNUMyMC4zMzE1IDUgMjAuNjQ5NSA1LjEzMTcgMjAuODgzOSA1LjM2NjEyQzIxLjExODMgNS42MDA1NCAyMS4yNSA1LjkxODQ4IDIxLjI1IDYuMjVWMTBDMjEuMjUgMTAuMzMxNSAyMS4xMTgzIDEwLjY0OTUgMjAuODgzOSAxMC44ODM5QzIwLjY0OTUgMTEuMTE4MyAyMC4zMzE1IDExLjI1IDIwIDExLjI1QzE5LjY2ODUgMTEuMjUgMTkuMzUwNSAxMS4xMTgzIDE5LjExNjEgMTAuODgzOUMxOC44ODE3IDEwLjY0OTUgMTguNzUgMTAuMzMxNSAxOC43NSAxMFY2LjI1QzE4Ljc1IDUuOTE4NDggMTguODgxNyA1LjYwMDU0IDE5LjExNjEgNS4zNjYxMkMxOS4zNTA1IDUuMTMxNyAxOS42Njg1IDUgMjAgNVpNOS4zMyA5LjMzQzkuNTY0NDEgOS4wOTU2NiA5Ljg4MjI5IDguOTY0MDIgMTAuMjEzNyA4Ljk2NDAyQzEwLjU0NTIgOC45NjQwMiAxMC44NjMxIDkuMDk1NjYgMTEuMDk3NSA5LjMzTDEzLjM4NSAxMS42MTVDMTMuNjE5NyAxMS44NDk3IDEzLjc1MTYgMTIuMTY4MSAxMy43NTE2IDEyLjVDMTMuNzUxNiAxMi44MzE5IDEzLjYxOTcgMTMuMTUwMyAxMy4zODUgMTMuMzg1QzEzLjE1MDMgMTMuNjE5NyAxMi44MzE5IDEzLjc1MTYgMTIuNSAxMy43NTE2QzEyLjE2ODEgMTMuNzUxNiAxMS44NDk3IDEzLjYxOTcgMTEuNjE1IDEzLjM4NUw5LjMzIDExLjA5NzVDOS4wOTU2NiAxMC44NjMxIDguOTY0MDIgMTAuNTQ1MiA4Ljk2NDAyIDEwLjIxMzdDOC45NjQwMiA5Ljg4MjI5IDkuMDk1NjYgOS41NjQ0MSA5LjMzIDkuMzNaTTUgMjBDNSAxOS42Njg1IDUuMTMxNyAxOS4zNTA1IDUuMzY2MTIgMTkuMTE2MUM1LjYwMDU0IDE4Ljg4MTcgNS45MTg0OCAxOC43NSA2LjI1IDE4Ljc1SDEwLjIxNUMxMC41NDY1IDE4Ljc1IDEwLjg2NDUgMTguODgxNyAxMS4wOTg5IDE5LjExNjFDMTEuMzMzMyAxOS4zNTA1IDExLjQ2NSAxOS42Njg1IDExLjQ2NSAyMEMxMS40NjUgMjAuMzMxNSAxMS4zMzMzIDIwLjY0OTUgMTEuMDk4OSAyMC44ODM5QzEwLjg2NDUgMjEuMTE4MyAxMC41NDY1IDIxLjI1IDEwLjIxNSAyMS4yNUg2LjI1QzUuOTE4NDggMjEuMjUgNS42MDA1NCAyMS4xMTgzIDUuMzY2MTIgMjAuODgzOUM1LjEzMTcgMjAuNjQ5NSA1IDIwLjMzMTUgNSAyMFpNMjguNzUgMjBDMjguNzUgMTkuNjY4NSAyOC44ODE3IDE5LjM1MDUgMjkuMTE2MSAxOS4xMTYxQzI5LjM1MDUgMTguODgxNyAyOS42Njg1IDE4Ljc1IDMwIDE4Ljc1SDMzLjc1QzM0LjA4MTUgMTguNzUgMzQuMzk5NSAxOC44ODE3IDM0LjYzMzkgMTkuMTE2MUMzNC44NjgzIDE5LjM1MDUgMzUgMTkuNjY4NSAzNSAyMEMzNSAyMC4zMzE1IDM0Ljg2ODMgMjAuNjQ5NSAzNC42MzM5IDIwLjg4MzlDMzQuMzk5NSAyMS4xMTgzIDM0LjA4MTUgMjEuMjUgMzMuNzUgMjEuMjVIMzBDMjkuNjY4NSAyMS4yNSAyOS4zNTA1IDIxLjExODMgMjkuMTE2MSAyMC44ODM5QzI4Ljg4MTcgMjAuNjQ5NSAyOC43NSAyMC4zMzE1IDI4Ljc1IDIwWk0zMC42MzUgOS4zODVDMzAuNDYxNSA5LjIxMzI0IDMwLjIyOTkgOS4xMTI4MSAyOS45ODYgOS4xMDM1NUMyOS43NDIgOS4wOTQyOSAyOS41MDM1IDkuMTc2ODggMjkuMzE3NSA5LjMzNUwxOC44Njc1IDE4LjI3NUMxOC42MjY4IDE4LjQ4MTEgMTguNDMxOCAxOC43MzUyIDE4LjI5NSAxOS4wMjFDMTguMTU4MiAxOS4zMDY4IDE4LjA4MjYgMTkuNjE4IDE4LjA3MzEgMTkuOTM0N0MxOC4wNjM1IDIwLjI1MTQgMTguMTIwMyAyMC41NjY3IDE4LjIzOTYgMjAuODYwMkMxOC4zNTkgMjEuMTUzNyAxOC41Mzg0IDIxLjQxOTEgMTguNzY2MiAyMS42MzkyQzE4Ljk5NDEgMjEuODU5NCAxOS4yNjU1IDIyLjAyOTUgMTkuNTYyOSAyMi4xMzg4QzE5Ljg2MDMgMjIuMjQ4IDIwLjE3NzMgMjIuMjkzOSAyMC40OTM1IDIyLjI3MzVDMjAuODA5NyAyMi4yNTMgMjEuMTE4MiAyMi4xNjY4IDIxLjM5OTEgMjIuMDIwM0MyMS42ODAxIDIxLjg3MzcgMjEuOTI3MyAyMS42NzAxIDIyLjEyNSAyMS40MjI1TDMwLjcxIDEwLjY4QzMwLjg1ODggMTAuNDkyOCAzMC45MzM3IDEwLjI1NzUgMzAuOTIwMyAxMC4wMTg3QzMwLjkwNjkgOS43Nzk5MyAzMC44MDYzIDkuNTU0NCAzMC42Mzc1IDkuMzg1SDMwLjYzNVoiIGZpbGw9IiMyOTM1OTEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi42NjA3IDM5LjcyMjVDMTQuMDcwNiAzOS4yODM5IDExLjU5MjIgMzguMzM5NCA5LjM2NzAyIDM2Ljk0M0M3LjE0MTg3IDM1LjU0NjUgNS4yMTM1NiAzMy43MjU1IDMuNjkyMTkgMzEuNTgzOEMwLjYxOTY0MyAyNy4yNTg1IC0wLjYwODg0NyAyMS44ODk4IDAuMjc2OTc2IDE2LjY1ODhDMS4xNjI4IDExLjQyNzcgNC4wOTAzNyA2Ljc2Mjc5IDguNDE1NjcgMy42OTAyNEMxMi43NDEgMC42MTc2OSAxOC4xMDk3IC0wLjYxMDggMjMuMzQwNyAwLjI3NTAyM0MyOC41NzIxIDEuMTYwODUgMzMuMjM3NCA0LjA4ODU1IDM2LjMxMDEgOC40MTQwOEMzOS4zODI5IDEyLjczOTYgNDAuNjExNSAxOC4xMDg2IDM5LjcyNTcgMjMuMzRDMzguODM5OSAyOC41NzE0IDM1LjkxMjIgMzMuMjM2NyAzMS41ODY3IDM2LjMwOTRDMjcuMjYxMSAzOS4zODIyIDIxLjg5MjEgNDAuNjEwOCAxNi42NjA3IDM5LjcyNVYzOS43MjI1Wk00Ljk5ODIzIDI5LjAxNUM5LjU1NzY3IDI2LjM3NzUgMTQuNzMzNCAyNC45OTI0IDIwLjAwMDcgMjVDMjUuNDY1NyAyNSAzMC41OTA3IDI2LjQ2MjUgMzUuMDAzMiAyOS4wMTVDMzYuNTk3OSAyNi4zNTk2IDM3LjQ1OTMgMjMuMzI4NSAzNy40OTkzIDIwLjIzMTRDMzcuNTM5MyAxNy4xMzQyIDM2Ljc1NjUgMTQuMDgxOCAzNS4yMzEgMTEuMzg2MUMzMy43MDU0IDguNjkwNDQgMzEuNDkxNyA2LjQ0Nzk0IDI4LjgxNTkgNC44ODc2OEMyNi4xNDAxIDMuMzI3NDIgMjMuMDk4MiAyLjUwNTMxIDIwLjAwMDcgMi41MDUzMUMxNi45MDMzIDIuNTA1MzEgMTMuODYxMyAzLjMyNzQyIDExLjE4NTYgNC44ODc2OEM4LjUwOTc4IDYuNDQ3OTQgNi4yOTYwNiA4LjY5MDQ0IDQuNzcwNDkgMTEuMzg2MUMzLjI0NDkzIDE0LjA4MTggMi40NjIxOCAxNy4xMzQyIDIuNTAyMTkgMjAuMjMxNEMyLjU0MjIgMjMuMzI4NSAzLjQwMzUzIDI2LjM1OTYgNC45OTgyMyAyOS4wMTVaIiBmaWxsPSIjMjkzNTkxIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNDIzNF8yNzcyIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
  },
  {
    title: "Document Management",
    description:
      "Manage all your documents and files in one secure, centralized location, ensuring easy access and organization.",
    icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0LjU3MDQgNy41SDM0LjUyNTRDMzUuMjIwMiA3LjQ5OTkzIDM1LjkwNzQgNy42NDQ2NiAzNi41NDMxIDcuOTI0OThDMzcuMTc4OSA4LjIwNTI5IDM3Ljc0OTIgOC42MTUwMyAzOC4yMTc4IDkuMTI4MDVDMzguNjg2MyA5LjY0MTA4IDM5LjA0MjggMTAuMjQ2MSAzOS4yNjQ1IDEwLjkwNDZDMzkuNDg2MiAxMS41NjMxIDM5LjU2ODIgMTIuMjYwNiAzOS41MDU0IDEyLjk1MjVMMzcuOTEyOSAzMC40NTI1QzM3LjggMzEuNjk0OCAzNy4yMjY4IDMyLjg1IDM2LjMwNTkgMzMuNjkxNEMzNS4zODQ5IDM0LjUzMjggMzQuMTgyOCAzNC45OTk1IDMyLjkzNTQgMzVINy4wNjI4N0M1LjgxNTQ2IDM0Ljk5OTUgNC42MTMyOSAzNC41MzI4IDMuNjkyMzYgMzMuNjkxNEMyLjc3MTQzIDMyLjg1IDIuMTk4MjYgMzEuNjk0OCAyLjA4NTM3IDMwLjQ1MjVMMC40OTI4NjggMTIuOTUyNUMwLjM4ODQ2MSAxMS43OTQ2IDAuNjkwNzk0IDEwLjYzNjYgMS4zNDc4NyA5LjY3NzVMMS4yNTAzNyA3LjVDMS4yNTAzNyA2LjE3MzkyIDEuNzc3MTUgNC45MDIxNSAyLjcxNDgzIDMuOTY0NDdDMy42NTI1MiAzLjAyNjc4IDQuOTI0MjkgMi41IDYuMjUwMzcgMi41SDE1LjQzMDRDMTYuNzU2MyAyLjUwMDI4IDE4LjAyNzkgMy4wMjcyNSAxOC45NjU0IDMuOTY1TDIxLjAzNTQgNi4wMzVDMjEuOTcyOCA2Ljk3Mjc1IDIzLjI0NDQgNy40OTk3MiAyNC41NzA0IDcuNVpNMy43NjUzNyA3LjhDNC4zMDIwMyA3LjYwMTY3IDQuODcyMDQgNy41MDE2NyA1LjQ3NTM3IDcuNUgxOC45NjU0TDE3LjE5NzkgNS43MzI1QzE2LjcyOTEgNS4yNjM2MyAxNi4wOTM0IDUuMDAwMTQgMTUuNDMwNCA1SDYuMjUwMzdDNS41OTU0OCA0Ljk5OTg4IDQuOTY2NjggNS4yNTY3NCA0LjQ5OTE5IDUuNzE1MzZDNC4wMzE2OSA2LjE3Mzk4IDMuNzYyODEgNi43OTc3MyAzLjc1MDM3IDcuNDUyNUwzLjc2NTM3IDcuOFoiIGZpbGw9IiMyOTM1OTEiLz4KPC9zdmc+Cg==",
  },
  {
    title: "Payroll Processing",
    description:
      "Simplify payroll management with automated calculations, deductions, and timely disbursements.",
    icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDI2Ljk1MjVDMTAuMzcgMzEuMTIgMTMuNzgyNSAzNC4wNzc1IDE4Ljk3NzUgMzQuNDZWMzcuNUgyMS41ODVWMzQuNDZDMjcuMjYgMzQuMDEyNSAzMC43OCAzMC44NjUgMzAuNzggMjYuMjFDMzAuNzggMjIuMjM1IDI4LjQxMjUgMTkuOTM1IDIzLjM5IDE4LjY0TDIxLjU4NSAxOC4xNzI1VjguNjY3NUMyNC4zOSA4Ljk0MjUgMjYuMjgyNSAxMC40NTI1IDI2Ljc2IDEyLjcwNzVIMzAuNDM1QzMwLjAyIDguNzA3NSAyNi41ODUgNS44Mzc1IDIxLjU4NSA1LjUyVjIuNUgxOC45Nzc1VjUuNTgyNUMxNC4xMyA2LjE1NzUgMTAuODAyNSA5LjI2MjUgMTAuODAyNSAxMy40NzI1QzEwLjgwMjUgMTcuMTA3NSAxMy4yMTc1IDE5LjY4IDE3LjQ1NSAyMC43NjVMMTguOTggMjEuMTdWMzEuMjQ3NUMxNi4xMDc1IDMwLjgyMjUgMTQuMTMgMjkuMjQ3NSAxMy42NTI1IDI2Ljk1MjVIMTBaTTE4LjQ3NzUgMTcuMzYyNUMxNS44NyAxNi43MDUgMTQuNDc3NSAxNS4zIDE0LjQ3NzUgMTMuMzIyNUMxNC40Nzc1IDEwLjk2MjUgMTYuMjM3NSA5LjIyIDE4Ljk3NzUgOC43NTI1VjE3LjQ5TDE4LjQ3NzUgMTcuMzYyNVpNMjIuNDU1IDIyLjA0MjVDMjUuNjcyNSAyMi44NSAyNy4wODUgMjQuMTkgMjcuMDg1IDI2LjQ2NUMyNy4wODUgMjkuMjA3NSAyNS4wMiAzMS4wMzUgMjEuNTg1IDMxLjMxMjVWMjEuODI1TDIyLjQ1NSAyMi4wNDI1WiIgZmlsbD0iIzI5MzU5MSIvPgo8L3N2Zz4K",
  },
  {
    title: "Vendor and Supplier Management",
    description:
      "Efficiently manage contracts, and payments with vendors and suppliers through integrated tools.",
    icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MSA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQyNTJfNDA2MykiPgo8cGF0aCBkPSJNMzEuOTQwNSAzNy41QzM1LjI4MDUgMzcuNSAzNy44MzMgMzQuNjEyNSAzNy44MzMgMzEuMjVWMTIuNUgyLjgzMzAxVjMxLjI1QzIuODMzMDEgMzQuNjEyNSA1LjM4NTUxIDM3LjUgOC43MjU1MSAzNy41SDMxLjk0MDVaTTE0LjA4MyAxNy41SDI2LjU4M0MyNi45MTQ1IDE3LjUgMjcuMjMyNSAxNy42MzE3IDI3LjQ2NjkgMTcuODY2MUMyNy43MDEzIDE4LjEwMDUgMjcuODMzIDE4LjQxODUgMjcuODMzIDE4Ljc1QzI3LjgzMyAxOS4wODE1IDI3LjcwMTMgMTkuMzk5NSAyNy40NjY5IDE5LjYzMzlDMjcuMjMyNSAxOS44NjgzIDI2LjkxNDUgMjAgMjYuNTgzIDIwSDE0LjA4M0MxMy43NTE1IDIwIDEzLjQzMzUgMTkuODY4MyAxMy4xOTkxIDE5LjYzMzlDMTIuOTY0NyAxOS4zOTk1IDEyLjgzMyAxOS4wODE1IDEyLjgzMyAxOC43NUMxMi44MzMgMTguNDE4NSAxMi45NjQ3IDE4LjEwMDUgMTMuMTk5MSAxNy44NjYxQzEzLjQzMzUgMTcuNjMxNyAxMy43NTE1IDE3LjUgMTQuMDgzIDE3LjVaTTIuMzMzMDEgMi41QzEuODAyNTcgMi41IDEuMjkzODcgMi43MTA3MSAwLjkxODc5NCAzLjA4NTc5QzAuNTQzNzIxIDMuNDYwODYgMC4zMzMwMDggMy45Njk1NyAwLjMzMzAwOCA0LjVMMC4zMzMwMDggNy41QzAuMzMzMDA4IDguMDMwNDMgMC41NDM3MjEgOC41MzkxNCAwLjkxODc5NCA4LjkxNDIxQzEuMjkzODcgOS4yODkyOSAxLjgwMjU3IDkuNSAyLjMzMzAxIDkuNUgzOC4zMzNDMzguODYzNCA5LjUgMzkuMzcyMSA5LjI4OTI5IDM5Ljc0NzIgOC45MTQyMUM0MC4xMjIzIDguNTM5MTQgNDAuMzMzIDguMDMwNDMgNDAuMzMzIDcuNVY0LjVDNDAuMzMzIDMuOTY5NTcgNDAuMTIyMyAzLjQ2MDg2IDM5Ljc0NzIgMy4wODU3OUMzOS4zNzIxIDIuNzEwNzEgMzguODYzNCAyLjUgMzguMzMzIDIuNUgyLjMzMzAxWiIgZmlsbD0iIzI5MzU5MSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzQyNTJfNDA2MyI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMzMzMDA4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
  },
]);

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
