<template>
  <div>
    <div v-if="currentRouteName === 'products-pos'" class="container-fluid">
      <div class="row">
        <div class="text-center mb-5 px-11">
          <button class="btn btn-outline-info btn-sm mt-4" disabled>
            Industry
          </button>
          <h2 class="font-weight-bold">Industry-Specific ERP Solutions</h2>
          <p>
            We understand that every industry has unique challenges and
            requirements. Our ERP solutions are designed to address the specific
            needs of various sectors.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="card h-100 shadow-none">
            <div
              class="card-body d-flex flex-column align-items-start justify-content-start"
            >
              <img
                src="@/assets/img/inventory-management.svg"
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
                src="@/assets/img/inventory-management.svg"
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
                src="@/assets/img/inventory-management.svg"
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
                src="@/assets/img/inventory-management.svg"
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
                src="@/assets/img/inventory-management.svg"
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
                src="@/assets/img/inventory-management.svg"
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
    <div v-if="currentRouteName === 'products-bom'" class="row py-3 px-5">
      <div class="col-md-6 px-3">
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

      <div class="col-md-6">
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <div class="card" style="border-radius: 10px">
                <div class="card-body">
                  <i class="fa fa-opera fa-2x text-info"></i>
                  <h5 class="card-title mt-3">
                    Customizable <br />
                    Dashboards
                  </h5>
                  <p class="card-text" style="font-size: 15px">
                    Gain real-time insights into your operations with
                    customizable dashboards that highlight top-notch data.
                  </p>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="card" style="border-radius: 10px">
                <div class="card-body">
                  <i class="fa fa-file fa-2x text-info"></i>
                  <h5 class="card-title mt-3">
                    Document <br />
                    Management
                  </h5>
                  <p class="card-text" style="font-size: 15px">
                    Manage all your documents and files in one secure,
                    centralized location, ensuring easy access and organization.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <div class="card" style="border-radius: 10px">
                <div class="card-body">
                  <i class="fas fa-palette fa-2x text-info"></i>
                  <h5 class="card-title mt-3">
                    Payroll <br />
                    Processing
                  </h5>
                  <p class="card-text" style="font-size: 15px">
                    Simplify payroll management with automated calculations,
                    deductions, and timely disbursements.
                  </p>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="card" style="border-radius: 10px">
                <div class="card-body">
                  <i class="fas fa-palette fa-2x text-info"></i>
                  <h5 class="card-title mt-3">
                    Vendor and Supplier Management
                  </h5>
                  <p class="card-text" style="font-size: 15px">
                    Efficiently manage contracts, and payments with vendors and
                    suppliers through integrated tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
const currentRouteName = computed(() => {
  return useRoute().name;
});
</script>
