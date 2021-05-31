<template>
  <div class="box" :data-list-item-id="network.id">
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
            <strong :data-list-item-title="network.id">{{
              network.name
            }}</strong>
            <small :data-list-item-type="network.id">{{ network.type }}</small>
            <br />
            <span :data-list-item-description="network.id">
              {{ network.description }}
            </span>
          </p>
        </div>
      </div>
    </article>
  </div>
  <!-- <div class="column card-width">
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
  </div> -->
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import Network from '~/client/models/Network';

@Component({
  name: 'NetworkList'
})
export default class NetworkList extends Vue {
  @Prop({ type: Object })
  private network!: Network;

  get type(): String {
    return this.network.type === 'WIFI' ? 'wifi' : 'ethernet-cable';
  }
}
</script>

<style lang="scss" scoped>
.box {
  margin-bottom: 0.5rem;
  cursor: pointer;
}
</style>
