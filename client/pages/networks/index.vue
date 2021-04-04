<template>
  <div>
    <section class="section">
      <h2 class="title is-3 has-text-grey">Networks</h2>
    </section>
    <section class="networks">
      <network-card :network="network"></network-card>
      <network-card :network="network2"></network-card>
      <network-card :network="network3"></network-card>
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
  private network: Network = {
    id: 1,
    name: 'GozrehblasterN',
    description: 'Test Wifi',
    type: 'WIFI'
  };

  private network2: Network = {
    id: 2,
    name: 'HerzogHomeN',
    description: 'Test Wifi',
    type: 'WIFI'
  };

  private network3: Network = {
    id: 3,
    name: 'Wired',
    description: 'Wired devices',
    type: 'Wired'
  };
}
</script>

<style lang="scss" scoped>
.networks {
  display: flex;
  flex-direction: row;
}
</style>
