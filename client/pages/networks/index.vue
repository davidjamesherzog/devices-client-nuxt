<template>
  <div>
    <section class="section">
      <h2 class="title is-3 has-text-grey" data-network-title>Networks</h2>
      <network-list :networks="networks" data-network-list />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Network from '~/client/models/Network';
import NetworkList from '~/components/NetworkList.vue';

@Component({
  name: 'Networks',
  components: {
    NetworkList
  }
})
export default class Networks extends Vue {
  private networks: Array<Network> = [];

  public async fetch(): Promise<Array<Network>> {
    this.networks = await this.$axios.$get('/networks');
    return this.networks;
  }
}
</script>

<style lang="scss" scoped></style>
