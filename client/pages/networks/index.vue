<template>
  <div>
    <section class="section">
      <h2 class="title is-3 has-text-grey">Networks</h2>
    </section>
    <section class="networks">
      <network-card
        v-for="(network, key) of networks"
        :key="key"
        :network="network"
      ></network-card>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Network from '~/client/models/Network';
import NetworkCard from '~/components/NetworkCard.vue';

@Component({
  name: 'Networks',
  components: {
    NetworkCard
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

<style lang="scss" scoped>
.networks {
  display: flex;
  flex-direction: row;
}
</style>
