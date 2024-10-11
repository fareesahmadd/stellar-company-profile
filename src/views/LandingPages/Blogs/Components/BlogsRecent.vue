<template>
  <div>
    <!-- <h4>Recent Blogs</h4> -->

    <!-- Input pencarian di bagian atas -->
    <div class="row">
      <div class="col-md-12">
        <div class="input-group input-group-lg input-group-outline">
          <input
            id="search"
            v-model="search"
            type="text"
            class="form-control bg-white"
            placeholder="Search"
            aria-label="label.text"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    </div>

    <!-- Tampilkan kategori di bawah input -->
    <div class="row mt-3">
      <h5>Blog Categories</h5>
      <div class="mt-4">
        <p
          v-for="(count, category) in categoryCounts"
          :key="category"
          class="text-sm mt-n3"
        >
          {{ category }} ({{ count }})
        </p>
      </div>
    </div>
    <hr :class="`horizontal dark`" class="mt-n1" />

    <h5>Recent Categories</h5>
    <!-- Tampilkan 3 blog terbaru atau hasil pencarian -->
    <div class="row" v-for="(blog, index) in displayedBlogs" :key="index">
      <div>
        <button class="btn btn-outline-info btn-sm mt-4 w-auto" disabled>
          Insights
        </button>
        <router-link
          :to="{
            name: 'blog-details',
            params: { id: blog.id, title: blog.title },
          }"
        >
          <h5 class="card-title">{{ blog.title }}</h5>
        </router-link>
        <p class="card-text" v-html="blog.description"></p>
      </div>
    </div>

    <!-- Tampilkan Tags -->
    <div class="row mt-3">
      <div class="col-md-12">
        <h5>Tags</h5>
        <div>
          <span v-for="tag in uniqueTags" :key="tag" class="badge bg-info me-1">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const blogs = ref([
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
]);

const search = ref("");

const displayedBlogs = computed(() => {
  if (search.value) {
    return filteredBlogs.value.slice(0, 3);
  }
  return blogs.value.slice(-3);
});

const filteredBlogs = computed(() => {
  return blogs.value.filter((blog) =>
    blog.title.toLowerCase().includes(search.value.toLowerCase())
  );
});

const categoryCounts = computed(() => {
  const counts = {};
  blogs.value.forEach((blog) => {
    counts[blog.category] = (counts[blog.category] || 0) + 1;
  });
  return counts;
});

const uniqueTags = computed(() => {
  const tagsSet = new Set();
  displayedBlogs.value.forEach((blog) => {
    blog.tags.forEach((tag) => {
      tagsSet.add(tag);
    });
  });
  return Array.from(tagsSet);
});
</script>

<style scoped>
.card {
  margin-bottom: 20px;
}
</style>
