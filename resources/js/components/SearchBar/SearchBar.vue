<template>
  <header>
    <div class="search-wrapper">
      <span><i class="fas fa-search"></i></span>
      <input type="search" placeholder="Search" />
    </div>

    <div class="social-icons">
      <span class="ti-bell"></span>
      <span class="ti-comment"></span>
      <span class="logout" v-on:click="logout"
        ><i class="fas fa-sign-out-alt"></i
      ></span>
      <div></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "LoginPage" });
    },
  },
};
</script>

<style>
.logout {
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  transition: 0.5s ease-in-out;
}

.logout:hover {
  color: rgb(23, 22, 22);
  text-shadow: 1px 1px 8px;
}
</style>