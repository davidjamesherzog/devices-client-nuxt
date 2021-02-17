<template>
  <div class="app-container">
    <app-header />
    <sidebar />
    <app-menu class="default-menu" />
    <div class="app-main">
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'Default'
})
export default class Default extends Vue {}
</script>

<style>
html,
body {
  height: 100%;
}

.app-header {
  grid-area: header;
  max-height: 52px;
}
.app-menu {
  grid-area: menu;
}
.app-main {
  grid-area: main;
  overflow: scroll;
}

.default-menu {
  display: none;
}

.app-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 52px 1fr;
  grid-template-areas:
    'header'
    'main';
  grid-gap: 10px;
  height: 100vh;
}

.section {
  padding: 1.5rem;
}

@media screen and (min-width: 1024px) {
  .default-menu {
    display: block;
  }

  .app-container {
    grid-template-columns: 200px 1fr;
    grid-template-rows: 52px 1fr;
    grid-template-areas:
      'header header'
      'menu main';
  }
}
</style>
