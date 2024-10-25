<script setup>
import { onMounted, onUnmounted, computed, ref, watch } from "vue";
import { useWindowsWidth } from "@/assets/js/useWindowsWidth";
import FilledInfoCard from "../../../../examples/cards/infoCards/FilledInfoCard.vue";

const { type } = useWindowsWidth();
let typeSize = ref(type);

watch(
  () => type.value,
  (newValue) => {
    typeSize.value = newValue;
  }
);

// Data untuk FilledInfoCard
const filledInfoCards = ref([
  {
    icon: { component: "flag", color: "info" },
    title: "Swift PoS",
    description:
      "Manage transactions smoothly, and reduce checkout times with our PoS system.",
    action: {
      route:
        "https://www.creative-tim.com/learning-lab/vue/overview/material-kit/",
      label: { text: "Let's start", color: "white" },
    },
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQyMzRfMjQwNSkiPgo8cGF0aCBkPSJNNS4wMDAwMSAxNUM0Ljk5OTk0IDEyLjUyMyA1LjYxMzI2IDEwLjA4NDYgNi43ODUyMSA3LjkwMjRDNy45NTcxNyA1LjcyMDIyIDkuNjUxMjggMy44NjIyMyAxMS43MTYzIDIuNDk0MzNDMTMuNzgxMyAxLjEyNjQyIDE2LjE1MjkgMC4yOTExODUgMTguNjE5MyAwLjA2MzE5MjdDMjEuMDg1OCAtMC4xNjQ4IDIzLjU3MDMgMC4yMjE1NSAyNS44NTExIDEuMTg3NzRDMjguMTMxOCAyLjE1Mzk0IDMwLjEzNzggMy42Njk5IDMxLjY4OTkgNS42MDAyN0MzMy4yNDIgNy41MzA2NSAzNC4yOTIgOS44MTUzNCAzNC43NDU5IDEyLjI1MDRDMzUuMTk5OSAxNC42ODU0IDM1LjA0MzggMTcuMTk0OSAzNC4yOTE2IDE5LjU1NDlDMzMuNTM5MyAyMS45MTQ5IDMyLjIxNDQgMjQuMDUxOCAzMC40MzUgMjUuNzc1QzI5LjkyNzUgMjYuMjY1IDI5LjUzNzUgMjYuNzc1IDI5LjMwMjUgMjcuMzIyNUwyNy4zOTc1IDMxLjc0NUMyNy4zMDA5IDMxLjk2OTEgMjcuMTQwNyAzMi4xNjAxIDI2LjkzNjggMzIuMjk0MkMyNi43MzI4IDMyLjQyODQgMjYuNDk0MSAzMi40OTk5IDI2LjI1IDMyLjVIMTMuNzVDMTMuNTA1NSAzMi41MDA0IDEzLjI2NjIgMzIuNDI5MSAxMy4wNjE4IDMyLjI5NDlDMTIuODU3NCAzMi4xNjA3IDEyLjY5NjggMzEuOTY5NSAxMi42IDMxLjc0NUwxMC42OTc1IDI3LjMyQzEwLjQyMzEgMjYuNzM2OCAxMC4wMzg2IDI2LjIxMjIgOS41NjUwMSAyNS43NzVDOC4xMTg2MSAyNC4zNzgzIDYuOTY4ODMgMjIuNzA0MSA2LjE4NDQ1IDIwLjg1MjdDNS40MDAwNyAxOS4wMDEzIDQuOTk3MjMgMTcuMDEwNyA1LjAwMDAxIDE1Wk0xMi41IDM2LjI1QzEyLjUgMzUuOTE4NSAxMi42MzE3IDM1LjYwMDUgMTIuODY2MSAzNS4zNjYxQzEzLjEwMDYgMzUuMTMxNyAxMy40MTg1IDM1IDEzLjc1IDM1SDI2LjI1QzI2LjU4MTUgMzUgMjYuODk5NSAzNS4xMzE3IDI3LjEzMzkgMzUuMzY2MUMyNy4zNjgzIDM1LjYwMDUgMjcuNSAzNS45MTg1IDI3LjUgMzYuMjVDMjcuNSAzNi41ODE1IDI3LjM2ODMgMzYuODk5NCAyNy4xMzM5IDM3LjEzMzlDMjYuODk5NSAzNy4zNjgzIDI2LjU4MTUgMzcuNSAyNi4yNSAzNy41TDI1LjY5IDM4LjYxNzVDMjUuNDgyNSAzOS4wMzI3IDI1LjE2MzYgMzkuMzgxOSAyNC43Njg4IDM5LjYyNjFDMjQuMzc0MSAzOS44NzAzIDIzLjkxOTIgMzkuOTk5NyAyMy40NTUgNDBIMTYuNTQ1QzE2LjA4MDkgMzkuOTk5NyAxNS42MjU5IDM5Ljg3MDMgMTUuMjMxMiAzOS42MjYxQzE0LjgzNjUgMzkuMzgxOSAxNC41MTc1IDM5LjAzMjcgMTQuMzEgMzguNjE3NUwxMy43NSAzNy41QzEzLjQxODUgMzcuNSAxMy4xMDA2IDM3LjM2ODMgMTIuODY2MSAzNy4xMzM5QzEyLjYzMTcgMzYuODk5NCAxMi41IDM2LjU4MTUgMTIuNSAzNi4yNVoiIGZpbGw9IiMyOTM1OTEiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF80MjM0XzI0MDUiPgo8cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==",
  },
  {
    icon: { component: "inventory", color: "info" },
    title: "Inventory Tracking",
    description:
      "Monitor inventory in real-time, automate restocking, and minimize waste.",
    action: {
      route:
        "https://www.creative-tim.com/learning-lab/vue/overview/material-kit/",
      label: { text: "Let's start", color: "white" },
    },
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQyMzRfMjQwMikiPgo8cGF0aCBkPSJNMzEuMjUgNDBDMzMuNTcwNiA0MCAzNS43OTYyIDM5LjA3ODEgMzcuNDM3MiAzNy40MzcyQzM5LjA3ODEgMzUuNzk2MiA0MCAzMy41NzA2IDQwIDMxLjI1QzQwIDI4LjkyOTQgMzkuMDc4MSAyNi43MDM4IDM3LjQzNzIgMjUuMDYyOEMzNS43OTYyIDIzLjQyMTkgMzMuNTcwNiAyMi41IDMxLjI1IDIyLjVDMjguOTI5NCAyMi41IDI2LjcwMzggMjMuNDIxOSAyNS4wNjI4IDI1LjA2MjhDMjMuNDIxOSAyNi43MDM4IDIyLjUgMjguOTI5NCAyMi41IDMxLjI1QzIyLjUgMzMuNTcwNiAyMy40MjE5IDM1Ljc5NjIgMjUuMDYyOCAzNy40MzcyQzI2LjcwMzggMzkuMDc4MSAyOC45Mjk0IDQwIDMxLjI1IDQwWk0zNS40NDc1IDI4Ljc2NzVMMzIuMTEgMzQuMzMyNUMzMS45NjMzIDM0LjU3NyAzMS43NjI4IDM0Ljc4NDggMzEuNTIzOCAzNC45NDAyQzMxLjI4NDcgMzUuMDk1NSAzMS4wMTM0IDM1LjE5NDMgMzAuNzMwNCAzNS4yMjlDMzAuNDQ3NCAzNS4yNjM3IDMwLjE2MDIgMzUuMjMzNCAyOS44OTA3IDM1LjE0MDVDMjkuNjIxMiAzNS4wNDc1IDI5LjM3NjQgMzQuODk0MyAyOS4xNzUgMzQuNjkyNUwyNy4yNCAzMi43NkMyNy4wMDUzIDMyLjUyNTMgMjYuODczNCAzMi4yMDY5IDI2Ljg3MzQgMzEuODc1QzI2Ljg3MzQgMzEuNTQzMSAyNy4wMDUzIDMxLjIyNDcgMjcuMjQgMzAuOTlDMjcuNDc0NyAzMC43NTUzIDI3Ljc5MzEgMzAuNjIzNCAyOC4xMjUgMzAuNjIzNEMyOC40NTY5IDMwLjYyMzQgMjguNzc1MyAzMC43NTUzIDI5LjAxIDMwLjk5TDMwLjM3NzUgMzIuMzZMMzMuMzAyNSAyNy40ODI1QzMzLjM4NjkgMjcuMzQxNyAzMy40OTgyIDI3LjIxODggMzMuNjMgMjcuMTIxQzMzLjc2MTkgMjcuMDIzMSAzMy45MTE3IDI2Ljk1MjIgMzQuMDcwOSAyNi45MTIzQzM0LjIzMDIgMjYuODcyNCAzNC4zOTU4IDI2Ljg2NDIgMzQuNTU4MiAyNi44ODgzQzM0LjcyMDYgMjYuOTEyMyAzNC44NzY3IDI2Ljk2ODEgMzUuMDE3NSAyNy4wNTI1QzM1LjE1ODMgMjcuMTM2OSAzNS4yODEyIDI3LjI0ODIgMzUuMzc5IDI3LjM4QzM1LjQ3NjkgMjcuNTExOSAzNS41NDc4IDI3LjY2MTcgMzUuNTg3NyAyNy44MjA5QzM1LjYyNzYgMjcuOTgwMiAzNS42MzU4IDI4LjE0NTggMzUuNjExNyAyOC4zMDgyQzM1LjU4NzcgMjguNDcwNiAzNS41MzE5IDI4LjYyNjcgMzUuNDQ3NSAyOC43Njc1Wk0yMCAyLjVDMTYuMDY3NSAyLjUgMTIuNDQ1IDMuMjIyNSA5Ljc2IDQuNDQyNUM3LjE4NzUgNS42MTI1IDUgNy40ODI1IDUgMTBDNSAxMi41MTc1IDcuMTg3NSAxNC4zODc1IDkuNzYgMTUuNTU3NUMxMi40NDUgMTYuNzc3NSAxNi4wNjc1IDE3LjUgMjAgMTcuNUMyMy45MzI1IDE3LjUgMjcuNTU1IDE2Ljc3NzUgMzAuMjQgMTUuNTU3NUMzMi44MTI1IDE0LjM4NzUgMzUgMTIuNTE3NSAzNSAxMEMzNSA3LjQ4MjUgMzIuODEyNSA1LjYxMjUgMzAuMjQgNC40NDI1QzI3LjU1NSAzLjIyMjUgMjMuOTMyNSAyLjUgMjAgMi41WiIgZmlsbD0iIzI5MzU5MSIvPgo8cGF0aCBkPSJNNSAxNy40OTk4VjE1LjQwMjNDNi4xNDI1IDE2LjQ4MjMgNy41MSAxNy4yNzk4IDguNzI1IDE3LjgzMjNDMTEuODA1IDE5LjIzMjMgMTUuNzk1IDE5Ljk5OTggMjAgMTkuOTk5OEMyNC4yMDUgMTkuOTk5OCAyOC4xOTUgMTkuMjMyMyAzMS4yNzUgMTcuODMyM0MzMi40OSAxNy4yODIzIDMzLjg1NzUgMTYuNDgyMyAzNSAxNS40MDIzVjE3LjQ5OThDMzUgMTguNTU5OCAzNC42MTI1IDE5LjUwNDggMzMuOTcyNSAyMC4zMzIzQzMxLjczNTYgMTkuNzc4MSAyOS4zODI3IDE5LjkyMjYgMjcuMjMwNSAyMC43NDY0QzI1LjA3ODIgMjEuNTcwMiAyMy4yMzAxIDIzLjAzMzcgMjEuOTM1IDI0LjkzOThDMjEuMjkwOCAyNC45ODA3IDIwLjY0NTUgMjUuMDAwNyAyMCAyNC45OTk4QzE2LjA2NzUgMjQuOTk5OCAxMi40NDUgMjQuMjc3MyA5Ljc2IDIzLjA1NzNDNy4xODc1IDIxLjg4NzMgNSAyMC4wMTczIDUgMTcuNDk5OFpNMjAuNjQyNSAyNy40OTQ4TDIwIDI3LjQ5OThDMTUuNzk1IDI3LjQ5OTggMTEuODA1IDI2LjczMjMgOC43MjUgMjUuMzMyM0M3LjUxIDI0Ljc4MjMgNi4xNDI1IDIzLjk4MjMgNSAyMi45MDIzVjI0Ljk5OThDNSAyNy41MTczIDcuMTg3NSAyOS4zODczIDkuNzYgMzAuNTU3M0MxMi40NDUgMzEuNzc3MyAxNi4wNjc1IDMyLjQ5OTggMjAgMzIuNDk5OEgyMC4wNjc1QzE5Ljg4MjcgMzAuODA5NSAyMC4wNzkyIDI5LjA5OTIgMjAuNjQyNSAyNy40OTQ4Wk0yMC42Mzc1IDM0Ljk5NDhMMjAgMzQuOTk5OEMxNS43OTUgMzQuOTk5OCAxMS44MDUgMzQuMjMyMyA4LjcyNSAzMi44MzIzQzcuNTEgMzIuMjgyMyA2LjE0MjUgMzEuNDgyMyA1IDMwLjQwMjNWMzIuNDk5OEM1IDM1LjAxNzMgNy4xODc1IDM2Ljg4NzMgOS43NiAzOC4wNTczQzEyLjQ0NSAzOS4yNzczIDE2LjA2NzUgMzkuOTk5OCAyMCAzOS45OTk4QzIxLjM0IDM5Ljk5OTggMjIuNjQ1IDM5LjkxNDggMjMuODg3NSAzOS43NTczQzIyLjQwODggMzguNDc5MSAyMS4yODg3IDM2LjgzNzcgMjAuNjM3NSAzNC45OTQ4WiIgZmlsbD0iIzI5MzU5MSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzQyMzRfMjQwMiI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",
  },
  {
    icon: { component: "computer", color: "info" },
    title: "Financial Reports",
    description:
      "Track expenses and manage budgets with precision, all from a single, easy-to-use platform.",
    action: {
      route:
        "https://www.creative-tim.com/learning-lab/vue/overview/material-kit/",
      label: { text: "Let's start", color: "white" },
    },
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQyMzRfMjQwNykiPgo8cGF0aCBkPSJNMCA1QzAgMy42NzM5MiAwLjUyNjc4NCAyLjQwMjE1IDEuNDY0NDcgMS40NjQ0N0MyLjQwMjE1IDAuNTI2Nzg0IDMuNjczOTIgMCA1IDBMMjUgMEMyNi4zMjYxIDAgMjcuNTk3OSAwLjUyNjc4NCAyOC41MzU1IDEuNDY0NDdDMjkuNDczMiAyLjQwMjE1IDMwIDMuNjczOTIgMzAgNVYxMEgzNUMzNi4zMjYxIDEwIDM3LjU5NzkgMTAuNTI2OCAzOC41MzU1IDExLjQ2NDVDMzkuNDczMiAxMi40MDIxIDQwIDEzLjY3MzkgNDAgMTVWMzVDNDAgMzYuMzI2MSAzOS40NzMyIDM3LjU5NzkgMzguNTM1NSAzOC41MzU1QzM3LjU5NzkgMzkuNDczMiAzNi4zMjYxIDQwIDM1IDQwSDE1QzEzLjY3MzkgNDAgMTIuNDAyMSAzOS40NzMyIDExLjQ2NDUgMzguNTM1NUMxMC41MjY4IDM3LjU5NzkgMTAgMzYuMzI2MSAxMCAzNVYzMEg1QzMuNjczOTIgMzAgMi40MDIxNSAyOS40NzMyIDEuNDY0NDcgMjguNTM1NUMwLjUyNjc4NCAyNy41OTc5IDAgMjYuMzI2MSAwIDI1VjVaTTMwIDEwSDEyLjVDMTEuODM3IDEwIDExLjIwMTEgMTAuMjYzNCAxMC43MzIyIDEwLjczMjJDMTAuMjYzNCAxMS4yMDExIDEwIDExLjgzNyAxMCAxMi41VjMwSDI3LjVDMjguMTYzIDMwIDI4Ljc5ODkgMjkuNzM2NiAyOS4yNjc4IDI5LjI2NzhDMjkuNzM2NiAyOC43OTg5IDMwIDI4LjE2MyAzMCAyNy41VjEwWiIgZmlsbD0iIzI5MzU5MSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzQyMzRfMjQwNyI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",
  },
]);

