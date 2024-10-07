<script setup>
import retailImage from "@/assets/img/retail-image.svg";

defineProps({
  id: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  label: {
    type: [String, Object],
    text: String,
    class: String,
    default: () => ({
      class: "",
    }),
  },
  value: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "md",
  },
  error: {
    type: Boolean,
    default: false,
  },
  success: {
    type: Boolean,
    default: false,
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  inputClass: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
});
import { ref } from "vue";

const openAccordions = ref({});
const accordionItems = [
  {
    title: "01. Omnichannel Integration",
    content:
      "Seamless integration of POS systems with your ERP to streamline sales, returns, and customer management in real-time.",
    isOpen: false,
    direct: "/",
  },
  {
    title: "02. Real-Time Inventory Management",
    content:
      "Lorem ipsum dolor sit amet consectetur. Hendrerit egestas arcu massa lectus amet turpis hendrerit netus in. Est.",
    isOpen: false,
    direct: "/",
  },
  {
    title: "03. Customer Relationship Management (CRM)",
    content:
      "Implementation time varies depending on the complexity of your requirements. Our team will provide you with a realistic timeline after the initial assessment.",
    isOpen: false,
    direct: "/",
  },
];
</script>
<template>
  <section class="py-5">
    <div class="container-fluid">
      <div
        class="row"
        style="border-radius: 10px; overflow: hidden; height: 600px"
      >
        <div class="col-md-6">
          <div
            class="card"
            :style="`background-image: url(${retailImage});background-size: cover; background-position: center;`"
            style="
              border-radius: 10px;
              overflow: hidden;
              width: 100%;
              height: 100%;
            "
          ></div>
        </div>
        <div class="col-md-6">
          <div class="container">
            <h2 class="font-weight-bold">Reinvent Retail with energetic ERP</h2>
            <p>
              Elevate your brand to new heights ensuring your message reaches
              its full potential and captivates your audience.
            </p>
            <div class="accordion" id="stellarFaq">
              <div
                class="accordion-item"
                v-for="(item, index) in accordionItems"
                :key="index"
              >
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button border-bottom font-weight-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="'#collapseOne' + index"
                    aria-expanded="false"
                    :aria-controls="'collapseOne' + index"
                    @click="item.isOpen = !item.isOpen"
                  >
                    {{ item.title }}
                    <i
                      class="collapse-open fa fa-chevron-down text-xs pt-1 position-absolute end-0 me-3"
                      aria-hidden="true"
                    ></i>
                  </button>
                </h2>
                <div
                  :id="'collapseOne' + index"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#stellarFaq"
                  :class="{ show: openAccordions[index] }"
                >
                  <div class="accordion-body text-muted">
                    {{ item.content }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
