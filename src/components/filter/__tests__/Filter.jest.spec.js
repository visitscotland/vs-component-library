import { mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsFilter from '../VsFilter.vue';

const filterId = 'filter-1';
const filterLabel = 'filter';
const defaultSlotContent = 'Slot content';
let wrapper;

beforeEach(() => {
    wrapper = mount(VsFilter, {
        propsData: {
            filterId,
            filterLabel,
        },
        slots: {
            default: defaultSlotContent,
        },
    });
});

describe('VsFilter', () => {
    it('should render an element with the `vs-filter` test attribute', () => {
        expect(wrapper.find('[data-test="vs-filter"]').exists()).toBe(true);
    });

    describe(':props', () => {
        it('filterId - should render the component with the ID value passed', () => {
            expect(wrapper.find(`#${filterId}`).exists()).toBe(true);
        });

        it('filterLabel - should render the fieldset with a legend containing the value passed', () => {
            const filterLegend = wrapper.find('.vs-filter__legend');

            expect(filterLegend.text()).toContain(filterLabel);
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
