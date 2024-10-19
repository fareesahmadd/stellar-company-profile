<script setup>
import { RouterLink } from "vue-router";
import { ref, watch } from "vue";
import { useWindowsWidth } from "../../assets/js/useWindowsWidth";

// images
import ArrDark from "@/assets/img/down-arrow-dark.svg";
import DownArrWhite from "@/assets/img/down-arrow-white.svg";
import logo from "@/assets/img/stellar-logo.svg";

const props = defineProps({
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      route: "/",
      color: "bg-gradient-info",
      label: "Book Meeting",
    }),
  },
  transparent: {
    type: Boolean,
    default: false,
  },
  light: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
  sticky: {
    type: Boolean,
    default: false,
  },
  darkText: {
    type: Boolean,
    default: false,
  },
});

// set arrow  color
function getArrowColor() {
  if (props.transparent && textDark.value) {
    return ArrDark;
  } else if (props.transparent) {
    return DownArrWhite;
  } else {
    return ArrDark;
  }
}

// set text color
const getTextColor = () => {
  let color;
  if (props.transparent && textDark.value) {
    color = "text-dark";
  } else if (props.transparent) {
    color = "text-white";
  } else {
    color = "text-dark";
  }

  return color;
};

// set nav color on mobile && desktop

let textDark = ref(props.darkText);
const { type } = useWindowsWidth();

if (
  type.value === "mobile" ||
  type.value === "medium" ||
  type.value === "tablet"
) {
  textDark.value = true;
} else if (type.value === "desktop" && textDark.value == false) {
  textDark.value = false;
}

