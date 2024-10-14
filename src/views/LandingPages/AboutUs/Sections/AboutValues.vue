<script setup>
import { onMounted, onUnmounted, computed } from "vue";

//example components
import FilledInfoCard from "../../../../examples/cards/infoCards/FilledInfoCard.vue";

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
    <div class="card card-body shadow-none mx-3 mx-md-4">
      <div class="text-center mb-5">
        <button class="btn btn-outline-info btn-sm mt-4" disabled>
          Our Values
        </button>
        <h2 class="font-weight-bold px-9">Values that guide our success</h2>
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
      <div class="text-center px-11 mt-7 mb-4">
        <img
          class="opacity-7"
          src="@/assets/img/icon-caption-info.svg"
          style="height: 35px; width: 35px"
          alt="icon-caption"
        />
      </div>
      <div class="text-center mb-5 px-11">
        <p class="px-4 quote">
          Implementing Stellar Gelora's ERP software has been a game-changer for
          our business. From day one, the team at Stellar Gelora worked closely
          with us to customize the system to meet our specific needs. The point
          of sales integration has streamlined our sales processes, allowing us
          to manage our inventory more effectively and serve our customers
          better.
        </p>
        <p>Naila Agung Sarasati</p>
        <p class="mt-n3" style="font-weight: bold">
          CEO & Co-Founder of Wanderloom Labs
        </p>
      </div>
    </div>
  </div>
</template>
