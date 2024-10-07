<script setup>
import { ref } from "vue";
// let showDropdown = ref(false);
// let showDropup = ref(false);
// import DefaultReviewCard from "@/examples/cards/reviewCards/DefaultReviewCard.vue";

const openAccordions = ref({}); // Or use an array: ref([false, false, false, ...])

// const toggleAccordion = (index) => {
//   openAccordions.value[index] = !openAccordions.value[index];
// };

const accordionItems = [
  {
    title: "How can I get my customized ERP solution for my business?",
    content:
      "You can contact our sales team to discuss your specific needs and we'll guide you through the process of getting a tailored ERP solution.",
    isOpen: false,
  },
  {
    title: "What is Stellar Gelora Tech?",
    content:
      "Lorem ipsum dolor sit amet consectetur. Hendrerit egestas arcu massa lectus amet turpis hendrerit netus in. Est.",
    isOpen: false,
  },
  {
    title: "How long does it take to implement system from Stellar?",
    content:
      "Implementation time varies depending on the complexity of your requirements. Our team will provide you with a realistic timeline after the initial assessment.",
    isOpen: false,
  },
  {
    title: "How secure is Stellar Gelora's ERP system?",
    content:
      "We prioritize data security and have implemented robust measures to ensure the confidentiality and integrity of your information.",
    isOpen: false,
  },
  {
    title:
      "What kind of support does Stellar Gelora provide after implementation?",
    content:
      "We offer ongoing support and maintenance services to ensure your ERP system runs smoothly. You'll have access to our dedicated support team for any assistance you may need.",
    isOpen: false,
  },
];
</script>
<template>
  <section class="py-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <button
            class="btn btn-outline-info btn-sm mt-4"
            style="margin-left: 200px; margin-right: 50px"
            disabled
          >
            FAQ
          </button>
          <h2
            class="font-weight-bold"
            style="margin-left: 200px; margin-right: 50px"
          >
            What peoples asking most
          </h2>
          <p style="margin-left: 200px; margin-right: 50px">
            Find quick answers to commonly asked questions about Stellar. Have a
            question not answered?
          </p>
        </div>
        <div class="col-md-6">
          <div class="container">
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
