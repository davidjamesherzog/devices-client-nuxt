<template>
  <div>
    <app-header />
    <sidebar />

    <section class="main-content columns">
      <aside class="column is-2 section is-hidden-touch">
        <app-menu />
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
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

.main-content {
  height: 100%;
}
</style>
