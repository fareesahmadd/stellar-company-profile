<template>
  <div class="container-fluid">
    <h5 v-if="blog">{{ blog.title }}</h5>
    <p v-if="!blog">Loading...</p>
    <div v-html="blog.description" v-if="blog"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

// Store blog details
const blog = ref(null);
const route = useRoute();

// Static blog list
const blogs = [
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
];

// Function to fetch blog details based on ID
const fetchBlogDetails = (id) => {
  blog.value = blogs.find((blogItem) => blogItem.id === parseInt(id)) || null;
};

// Fetch blog details when the component is mounted
onMounted(() => {
  const blogId = route.params.id;
  fetchBlogDetails(blogId);
});

// Watch for changes in route parameters to fetch new blog details
watch(
  () => route.params.id,
  (newId) => {
    fetchBlogDetails(newId);
  }
);
</script>
