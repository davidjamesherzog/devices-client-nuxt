/* istanbul ignore file */
import Vue from 'vue';
import Vuex from 'vuex';
import { extractVuexModule, createProxy } from 'vuex-class-component';
import Device from './device';
import Network from './network';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(Device),
    ...extractVuexModule(Network)
  }
});

const createStore = () => {
  return store;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const vxm = {
  device: createProxy(store, Device),
  network: createProxy(store, Network)
};

export default createStore;
