import { mount } from '@vue/test-utils';
import App from './App.vue';

describe('Testing APP component', () => {
  it('render component', async () => {
    const wrapper = mount(App);

    expect(wrapper.text()).toContain('Vite + Vue');
  })
})