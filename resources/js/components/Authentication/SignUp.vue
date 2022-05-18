<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="signup-form">
          <form
            class="mt-5 border p-4 bg-light shadow"
            v-on:submit.prevent="signupHandler"
          >
            <h4 class="mb-4 text-primary">Create your Account</h4>
            <div class="row">
              <div class="mb-3 col-md-6">
                <label>First Name <span class="text-danger">*</span> </label>
                <input
                  type="text"
                  name="fname"
                  v-model.trim="$v.first_name.$model"
                  :class="{ 'is-invalid': validationStatus($v.first_name) }"
                  class="form-control form-control-sm"
                  placeholder="Enter First Name"
                />
                <div v-if="!$v.first_name.required" class="invalid-feedback">
                  The first name field is required.
                </div>
              </div>
              <div class="mb-3 col-md-6">
                <label>Last Name <span class="text-danger">*</span></label>
                <input
                  type="text"
                  name="lname"
                  v-model="$v.last_name.$model"
                  :class="{ 'is-invalid': validationStatus($v.last_name) }"
                  class="form-control form-control-sm"
                  placeholder="Enter Last Name"
                />
                <div v-if="!$v.last_name.required" class="invalid-feedback">
                  The last name field is required.
                </div>
              </div>
              <div class="mb-3 col-md-12">
                <label>Email Address <span class="text-danger">*</span></label>
                <input
                  type="email"
                  name="email"
                  v-model="$v.email.$model"
                  :class="{ 'is-invalid': validationStatus($v.email) }"
                  class="form-control form-control-sm"
                  placeholder="Enter Email Address"
                />
                <div v-if="!$v.email.required" class="invalid-feedback">
                  The email address is required.
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
                  v-model="$v.password.$model"
                  :class="{ 'is-invalid': validationStatus($v.password) }"
                  class="form-control form-control-sm"
                  placeholder="Enter Password"
                />
                <div v-if="!$v.password.required" class="invalid-feedback">
                  The password is required.
                </div>
                <div v-if="!$v.password.minLength" class="invalid-feedback">
                  You must have atleast
                  {{ $v.password.$params.minLength.min }} letters.
                </div>
                <div v-if="!$v.password.maxLength" class="invalid-feedback">
                  You must not have greate than
                  {{ $v.password.$params.maxLength.max }} letters.
                </div>
              </div>
              <div class="mb-3 col-md-12">
                <label
                  >Confirm Password <span class="text-danger">*</span></label
                >
                <input
                  type="password"
                  name="confirmPassword"
                  v-model.trim="$v.confirm_password.$model"
                  :class="{
                    'is-invalid': validationStatus($v.confirm_password),
                  }"
                  class="form-control form-control-sm"
                  placeholder="Enter Confirm Password"
                />
                <div
                  v-if="!$v.confirm_password.sameAsPassword"
                  class="invalid-feedback"
                >
                  Password Must be Same.
                </div>
              </div>
              <div class="col-md-12">
                <button class="btn btn-primary btn-sm float-end">
                  Signup Now
                </button>
              </div>
            </div>
          </form>
          <p class="text-center mt-3 text-dark">
            If you have account, Please
            <router-link class="text-decoration-none" to="/loginPage"
              >Login Now</router-link
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
  sameAs,
} from "vuelidate/lib/validators";
import axios from "axios";
export default {
  name: "SignUpPage",
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
    };
  },
  validations: {
    first_name: { required },
    last_name: { required },
    email: { required, email },
    password: { required, minLength: minLength(6), maxLength: maxLength(18) },
    confirm_password: { required, sameAsPassword: sameAs("password") },
  },
  methods: {
    validationStatus(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    async signupHandler() {
      this.$v.$touch();
      if (this.$v.pendding || this.$v.$error) return;
      let result = await axios.post("http://localhost:3000/users", {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        confirm_password: this.confirm_password,
      });
      if (result.status == 201) {
        this.$router.push({ name: "LoginPage" });
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