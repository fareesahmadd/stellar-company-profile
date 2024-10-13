<template>
  <div class="container-fluid">
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
      <div class="row mt-n4">
        <div class="col-lg-7 mx-auto">
          <div class="nav-wrapper position-relative end-0">
            <ul
              class="nav nav-pills nav-fill p-1"
              role="tablist"
              style="position: relative; z-index: 0"
            >
              <li class="nav-item">
                <a
                  class="nav-link mb-0 px-4 py-1 active"
                  data-bs-toggle="tab"
                  href="#profile-tabs-simple"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="true"
                >
                  Retail
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mb-0 px-0 py-1"
                  data-bs-toggle="tab"
                  href="#dashboard-tabs-simple"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                >
                  Manufacturing
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mb-0 px-2 py-1"
                  data-bs-toggle="tab"
                  href="#dashboard-tabs-simple"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                >
                  Healthcare
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mb-0 px-2 py-1"
                  data-bs-toggle="tab"
                  href="#dashboard-tabs-simple"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                >
                  Hospitality
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <IndustryView />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

import IndustryView from "./Components/IndustryView.vue";

import setNavPills from "@/assets/js/nav-pills.js";

onMounted(() => {
  setNavPills();
});
</script>
