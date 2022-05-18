<template>
  <div class="menu-item" :class="{ expanded: expanded }">
    <div
      class="label"
      @click="toggleMenu()"
      :style="{ paddingLeft: depth * 20 + 20 + 'px' }"
    >
      <div class="left">
        <i v-if="icon" :class="icon"></i>
        <span style="font-size: 16px">{{ label }}</span>
      </div>
      <div v-if="data" class="right">
        <i class="fas fa-angle-down expand" :class="{ expanded: expanded }"></i>
      </div>
    </div>
    <div
      class="items-container"
      v-show="showChildren"
      ref="container"
      :style="{ height: containerHeight }"
    >
      <menu-item
        v-for="(item, index) in data"
        :key="index"
        :label="item.label"
        :icon="item.icon"
        :depth="depth + 1"
        :data="item.children"
      >
      </menu-item>
    </div>
  </div>
</template>
<script>
export default {
  name: "menu-item",
  data() {
    return {
      showChildren: false,
      expanded: false,
      containerHeight: 0,
    };
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
    depth: {
      type: Number,
      required: true,
    },
    data: {
      type: Array,
    },
  },
  methods: {
    toggleMenu() {
      this.expanded = !this.expanded;
      // If the menu item is closed
      if (!this.showChildren) {
        this.showChildren = true;
        this.$nextTick(() => {
          //We get the height of what's inside the container to start the animation
          this.containerHeight = this.$refs["container"].scrollHeight + "px";
          setTimeout(() => {
            this.containerHeight = "fit-content";
            //We set the overflow of the container to visible at the end of the
            //animation
            this.$refs["container"].style.overflow = "visible";
          }, 300); //Duration of the Animation
        });
      } else {
        this.containerHeight = this.$refs["container"].scrollHeight + "px";
        //We set the overflow of the container to hidden to avoid text overlapping
        //during the animation
        this.$refs["container"].style.overflow = "hidden";
        //This trick all us to play the animation when the Css is all well set
        setTimeout(() => {
          this.containerHeight = 0 + "px";
        }, 10);
        setTimeout(() => {
          this.showChildren = false;
        }, 300); //Duration of the animation
      }
    },
  },
};
</script>
<style scoped>
.menu-item {
  position: relative;
  width: 100%;
}

.label {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  white-space: nowrap;
  user-select: none;
  height: 50px;
  padding: 0 20px;
  box-sizing: border-box;
  color: #ffffff;
  transition: all 0.3s ease;
}

.label:hover {
  background-color: rgb(45, 33, 20);
  cursor: pointer;
}

.label > div {
  display: flex;
  align-items: center;
  gap: 10px;
}

.label > div i {
  font-size: 16px;
  color: #ffffff;
  transition: all 0.3s ease;
}

.label > div i.expand {
  font-size: 14px;
  color: #ffffff;
}

.label > div i.expanded {
  transform: rotate(180deg);
}

.items-container {
  width: 100%;
  overflow: hidden;
  transition: height 0.3s ease;
}
</style>