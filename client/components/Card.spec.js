import { createLocalVue, mount } from '@vue/test-utils';
import Buefy from 'buefy';
import Card from '~/components/Card.vue';

describe('Card', () => {
  let localVue;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Buefy);
  });

  test('is a Vue instance', () => {
    const wrapper = mount(Card, {
      localVue
    });
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render title', () => {
    const wrapper = mount(Card, {
      localVue,
      propsData: {
        title: 'My Card'
      }
    });
    const title = wrapper.find('[data-card-title]');
    expect(title.exists()).toBeTruthy();
    expect(title.text()).toEqual('My Card');
    expect(wrapper).toMatchSnapshot();
  });

  test('should render icon', () => {
    const wrapper = mount(Card, {
      localVue,
      propsData: {
        icon: 'cellphone-link'
      }
    });
    const icon = wrapper.find('[data-card-icon]');
    expect(icon.exists()).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
