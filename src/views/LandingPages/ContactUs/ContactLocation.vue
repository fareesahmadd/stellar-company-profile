<script setup>
import ContactMaps from './ContactMaps.vue'
// import image from "@/assets/img/illustrations/illustration-signin.jpg";
</script>

<template>
  <section class="py-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <button
            class="btn btn-outline-info btn-sm mt-4"
            style="margin-right: 150px"
            disabled
          >
            Location
          </button>
          <h2 class="font-weight-bold" style="margin-right: 150px">
            Planning a visit?
          </h2>
          <p class="mt-4" style="margin-right: 150px">
            Whether you're attending a scheduled meeting, workshop, or just
            dropping by, use the following directions to reach our office.
          </p>
          <p class="font-weight-bold mt-4" style="margin-right: 150px">
            Address
          </p>
          <p class="mt-n2" style="margin-right: 150px">
            Gedung Graha Amarta, Jl. Ciputat Raya No.5, RT.4/RW.7, Pd. Pinang,
            Kec. Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
            12310
          </p>
          <p class="font-weight-bold mt-4" style="margin-right: 150px">
            Operational hours
          </p>
          <p class="mt-n2" style="margin-right: 150px">
            Monday - Friday: 9:30AM - 5:30PM
          </p>
        </div>
        <div class="col-md-6">
          <div class="container">
            <div class="text-center mt-3"></div>
            <div class="text-center mt-3">
              <a
                href="https://maps.app.goo.gl/mUjBrrvaSKNywf2T7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ContactMaps />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
