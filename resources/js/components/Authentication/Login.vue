<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="signup-form">
          <form
            class="mt-5 border p-4 bg-light shadow"
            v-on:submit.prevent="loginHandler"
          >
            <h4 class="mb-4 text-primary">Login into Account</h4>
            <div class="row">
              <div class="mb-3 col-md-12">
                <label>Email Address <span class="text-danger">*</span></label>
                <input
                  type="email"
                  name="email"
                  v-model.trim="$v.email.$model"
                  :class="{ 'is-invalid': validationStatus($v.email) }"
                  class="form-control form-control-sm"
                  placeholder="Enter Email Address"
                />
                <div v-if="!$v.email.required" class="invalid-feedback">
                  The email field is required.
                </div>
                <div v-if="!$v.email.email" class="invalid-feedback">
                  The email is not validate.
                </div>
              </div>
              <div class="mb-3 col-md-12">
                <label>Password <span class="text-danger">*</span></label>
                <input
                  type="password"
                  name="password"
                  v-model.trim="$v.password.$model"
                  :class="{ 'is-invalid': validationStatus($v.password) }"
                  class="form-control form-control-sm"
                  placeholder="Enter Password"
                />
                <div v-if="!$v.password.required" class="invalid-feedback">
                  The password field is required
                </div>
                <div v-if="!$v.password.minLength" class="invalid-feedback">
                  You must have at least
                  {{ $v.password.$params.minLength.min }} letters.
                </div>
                <div v-if="!$v.password.maxLength" class="invalid-feedback">
                  You must not have greater then
                  {{ $v.password.$params.maxLength.max }} letters.
                </div>
              </div>
              <div class="col-md-12">
                <button class="btn btn-primary btn-sm float-end">
                  Login Now
                </button>
              </div>
            </div>
          </form>
          <p class="text-center mt-3 text-dark">
            If you have no account, Please
            <router-link class="text-decoration-none" to="/registerPage"
              >Signup Now</router-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6), maxLength: maxLength(18) },
  },
  methods: {
    validationStatus(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    async loginHandler() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-data", JSON.stringify(result.data[0]));
        this.$router.push({ name: "DashboardPage" });
        this.$$router.go();
      } else {
        alert("User Not Found");
      }
    },
  },

  mounted() {
    let user = localStorage.getItem("user-data");
    if (user) {
      this.$router.push({ name: "DashboardPage" });
    }
  },
};
</script>

<style>
</style>