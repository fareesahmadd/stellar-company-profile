<template>
  <div class="container-fluid">
    <div
      :class="
        typeSize === 'mobile' || typeSize === 'medium' ? 'row' : 'row py-5'
      "
    >
      <div v-if="typeSize === 'mobile' || typeSize === 'medium'" class="col-12">
        <div
          class="card mt-4"
          :style="`background-image: url(${vueMkHeader});background-size: cover; background-position: top left;`"
          style="
            border-radius: 10px;
            overflow: hidden;
            width: 100%;
            height: 343px;
          "
        ></div>
      </div>
      <div
        :class="
          typeSize === 'mobile' || typeSize === 'medium' ? 'col-12' : 'col-md-6'
        "
        :style="
          typeSize === 'mobile' || typeSize === 'medium'
            ? 'padding-right-0px'
            : 'padding-right: 40px'
        "
      >
        <button class="btn btn-outline-info btn-sm mt-4" disabled>
          Why choose us?
        </button>
        <h2
          v-if="typeSize !== 'mobile' && typeSize !== 'medium'"
          class="text-dark mb-0"
        >
          Personalized for premium<br />
          worldwide retail
        </h2>
        <h3
          v-if="typeSize === 'mobile' || typeSize === 'medium'"
          class="text-dark mb-0"
        >
          Personalized for premium<br />
          worldwide retail
        </h3>
        <p
          :class="
            typeSize === 'mobile' || typeSize === 'medium'
              ? 'text-sm'
              : 'lead mt-4'
          "
        >
          Elevate your brand to new heights ensuring your message reaches its
          full potential and captivates your audience.
        </p>
        <hr :class="`horizontal dark mt-4 mb-4`" />

        <div v-if="typeSize !== 'mobile' && typeSize !== 'medium'" class="row">
          <div class="col-md-6">
            <div class="card shadow-none">
              <div class="card-body">
                <img
                  src="@/assets/img/icons/icon-paint.svg"
                  alt="icon-paint"
                  class="img-fluid"
                  :style="imageStyle"
                />
                <h5 class="card-title mt-4">Tailored Customization</h5>
                <p class="card-text">
                  Our ERP solutions are designed specifically to ensuring every
                  feature aligns with your brand's unique needs.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card shadow-none">
              <div class="card-body">
                <img
                  src="@/assets/img/icons/icon-price-tag.svg"
                  alt="icon-price-tag"
                  class="img-fluid"
                  :style="imageStyle"
                />
                <h5 class="card-title mt-3">Affordable Excellence</h5>
                <p class="card-text">
                  Stellar ERP delivers premium retail solutions at
                  budget-friendly prices, elevate your operations without
                  breaking the bank.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="typeSize !== 'mobile' && typeSize !== 'medium'" class="row">
          <div class="col-md-6">
            <div class="card shadow-none">
              <div class="card-body">
                <img
                  src="@/assets/img/icons/icon-cashier.svg"
                  alt="icon-cashier"
                  class="img-fluid"
                  :style="imageStyle"
                />
                <h5 class="card-title mt-4">Made for Retail</h5>
                <p class="card-text">
                  Streamline your operations with our efficient processes,
                  reducing downtime and boosting productivity.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card shadow-none">
              <div class="card-body">
                <img
                  src="@/assets/img/icons/icon-support.svg"
                  alt="icon-support"
                  class="img-fluid"
                  :style="imageStyle"
                />
                <h5 class="card-title mt-3">Endless Support</h5>
                <p class="card-text">
                  Dedicated support team to ensure your system runs smoothly and
                  any issues are resolved swiftly.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          v-if="typeSize !== 'mobile' && typeSize !== 'medium'"
          class="btn btn-outline-info mt-4"
        >
          Learn more
        </button>
      </div>
      <div
        v-if="typeSize !== 'mobile' && typeSize !== 'medium'"
        class="col-md-6"
      >
        <div
          class="card mt-4"
          :style="`background-image: url(${vueMkHeader});background-size: cover; background-position: left;`"
          style="
            border-radius: 10px;
            overflow: hidden;
            width: 100%;
            height: 800px;
          "
        ></div>
      </div>
    </div>

    <!-- mobile -->
    <div v-if="typeSize === 'mobile' || typeSize === 'medium'">
      <div class="row mb-4">
        <div class="col-6">
          <img
            src="@/assets/img/icons/icon-paint.svg"
            alt="icon-paint"
            class="img-fluid"
            :style="imageStyle"
          />
          <h5 class="card-title text-lg mt-4">Tailored Customization</h5>
          <p class="card-text text-sm">
            Our ERP solutions are designed specifically to ensuring every
            feature aligns with your brand's unique needs.
          </p>
        </div>
        <div class="col-6">
          <img
            src="@/assets/img/icons/icon-price-tag.svg"
            alt="icon-price-tag"
            class="img-fluid"
            :style="imageStyle"
          />
          <h5 class="card-title mt-3 text-lg">Affordable Excellence</h5>
          <p class="card-text text-sm">
            Stellar ERP delivers premium retail solutions at budget-friendly
            prices, elevate your operations without breaking the bank.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <img
            src="@/assets/img/icons/icon-cashier.svg"
            alt="icon-cashier"
            class="img-fluid"
            :style="imageStyle"
          />
          <h5 class="card-title mt-4 text-lg">Made for Retail</h5>
          <p class="card-text text-sm">
            Streamline your operations with our efficient processes, reducing
            downtime and boosting productivity.
          </p>
        </div>
        <div class="col-6">
          <img
            src="@/assets/img/icons/icon-support.svg"
            alt="icon-support"
            class="img-fluid"
            :style="imageStyle"
          />
          <h5 class="card-title mt-3 text-lg">Endless Support</h5>
          <p class="card-text text-sm">
            Dedicated support team to ensure your system runs smoothly and any
            issues are resolved swiftly.
          </p>
        </div>
      </div>
      <button
        v-if="typeSize === 'mobile' || typeSize === 'medium'"
        class="btn btn-outline-info mt-4"
      >
        Learn more
      </button>
    </div>
  </div>
</template>

<script setup>
import vueMkHeader from "@/assets/img/superiority-image.svg";
import { ref, watch, computed } from "vue";
import { useWindowsWidth } from "@/assets/js/useWindowsWidth";

// set nav color on mobile && desktop

const { type } = useWindowsWidth();
let typeSize = ref(type);

watch(
  () => type.value,
  (newValue) => {
    typeSize.value = newValue;
  }
);

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
