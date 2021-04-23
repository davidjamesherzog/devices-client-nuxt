import { createLocalVue, shallowMount } from '@vue/test-utils';
import Buefy from 'buefy';
import Devices from './index.vue';

describe('Devices', () => {
  describe('template', () => {
    let localVue;

    beforeEach(() => {
      localVue = createLocalVue();
      localVue.use(Buefy);
    });

    test('is a Vue instance', () => {
      const wrapper = shallowMount(Devices, { localVue });
      expect(wrapper.vm).toBeTruthy();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
