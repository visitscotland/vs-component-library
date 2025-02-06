import { mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsFilter from '../VsFilter.vue';

const applyButtonText = 'Apply';
const filterButtonText = 'Filter';
const defaultSlotContent = 'Slot content';
let wrapper;

beforeEach(() => {
    wrapper = mount(VsFilter, {
        propsData: {
            applyButtonText,
            filterButtonText,
        },
        slots: {
            default: defaultSlotContent,
        },
    });
});

describe('VsFilter', () => {
    it('should render an element with the `vs-filter` test attribute', () => {
        expect(wrapper.attributes('data-test')).toBe('vs-filter');
    });

    describe(':props', () => {
        it('filterButtonText - should render a button with the value passed', () => {
            const filterButton = wrapper.find('.vs-filter__toggle');

            expect(filterButton.text()).toContain(filterButtonText);
        });
    });

    describe(':slots', () => {
        it('renders content inserted into the default slot', () => {
            expect(wrapper.text()).toContain(defaultSlotContent);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
