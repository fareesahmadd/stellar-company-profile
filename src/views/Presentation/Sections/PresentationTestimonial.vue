<script setup>
import DefaultReviewCard from "@/examples/cards/reviewCards/DefaultReviewCard.vue";
</script>
<template>
  <section class="py-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <button class="btn btn-outline-info btn-sm mt-4" disabled>
            Testimonial
          </button>
          <h2 class="font-weight-bold">Don’t just take our words</h2>
        </div>
        <div class="col-md-6 mt-6">
          <img
            class="opacity-7 float-end"
            src="@/assets/img/icon-caption.svg"
            style="height: 40px; width: 40px"
            alt="icon-caption"
          />
        </div>
      </div>
      <div class="row mt-6">
        <DefaultReviewCard
          image="@/assets/img/adobe-logo-color.svg"
          name="Naila Agung Sarasati"
          date="1 day ago"
          review='"We’re growing at a rapid pace, so we need a scalable solution that is affordable to us now and can flex to fit us as we get larger."'
          :rating="5.0"
        />
        <DefaultReviewCard
          image="@/assets/img/adobe-logo-color.svg"
          class="ms-md-auto"
          name="Naila Agung Sarasati"
          date="1 week ago"
          review='"We’re growing at a rapid pace, so we need a scalable solution that is affordable to us now and can flex to fit us as we get larger."'
          :rating="5.0"
        />

        <DefaultReviewCard
          image="@/assets/img/adobe-logo-color.svg"
          name="Naila Agung Sarasati"
          date="3 weeks ago"
          review='"We’re growing at a rapid pace, so we need a scalable solution that is affordable to us now and can flex to fit us as we get larger."'
          :rating="5.0"
        />
      </div>

      <!-- <hr class="horizontal dark my-5" />
      <div class="row">
        <div class="col-lg-2 col-md-4 col-6 ms-auto">
          <img
            class="w-100 opacity-6"
            src="@/assets/img/logos/gray-logos/logo-apple.svg"
            alt="Logo"
          />
        </div>
        <div class="col-lg-2 col-md-4 col-6">
          <img
            class="w-100 opacity-6"
            src="@/assets/img/logos/gray-logos/logo-facebook.svg"
            alt="Logo"
          />
        </div>
        <div class="col-lg-2 col-md-4 col-6">
          <img
            class="w-100 opacity-6"
            src="@/assets/img/logos/gray-logos/logo-nasa.svg"
            alt="Logo"
          />
        </div>
        <div class="col-lg-2 col-md-4 col-6 ms-lg-0 ms-md-auto">
          <img
            class="w-100 opacity-6"
            src="@/assets/img/logos/gray-logos/logo-vodafone.svg"
            alt="Logo"
          />
        </div>
        <div class="col-lg-2 col-md-4 col-6 me-md-auto mx-md-0 mx-auto">
          <img
            class="w-100 opacity-6"
            src="@/assets/img/logos/gray-logos/logo-digitalocean.svg"
            alt="Logo"
          />
        </div> -->
      <!-- </div> -->
    </div>
  </section>
</template>
