import { createModule, mutation, action } from 'vuex-class-component';
import { $axios } from '../utils/api';
import DeviceModel from '~/client/models/Device';

const VuexModule = createModule({
  namespaced: 'device',
  strict: false,
  target: 'nuxt'
});

export default class Device extends VuexModule {
  // state
  private _devices: Array<DeviceModel> = [];

  // getters
  public get devices() {
    return this._devices;
  }

  // mutations
  @mutation
  public setList(devices: Array<DeviceModel>): void {
    this._devices = devices;
  }

  // actions
  @action
  public async list(): Promise<void> {
    const devices: Array<DeviceModel> = await $axios.$get('/devices');
    this.setList(devices);
  }
}
