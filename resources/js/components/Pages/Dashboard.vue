<template>
  <div>
    <SideBar />
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from "../Pages/Sidebar/Sidebar.vue";
export default {
  name: "DashboardPage",
  components: {
    SideBar,
  },
  mounted() {
    let user = localStorage.getItem("user-data");
    if (!user) {
      this.$router.push({ name: "LoginPage" });
    }

    setTimeout(
      function () {
        this.$router.go();
      },
      1000,
      this
    );
  },
};
</script>
<style scoped>
#sidebar-toggle {
  display: none;
}

.sidebar {
  height: 100%;
  width: 240px;
  font-size: 14px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  background: rgb(27, 2, 2);
  color: #fff;
  overflow-y: auto;
  transition: width 500ms;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0rem 1rem;
}

.sidebar-menu {
  padding: 1rem 1.5rem;
}

.sidebar ul {
  padding: 0;
}

.sidebar li {
  margin-bottom: 1.2rem;
}

.sidebar a {
  text-decoration: none;
  color: #fff;
  font-size: 0.9rem;
}

.sidebar a:hover {
  color: rgb(237, 128, 26);
}

.sidebar a span:last-child {
  padding-left: 0.6rem;
}

#sidebar-toggle:checked ~ .sidebar {
  width: 60px;
}

#sidebar-toggle:checked ~ .sidebar .sidebar-header h3 span,
#sidebar-toggle:checked ~ .sidebar li span:last-child {
  display: none;
}

#sidebar-toggle:checked ~ .sidebar .sidebar-header,
#sidebar-toggle:checked ~ .sidebar li {
  display: flex;
  justify-content: center;
}

#sidebar-toggle:checked ~ .main-content {
  margin-left: 60px;
}

#sidebar-toggle:checked ~ .main-content header {
  width: calc(100% - 60px);
  left: 60px;
}

@media only screen and (max-width: 1200px) {
  .sidebar {
    width: 60px;
    z-index: 150;
  }

  .sidebar .sidebar-header h3 span,
  .sidebar li span:last-child {
    display: none;
  }

  .sidebar .sidebar-header,
  .sidebar li {
    display: flex;
    justify-content: center;
  }
  #sidebar-toggle:checked ~ .sidebar {
    width: 240px;
  }

  #sidebar-toggle:checked ~ .sidebar .sidebar-header h3 span,
  #sidebar-toggle:checked ~ .sidebar li span:last-child {
    display: inline;
  }

  #sidebar-toggle:checked ~ .sidebar .sidebar-header {
    display: flex;
    justify-content: space-between;
  }

  #sidebar-toggle:checked ~ .sidebar li {
    display: block;
  }

  #sidebar-toggle:checked ~ .main-content {
    margin-left: 60px;
  }

  #sidebar-toggle:checked ~ .main-content header {
    left: 60px;
    width: calc(100%-60px);
  }
}
</style>