import { config, shallowMount } from '@vue/test-utils';

import VsTableHeaderCell from '../TableHeaderCell.vue';

config.global.renderStubDefaultSlot = true;

const slotContent = 'A table data header goes here';

const factoryShallowMount = (propsData) => shallowMount(VsTableHeaderCell, {
    propsData: {
        ...propsData,
    },
    slots: {
        default: slotContent,
    },
});

describe('VsTableHeaderCell', () => {
    it('should render a BTH-STUB', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.element.tagName).toBe('B-TH-STUB');
    });

    describe(':props', () => {
        it('should display a `stackedHeading` for the table cell', () => {
            const wrapper = factoryShallowMount({
                stackedHeading: 'Status',
            });
            expect(wrapper.attributes('stackedheading')).toBe('Status');
        });
    });

    describe(':slots', () => {
        const wrapper = factoryShallowMount();
        it('renders content inserted into the default `slot`', () => {
            expect(wrapper.text()).toContain(slotContent);
        });
    });
});
