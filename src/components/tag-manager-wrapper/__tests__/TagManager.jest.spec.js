import { mount } from '@vue/test-utils';
import VsTagManagerWrapper from '../TagManagerWrapper.vue';

const factoryShallowMount = () => mount(VsTagManagerWrapper);

describe('VsTagManagerWrapper', () => {
    it('should render a span with test attribute of vs-tag-manager-wrapper', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.find('span[data-test=vs-tag-manager-wrapper]').exists()).toBe(true);
    });
});
