import { createLocalVue, shallowMount } from '@vue/test-utils';
import Buefy from 'buefy';
import Networks from './index.vue';

describe('Networks', () => {
  describe('template', () => {
    let localVue;

    beforeEach(() => {
      localVue = createLocalVue();
      localVue.use(Buefy);
    });

    test('is a Vue instance', () => {
      const wrapper = shallowMount(Networks, { localVue });
      expect(wrapper.vm).toBeTruthy();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
