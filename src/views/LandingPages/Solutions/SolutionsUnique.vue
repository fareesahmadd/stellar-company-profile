<template>
  <div class="container-fluid">
    <div class="row py-5">
      <div class="text-center mb-5 px-9">
        <h2 class="font-weight-bold px-11">
          Every business is unique, so is Yours.
        </h2>
      </div>
      <div class="col-md-4 px-3">
        <div
          class="card"
          :style="`background-image: url(${vueMkHeader})`"
          style="
            border-radius: 10px;
            overflow: hidden;
            width: 100%;
            height: 100%;
          "
        >
          <div class="card-title px-3 py-3">
            <i class="fas fa-palette fa-2x text-white"></i>
          </div>
          <div class="card-body d-flex flex-column justify-content-end">
            <h5 class="card-title text-white mt-8">
              Personalized Customization
            </h5>
            <p class="card-text text-white" style="font-size: 15px">
              Adapt Stellar ERP to your unique retail processes, ensuring a
              perfect fit for your business needs.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4 px-4">
        <div class="row">
          <div class="card" style="border-radius: 10px">
            <div class="card-body">
              <i class="fas fa-store fa-2x text-info"></i>
              <h5 class="card-title mt-3">Premium Meets Practical</h5>
              <p class="card-text" style="font-size: 15px">
                Elevate operations with our premium retail solutions without
                breaking the bank.
              </p>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="card" style="border-radius: 10px">
            <div class="card-body">
              <i class="fas fa-palette fa-2x text-info"></i>
              <h5 class="card-title mt-3">Designed for Retail</h5>
              <p class="card-text" style="font-size: 15px">
                Stellar ERP ecosystem is built to address all retail-specific
                challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 px-4">
        <div class="row">
          <div class="card" style="border-radius: 10px">
            <div class="card-body">
              <i class="fas fa-palette fa-2x text-info"></i>
              <h5 class="card-title mt-3">Worldwide Scalability</h5>
              <p class="card-text" style="font-size: 15px">
                Expand with a system designed for multiple locations,
                currencies, and regulations.
              </p>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="card" style="border-radius: 10px">
            <div class="card-body">
              <i class="fas fa-palette fa-2x text-info"></i>
              <h5 class="card-title mt-3">24/7 Customer Support</h5>
              <p class="card-text" style="font-size: 15px">
                Our dedicated team of retail ERP experts is always available to
                assist you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import vueMkHeader from "@/assets/img/background-home.png";
</script>
