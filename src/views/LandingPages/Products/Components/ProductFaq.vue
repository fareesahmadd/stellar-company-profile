<script setup>
import { ref, computed, watch } from "vue";
import { useWindowsWidth } from "@/assets/js/useWindowsWidth";
import { useRoute } from "vue-router";
const currentRouteName = computed(() => {
  return useRoute().name;
});

const { type } = useWindowsWidth();
let typeSize = ref(type);

watch(
  () => type.value,
  (newValue) => {
    typeSize.value = newValue;
  }
);

const accordionItems = computed(() => {
  switch (currentRouteName.value) {
    case "products-pos":
      return accordionItemsPos.value;
    case "products-bom":
      return accordionItemsBom.value;
    case "products-fm":
      return accordionItemsFm.value;
    default:
      return []; // Kembalikan array kosong jika tidak ada yang cocok
  }
});
const accordionItemsPos = ref([
  {
    id: 1,
    title: "What is Stellar Point of Sales (POS)?",
    content:
      "You can contact our sales team to discuss your specific needs and we'll guide you through the process of getting a tailored ERP solution.",
    isOpen: false,
    type: "pos",
  },
  {
    id: 2,
    title: "What are the system requirements for the POS?",
    content:
      "Lorem ipsum dolor sit amet consectetur. Hendrerit egestas arcu massa lectus amet turpis hendrerit netus in. Est.",
    isOpen: false,
    type: "pos",
  },
  {
    id: 3,
    title: "Will Stellar POS works on any of my device?",
    content:
      "Implementation time varies depending on the complexity of your requirements. Our team will provide you with a realistic timeline after the initial assessment.",
    isOpen: false,
    type: "fm",
  },
  {
    id: 4,
    title:
      "What kind of payment method does Stellar provide for the POS integration?",
    content:
      "We prioritize data security and have implemented robust measures to ensure the confidentiality and integrity of your information.",
    isOpen: false,
    type: "fm",
  },
  {
    id: 5,
    title: "Can i track the sales, expenses, tax and operational with the POS?",
    content:
      "We offer ongoing support and maintenance services to ensure your ERP system runs smoothly. You'll have access to our dedicated support team for any assistance you may need.",
    isOpen: false,
    type: "bom",
  },
]);

const accordionItemsBom = ref([
  {
    id: 1,
    title: "What is Back-office Management ERP?",
    content:
      "Lorem ipsum dolor sit amet consectetur. Hendrerit egestas arcu massa lectus amet turpis hendrerit netus in. Est.",
    isOpen: false,
    type: "pos",
  },
  {
    id: 2,
    title: "What industries can benefit from Back-office Management ERP?",
    content:
      "Lorem ipsum dolor sit amet consectetur. Hendrerit egestas arcu massa lectus amet turpis hendrerit netus in. Est.",
    isOpen: false,
    type: "pos",
  },
  {
    id: 3,
    title: "How does Back-office Management ERP integrate with other systems?",
    content:
      "Implementation time varies depending on the complexity of your requirements. Our team will provide you with a realistic timeline after the initial assessment.",
    isOpen: false,
    type: "fm",
  },
  {
    id: 4,
    title: "What are the key features of Stellar’s Back-office Management ERP?",
    content:
      "We prioritize data security and have implemented robust measures to ensure the confidentiality and integrity of your information.",
    isOpen: false,
    type: "fm",
  },
  {
    id: 5,
    title:
      "Can the Back-office Management ERP be customized for specific business needs?",
    content:
      "We offer ongoing support and maintenance services to ensure your ERP system runs smoothly. You'll have access to our dedicated support team for any assistance you may need.",
    isOpen: false,
    type: "bom",
  },
  {
    id: 6,
    title: "How long does it take to implement Back-office Management ERP?",
    content:
      "We offer ongoing support and maintenance services to ensure your ERP system runs smoothly. You'll have access to our dedicated support team for any assistance you may need.",
    isOpen: false,
    type: "bom",
  },
]);

const accordionItemsFm = ref([
  {
    id: 1,
    title: "What is Financial Management ERP?",
    content:
      "You can contact our sales team to discuss your specific needs and we'll guide you through the process of getting a tailored ERP solution.",
    isOpen: false,
    type: "pos",
  },
  {
    id: 2,
    title:
      "Can Financial Management ERP be customized to fit our specific financial processes?",
    content:
      "Lorem ipsum dolor sit amet consectetur. Hendrerit egestas arcu massa lectus amet turpis hendrerit netus in. Est.",
    isOpen: false,
    type: "pos",
  },
  {
    id: 3,
    title:
      "How does the implementation process work for Financial Management ERP?",
    content:
      "Implementation time varies depending on the complexity of your requirements. Our team will provide you with a realistic timeline after the initial assessment.",
    isOpen: false,
    type: "fm",
  },
  {
    id: 4,
    title:
      "What ongoing support is available after implementing Financial Management ERP?",
    content:
      "We prioritize data security and have implemented robust measures to ensure the confidentiality and integrity of your information.",
    isOpen: false,
    type: "fm",
  },
  {
    id: 5,
    title:
      "How secure is the Financial Management ERP, and what measures are in place to protect data?",
    content:
      "We offer ongoing support and maintenance services to ensure your ERP system runs smoothly. You'll have access to our dedicated support team for any assistance you may need.",
    isOpen: false,
    type: "bom",
  },
  {
    id: 6,
    title:
      "What solutions does Financial Management ERP offer for budgeting and forecasting?",
    content:
      "We offer ongoing support and maintenance services to ensure your ERP system runs smoothly. You'll have access to our dedicated support team for any assistance you may need.",
    isOpen: false,
    type: "bom",
  },
]);

const faqStyle = computed(() => {
  switch (typeSize.value) {
    // case "mobile":
    //   return { marginLeft: "10px", marginRight: "50px" };
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
        <div class="col-md-6">
          <button
            class="btn btn-outline-info btn-sm mt-4"
            :style="faqStyle"
            disabled
          >
            FAQ
          </button>
          <h2 class="font-weight-bold" :style="faqStyle">
            What people are asking most
          </h2>
          <p :style="faqStyle">
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.accordion-collapse {
  overflow: hidden;
}
</style>
