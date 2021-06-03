<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey" data-device-title>Devices</h2>
    <device-list :devices="devices" data-device-list />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Device from '~/client/models/Device';
import DeviceList from '~/components/DeviceList.vue';

@Component({
  name: 'Devices',
  components: {
    DeviceList
  }
})
export default class Devices extends Vue {
  private devices: Array<Device> = [];

  public async fetch(): Promise<Array<Device>> {
    this.devices = await this.$axios.$get('/devices');
    return this.devices;
  }
}
</script>
