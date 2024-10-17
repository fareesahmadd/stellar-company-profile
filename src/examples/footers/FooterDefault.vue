<script setup>
import logoDark from "@/assets/img/stellar-logo.svg";
import xIcon from "@/assets/img/twitter-x.svg";
import linkedinIcon from "@/assets/img/instagram.svg";
import instagramIcon from "@/assets/img/linkedin.svg";
import { ref, watch } from "vue";
import { useWindowsWidth } from "@/assets/js/useWindowsWidth";

const { type } = useWindowsWidth();
let typeSize = ref(type);

watch(
  () => type.value,
  (newValue) => {
    typeSize.value = newValue;
  }
);

defineProps({
  brand: {
    type: Object,
    name: String,
    logo: String,
    route: "",
    default: () => ({
      name: "",
      logo: logoDark,
      route: "/",
    }),
  },
  socials: {
    type: Array,
    icon: String,
    link: String,
    default: () => [
      {
        icon: instagramIcon,
        link: "/",
      },
      {
        icon: linkedinIcon,
        link: "/",
      },
      {
        icon: xIcon,
        link: "/",
      },
    ],
  },
  menus: {
    type: Array,
    name: String,
    items: {
      type: Array,
      name: String,
      href: String,
    },
    default: () => [
      {
        name: "Company",
        items: [
          {
            name: "About",
            href: "/pages/landing-pages/about-us",
          },
          {
            name: "Career",
            href: "/",
          },
          {
            name: "Contact",
            href: "/pages/landing-pages/contact-us",
          },
          // { name: "blog", href: "https://www.creative-tim.com/blog" },
        ],
      },
      {
        name: "Services",
        items: [
          {
            name: "Point of Sales",
            href: "/",
          },
          {
            name: "Back office management",
            href: "/",
          },
          {
            name: "Financial management",
            href: "/",
          },
        ],
      },
      {
        name: "Resources",
        items: [
          { name: "Knowledge", href: "/" },
          {
            name: "FAQ",
            href: "/",
          },
        ],
      },
    ],
  },
});
</script>
<template>
  <footer :class="typeSize === 'mobile' ? 'footer pt-4' : 'footer pt-5 mt-5'">
    <div class="container">
      <div class="row">
        <div
          :class="typeSize === 'mobile' ? 'col-12 mb-4' : 'col-md mb-4 ms-auto'"
        >
          <div>
            <a :href="brand.route">
              <img :src="brand.logo" class="mb-3 logo" alt="main_logo" />
            </a>
            <p
              v-if="typeSize !== 'mobile'"
              :style="
                typeSize === 'desktop'
                  ? 'padding-right: 370px'
                  : 'padding-right: 150px'
              "
            >
              Lorem ipsum dolor sit amet consectetur. Facilisi aliquet dolor in
              purus vivamus sit non imperdiet non
            </p>
            <p v-if="typeSize === 'mobile'">
              Lorem ipsum dolor sit amet consectetur. Facilisi aliquet dolor in
              purus vivamus sit non imperdiet non
            </p>
          </div>
          <div>
            <ul class="d-flex flex-row ms-n3 nav">
              <li
                class="nav-item"
                v-for="{ icon, link } of socials"
                :key="link"
              >
                <a class="nav-link pe-1" :href="link" target="_blank">
                  <img
                    :src="icon"
                    alt="Social Icon"
                    class="text-lg opacity-8"
                    width="24"
                    height="24"
                    style="width: 16px; height: 16px"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          :class="
            typeSize === 'mobile'
              ? 'col-12 mb-3'
              : 'col-md-2 col-sm-6 col-6 mb-4'
          "
          v-for="{ name, items } of menus"
          :key="name"
        >
          <h6 class="text-sm">{{ name }}</h6>
          <ul class="flex-column ms-n3 nav">
            <li class="nav-item" v-for="item of items" :key="item.name">
              <a class="nav-link" :href="item.href" target="_blank">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>

        <hr :class="`horizontal dark`" class="mb-n6" />

        <div class="row">
          <div
            :class="
              typeSize === 'tablet' || typeSize === 'desktop'
                ? 'col-6'
                : 'col-12'
            "
          >
            <div class="text-center">
              <p class="text-muted my-4 text-sm text-start font-weight-normal">
                ©
                {{ new Date().getFullYear() }}

                <a href="/" class="text-muted" target="_blank"
                  >Stellar Gelora Technology.</a
                >
                All Rights Reserved.
              </p>
            </div>
          </div>
          <div
            :class="
              typeSize === 'tablet' || typeSize === 'desktop'
                ? 'col-6'
                : 'col-12 mt-n2 '
            "
          >
            <div>
              <p
                :class="
                  typeSize === 'tablet' || typeSize === 'desktop'
                    ? 'text-muted my-4 text-sm text-end '
                    : 'text-muted  text-sm text-start '
                "
              >
                <a
                  @click.prevent="$router.push({ name: 'terms-condition' })"
                  class="text-muted"
                  >Terms & Condition</a
                >
                <a
                  @click.prevent="$router.push({ name: 'privacy-policy' })"
                  class="text-muted px-3"
                  >Privacy Policy</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
