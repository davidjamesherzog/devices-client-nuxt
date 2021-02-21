<template>
  <b-menu class="app-menu section">
    <b-menu-list label="General">
      <div v-for="(item, key) of items" :key="key" @click="close()">
        <b-menu-item
          :label="item.title"
          :icon="item.icon"
          tag="router-link"
          :to="item.to"
          :data-menu="item.title"
        ></b-menu-item>
      </div>
    </b-menu-list>
  </b-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'AppMenu'
})
export default class Menu extends Vue {
  private items: Array<any> = [
    {
      title: 'Home',
      icon: 'home',
      to: { name: 'index' }
    },
    {
      title: 'Devices',
      icon: 'devices',
      to: { name: 'devices' }
    },
    {
      title: 'Networks',
      icon: 'lan',
      to: { name: 'networks' }
    }
  ];

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
