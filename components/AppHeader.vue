<template>
  <nav
    class="app-header navbar header has-shadow is-primary"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <div class="navbar-burger" @click="toggleMenu()">
        <span />
        <span />
        <span />
      </div>
      <a class="navbar-item" href="/">
        <!--<img src="~assets/buefy.png" alt="Buefy" height="28" />-->
        <h4 class="is-size-4">Devices</h4>
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'AppHeader'
})
export default class AppHeader extends Vue {
  public toggleMenu(): void {
    this.$nuxt.$emit('toggle-menu');
  }
}
</script>

<style lang="scss" scoped>
.navbar-burger {
  margin-left: 0;
}
</style>
