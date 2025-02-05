import { shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsFilterPanel from '../VsFilterPanel.vue';

const filterLabelContent = 'Filter';
const defaultSlotContent = 'Slot content';
let wrapper;

beforeEach(() => {
    wrapper = shallowMount(VsFilterPanel, {
        propsData: {
            filterLabel: filterLabelContent,
        },
        slots: {
            default: defaultSlotContent,
        },
    });
});

describe('VsFilterPanel', () => {
    it('should render an element with the `vs-filter__panel` test attribute', () => {
        expect(wrapper.attributes('data-test')).toBe('vs-filter__panel');
    });

    describe(':props', () => {
        it('filterLabel - should render the fieldset with a legend containing the value passed', () => {
            const filterLegend = wrapper.find('.vs-filter__legend');

            expect(filterLegend.text()).toContain(filterLabelContent);
        });
    });

    describe(':slots', () => {
        it('renders content inserted into the default slot', () => {
            expect(wrapper.text()).toContain(defaultSlotContent);
        });
    });

    describe(':emits', () => {
        it(':filter-updated - should be emitted when a filter item is changed', async() => {
            const filterPanel = wrapper.find('.vs-filter__panel');

            await filterPanel.trigger('change');

            expect(wrapper.emitted('filter-updated')).toBeTruthy();
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
