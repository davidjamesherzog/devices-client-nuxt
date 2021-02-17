import { createLocalVue, shallowMount } from '@vue/test-utils';
import Buefy from 'buefy';
import Index from '~/pages/index.vue';
import Card from '~/components/Card.vue';

describe('Index', () => {
  let localVue;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Buefy);
    localVue.component('card', Card);
  });

  test('is a Vue instance', () => {
    const wrapper = shallowMount(Index, {
      localVue
    });
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
