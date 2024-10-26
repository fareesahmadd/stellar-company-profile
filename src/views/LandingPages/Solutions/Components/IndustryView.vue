<script setup>
import retailImage from "@/assets/img/retail-image.svg";

const props = defineProps({
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
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useWindowsWidth } from "@/assets/js/useWindowsWidth";

const { type } = useWindowsWidth();
let typeSize = ref(type);

watch(
  () => type.value,
  (newValue) => {
    typeSize.value = newValue;
  }
);
const currentRouteName = computed(() => {
  return useRoute().name;
});

const capitalLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const contentList = [
  {
    id: "revenue",
    title: "Optimize Your Income Streams",
    description:
      "Elevate your brand to new heights ensuring your message reaches its full potential and captivates your audience. Elevate your brand to new heights ensuring your message reaches its full potential and captivates your audience.",
    items: [
      { text: "Track and manage your revenue" },
      { text: "Monitor sales, manage invoices, and ensure timely payments" },
      { text: "Clear view of income and maximize profitability." },
    ],
  },
  {
    id: "expenses",
    title: "Streamline Your Spending",
    description:
      "Elevate your brand to new heights ensuring your message reaches its full potential and captivates your audience.",
    items: [
      { text: "Track and manage your tax obligations" },
      { text: "Ensure compliance with local tax regulations" },
      { text: "Maximize deductions and minimize liabilities." },
    ],
  },
  {
    id: "tax",
    title: "Simplify Your Tax Obligations",
    description:
      "Elevate your brand to new heights ensuring your message reaches its full potential and captivates your audience.",
    items: [
      { text: "Track and manage your revenue" },
      { text: "Monitor sales, manage invoices, and ensure timely payments" },
      { text: "Clear view of income and maximize profitability." },
    ],
  },
  {
    id: "forecasting",
    title: "Plan for the Future with Confidence",
    description:
      "Elevate your brand to new heights ensuring your message reaches its full potential and captivates your audience.",
    items: [
      { text: "Track and manage your tax obligations" },
      { text: "Ensure compliance with local tax regulations" },
      { text: "Maximize deductions and minimize liabilities." },
    ],
  },
];

const filteredContent = computed(() => {
  return contentList.filter((content) => content.id === props.id);
});

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
  <section :class="typeSize === 'mobile' ? '' : 'py-5'">
    <div
      :class="
        typeSize === 'mobile' || typeSize === 'medium' ? '' : 'container-fluid'
      "
    >
      <div
        class="row"
        :style="
          typeSize === 'mobile'
            ? 'border-radius: 10px; overflow: hidden; height: 1000px'
            : 'border-radius: 10px; overflow: hidden; height: 600px'
        "
      >
        <div :class="typeSize === 'mobile' ? 'col-md-6 ' : 'col-md-6'">
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
          <div class="container" v-if="currentRouteName === 'products-fm'">
            <div v-for="content in filteredContent" :key="content.id">
              <p class="font-weight-bold text-dark">
                {{ capitalLetter(content.id) }}
              </p>
              <h2 class="font-weight-bold">{{ content.title }}</h2>
              <p class="mt-4">{{ content.description }}</p>
              <div
                v-for="item in content.items"
                :key="item.text"
                class="font-weight-bold mb-3"
              >
                <i
                  class="fa fa-check-circle text-info"
                  style="margin-right: 10px"
                  aria-hidden="true"
                ></i>
                {{ item.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
