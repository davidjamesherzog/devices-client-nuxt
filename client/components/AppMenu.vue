<template>
  <b-menu class="app-menu section">
    <b-menu-list label="General">
      <div v-for="(item, key) of items" :key="key" @click="close()">
        <b-menu-item
          :label="item.title"
          :icon="item.icon"
          tag="router-link"
          :to="item.route"
          :data-menu="item.title"
          :class="{ 'has-text-weight-bold': isCurrentRoute(item.route) }"
        ></b-menu-item>
      </div>
    </b-menu-list>
  </b-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Link from '~/client/models/Link';
import Route from '~/client/models/Route';

@Component({
  name: 'AppMenu'
})
export default class Menu extends Vue {
  private items: Array<Link> = [
    {
      title: 'Home',
      icon: 'home',
      route: { name: 'index' }
    },
    {
      title: 'Devices',
      icon: 'devices',
      route: { name: 'devices' }
    },
    {
      title: 'Networks',
      icon: 'lan',
      route: { name: 'networks' }
    }
  ];

  public isCurrentRoute(route: Route): boolean {
    return this.$route.name === route.name;
  }

  public close(): void {
    this.$nuxt.$emit('close-menu');
  }
}
</script>

<style lang="scss" scoped>
.p-1 {
  padding: 1em;
}
</style>
