import {
    shallowMount,
    mount,
    config,
} from '@vue/test-utils';

import VsPanel from '../Panel.vue';

config.global.renderStubDefaultSlot = true;

const defaultSlotText = 'Panel text';
const titleSlotText = 'Panel title';

const factoryShallowMount = (propsData) => shallowMount(VsPanel, {
    slots: {
        default: defaultSlotText,
        'vs-panel-title': titleSlotText,
    },
    propsData: {
        ...propsData,
    },
});

const factoryMount = (propsData) => mount(VsPanel, {
    slots: {
        default: defaultSlotText,
        'vs-panel-title': titleSlotText,
    },
    propsData: {
        ...propsData,
    },
});

describe('VsPanel', () => {
    it('should render a B-CARD-STUB', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.element.tagName).toBe('B-CARD-STUB');
    });

    describe(':slots', () => {
        it('renders content inserted into default `slot`', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.text()).toContain(defaultSlotText);
        });

        it('renders content inserted into vs-panel-title `slot` inside ', () => {
            const wrapper = factoryMount();

            expect(wrapper.text()).toContain(titleSlotText);
        });
    });
});
