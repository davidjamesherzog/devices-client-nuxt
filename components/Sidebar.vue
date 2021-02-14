<template>
  <b-sidebar
    v-model="open"
    type="is-light"
    :fullheight="true"
    :fullwidth="false"
    :overlay="true"
  >
    <div class="p-1">
      <img
        src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
        alt="Lightweight UI components for Vue.js based on Bulma"
      />
      <app-menu />
    </div>
  </b-sidebar>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import AppMenu from '~/components/AppMenu.vue';

@Component({
  name: 'Sidebar',
  components: {
    AppMenu
  }
})
export default class Sidebar extends Vue {
  private open: Boolean = false;

  created() {
    this.$nuxt.$on('toggle-menu', this.toggleOpen);
    this.$nuxt.$on('close-menu', this.close);
  }

  toggleOpen() {
    this.open = !this.open;
  }

  close() {
    this.open = false;
  }
}
</script>

<style>
.p-1 {
  padding: 1em;
}
</style>
