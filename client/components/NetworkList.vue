<template>
  <div>
    <network-list-item
      v-for="network in networks"
      :key="network.id"
      :network="network"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import Network from '~/client/models/Network';
import NetworkListItem from '~/components/NetworkListItem.vue';

@Component({
  name: 'NetworkList',
  components: {
    NetworkListItem
  }
})
export default class NetworkList extends Vue {
  @Prop({ type: Array })
  private networks!: Array<Network>;
}
</script>

<style lang="scss" scoped></style>