watch(
  () => type.value,
  (newValue) => {
    if (
      newValue === "mobile" ||
      newValue === "medium" ||
      newValue === "tablet"
    ) {
      textDark.value = true;
    } else {
      textDark.value = false;
    }
  }
);
</script>
<template>
  <nav
    class="navbar navbar-expand-lg top-0"
    :class="{
      'z-index-3 shadow-none navbar-transparent position-fixed':
        props.transparent,
      'z-index-3 blur border-radius-lg py-2 shadow start-0 end-0': props.sticky,
      'navbar-light bg-white py-3': props.light,
      'navbar-dark bg-gradient-dark z-index-3 py-3': props.dark,
    }"
    style="width: 100%; left: 0; right: 0; top: 0"
  >
    <div
      :class="
        props.transparent || props.light || props.dark
          ? 'container'
          : 'container-fluid px-0'
      "
    >
      <RouterLink
        class="navbar-brand d-none d-md-block"
        :class="[
          (props.transparent && textDark.value) || !props.transparent
            ? 'text-dark font-weight-bolder ms-sm-3'
            : 'text-white font-weight-bolder ms-sm-3',
        ]"
        :to="{ name: 'presentation' }"
        rel="tooltip"
        title="Designed and Coded by Creative Tim"
        data-placement="bottom"
      >
        <img :src="logo" alt="Logo" class="logo" />
      </RouterLink>
      <RouterLink
        class="navbar-brand d-block d-md-none"
        :class="
          props.transparent || props.dark
            ? 'text-white'
            : 'font-weight-bolder ms-sm-3'
        "
        to="/"
        rel="tooltip"
        title="Designed and Coded by Creative Tim"
        data-placement="bottom"
      >
        <img :src="logo" alt="Logo" class="logo" />
      </RouterLink>
      <button
        class="navbar-toggler shadow-none ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div
        class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0"
        id="navigation"
      >
        <ul class="navbar-nav navbar-nav-hover me-auto">
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="dropdownMenuPages"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Products
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-2 d-lg-block d-none"
              />
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-1 d-lg-none d-block ms-auto"
              />
            </a>
            <div
              class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3"
              aria-labelledby="dropdownMenuPages"
            >
              <div class="row d-none d-lg-block">
                <div class="col-12 px-4 py-2">
                  <div class="row">
                    <div class="position-relative">
                      <ul class="list-group">
                        <li class="nav-item list-group-item border-0 p-0">
                          <a
                            class="dropdown-item py-2 ps-3 border-radius-md d-flex align-items-start"
                            @click.prevent="
                              $router.push({ name: 'products-pos' })
                            "
                          >
                            <img
                              src="@/assets/img/icons/icon-tablet-fill-dark.svg"
                              alt=""
                              class="me-2"
                            />
                            <div>
                              <h6
                                class="dropdown-header text-dark font-weight-bolder p-0"
                              >
                                Point Of Sales
                              </h6>
                              <span class="text-sm">
                                Streamline Sales with <br />
                                Cutting-Edge POS <br />
                                Solutions
                              </span>
                            </div>
                          </a>
                        </li>

                        <li class="nav-item list-group-item border-0 p-0">
                          <a
                            class="dropdown-item py-2 ps-3 border-radius-md d-flex align-items-start"
                            @click.prevent="
                              $router.push({ name: 'products-fm' })
                            "
                          >
                            <img
                              src="@/assets/img/icons/icon-money-dollar-circle-fill-grey.svg"
                              alt=""
                              class="me-2"
                            />
                            <div>
                              <h6
                                class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                              >
                                Financial Management
                              </h6>
                              <span class="text-sm"
                                >Improve Your Finances <br />
                                with Comprehensive <br />
                                Solutions</span
                              >
                            </div>
                          </a>
                        </li>
                        <li class="nav-item list-group-item border-0 p-0">
                          <a
                            class="dropdown-item py-2 ps-3 border-radius-md d-flex align-items-start"
                            @click.prevent="
                              $router.push({ name: 'products-bom' })
                            "
                          >
                            <img
                              src="@/assets/img/icons/icon-computer-fill-grey.svg"
                              alt=""
                              class="me-2"
                            />
                            <div>
                              <h6
                                class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                              >
                                Back-office <br />
                                Management
                              </h6>
                              <span class="text-sm"
                                >Optimize Operations <br />
                                with Advanced <br />
                                Management Tools</span
                              >
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-lg-none">
                <li class="nav-item list-group-item border-0 p-0">
                  <a
                    class="dropdown-item py-2 ps-3 border-radius-md d-flex align-items-start"
                    @click.prevent="$router.push({ name: 'products-pos' })"
                  >
                    <img
                      src="@/assets/img/icons/icon-tablet-fill-dark.svg"
                      alt=""
                      class="me-2"
                    />
                    <div>
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Point of Sales
                      </h6>
                      <span class="text-sm"
                        >Streamline Sales with Cutting-Edge POS Solutions</span
                      >
                    </div>
                  </a>
                </li>
                <li class="nav-item list-group-item border-0 p-0">
                  <a
                    class="dropdown-item py-2 ps-3 border-radius-md d-flex align-items-start"
                    @click.prevent="$router.push({ name: 'products-fm' })"
                  >
                    <img
                      src="@/assets/img/icons/icon-money-dollar-circle-fill-grey.svg"
                      alt=""
                      class="me-2"
                    />
                    <div>
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Financial Management
                      </h6>
                      <span class="text-sm"
                        >Improve Your Finances with Comprehensive
                        Solutions</span
                      >
                    </div>
                  </a>
                </li>
                <li class="nav-item list-group-item border-0 p-0">
                  <a
                    class="dropdown-item py-2 ps-3 border-radius-md d-flex align-items-start"
                    @click.prevent="$router.push({ name: 'products-bom' })"
                  >
                    <img
                      src="@/assets/img/icons/icon-computer-fill-grey.svg"
                      alt=""
                      class="me-2"
                    />
                    <div>
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Back-office Management
                      </h6>
                      <span class="text-sm"
                        >Optimize Operations with Advanced Management
                        Tools</span
                      >
                    </div>
                  </a>
                </li>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="dropdownMenuBlocks"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <!-- <i
                class="material-icons opacity-6 me-2 text-md"
                :class="getTextColor()"
                >view_day</i
              > -->
              Company
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-2 d-lg-block d-none"
              />
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-1 d-lg-none d-block ms-auto"
              />
            </a>
            <div
              class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3"
              aria-labelledby="dropdownMenuPages"
            >
              <div class="row d-none d-lg-block">
                <div class="col-12 px-4 py-2">
                  <div class="row">
                    <div class="position-relative">
                      <ul class="list-group">
                        <li class="nav-item list-group-item border-0 p-0">
                          <a
                            class="dropdown-item py-2 ps-3 border-radius-md"
                            @click.prevent="$router.push({ name: 'about' })"
                          >
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                            >
                              About us
                            </h6>
                            <span class="text-sm"
                              >Discover Our Commitment to<br />
                              Innovation and Excellence</span
                            >
                          </a>
                        </li>
                        <li class="nav-item list-group-item border-0 p-0">
                          <a
                            class="dropdown-item py-2 ps-3 border-radius-md"
                            href="/"
                          >
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                            >
                              Career
                            </h6>
                            <span class="text-sm"
                              >Join Our Team and Shape the <br />
                              Future of ERP</span
                            >
                          </a>
                        </li>
                        <li class="nav-item list-group-item border-0 p-0">
                          <a
                            class="dropdown-item py-2 ps-3 border-radius-md"
                            @click.prevent="$router.push({ name: 'blogs' })"
                          >
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                            >
                              Stellar Blog
                            </h6>
                            <span class="text-sm"
                              >Insights, Tips, and Trends in<br />
                              ERP and Business Solutions</span
                            >
                          </a>
                        </li>
                        <li class="nav-item list-group-item border-0 p-0">
                          <a
                            class="dropdown-item py-2 ps-3 border-radius-md"
                            @click.prevent="$router.push({ name: 'contactus' })"
                          >
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                            >
                              Contact
                            </h6>
                            <span class="text-sm"
                              >Insights, Tips, and Trends in<br />
                              ERP and Business Solutions</span
                            >
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-lg-none">
                <!-- <div
                  class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0"
                > -->
                <!-- Landing Pages
                </div> -->
                <li class="nav-item list-group-item border-0 p-0">
                  <a
                    class="dropdown-item py-2 ps-3 border-radius-md"
                    @click.prevent="$router.push({ name: 'about' })"
                  >
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      About us
                    </h6>
                    <span class="text-sm"
                      >Discover Our Commitment to Innovation and
                      Excellence</span
                    >
                  </a>
                </li>
                <li class="nav-item list-group-item border-0 p-0">
                  <a
                    class="dropdown-item py-2 ps-3 border-radius-md"
                    @click.prevent="$router.push({ name: 'about' })"
                  >
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Career
                    </h6>
                    <span class="text-sm"
                      >Join Our Team and Shape the Future of ERP</span
                    >
                  </a>
                </li>
                <li class="nav-item list-group-item border-0 p-0">
                  <a
                    class="dropdown-item py-2 ps-3 border-radius-md"
                    @click.prevent="$router.push({ name: 'blogs' })"
                  >
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Stellar Blog
                    </h6>
                    <span class="text-sm"
                      >Insights, Tips, and Trends in ERP and Business
                      Solutions</span
                    >
                  </a>
                </li>
                <li class="nav-item list-group-item border-0 p-0">
                  <a
                    class="dropdown-item py-2 ps-3 border-radius-md"
                    @click.prevent="$router.push({ name: 'contactus' })"
                  >
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Contact
                    </h6>
                    <span class="text-sm"
                      >Insights, Tips, and Trends in ERP and Business
                      Solutions</span
                    >
                  </a>
                </li>
                <!-- <RouterLink
                  :to="{ name: 'about' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>About Us</span>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'contactus' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>Contact Us</span>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'author' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>Author</span>
                </RouterLink>
                <div
                  class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0 mt-3"
                >
                  Account
                </div>
                <RouterLink
                  :to="{ name: 'signin-basic' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>Sign In</span>
                </RouterLink> -->
              </div>
            </div>
          </li>
          <li class="nav-item dropdown dropdown-hover mx-2">
            <router-link
              :to="{ name: 'solutions' }"
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="dropdownMenuDocs"
              aria-expanded="false"
            >
              <!-- <i
    class="material-icons opacity-6 me-2 text-md"
    :class="getTextColor()"
    >article</i
  > -->
              Solutions
              <!-- <img
    :src="getArrowColor()"
    alt="down-arrow"
    class="arrow ms-2 d-lg-block d-none"
  />
  <img
    :src="getArrowColor()"
    alt="down-arrow"
    class="arrow ms-1 d-lg-none d-block ms-auto"
  /> -->
            </router-link>
            <!-- <div
              class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md mt-0 mt-lg-3 p-3 border-radius-lg"
              aria-labelledby="dropdownMenuDocs"
            >
              <div class="d-none d-lg-block">
                <ul class="list-group">
                  <li class="nav-item list-group-item border-0 p-0">
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href=" https://www.creative-tim.com/learning-lab/vue/overview/material-kit/"
                    >
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Getting Started
                      </h6>
                      <span class="text-sm"
                        >All about overview, quick start, license and
                        contents</span
                      >
                    </a>
                  </li>
                  <li class="nav-item list-group-item border-0 p-0">
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href=" https://www.creative-tim.com/learning-lab/vue/colors/material-kit/"
                    >
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Foundation
                      </h6>
                      <span class="text-sm"
                        >See our colors, icons and typography</span
                      >
                    </a>
                  </li>
                  <li class="nav-item list-group-item border-0 p-0">
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href=" https://www.creative-tim.com/learning-lab/vue/alerts/material-kit/"
                    >
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Components
                      </h6>
                      <span class="text-sm"
                        >Explore our collection of fully designed
                        components</span
                      >
                    </a>
                  </li>
                </ul>
              </div>
              <div class="row d-lg-none">
                <div class="col-md-12 g-0">
                  <a
                    class="dropdown-item py-2 ps-3 border-radius-md"
                    href="./pages/about-us.html"
                  >
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Getting Started
                    </h6>
                    <span class="text-sm"
                      >All about overview, quick start, license and
                      contents</span
                    >
                  </a>
                  <a
                    class="dropdown-item py-2 ps-3 border-radius-md"
                    href="./pages/about-us.html"
                  >
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Foundation
                    </h6>
                    <span class="text-sm"
                      >See our colors, icons and typography</span
                    >
                  </a>
                  <a
                    class="dropdown-item py-2 ps-3 border-radius-md"
                    href="./pages/about-us.html"
                  >
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Components
                    </h6>
                    <span class="text-sm"
                      >Explore our collection of fully designed components</span
                    >
                  </a>
                  <a
                    class="dropdown-item py-2 ps-3 border-radius-md"
                    href="./pages/about-us.html"
                  >
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Plugins
                    </h6>
                    <span class="text-sm"
                      >Check how you can integrate our plugins</span
                    >
                  </a>
                  <a
                    class="dropdown-item py-2 ps-3 border-radius-md"
                    href="./pages/about-us.html"
                  >
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Utility Classes
                    </h6>
                    <span class="text-sm"
                      >For those who want flexibility, use our utility
                      classes</span
                    >
                  </a>
                </div>
              </div>
            </div> -->
          </li>
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="dropdownMenuDocs"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <!-- <i
                class="material-icons opacity-6 me-2 text-md"
                :class="getTextColor()"
                >article</i
              > -->
              Resources
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-2 d-lg-block d-none"
              />
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-1 d-lg-none d-block ms-auto"
              />
            </a>
            <div
              class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md mt-0 mt-lg-3 p-3 border-radius-lg"
              aria-labelledby="dropdownMenuDocs"
            >
              <div class="d-none d-lg-block">
                <ul class="list-group">
                  <li class="nav-item list-group-item border-0 p-0">
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href="/"
                    >
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Getting Started
                      </h6>
                      <span class="text-sm"
                        >All about overview, quick start, license and
                        contents</span
                      >
                    </a>
                  </li>
                  <li class="nav-item list-group-item border-0 p-0">
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href="/"
                    >
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Foundation
                      </h6>
                      <span class="text-sm"
                        >See our colors, icons and typography</span
                      >
                    </a>
                  </li>
                  <li class="nav-item list-group-item border-0 p-0">
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href="/"
                    >
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Components
                      </h6>
                      <span class="text-sm"
                        >Explore our collection of fully designed
                        components</span
                      >
                    </a>
                  </li>
                </ul>
              </div>
              <div class="row d-lg-none">
                <div class="col-md-12 g-0">
                  <a
                    class="dropdown-item py-2 ps-3 border-radius-md"
                    href="./pages/about-us.html"
                  >
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Getting Started
                    </h6>
                    <span class="text-sm"
                      >All about overview, quick start, license and
                      contents</span
                    >
                  </a>
                  <a
                    class="dropdown-item py-2 ps-3 border-radius-md"
                    href="./pages/about-us.html"
                  >
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Foundation
                    </h6>
                    <span class="text-sm"
                      >See our colors, icons and typography</span
                    >
                  </a>
                  <a
                    class="dropdown-item py-2 ps-3 border-radius-md"
                    href="./pages/about-us.html"
                  >
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Components
                    </h6>
                    <span class="text-sm"
                      >Explore our collection of fully designed components</span
                    >
                  </a>
                  <a
                    class="dropdown-item py-2 ps-3 border-radius-md"
                    href="./pages/about-us.html"
                  >
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Plugins
                    </h6>
                    <span class="text-sm"
                      >Check how you can integrate our plugins</span
                    >
                  </a>
                  <a
                    class="dropdown-item py-2 ps-3 border-radius-md"
                    href="./pages/about-us.html"
                  >
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Utility Classes
                    </h6>
                    <span class="text-sm"
                      >For those who want flexibility, use our utility
                      classes</span
                    >
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav d-lg-block d-none">
          <li class="nav-item">
            <a
              :href="action.route"
              class="btn btn-md mb-0"
              :class="action.color"
              onclick="smoothToPricing('pricing-soft-ui')"
              >{{ action.label }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>
