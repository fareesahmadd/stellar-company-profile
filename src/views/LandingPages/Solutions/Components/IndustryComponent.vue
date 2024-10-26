<script setup>
import retailImage from "@/assets/img/solutions/retail-image.png";
import cardBackground from "@/assets/img/solutions/background-card-solution.svg";

const toggleAccordion = (item) => {
  item.isOpen = !item.isOpen;
};

const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});

import { ref } from "vue";
import { useWindowsWidth } from "@/assets/js/useWindowsWidth";

const { type } = useWindowsWidth();
let typeSize = ref(type);
</script>

<template>
  <section :class="typeSize === 'mobile' ? '' : 'py-5'">
    <div
      :class="
        typeSize === 'mobile' || typeSize === 'medium' ? '' : 'container-fluid'
      "
    >
      <div
        class="row"
        :style="typeSize === 'mobile' ? 'height: 1000px' : 'height: 600px'"
      >
        <div :class="typeSize === 'mobile' ? 'col-md-6' : 'col-md-6'">
          <div
            class="card"
            :style="`background-image: url(${
              cardBackground || cardBackground
            }); background-size: cover; background-position: center;`"
            style="
              border-radius: 10px;
              overflow: hidden;
              width: 100%;
              height: 100%;
            "
          >
            <div class="card-body">
              <img
                :src="props.content.image"
                alt="icon-cashier"
                class="img-fluid"
                :style="imageStyle"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="container">
            <h2>{{ props.content.title }}</h2>
            <p class="text-md py-3">
              {{ props.content.description }}
            </p>

            <div class="accordion" id="stellarFaq">
              <div
                class="accordion-item"
                v-for="item in props.content.content"
                :key="item.id"
              >
                <h2 class="accordion-header" :id="'heading' + item.id">
                  <button
                    class="accordion-button border-bottom font-weight-bold lead"
                    type="button"
                    :data-bs-toggle="'collapse'"
                    :data-bs-target="'#collapse' + item.id"
                    aria-expanded="item.isOpen"
                    :aria-controls="'collapse' + item.id"
                    @click="toggleAccordion(item)"
                  >
                    {{ item.title }}
                    <i
                      :class="
                        item.isOpen
                          ? 'fas fa-chevron-up'
                          : 'fas fa-chevron-down'
                      "
                      class="text-xs pt-1 position-absolute end-0"
                      aria-hidden="true"
                    ></i>
                  </button>
                </h2>
                <div
                  :id="'collapse' + item.id"
                  class="accordion-collapse"
                  :class="{ show: item.isOpen }"
                  :style="{
                    maxHeight: item.isOpen ? '500px' : '0',
                    opacity: item.isOpen ? 1 : 0,
                    transition:
                      'max-height 0.5s ease-in-out, opacity 0.5s ease-in-out',
                  }"
                  :aria-labelledby="'heading' + item.id"
                  data-bs-parent="#stellarFaq"
                >
                  <div class="accordion-body text-muted">
                    {{ item.content }}
                  </div>
                </div>
              </div>
            </div>
            <!-- <div v-for="item in props.content.content" :key="item.title">
              <h3 class="font-weight-bold">{{ item.title }}</h3>
              <p>{{ item.content }}</p>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
