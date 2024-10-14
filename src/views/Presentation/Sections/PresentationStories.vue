<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <button class="btn btn-outline-info btn-sm mt-4" disabled>
          Stories
        </button>
        <h2 class="font-weight-bold">Discover new drops</h2>
      </div>
      <div class="col-md-6 text-end">
        <button class="btn btn-outline-info mt-6">Explore All</button>
      </div>
    </div>

    <!-- test -->
    <div class="row">
      <div class="col-md-4 mb-4" v-for="(item, index) in data" :key="index">
        <div class="card h-100 shadow-none">
          <div
            class="card-body d-flex flex-column align-items-start bg-light justify-content-start"
          >
            <img
              src="@/assets/img/stories-image.png"
              :alt="item.title"
              class="mb-4 img-fluid"
            />
            <button class="btn btn-outline-info btn-sm mt-4" disabled>
              Insights
            </button>
            <p class="card-title font-weight-bold text-dark">
              {{ item.title }}
            </p>
            <div class="row">
              <p class="mb-n1" style="font-size: x-small">
                <i
                  class="fas fa-calendar-alt text-muted"
                  style="font-size: x-small"
                ></i>
                <span style="margin-right: 8px"></span>
                {{ item.date }}
                <i
                  class="fas fa-comment text-muted px-2"
                  style="font-size: x-small"
                ></i>
                {{ item.author }}
              </p>
            </div>
            <a href="#" class="text-info mt-4" style="font-size: x-small">
              <p style="font-size: x-small">
                Read more
                <i
                  class="fas fa-chevron-right fa-2x px-3 text-info"
                  style="font-size: x-small"
                ></i>
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const data = ref([
  {
    id: 1,
    title:
      "From Chaos to Control: How ERP Systems Simplify Back-Office Management",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam velit egestas accumsan libero quam a risus tristique tortor.",
    date: "August 21",
    author: "Naila Agung Sarasati",
    imgSrc: "stories-image.png", // Hanya simpan nama file
    category: "ERP Management", // Tambahkan kategori
    tags: ["ERP", "Management", "Back-Office"], // Tambahkan tag
  },
  {
    id: 2,
    title: "ERP Implementation Best Practices: A Step-by-Step Approach",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam velit egestas accumsan libero quam a risus tristique tortor.",
    date: "September 10",
    author: "John Doe",
    imgSrc: "stories-image.png",
    category: "Implementation", // Tambahkan kategori
    tags: ["ERP", "Best Practices", "Guide"], // Tambahkan tag
  },
  {
    id: 3,
    title: "Streamlining Financial Management with ERP: A Comprehensive Guide",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam velit egestas accumsan libero quam a risus tristique tortor.",
    date: "August 21",
    author: "Naila Agung Sarasati",
    imgSrc: "stories-image.png", // Hanya simpan nama file
    category: "Financial Management", // Tambahkan kategori
    tags: ["ERP", "Finance", "Management"], // Tambahkan tag
  },
]);
</script>
