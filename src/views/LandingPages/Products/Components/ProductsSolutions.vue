<template>
  <div class="container-fluid">
    <div class="row py-5">
      <div class="text-center mb-5 px-9">
        <button class="btn btn-outline-info btn-sm mt-4" disabled>
          Solutions
        </button>
        <h2 class="font-weight-bold px-10">
          Empower your business with flexible POS software.
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
      <div class="text-center px-11 mt-7 mb-4">
        <img
          class="opacity-7"
          src="@/assets/img/icon-caption-info.svg"
          style="height: 35px; width: 35px"
          alt="icon-caption"
        />
      </div>
      <div class="text-center mb-5 px-11">
        <p class="px-4">
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

<script setup>
import vueMkHeader from "@/assets/img/background-home.png";
</script>
