<template>
  <div class="column card-width">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title has-text-grey" data-card-title>
          {{ network.name }}
        </p>
      </header>
      <div class="card-content">
        <div class="content has-text-centered">
          <b-icon
            :icon="type"
            size="is-large"
            type="is-primary"
            data-card-icon
          />
        </div>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item">
          <span data-card-description>
            {{ network.description }}
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import Network from '~/models/Network';

@Component({
  name: 'NetworkCard'
})
export default class Card extends Vue {
  @Prop({ type: Object })
  private network!: Network;

  get type(): String {
    return this.network.type === 'WIFI' ? 'wifi' : 'ethernet-cable';
  }
}
</script>

<style lang="scss" scoped>
.card-width {
  max-width: 250px;
  cursor: pointer;
}
</style>
