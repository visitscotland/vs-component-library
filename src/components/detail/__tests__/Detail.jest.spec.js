import { shallowMount } from '@vue/test-utils';

import VsDetail from '../Detail.vue';

const slotText = 'Detail content';

const factoryShallowMount = (propsData) => shallowMount(VsDetail, {
    slots: {
        default: slotText,
    },
    propsData: {
        ...propsData,
    },
});

describe('VsDetail', () => {
    it('should render a div with the class `vs-detail`', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.element.tagName).toBe('DIV');
        expect(wrapper.classes('vs-detail')).toBe(true);
    });
});
