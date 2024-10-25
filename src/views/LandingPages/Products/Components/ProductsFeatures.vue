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
                  <i :class="`fa ${feature.icon} fa-2x text-info`"></i>
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
                  <i :class="`fa ${feature.icon} fa-2x text-info`"></i>
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
    icon: "fa-opera",
  },
  {
    title: "Document Management",
    description:
      "Manage all your documents and files in one secure, centralized location, ensuring easy access and organization.",
    icon: "fa-file",
  },
  {
    title: "Payroll Processing",
    description:
      "Simplify payroll management with automated calculations, deductions, and timely disbursements.",
    icon: "fa-palette",
  },
  {
    title: "Vendor and Supplier Management",
    description:
      "Efficiently manage contracts, and payments with vendors and suppliers through integrated tools.",
    icon: "fa-palette",
  },
]);
</script>
