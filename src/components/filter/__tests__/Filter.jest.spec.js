import { mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsFilter from '../VsFilter.vue';

const applyButtonText = 'Apply';
const filterButtonText = 'Filter';
const filterId = 'modal-1';
const defaultSlotContent = 'Slot content';
let wrapper;

beforeEach(() => {
    wrapper = mount(VsFilter, {
        propsData: {
            applyButtonText,
            filterButtonText,
            filterId,
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
        it('filterButtonText - should render a button with the value passed', () => {
            const filterButton = wrapper.find('.vs-filter__toggle');

            expect(filterButton.text()).toContain(filterButtonText);
        });

        it('applyButtonText - should render a button component within the modal with the passed value', async() => {
            const modal = wrapper.findComponent({
                name: 'VsModal',
            });

            const applyButton = modal.findAllComponents({
                name: 'VsButton',
            })[1];

            expect(applyButton.exists()).toBe(true);
            expect(applyButton.classes()).toContain('vs-filter__apply');
            expect(applyButton.text()).toBe(applyButtonText);
        });

        it('filterId - should render a modal with the `modal-id` prop with the value passed', () => {
            const modal = wrapper.findComponent({
                name: 'VsModal',
            });

            expect(modal.exists()).toBe(true);
            expect(modal.props('modalId')).toBe(filterId);
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
