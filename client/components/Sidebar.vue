<template>
  <b-sidebar
    v-model="open"
    type="is-light"
    :fullheight="true"
    :fullwidth="false"
    :overlay="true"
  >
    <div class="p-1">
      <h4 class="is-size-4">Devices</h4>
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

  mounted() {
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

<style lang="scss" scoped>
.p-1 {
  padding: 1em;
}
</style>
