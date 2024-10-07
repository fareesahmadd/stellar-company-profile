<script setup>
import { onMounted, onUnmounted, computed } from "vue";

//example components
import FilledInfoCard from "../../../examples/cards/infoCards/FilledInfoCard.vue";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
import { useRoute } from "vue-router";
const currentRouteName = computed(() => {
  return useRoute().name;
});
</script>

<template>
  <div class="container-fluid">
    <div class="card card-body bg-light shadow-none mx-3 mx-md-4">
      <div class="text-center mb-5 px-9">
        <button class="btn btn-outline-info btn-sm mt-4" disabled>
          Solutions
        </button>
        <h2 class="font-weight-bold px-9">
          Every features you need, all in one ecosystem
        </h2>
      </div>
      <div class="row mb-4">
        <div class="col-lg-4">
          <FilledInfoCard
            class="p-4"
            :icon="{ component: 'flag', color: 'info' }"
            :route-name="currentRouteName"
            title="Swift PoS"
            description="Manage transactions smoothly, and reduce checkout times with our PoS system."
            :action="{
              route:
                'https://www.creative-tim.com/learning-lab/vue/overview/material-kit/',
              label: { text: 'Let\'s start', color: 'white' },
            }"
          />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard
            class="p-4"
            :icon="{ component: 'inventory', color: 'info' }"
            :route-name="currentRouteName"
            title="Inventory Tracking"
            description="Monitor inventory in real-time, automate restocking, and minimize waste."
            :action="{
              route:
                'https://www.creative-tim.com/learning-lab/vue/overview/material-kit/',
              label: { text: 'Let\'s start', color: 'white' },
            }"
          />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard
            class="p-4"
            :icon="{ component: 'computer', color: 'info' }"
            :route-name="currentRouteName"
            title="Financial Reports"
            description="Track expenses and manage budgets with precision, all from a single, easy-to-use platform."
            :action="{
              route:
                'https://www.creative-tim.com/learning-lab/vue/overview/material-kit/',
              label: { text: 'Let\'s start', color: 'white' },
            }"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <FilledInfoCard
            class="p-4"
            :icon="{ component: 'dashboard', color: 'info' }"
            :route-name="currentRouteName"
            title="Smart Procurement"
            description="Automatically reorders products based on your preset thresholds, keep your shelves full all the time."
            :action="{
              route:
                'https://www.creative-tim.com/learning-lab/vue/overview/material-kit/',
              label: { text: 'Let\'s start', color: 'white' },
            }"
          />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard
            class="p-4"
            :icon="{ component: 'store', color: 'info' }"
            :route-name="currentRouteName"
            title="Branch Management"
            description="Oversee sales, inventory, and finances across all your branches with ease."
            :action="{
              route:
                'https://www.creative-tim.com/learning-lab/vue/overview/material-kit/',
              label: { text: 'Let\'s start', color: 'white' },
            }"
          />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard
            class="p-4"
            :icon="{ component: 'sell', color: 'info' }"
            :route-name="currentRouteName"
            title="Integrated Accounting"
            description="Automates invoicing and tracks payments, giving you a clear overview of your financial health."
            :action="{
              route:
                'https://www.creative-tim.com/learning-lab/vue/overview/material-kit/',
              label: { text: 'Let\'s start', color: 'white' },
            }"
          />
        </div>
      </div>
      <div class="row mt-6">
        <div class="col-md-4 offset-md-4 d-flex justify-content-center">
          <a href="/" class="btn btn-md btn-outline-info">Book a Meeting</a>
        </div>
      </div>
    </div>
  </div>
</template>
