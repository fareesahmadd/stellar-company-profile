<template>
  <div :class="typeSize === 'mobile' ? '' : 'container-fluid'">
    <div :class="typeSize !== 'desktop' ? 'row py-5' : 'row py-5 px-9'">
      <div :class="typeSize === 'mobile' ? 'col-12 ' : 'col-md-6 px-4'">
        <!-- <div class="row"> -->
        <div
          class="card"
          style="
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            height: 100%;
          "
        >
          <div class="card-body d-flex flex-column" style="flex: 1">
            <i class="fas fa-store fa-2x text-info"></i>
            <h5
              :class="
                typeSize === 'mobile'
                  ? 'card-title mt-3 text-md'
                  : 'card-title mt-3'
              "
            >
              Back-Office Management Resources
            </h5>
            <p
              :class="typeSize === 'mobile' ? 'card-text text-sm' : 'card-text'"
              style="font-size: 15px"
            >
              Explore our comprehensive ERP resources—guides, that designed to
              unlock the full potential.
            </p>
            <div class="mt-auto">
              <a href="" class="btn btn-outline-info">Download</a>
            </div>
          </div>
          <!-- </div> -->
        </div>
      </div>

      <div :class="typeSize === 'mobile' ? 'col-12 mt-4' : 'col-md-6 px-4'">
        <!-- <div class="row"> -->
        <div
          class="card"
          style="
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            height: 100%;
          "
        >
          <div class="card-body d-flex flex-column" style="flex: 1">
            <i class="fas fa-palette fa-2x text-info"></i>
            <h5
              :class="
                typeSize === 'mobile'
                  ? 'card-title mt-3 text-md'
                  : 'card-title mt-3'
              "
            >
              Contact with our experts
            </h5>
            <p
              :class="typeSize === 'mobile' ? 'card-text text-sm' : 'card-text'"
              style="font-size: 15px"
            >
              Reach out here to discuss options or problems. We'll be in touch
              within 24 hours.
            </p>
            <div class="mt-auto">
              <a href="" class="btn btn-outline-info">Get In Touch</a>
            </div>
          </div>
          <!-- </div> -->
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