// Hooks
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
    <div
      :class="
        typeSize === 'mobile'
          ? 'card gradient-background card-body shadow-none'
          : 'card gradient-background card-body shadow-none mx-3 mx-md-4'
      "
      style="border-radius: 30px"
    >
      <div class="text-center mb-5">
        <button class="btn btn-outline-info btn-sm mt-4" disabled>
          Our Values
        </button>
        <h2 v-if="typeSize === 'desktop'" class="font-weight-bold px-9">
          Values that guide our success
        </h2>
        <h3 v-if="typeSize !== 'desktop'" class="font-weight-bold">
          Values that guide our success
        </h3>
      </div>
      <div class="row mb-4 px-5">
        <div
          v-for="(card, index) in filledInfoCards"
          :key="index"
          class="col-lg-4"
        >
          <FilledInfoCard
            class="p-4"
            :image-name="card.image"
            :icon="card.icon"
            :route-name="currentRouteName"
            :title="card.title"
            :description="card.description"
            :action="card.action"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8">
          <div class="text-center mt-7 mb-4">
            <img
              class="opacity-7"
              src="@/assets/img/icon-caption-info.svg"
              style="height: 35px; width: 35px"
              alt="icon-caption"
            />
          </div>
          <div class="text-center mb-5">
            <p class="quote">
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
        </div>
      </div>
    </div>
  </div>
</template>
