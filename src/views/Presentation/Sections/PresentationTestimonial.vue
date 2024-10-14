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
      <div class="row mt-6">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <div class="d-flex align-items-center justify-content-center">
            <button
              class="btn btn-outline-info mx-2"
              style="
                width: 100px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <i class="fas fa-chevron-left" style="font-size: large"></i>
            </button>
            <button
              class="btn btn-outline-info mx-2"
              style="
                width: 100px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <i class="fas fa-chevron-right" style="font-size: large"></i>
            </button>
          </div>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </section>
</template>
