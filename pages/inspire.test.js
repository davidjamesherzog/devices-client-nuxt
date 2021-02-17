import { createLocalVue, shallowMount } from '@vue/test-utils';
import Buefy from 'buefy';
import Inspire from '~/pages/inspire.vue';

describe('Inspire', () => {
  describe('template', () => {
    let localVue;

    beforeEach(() => {
      localVue = createLocalVue();
      localVue.use(Buefy);
    });

    test('is a Vue instance', () => {
      const wrapper = shallowMount(Inspire, { localVue });
      expect(wrapper.vm).toBeTruthy();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
