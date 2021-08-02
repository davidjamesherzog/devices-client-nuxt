import { createModule, mutation, action } from 'vuex-class-component';
import { $axios } from '../utils/api';
import NetworkModel from '~/client/models/Network';

const VuexModule = createModule({
  namespaced: 'network',
  strict: false,
  target: 'nuxt'
});

export default class Network extends VuexModule {
  // state
  private _networks: Array<NetworkModel> = [];

  // getters
  public get networks() {
    return this._networks;
  }

  // mutations
  @mutation
  public setList(networks: Array<NetworkModel>): void {
    this._networks = networks;
  }

  // actions
  @action
  public async list(): Promise<void> {
    const networks: Array<NetworkModel> = await $axios.$get('/networks');
    this.setList(networks);
  }
}
