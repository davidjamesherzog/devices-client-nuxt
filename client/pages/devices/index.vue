<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey" data-device-title>Devices</h2>
    <device-list :devices="devices" data-device-list />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { mapActions, mapState } from 'vuex';
import Device from '~/client/models/Device';
import DeviceList from '~/components/DeviceList.vue';

@Component({
  name: 'Devices',
  components: {
    DeviceList
  },
  computed: {
    ...mapState('device', { devices: '_devices' })
  },
  methods: {
    ...mapActions('device', ['list'])
  }
})
export default class Devices extends Vue {
  private devices!: Array<Device>;
  private list!: () => Promise<void>;

  public async fetch(): Promise<void> {
    await this.list();
    // return this.devices;
  }
}
</script>
