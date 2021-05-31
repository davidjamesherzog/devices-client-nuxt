<template>
  <div>
    <device-list-item
      v-for="device in devices"
      :key="device.id"
      :device="device"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import Device from '~/client/models/Device';
import DeviceListItem from '~/components/DeviceListItem.vue';

@Component({
  name: 'DeviceList',
  components: {
    DeviceListItem
  }
})
export default class DeviceList extends Vue {
  @Prop({ type: Array })
  private devices!: Array<Device>;
}
</script>

<style lang="scss" scoped></style>
