<template>
  <div class="container-fluid">
    <div class="row py-5">
      <div class="col-md-6" style="padding-right: 40px">
        <button class="btn btn-outline-info btn-sm mt-4" disabled>
          Why choose us?
        </button>
        <h2 class="text-dark mb-0">
          Personalized for premium<br />
          worldwide retail
        </h2>
        <p class="lead mt-4">
          Elevate your brand to new heights ensuring your message reaches its
          full potential and captivates your audience.
        </p>
        <hr :class="`horizontal dark mt-4 mb-4`" />

        <div class="row">
          <div class="col-md-6">
            <div class="card shadow-none">
              <div class="card-body">
                <img
                  src="@/assets/img/icons/icon-paint.svg"
                  alt="icon-paint"
                  class="img-fluid"
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
        <div class="row">
          <div class="col-md-6">
            <div class="card shadow-none">
              <div class="card-body">
                <img
                  src="@/assets/img/icons/icon-cashier.svg"
                  alt="icon-cashier"
                  class="img-fluid"
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
        <button class="btn btn-outline-info mt-4">Learn more</button>
      </div>
      <div class="col-md-6 p-0">
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
  </div>
</template>

<script setup>
import vueMkHeader from "@/assets/img/superiority-image.svg";
</script>
