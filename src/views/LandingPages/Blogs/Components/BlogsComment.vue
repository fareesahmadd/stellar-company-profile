<template>
  <div class="container-fluid">
    <h5>Leave a reply</h5>
    <p>
      Your email address will not be published. Required fields are marked *
    </p>
    <form id="contact-form" method="post" autocomplete="off">
      <div class="card-body p-0 my-0">
        <div class="row">
          <div class="col-md-6">
            <MaterialInput
              class="form-control mt-n1"
              type="text"
              :label="{
                text: 'Name',
                class: 'text-sm mt-0 mb-0',
              }"
              placeholder="Enter your name"
            />
          </div>
          <div class="col-md-6">
            <MaterialInput
              class="form-control mt-n1"
              type="email"
              :label="{
                text: 'Email Address',
                class: 'text-sm mt-0 mb-0',
              }"
              placeholder="name@example.com"
            />
          </div>
        </div>
        <div class="form-group mb-0 mt-md-0 mt-4">
          <MaterialTextArea
            id="comment"
            class="form-control"
            label="Comment"
            :rows="6"
            placeholder="What do you have in mind?"
            >Message</MaterialTextArea
          >
        </div>
        <div class="form-check" style="padding-right: 1000">
          <input
            class="form-check-input"
            type="checkbox"
            id="fcustomCheck1"
            v-model="isChecked"
            @change="handleCheckboxChange"
          />
          <label class="form-check-label" for="fcustomCheck1">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
        <div class="row">
          <div class="col-md-12 mt-4 text-left">
            <button class="btn btn-info">Submit</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";

const isChecked = ref(false); // Set initial state if needed

const handleCheckboxChange = () => {
  // You can handle any additional logic here if needed
};
</script>

<style scoped>
.card {
  margin-bottom: 20px;
}

.form-check-input:checked + .form-check-label {
  color: #212529; /* Optional: change label color if needed */
}
</style>
