<script setup>
// example components

import aboutStoryImage from "@/assets/img/about-story.svg";

// import CenteredBlogCard from "../../../../examples/cards/blogCards/CenteredBlogCard.vue";
</script>
<template>
  <!-- <section class="py-7"> -->
  <div>
    <div class="row">
      <div class="col-md-12">
        <button class="btn btn-outline-info btn-sm mt-4" disabled>
          Our Story
        </button>
        <h2 class="font-weight-bold">
          Stellar is specializing in ERP solutions designed for global
          retailers, offering a range of services related to any of Your
          business
        </h2>
      </div>
    </div>
    <!-- <div class="row align-items-center"> -->
    <div class="row mt-5">
      <div class="col-lg-6 col-sm-12 d-flex">
        <div
          class="card blur shadow-lg my-sm-0 my-sm-0 mt-0 mb-5"
          style="
            border-radius: 10px;
            overflow: hidden;
            width: 522px;
            height: 640px;
          "
          :style="`background-image: url(${aboutStoryImage});background-size: cover; background-position: center;`"
        ></div>
      </div>
      <div class="col-lg-6 col-sm-12 d-flex justify-content-end">
        <p>
          Founded with a vision to revolutionize enterprise resource planning,
          Stellar Gelora Technology has become a trusted partner for businesses
          seeking robust and adaptable ERP solutions. Our diverse portfolio
          caters to Retail, Manufacturing, Healthcare, Hospitality, and Food &
          Beverages, showcasing our commitment to industry-specific excellence.
          <br />
          <br />

          We specialize in delivering all-in-one ERP solutions for diverse
          sectors, with a special focus on premium retail. Our know-how covers
          Point of Sales, Back-Office Management, and Financial Management,
          giving clients top-notch tools to supercharge their operations.
          <br />
          <br />

          Our ERP solutions shine thanks to our focus on customization. Unlike
          many rivals, we skip the cookie-cutter approach and collaborate with
          clients to craft bespoke systems that mesh perfectly with their
          current workflows. This tailored method guarantees peak operational
          efficiency and effectiveness.
        </p>
        <!-- <p>
            We specialize in delivering all-in-one ERP solutions for diverse
            sectors, with a special focus on premium retail. Our know-how covers
            Point of Sales, Back-Office Management, and Financial Management,
            giving clients top-notch tools to supercharge their operations
          </p> -->
      </div>
    </div>
  </div>
  <!-- </section> -->
</template>
