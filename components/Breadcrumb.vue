<template>
  <nav class="breadcrumb" aria-label="breadcrumbs" data-breadcrumbs>
    <ul>
      <li data-breadcrumb="home" class="capitalize">
        <nuxt-link to="/">home</nuxt-link>
      </li>
      <li
        v-for="(path, key) of paths"
        :key="key"
        class="capitalize"
        :class="{ 'is-active': key === paths.length - 1 }"
      >
        <nuxt-link
          :data-breadcrumb="path"
          :to="constructUrl(path)"
          aria-current="page"
        >
          {{ path }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'Breadcrumb'
})
export default class Breadcrumb extends Vue {
  private paths: String[] = [];

  public created(): void {
    this.updateBreadcrumbs();
  }

  @Watch('$route')
  public onRouteChange() {
    this.updateBreadcrumbs();
  }

  public updateBreadcrumbs(): void {
    if (!this.$route || !this.$route.path || this.$route.path === '/') {
      this.paths = [];
      return;
    }
    this.paths = this.$route.path.split('/');
    if (!this.paths[0]) {
      this.paths.shift();
    }
  }

  public constructUrl(path: string): string {
    const index = this.paths.findIndex((value) => value === path);
    const paths = this.paths.slice(0, index + 1);
    return `/${paths.join('/')}`;
  }
}
</script>

<style type="scss" scoped>
.breadcrumb {
  margin-left: 1.5em;
}

.capitalize {
  text-transform: capitalize;
}
</style>
