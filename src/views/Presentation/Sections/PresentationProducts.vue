<template>
  <div class="container-fluid">
    <div class="row">
      <div
        :class="typeSize === 'mobile' ? 'col-12' : 'col-md-6'"
        :style="
          typeSize === 'mobile'
            ? 'padding-left: 10px'
            : typeSize === 'desktop'
            ? 'padding-left:50px; padding-right: 200px'
            : 'padding-left:50px'
        "
      >
        <button class="btn btn-outline-info btn-sm mt-4" disabled>
          Products
        </button>
        <h2 v-if="typeSize !== 'mobile'">
          All retail solutions at Your fingertips
        </h2>
        <h3 v-if="typeSize === 'mobile'">
          All retail solutions at Your fingertips
        </h3>
      </div>
      <div
        :class="typeSize === 'mobile' ? 'col-12' : 'col-md-6'"
        :style="
          typeSize === 'mobile' ? 'padding-left: 10px' : 'padding-left: 100px'
        "
      >
        <p :class="typeSize === 'mobile' ? '' : 'lead mt-6'">
          From the moment of sale to inventory oversight and financial
          management, our solutions are designed to integrate seamlessly into
          your operations, enhancing efficiency and delivering exceptional
          performance
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-none">
          <div
            class="card-body d-flex flex-column align-items-start justify-content-start"
          >
            <img
              src="@/assets/img/presentations/pos-home-image.svg"
              alt="Point of Sale"
              class="mb-4 img-fluid"
            />
            <h5 class="card-title font-weight-bold">Point of Sale (POS)</h5>
            <p class="card-text text-muted">
              Scale up your sales with our PoS. Designed for seamless
              transactions and customer insights.
            </p>
            <a href="#" class="btn btn-outline-info mt-auto">Learn more</a>
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
            <h5 class="card-title font-weight-bold">Inventory Management</h5>
            <p class="card-text text-muted">
              Track your stock with real-time inventory control across all your
              locations.
            </p>
            <a href="#" class="btn btn-outline-info mt-auto">Learn more</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-none">
          <div
            class="card-body d-flex flex-column align-items-start justify-content-start"
          >
            <img
              src="@/assets/img/presentations/finance-home-image.svg"
              alt="Point of Sale"
              class="mb-4 img-fluid"
            />
            <h5 class="card-title font-weight-bold">Finance App</h5>
            <p class="card-text text-muted">
              Simplify complex financial matters with our intuitive app,
              transforming data into clear, actionable insights.
            </p>
            <a href="#" class="btn btn-outline-info mt-auto">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useWindowsWidth } from "@/assets/js/useWindowsWidth";

const { type } = useWindowsWidth();
let typeSize = ref(type);

watch(
  () => type.value,
  (newValue) => {
    typeSize.value = newValue;
  }
);
</script>
