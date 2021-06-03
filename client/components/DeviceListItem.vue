<template>
  <div class="box" :data-list-item-id="device.id">
    <article class="media">
      <div class="media-left">
        <div class="content has-text-centered">
          <b-icon
            :icon="type"
            size="is-large"
            type="is-primary"
            data-card-icon
          />
        </div>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong :data-list-item-title="device.id">{{ device.name }}</strong>
            <small :data-list-item-os="device.id">{{ device.os }}</small>
            <br />
            <span :data-list-item-description="device.id">
              {{ device.description }}
            </span>
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import Device from '~/client/models/Device';

@Component({
  name: 'DeviceListItem'
})
export default class DeviceListItem extends Vue {
  @Prop({ type: Object })
  private device!: Device;

  get type(): String {
    let icon: String = '';
    switch (this.device.os) {
      case 'Mac':
      case 'Windows':
        icon = 'laptop';
        break;
      case 'Linux':
        icon = 'linux';
        break;
      case 'Android':
        icon = 'android';
        break;
      case 'iOS':
        icon = 'apple-ios';
        break;
      case 'Samsung':
      case 'Vizio':
      case 'FireTV':
      case 'Roku':
        icon = 'television';
        break;
      case 'Xbox':
        icon = 'microsoft-xbox';
        break;
      case 'Playstation':
        icon = 'sony-playstation';
        break;
      case 'Chromecast':
        icon = 'cast';
        break;
      case 'Chromebook':
        icon = 'chrome';
        break;
      default:
        icon = '';
        break;
    }
    return icon;
  }
}
</script>

<style lang="scss" scoped>
.box {
  margin-bottom: 0.5rem;
  cursor: pointer;
}
</style>
