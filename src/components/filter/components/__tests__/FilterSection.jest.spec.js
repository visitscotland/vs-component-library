import { shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsFilterSection from '../VsFilterSection.vue';

const defaultSlotContent = 'Slot content';
let wrapper;

beforeEach(() => {
    wrapper = shallowMount(VsFilterSection, {
        slots: {
            default: defaultSlotContent,
        },
    });
});

describe('VsFilterSection', () => {
    it('should render an element with the `vs-filter-section` test attribute', () => {
        expect(wrapper.attributes('data-test')).toBe('vs-filter-section');
    });

    describe(':props', () => {
        it('sectionTitle - should render a summary element containing the value passed', async() => {
            const sectionTitle = 'summary title';

            await wrapper.setProps({
                sectionTitle,
                type: 'group',
            });

            const summary = wrapper.find('summary');

            expect(summary.text()).toContain(sectionTitle);
        });

        it('type - should render `vs-filter-section__section` when set to `list`', () => {
            const filterSection = wrapper.find('.vs-filter-section__section');

            expect(filterSection.exists()).toBe(true);
        });

        it('type - should render `vs-filter-section__section` and `vs-filter-section--inline` when set to `inline`', async() => {
            await wrapper.setProps({
                type: 'inline',
            });

            const filterSection = wrapper.find('.vs-filter-section__section');
            const filterSectionInline = wrapper.find('.vs-filter-section--inline');

            expect(filterSection.exists()).toBe(true);
            expect(filterSectionInline.exists()).toBe(true);
        });

        it('type - should render `vs-filter-section__section` when set to `group`', async() => {
            await wrapper.setProps({
                type: 'group',
            });

            const filterSection = wrapper.find('.vs-filter-section__details');

            expect(filterSection.exists()).toBe(true);
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
