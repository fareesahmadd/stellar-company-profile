<template>
  <div>
    <div class="row mb-5" v-for="item in paginatedItems" :key="item.id">
      <div class="col-6">
        <div class="card h-100 shadow-none">
          <div
            class="card-body d-flex flex-column align-items-start bg-light justify-content-start"
          >
            <img
              :src="getImageSrc(item.imgSrc)"
              :alt="item.title"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card h-100 shadow-none m-2">
          <div
            class="card-body d-flex flex-column align-items-start bg-white justify-content-start"
          >
            <button class="btn btn-outline-info btn-sm mt-4" disabled>
              Insights
            </button>
            <router-link
              :to="{
                name: 'blog-details',
                params: { id: item.id, title: item.title },
              }"
            >
              <h5 class="card-title font-weight-bold">{{ item.title }}</h5>
            </router-link>

            <!-- <h5 class="card-title font-weight-bold">{{ item.title }}</h5> -->
            <p class="card-text text-muted">
              {{ truncateDescription(item.description, 82) }}
            </p>
            <div class="row">
              <p class="mb-n1" style="font-size: xx-small">
                <i
                  class="fas fa-calendar-alt text-muted"
                  style="font-size: xx-small"
                ></i>
                <span style="margin-right: 8px"></span>{{ item.date }}
                <i
                  class="fas fa-comment text-muted px-2"
                  style="font-size: xx-small"
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
    <nav>
      <ul class="pagination justify-content-left px-6">
        <li class="page-item px-3" :class="{ disabled: currentPage === 1 }">
          <a class="page-link border-0 clickable" @click.prevent="prevPage"
            >Previous</a
          >
        </li>
        <li
          class="page-item"
          v-for="page in totalPages"
          :key="page"
          :class="{ active: currentPage === page }"
        >
          <a
            class="page-link border-0"
            @click.prevent="changePage(page)"
            :class="{ 'text-white': currentPage === page }"
          >
            {{ page }}
          </a>
        </li>
        <li
          class="page-item px-3"
          :class="{ disabled: currentPage === totalPages }"
        >
          <span class="page-link border-0 clickable" @click.prevent="nextPage"
            >Next</span
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";

// Example components
// import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
// import DefaultFooter from "@/examples/footers/FooterDefault.vue";
// import Header from "../../../examples/Header.vue";
// import BlogsRecent from "./BlogsRecent.vue";

// Image imports
// import bottomVue from "@/assets/img/bottom-background.svg";
// import imageHeader from "@/assets/img/blogs-header-image.svg";

// Material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});

const currentPage = ref(1);
const itemsPerPage = 2;

// Data with image filenames only
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
  {
    id: 4,
    title: "The Future of Retail: Integrating POS Systems with ERP Solutions",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam velit egestas accumsan libero quam a risus tristique tortor.",
    date: "September 10",
    author: "John Doe",
    imgSrc: "stories-image.png",
    category: "Retail", // Tambahkan kategori
    tags: ["Retail", "POS", "ERP"], // Tambahkan tag
  },
  {
    id: 5,
    title:
      "ERP Systems for SMEs: Affordable Solutions for Big Business Results",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam velit egestas accumsan libero quam a risus tristique tortor.",
    date: "August 21",
    author: "Naila Agung Sarasati",
    imgSrc: "stories-image.png", // Hanya simpan nama file
    category: "SMEs", // Tambahkan kategori
    tags: ["ERP", "SMEs", "Business"], // Tambahkan tag
  },
  // Tambahkan objek lainnya sesuai kebutuhan
]);

//computed session
const truncateDescription = (description, length = 50) => {
  return description.length > length
    ? description.substring(0, length) + "..."
    : description;
};
// Total pages
const totalPages = computed(() => Math.ceil(data.value.length / itemsPerPage));

// Paginated items
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return data.value.slice(start, start + itemsPerPage);
});

// Fungsi untuk membangun path gambar
const getImageSrc = (imgName) => {
  return new URL(`@/assets/img/${imgName}`, import.meta.url).href;
};

// Change page
const changePage = (page) => {
  if (page === "...") return; // Abaikan jika titik-titik diklik
  currentPage.value = page;
};
// Next page
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

// Previous page
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};
</script>

<style scoped>
.card {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.pagination {
  padding: 1rem 0;
}
</style>
