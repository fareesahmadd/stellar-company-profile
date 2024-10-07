<script setup>
import { onMounted } from "vue";

//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";
import Header from "../../../examples/Header.vue";

import ContactLocation from "./ContactLocation.vue";
import PresentationFaq from "../../Presentation/Sections/PresentationFaq.vue";

//image
// import image from "@/assets/img/illustrations/illustration-signin.jpg";
import bottomVue from "@/assets/img/bottom-background.svg";
import contactImage from "@/assets/img/contact-card-image.png";

//material components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
// import MaterialButton from "@/components/MaterialButton.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>
<template>
  <DefaultNavbar
    :sticky="true"
    class="position-sticky z-index-sticky top-0"
    style="border-radius: 0"
  />
  <Header>
    <div class="page-header min-vh-75" loading="lazy">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1
              class="text-dark pt-3 mt-n5 me-2"
              :style="{ display: 'inline-block ' }"
            >
              Get in touch. <br />Stay connected fast.
            </h1>
            <p class="lead text-dark px-5 mt-3" :style="{ fontWeight: '200' }">
              The world as we know is no longer the same, and changes now occur
              in days and months, not for years. We always ready to give you
              support.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>
  <section>
    <div class="page-header min-vh-100">
      <div class="container">
        <div class="row">
          <!--Comment-->
          <!-- <div
            class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column"
          > 
            <div
              class="position-relative h-75 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center"
              :style="{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover'
              }"
              loading="lazy"
            ></div>
          </div> -->
          <div
            class="col-6 mt-0 d-flex justify-content-end col-xl-6 col-md-9 col-sm-9 mb-4"
          >
            <div
              class="card d-flex blur shadow-lg my-sm-0 my-sm-0 mt-0 mb-5"
              style="
                border-radius: 10px;
                overflow: hidden;
                width: 465px;
                height: 778.17px;
              "
              :style="`background-image: url(${contactImage});background-size: cover; background-position: center;`"
            >
              <div
                class="card-body d-flex flex-column justify-content-end text-white"
                style="height: 100%"
              >
                <p>
                  Implementing Stellar Gelora's ERP software has been a
                  game-changer for our business. From day one, the team at
                  Stellar Gelora worked closely with us to customize the system
                  to meet our specific needs.
                </p>
                <p class="font-weight-bold mb-n1">
                  <i
                    class="fas fa-circle fa-2x text-primary"
                    style="font-size: 5px"
                  ></i>
                  Naila Agung Sarasati
                </p>
                <p>CEO & Co-Founder of Wanderloom Labs</p>
              </div>
            </div>
          </div>
          <div class="col-xl-5 col-lg-6 col-md-7 d-flex flex-column">
            <div
              class="card d-flex blur justify-content-center shadow-lg my-sm-0 my-sm-0 mt-0 mb-5"
              style="border-radius: 10px; overflow: hidden"
            >
              <div
                class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent"
              >
                <!-- <div
                  class="bg-gradient-success shadow-success border-radius-lg p-3"
                >
                  <h3 class="text-white text-success mb-0">Contact us</h3>
                </div> -->
              </div>
              <div class="card-body mt-4 bg-light">
                <button class="btn btn-outline-info btn-sm" disabled>
                  Contact us
                </button>
                <h2 class="card-title font-weight-bold">How can we help?</h2>
                <p class="pb-3">
                  Have a question or feedback? Fill out the form below, and
                  we'll get back to you as soon as possible.
                </p>
                <form id="contact-form" method="post" autocomplete="off">
                  <div class="card-body p-0 my-0">
                    <MaterialInput
                      class="form-control"
                      type="text"
                      :label="{
                        text: 'Name',
                        class: 'text-sm mt-0 mb-0',
                      }"
                      placeholder="Enter your name"
                    />
                    <MaterialInput
                      class="form-control mt-n1"
                      type="email"
                      :label="{
                        text: 'Email Address',
                        class: 'text-sm mt-0 mb-0',
                      }"
                      placeholder="name@example.com"
                    />
                    <MaterialInput
                      class="form-control mt-n1"
                      type="text"
                      :label="{
                        text: 'Company (optional)',
                        class: 'text-sm mt-0 mb-0',
                      }"
                      placeholder="Enter your company name"
                    />
                    <div class="row">
                      <div class="px-3 mb-0">
                        <label for="exampleFormControlSelect1" class="ms-0"
                          >Topics</label
                        >
                      </div>
                      <div
                        class="input-group input-group-lg input-group-outline mt-n2"
                      >
                        <select
                          class="form-control bg-white"
                          id="exampleFormControlSelect1"
                        >
                          <option value="" disabled selected>
                            Select topics
                          </option>
                          <option value="1">PoS</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group mb-0 mt-md-0 mt-4">
                      <MaterialTextArea
                        id="message"
                        class="form-control"
                        label="Message"
                        :rows="6"
                        placeholder="What do you have in mind?"
                        >Message</MaterialTextArea
                      >
                    </div>
                    <div class="row">
                      <div class="col-md-12 mt-4 text-center">
                        <button class="btn btn-info w-100">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="container-fluid bg-white">
    <ContactLocation class="mt-2 mb-6" />
  </div>
  <div class="container-fluid bg-white">
    <PresentationFaq class="mt-2 mb-6" />
  </div>
  <Header>
    <div
      class="page-header min-vh-50"
      :style="`background-image: url(${bottomVue})`"
      loading="lazy"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2
              class="font-weight-bold text-white"
              style="margin-left: 50px; margin-right: 100px"
            >
              Custom ERP, tailored for Your business
            </h2>
          </div>
          <div class="col-md-6">
            <div class="container">
              <p class="text-white text-lg mt-n2">
                Need something specific? Let’s craft an ERP solution that
                matches your business perfectly. Ready to customize? Let's talk!
              </p>
              <a href="/" class="btn btn mb-0 bg-light text-info"
                >Book a Meeting</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </Header>
  <DefaultFooter />
</template>
