<template>
  <nav
    class="navbar is-dark is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <button
        class="button is-dark navbar-burger"
        :class="{ 'is-active': isActive }"
        @click="isActive = !isActive"
      >
        <span></span> <span></span> <span></span>
      </button>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-end">
        <router-link
          :to="nav.link"
          class="navbar-item"
          :key="nav.name"
          v-for="nav in navs"
          exact
        >
          {{ nav.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { mapState } from "vuex";

export default {
  name: "HeaderComponent",
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    ...mapState(["navs"]),
  },
};
</script>

<style lang="scss" scoped>
.navbar-item {
  &.is-active {
    font-weight: bold;
  }
}
</style>
