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
import { mapActions, mapState } from 'vuex';
import Network from '~/client/models/Network';
import NetworkList from '~/components/NetworkList.vue';

@Component({
  name: 'Networks',
  components: {
    NetworkList
  },
  computed: {
    ...mapState('network', { networks: '_networks' })
  },
  methods: {
    ...mapActions('network', ['list'])
  }
})
export default class Networks extends Vue {
  private networks!: Array<Network>;
  private list!: () => Promise<void>;

  public async fetch(): Promise<void> {
    await this.list();
  }
}
</script>

<style lang="scss" scoped></style>
