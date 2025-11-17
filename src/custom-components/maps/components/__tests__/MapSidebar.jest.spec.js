import { mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsMapSidebar from '../MapSidebar.vue';

const factoryMount = (propsData) => mount(VsMapSidebar, {
    ...propsData,
    propsData: {
        headerLabel: 'Discover your Scotland',
        closeSidebarButtonLabel: 'Close Sidebar',
        inputPlaceHolderLabel: 'Type in your keyword',
        searchButtonLabel: 'Search',
        clearMapLabel: 'Clear Map',
        searchResultsLabel: 'Showing results for: ',
        openSidebarButtonLabel: 'Open Sidebar',
    },
});

describe('VsMapSidebar', () => {
    it('should render a div element with the class `vs-map-sidebar`', () => {
        const wrapper = factoryMount();

        expect(wrapper.element.tagName).toBe('DIV');
        expect(wrapper.find('.vs-map-sidebar').exists()).toBe(true);
    });

    describe(':props', () => {
        it('should accept a query prop and render it in the searched for field', async() => {
            const wrapper = factoryMount();

            await wrapper.setProps({
                query: 'Inverness',
            });

            const searchOutput = wrapper.find('[data-test="vs-map-sidebar__search-result-query"');
            expect(searchOutput.exists()).toBe(true);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
