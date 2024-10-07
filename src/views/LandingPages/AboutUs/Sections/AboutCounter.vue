<script setup>
import DefaultCounterCard from "../../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>

<template>
  <section class="pt-3" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
            <div class="col-md-3 position-relative">
              <DefaultCounterCard
                divider-size="80px"
                color="dark"
                description="Products"
                :count="3"
                divider="vertical"
              />
            </div>
            <div class="col-md-3 position-relative">
              <DefaultCounterCard
                divider-size="80px"
                color="dark"
                description="Clients"
                :count="20"
                suffix="+"
                divider="vertical"
              />
            </div>
            <div class="col-md-3 position-relative">
              <DefaultCounterCard
                divider-size="80px"
                color="dark"
                description="Continents"
                :count="2"
                divider="vertical"
              />
            </div>
            <div class="col-md-3">
              <DefaultCounterCard
                divider-size="80px"
                color="dark"
                description="Countries"
                :count="12"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
