<script setup>
import { onMounted, onUnmounted, computed, ref, watch } from "vue";
import { useWindowsWidth } from "@/assets/js/useWindowsWidth";

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

const { type } = useWindowsWidth();
let typeSize = ref(type);

watch(
  () => type.value,
  (newValue) => {
    typeSize.value = newValue;
  }
);
</script>

<template>
  <div>
    <div class="card card-body bg-light shadow-none mx-3 mx-md-4">
      <div class="text-center mb-5">
        <button class="btn btn-outline-info btn-sm mt-4" disabled>
          Solutions
        </button>
        <div>
          <h2 class="font-weight-bold">
            Every features you need, <br />
            all in one ecosystem.
          </h2>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-lg-4">
          <FilledInfoCard
            class="p-4"
            image-name="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM1LjkxNjggMzEuMzMzNVYzMy4wMDAyQzM1LjkxNjggMzQuNjA4MiAzNC42MDgyIDM1LjkxNjggMzMuMDAwMiAzNS45MTY4SDMuMDAwMTZDMS4zOTIxNiAzNS45MTY4IDAuMDgzNDk2MSAzNC42MDgyIDAuMDgzNDk2MSAzMy4wMDAyVjMxLjMzMzVDMC4wODM0OTYxIDI5LjcyNTUgMS4zOTIxNiAyOC40MTY4IDMuMDAwMTYgMjguNDE2OEgzMy4wMDAyQzM0LjYwODIgMjguNDE2OCAzNS45MTY4IDI5LjcyNTUgMzUuOTE2OCAzMS4zMzM1Wk0zMi43NTYgMTUuOTcyMkMzMi41NzQ1IDE0LjUxNTUgMzEuMzMwMiAxMy40MTY4IDI5Ljg2MjIgMTMuNDE2OEgyNC4yNTAyVjkuMjUwMTZIMjguMDAwMkMyOS42MDgyIDkuMjUwMTYgMzAuOTE2OCA3Ljk0MTUgMzAuOTE2OCA2LjMzMzVWMy4wMDAxNkMzMC45MTY4IDEuMzkyMTYgMjkuNjA4MiAwLjA4MzQ5NjEgMjguMDAwMiAwLjA4MzQ5NjFIMTguMDAwMkMxNi4zOTIyIDAuMDgzNDk2MSAxNS4wODM1IDEuMzkyMTYgMTUuMDgzNSAzLjAwMDE2VjYuMzMzNUMxNS4wODM1IDcuOTQxNSAxNi4zOTIyIDkuMjUwMTYgMTguMDAwMiA5LjI1MDE2SDIxLjc1MDJWMTMuNDE2OEg2LjEzODE2QzQuNjcgMTMuNDE2OCAzLjQyNTgzIDE0LjUxNTUgMy4yNDQzMyAxNS45NzEzTDIuMDAxIDI1LjkxNjhIMzMuOTk5NUwzMi43NTYgMTUuOTcyMloiIGZpbGw9IiMyOTM1OTEiLz4KPC9zdmc+Cg=="
            :icon="{
              component: 'flag',
              color: 'info',
            }"
            :route-name="currentRouteName"
            title="Swift PoS"
            description="Manage transactions smoothly, and
          reduce checkout times with our PoS system."
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
            image-name="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MSA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQxMDdfMzAzNykiPgo8cGF0aCBkPSJNMjUuMzMzNSA3LjIwODg5VjcuMTk4ODlMMzIuODE4NSAxMC41NTE0TDQwLjMzMzUgNy43MzM4OUwyMC4zMzM1IDAuMjMzODg3TDAuMzMzNDk2IDcuNzMzODlMMjAuMzMzNSAxNS4yMzM5TDI3LjgxODUgMTIuNDI2NEwyMC4zMzM1IDkuMzQxMzlWOS4zMzM4OUwyNS4zMzM1IDcuMjA4ODlaIiBmaWxsPSIjMjkzNTkxIi8+CjxwYXRoIGQ9Ik0wLjMzMzQ5NiAxMC4yMzM5VjMyLjczMzlMMTkuMDgzNSAzOS43NjY0VjE3LjI2NjRMMC4zMzM0OTYgMTAuMjMzOVpNMTAuMzMzNSAzMi44MTY0TDUuMzMzNSAzMC45NDE0VjI4LjI3MzlMMTAuMzMzNSAzMC4xNDg5VjMyLjgxNjRaIiBmaWxsPSIjMjkzNTkxIi8+CjxwYXRoIGQ9Ik0zMi44MzM1IDEzLjA0NjRWMTkuMzA4OUwyNy44MzM1IDIxLjE4MzlWMTQuOTIxNEwyMS41ODM1IDE3LjI2NjRWMzkuNzY2NEw0MC4zMzM1IDMyLjczMzlWMTAuMjMzOUwzMi44MzM1IDEzLjA0NjRaIiBmaWxsPSIjMjkzNTkxIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNDEwN18zMDM3Ij4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4zMzM0OTYpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="
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
            image-name="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MSA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQxMDdfMzA0NykiPgo8cGF0aCBkPSJNMTAuNjY2NSAxNUgxNS42NjY1VjIyLjVIMTAuNjY2NVYxNVoiIGZpbGw9IiMyOTM1OTEiLz4KPHBhdGggZD0iTTE4LjE2NjUgMTIuNUgyMy4xNjY1VjIyLjVIMTguMTY2NVYxMi41WiIgZmlsbD0iIzI5MzU5MSIvPgo8cGF0aCBkPSJNMjUuNjY2NSAxMEgzMC42NjY1VjIyLjQ5ODdIMjUuNjY2NVYxMFoiIGZpbGw9IiMyOTM1OTEiLz4KPHBhdGggZD0iTTM2LjkxNjUgMi41SDQuNDE2NDhDMi4zNDg2IDIuNSAwLjY2NjUwNCA0LjE4MjA5IDAuNjY2NTA0IDYuMjQ5OThWMjguNzVDMC42NjY1MDQgMzAuODE3OCAyLjM0ODYgMzIuNDk5OSA0LjQxNjQ4IDMyLjQ5OTlIMTMuMTY2NVYzNUgxMC42NjY1VjM3LjVIMzAuNjY2NVYzNUgyOC4xNjY1VjMyLjQ5OTlIMzYuOTE2NUMzOC45ODQ0IDMyLjQ5OTkgNDAuNjY2NSAzMC44MTc4IDQwLjY2NjUgMjguNzVWNi4yNDk5OEM0MC42NjY1IDQuMTgyMDkgMzguOTg0NCAyLjUgMzYuOTE2NSAyLjVaTTIwLjY2NjUgMzBDMTkuOTc2MiAzMCAxOS40MTY2IDI5LjQ0MDMgMTkuNDE2NiAyOC43NUMxOS40MTY2IDI4LjA1OTYgMTkuOTc2MyAyNy41MDAxIDIwLjY2NjUgMjcuNTAwMUMyMS4zNTY5IDI3LjUwMDEgMjEuOTE2NSAyOC4wNTk2IDIxLjkxNjUgMjguNzVDMjEuOTE2NSAyOS40NDAzIDIxLjM1NjggMzAgMjAuNjY2NSAzMFpNMzUuNjY2NiAyNUg1LjY2NjU0VjcuNDk5OTRIMzUuNjY2NlYyNVoiIGZpbGw9IiMyOTM1OTEiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF80MTA3XzMwNDciPgo8cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjY2NjUwNCkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
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
            image-name="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQxMDdfMzA1MikiPgo8cGF0aCBkPSJNMTQuNTgzNSAyOS4zNTM1VjM3LjA4MzVDMTQuNTgzNSAzNy42MjM1IDE0LjkzMDIgMzguMTAxOCAxNS40NDM1IDM4LjI3MThDMTUuNTcxOCAzOC4zMTM1IDE1LjcwMzUgMzguMzMzNSAxNS44MzM1IDM4LjMzMzVDMTYuMjIzNSAzOC4zMzM1IDE2LjYwMDIgMzguMTUwMiAxNi44NDAyIDM3LjgyMzVMMjEuMzYxOCAzMS42NzAyTDE0LjU4MzUgMjkuMzUzNVoiIGZpbGw9IiMyOTM1OTEiLz4KPHBhdGggZD0iTTM5LjQ3NTEgMC4yMzE4MTRDMzkuMDkxNyAtMC4wMzk4NTIzIDM4LjU4ODQgLTAuMDc2NTE5IDM4LjE3MTcgMC4xNDE4MTRMMC42NzE3NDEgMTkuNzI1MUMwLjIyODQwNyAxOS45NTY4IC0wLjAzMzI1OTIgMjAuNDMwMSAwLjAwMzQwNzQ2IDIwLjkyODVDMC4wNDE3NDA4IDIxLjQyODUgMC4zNzM0MDggMjEuODU1MSAwLjg0NTA3NCAyMi4wMTY4TDExLjI3MDEgMjUuNTgwMUwzMy40NzE3IDYuNTk2ODFMMTYuMjkxNyAyNy4yOTUxTDMzLjc2MzQgMzMuMjY2OEMzMy44OTM0IDMzLjMxMDEgMzQuMDMwMSAzMy4zMzM1IDM0LjE2NjcgMzMuMzMzNUMzNC4zOTM0IDMzLjMzMzUgMzQuNjE4NCAzMy4yNzE4IDM0LjgxNjcgMzMuMTUxOEMzNS4xMzM0IDMyLjk1ODUgMzUuMzQ4NCAzMi42MzM1IDM1LjQwMzQgMzIuMjY4NUwzOS45ODY3IDEuNDM1MTVDNDAuMDU1MSAwLjk2ODQ4MSAzOS44NTg0IDAuNTA1MTQ4IDM5LjQ3NTEgMC4yMzE4MTRaIiBmaWxsPSIjMjkzNTkxIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNDEwN18zMDUyIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
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
            image-name="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MSA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQxMDdfMzE1OSkiPgo8cGF0aCBkPSJNNDAuMjk2IDEzLjQ0NzVMMzguMDMzNSA0LjM5MjVDMzcuNzU2IDMuMjggMzYuNzU2IDIuNSAzNS42MDg1IDIuNUg1LjA2MUMzLjkxMzUgMi41IDIuOTEzNSAzLjI4IDIuNjMzNSA0LjM5MjVMMC4zNzA5OTYgMTMuNDQ3NUMwLjM0NTk5NiAxMy41NDUgMC4zMzM0OTYgMTMuNjQ3NSAwLjMzMzQ5NiAxMy43NUMwLjMzMzQ5NiAxNy4xOTUgMi45OTYgMjAgNi4yNzEgMjBDOC4xNzM1IDIwIDkuODcxIDE5LjA1MjUgMTAuOTU4NSAxNy41ODI1QzEyLjA0NiAxOS4wNTI1IDEzLjc0MzUgMjAgMTUuNjQ2IDIwQzE3LjU0ODUgMjAgMTkuMjQ2IDE5LjA1MjUgMjAuMzMzNSAxNy41ODI1QzIxLjQyMSAxOS4wNTI1IDIzLjExNiAyMCAyNS4wMjEgMjBDMjYuOTI2IDIwIDI4LjYyMSAxOS4wNTI1IDI5LjcwODUgMTcuNTgyNUMzMC43OTYgMTkuMDUyNSAzMi40OTEgMjAgMzQuMzk2IDIwQzM3LjY3MSAyMCA0MC4zMzM1IDE3LjE5NSA0MC4zMzM1IDEzLjc1QzQwLjMzMzUgMTMuNjQ3NSA0MC4zMjEgMTMuNTQ1IDQwLjI5NiAxMy40NDc1WiIgZmlsbD0iIzI5MzU5MSIvPgo8cGF0aCBkPSJNMzQuMzk2IDIyLjQ5OThDMzIuNjkzNSAyMi40OTk4IDMxLjA3NiAyMS45Nzk4IDI5LjcwODUgMjEuMDI5OEMyNi45NzM1IDIyLjkzMjMgMjMuMDY4NSAyMi45MzIzIDIwLjMzMzUgMjEuMDI5OEMxNy41OTg1IDIyLjkzMjMgMTMuNjkzNSAyMi45MzIzIDEwLjk1ODUgMjEuMDI5OEM5LjU5MSAyMS45Nzk4IDcuOTczNSAyMi40OTk4IDYuMjcxIDIyLjQ5OThDNS4wNDM1IDIyLjQ5OTggMy44ODYgMjIuMjEyMyAyLjgzMzUgMjEuNzIyM1YzNC45OTk4QzIuODMzNSAzNi4zNzk4IDMuOTUzNSAzNy40OTk4IDUuMzMzNSAzNy40OTk4SDE1LjMzMzVWMjcuNDk5OEgyNS4zMzM1VjM3LjQ5OThIMzUuMzMzNUMzNi43MTM1IDM3LjQ5OTggMzcuODMzNSAzNi4zNzk4IDM3LjgzMzUgMzQuOTk5OFYyMS43MjIzQzM2Ljc4MSAyMi4yMTIzIDM1LjYyMzUgMjIuNDk5OCAzNC4zOTYgMjIuNDk5OFoiIGZpbGw9IiMyOTM1OTEiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF80MTA3XzMxNTkiPgo8cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjMzMzQ5NikiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
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
            image-name="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MSA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQxMDdfMzE2NikiPgo8cGF0aCBkPSJNNC4xODIxMyAxOC44MjgxSDE1Ljk3OUMxNy45MTc2IDE4LjgyODEgMTkuNDk0NiAxNy4yNTExIDE5LjQ5NDYgMTUuMzEyNVYzLjUxNTYyQzE5LjQ5NDYgMS41NzcwMyAxNy45MTc2IDAgMTUuOTc5IDBINC4xODIxM0MyLjI0MzU0IDAgMC42NjY1MDQgMS41NzcwMyAwLjY2NjUwNCAzLjUxNTYyVjE1LjMxMjVDMC42NjY1MDQgMTcuMjUxMSAyLjI0MzU0IDE4LjgyODEgNC4xODIxMyAxOC44MjgxWk02LjYwNCA4LjI4MTI1SDguOTQ3NzVWNS45Mzc1QzguOTQ3NzUgNS4yODk3NyA5LjQ3MTg5IDQuNzY1NjIgMTAuMTE5NiA0Ljc2NTYyQzEwLjc2NzQgNC43NjU2MiAxMS4yOTE1IDUuMjg5NzcgMTEuMjkxNSA1LjkzNzVWOC4yODEyNUgxMy42MzUzQzE0LjI4MyA4LjI4MTI1IDE0LjgwNzEgOC44MDUzOSAxNC44MDcxIDkuNDUzMTJDMTQuODA3MSAxMC4xMDA5IDE0LjI4MyAxMC42MjUgMTMuNjM1MyAxMC42MjVIMTEuMjkxNVYxMi45Njg4QzExLjI5MTUgMTMuNjE2NSAxMC43Njc0IDE0LjE0MDYgMTAuMTE5NiAxNC4xNDA2QzkuNDcxODkgMTQuMTQwNiA4Ljk0Nzc1IDEzLjYxNjUgOC45NDc3NSAxMi45Njg4VjEwLjYyNUg2LjYwNEM1Ljk1NjI3IDEwLjYyNSA1LjQzMjEzIDEwLjEwMDkgNS40MzIxMyA5LjQ1MzEyQzUuNDMyMTMgOC44MDUzOSA1Ljk1NjI3IDguMjgxMjUgNi42MDQgOC4yODEyNVoiIGZpbGw9IiMyOTM1OTEiLz4KPHBhdGggZD0iTTM3LjE1MDkgMEgyNS4zNTRDMjMuNDE1NCAwIDIxLjgzODQgMS41NzcwMyAyMS44Mzg0IDMuNTE1NjJWMTUuMzEyNUMyMS44Mzg0IDE3LjI1MTEgMjMuNDE1NCAxOC44MjgxIDI1LjM1NCAxOC44MjgxSDM3LjE1MDlDMzkuMDg5NSAxOC44MjgxIDQwLjY2NjUgMTcuMjUxMSA0MC42NjY1IDE1LjMxMjVWMy41MTU2MkM0MC42NjY1IDEuNTc3MDMgMzkuMDg5NSAwIDM3LjE1MDkgMFpNMzQuODA3MSAxMC42MjVIMjcuNjk3OEMyNy4wNSAxMC42MjUgMjYuNTI1OSAxMC4xMDA5IDI2LjUyNTkgOS40NTMxMkMyNi41MjU5IDguODA1MzkgMjcuMDUgOC4yODEyNSAyNy42OTc4IDguMjgxMjVIMzQuODA3MUMzNS40NTQ5IDguMjgxMjUgMzUuOTc5IDguODA1MzkgMzUuOTc5IDkuNDUzMTJDMzUuOTc5IDEwLjEwMDkgMzUuNDU0OSAxMC42MjUgMzQuODA3MSAxMC42MjVaIiBmaWxsPSIjMjkzNTkxIi8+CjxwYXRoIGQ9Ik0zNy4xNTA5IDIxLjE3MTlIMjUuMzU0QzIzLjQxNTQgMjEuMTcxOSAyMS44Mzg0IDIyLjc0ODkgMjEuODM4NCAyNC42ODc1VjM2LjQ4NDRDMjEuODM4NCAzOC40MjMgMjMuNDE1NCA0MCAyNS4zNTQgNDBIMzcuMTUwOUMzOS4wODk1IDQwIDQwLjY2NjUgMzguNDIzIDQwLjY2NjUgMzYuNDg0NFYyNC42ODc1QzQwLjY2NjUgMjIuNzQ4OSAzOS4wODk1IDIxLjE3MTkgMzcuMTUwOSAyMS4xNzE5Wk0zNC44MDcxIDM0LjA2MjVIMjcuNjk3OEMyNy4wNSAzNC4wNjI1IDI2LjUyNTkgMzMuNTM4NCAyNi41MjU5IDMyLjg5MDZDMjYuNTI1OSAzMi4yNDI5IDI3LjA1IDMxLjcxODggMjcuNjk3OCAzMS43MTg4SDM0LjgwNzFDMzUuNDU0OSAzMS43MTg4IDM1Ljk3OSAzMi4yNDI5IDM1Ljk3OSAzMi44OTA2QzM1Ljk3OSAzMy41Mzg0IDM1LjQ1NDkgMzQuMDYyNSAzNC44MDcxIDM0LjA2MjVaTTM0LjgwNzEgMjkuMzc1SDI3LjY5NzhDMjcuMDUgMjkuMzc1IDI2LjUyNTkgMjguODUwOSAyNi41MjU5IDI4LjIwMzFDMjYuNTI1OSAyNy41NTU0IDI3LjA1IDI3LjAzMTIgMjcuNjk3OCAyNy4wMzEySDM0LjgwNzFDMzUuNDU0OSAyNy4wMzEyIDM1Ljk3OSAyNy41NTU0IDM1Ljk3OSAyOC4yMDMxQzM1Ljk3OSAyOC44NTA5IDM1LjQ1NDkgMjkuMzc1IDM0LjgwNzEgMjkuMzc1WiIgZmlsbD0iIzI5MzU5MSIvPgo8cGF0aCBkPSJNMTkuNDk0NiAzNi40ODQ0VjI0LjY4NzVDMTkuNDk0NiAyMi43NDg5IDE3LjkxNzYgMjEuMTcxOSAxNS45NzkgMjEuMTcxOUg0LjE4MjEzQzIuMjQzNTQgMjEuMTcxOSAwLjY2NjUwNCAyMi43NDg5IDAuNjY2NTA0IDI0LjY4NzVWMzYuNDg0NEMwLjY2NjUwNCAzOC40MjMgMi4yNDM1NCA0MCA0LjE4MjEzIDQwSDE1Ljk3OUMxNy45MTc2IDQwIDE5LjQ5NDYgMzguNDIzIDE5LjQ5NDYgMzYuNDg0NFpNMTMuNDMzOCAzMi4yMDRDMTMuODkxNiAzMi42NjE3IDEzLjg5MTYgMzMuNDAzNCAxMy40MzM4IDMzLjg2MTFDMTIuOTc2MSAzNC4zMTg4IDEyLjIzNDUgMzQuMzE4OCAxMS43NzY3IDMzLjg2MTFMMTAuMTE5NiAzMi4yMDRMOC40NjI1MiAzMy44NjExQzguMDA0NzkgMzQuMzE4OCA3LjI2MzE0IDM0LjMxODggNi44MDU0MSAzMy44NjExQzYuMzQ3NjggMzMuNDAzNCA2LjM0NzY4IDMyLjY2MTcgNi44MDU0MSAzMi4yMDRMOC40NjI1MiAzMC41NDY5TDYuODA1NDEgMjguODg5OEM2LjM0NzY4IDI4LjQzMiA2LjM0NzY4IDI3LjY5MDQgNi44MDU0MSAyNy4yMzI3QzcuMjYzMTQgMjYuNzc0OSA4LjAwNDc5IDI2Ljc3NDkgOC40NjI1MiAyNy4yMzI3TDEwLjExOTYgMjguODg5OEwxMS43NzY3IDI3LjIzMjdDMTIuMjM0NSAyNi43NzQ5IDEyLjk3NjEgMjYuNzc0OSAxMy40MzM4IDI3LjIzMjdDMTMuODkxNiAyNy42OTA0IDEzLjg5MTYgMjguNDMyIDEzLjQzMzggMjguODg5OEwxMS43NzY3IDMwLjU0NjlMMTMuNDMzOCAzMi4yMDRaIiBmaWxsPSIjMjkzNTkxIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNDEwN18zMTY2Ij4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC42NjY1MDQpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="
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
