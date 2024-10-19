<style scoped>
.accordion-collapse {
  overflow: hidden;
}
</style>
<script setup>
import { ref, computed, watch } from "vue";
import { useWindowsWidth } from "@/assets/js/useWindowsWidth";

const { type } = useWindowsWidth();
let typeSize = ref(type);

watch(
  () => type.value,
  (newValue) => {
    typeSize.value = newValue;
  }
);

const accordionItems = ref([
  {
    id: 1,
    title: "How can I get my customized ERP solution for my business?",
    content:
      "You can contact our sales team to discuss your specific needs and we'll guide you through the process of getting a tailored ERP solution.",
    isOpen: false,
  },
  {
    id: 2,
    title: "What is Stellar Gelora Tech?",
    content:
      "Lorem ipsum dolor sit amet consectetur. Hendrerit egestas arcu massa lectus amet turpis hendrerit netus in. Est.",
    isOpen: false,
  },
  {
    id: 3,
    title: "How long does it take to implement system from Stellar?",
    content:
      "Implementation time varies depending on the complexity of your requirements. Our team will provide you with a realistic timeline after the initial assessment.",
    isOpen: false,
  },
  {
    id: 4,
    title: "How secure is Stellar Gelora's ERP system?",
    content:
      "We prioritize data security and have implemented robust measures to ensure the confidentiality and integrity of your information.",
    isOpen: false,
  },
  {
    id: 5,
    title:
      "What kind of support does Stellar Gelora provide after implementation?",
    content:
      "We offer ongoing support and maintenance services to ensure your ERP system runs smoothly. You'll have access to our dedicated support team for any assistance you may need.",
    isOpen: false,
  },
]);

const faqStyle = computed(() => {
  switch (typeSize.value) {
    case "mobile":
      return { marginLeft: "0px", marginRight: "0px" };
    case "medium":
      return { marginLeft: "10px", marginRight: "70px" };
    case "tablet":
      return { marginLeft: "10px", marginRight: "120px" };
    default:
      // desktop
      return { marginLeft: "180px", marginRight: "160px" };
  }
});

const toggleAccordion = (item) => {
  item.isOpen = !item.isOpen;
};
</script>
<template>
  <section class="py-5">
    <div class="container-fluid">
      <div class="row">
        <div :class="typeSize === 'mobile' ? 'col-12' : 'col-md-6'">
          <button
            class="btn btn-outline-info btn-sm mt-4"
            :style="faqStyle"
            disabled
          >
            FAQ
          </button>
          <h2 class="font-weight-bold" :style="faqStyle">
            What people asking most
          </h2>
          <p :style="faqStyle">
            Find quick answers to commonly asked questions about Stellar. Have a
            question not answered?
          </p>
        </div>
        <div :class="typeSize === 'mobile' ? 'col-12' : 'col-md-6'">
          <div class="accordion" id="stellarFaq">
            <div
              class="accordion-item"
              v-for="(item, index) in accordionItems"
              :key="item.id"
            >
              <h2 class="accordion-header" :id="'heading' + item.id">
                <button
                  class="accordion-button border-bottom font-weight-bold"
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
                      item.isOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'
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
        </div>
      </div>
    </div>
  </section>
</template>
