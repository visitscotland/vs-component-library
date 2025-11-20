import { mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsMapSidebar from '../MapSidebar.vue';

const factoryMount = (propsData) => mount(VsMapSidebar, {
    ...propsData,
    propsData: {
        headerLabel: 'Discover your Scotland',
        closeSidebarButtonLabel: 'Close Sidebar',
        inputPlaceholderLabel: 'Type in your keyword',
        searchButtonLabel: 'Search',
        clearMapLabel: 'Clear Map',
        searchResultsLabel: 'Showing results for: ',
        openSidebarButtonLabel: 'Open Sidebar',
    },
    slots: {
        'vs-map-sidebar-sub-filters': '<div data-test="sub-categories">Sub Categories go here</div>',
        'vs-map-sidebar-search-results': '<div data-test="places-ui-kit">Places UI Kit go here</div>',
    },
});

describe('VsMapSidebar', () => {
    it('should render a div element with the class `vs-map-sidebar`', () => {
        const wrapper = factoryMount();

        expect(wrapper.element.tagName).toBe('DIV');
        expect(wrapper.find('.vs-map-sidebar').exists()).toBe(true);
    });

    describe(':props', () => {
        it('should accept a headerLabel prop and render the header', async() => {
            const wrapper = factoryMount();

            await wrapper.setProps({
                headerLabel: 'Discover Scotland on a Map',
            });

            const header = wrapper.find('[data-test="vs-map-sidebar__heading"');
            expect(header.exists()).toBe(true);

            expect(header.text()).toBe('Discover Scotland on a Map');
        });

        it('should accept a closeSidebarButtonLabel prop and render the text in the button', async() => {
            const wrapper = factoryMount();

            await wrapper.setProps({
                closeSidebarButtonLabel: 'Close the sidebar',
            });

            const closeSidebarBtn = wrapper.find('[data-test="vs-map-siderbar__sidebar-control--dismiss"]');
            expect(closeSidebarBtn.exists()).toBe(true);

            expect(closeSidebarBtn.text()).toBe('Close the sidebar');
        });

        it('should accept a placeholder prop and render the placeholder in the input field', async() => {
            const wrapper = factoryMount();

            await wrapper.setProps({
                inputPlaceholderLabel: 'Search Scotland by Text',
            });

            const input = wrapper.find('[data-test="vs-map-search-input"]');
            expect(input.exists()).toBe(true);

            const inputPlaceholder = wrapper.find('[placeholder="Search Scotland by Text"]');
            expect(inputPlaceholder.exists()).toBe(true);
        });

        it('should accept a searchButtonLabel prop and render the text in the button', async() => {
            const wrapper = factoryMount();

            await wrapper.setProps({
                searchButtonLabel: 'Buscar',
            });

            const searchBtn = wrapper.find('[data-test="vs-map-sidebar__search-button"]');
            expect(searchBtn.exists()).toBe(true);

            expect(searchBtn.text()).toBe('Buscar');
        });

        it('should accept a clearMapLabel prop and render the text in the button', async() => {
            const wrapper = factoryMount();

            await wrapper.setProps({
                query: 'Dundee',
                clearMapLabel: 'Reset map',
            });

            const resetMapBtn = wrapper.find('[data-test="vs-map-sidebar__reset-map"]');
            expect(resetMapBtn.exists()).toBe(true);

            expect(resetMapBtn.element.tagName).toBe('A');

            expect(resetMapBtn.text()).toBe('Reset map');
        });

        it('should accept a query prop and render it in the searched for field', async() => {
            const wrapper = factoryMount();

            await wrapper.setProps({
                query: 'Inverness',
            });

            const searchOutput = wrapper.find('[data-test="vs-map-sidebar__search-result-query"');
            expect(searchOutput.exists()).toBe(true);
        });

        it('should accept a openSidebarButtonLabel prop and render the text in the button', async() => {
            const wrapper = factoryMount();

            await wrapper.setProps({
                openSidebarButtonLabel: 'Open the sidebar',
            });

            const openSidebarBtn = wrapper.find('[data-test="vs-map-sidebar__sidebar-control--open"]');
            expect(openSidebarBtn.exists()).toBe(true);

            expect(openSidebarBtn.text()).toBe('Open the sidebar');
        });
    });

    describe(':slots', () => {
        it('should render the slot for the subcategories when `selectedCategories` is passed', async() => {
            const wrapper = factoryMount();

            await wrapper.setProps({
                selectedCategories: 'accommodation',
            });

            const subCatSlot = wrapper.find('[data-test="sub-categories"');
            expect(subCatSlot.exists()).toBe(true);
        });

        it('should render the slot for the places ui kit when `query` is present', async() => {
            const wrapper = factoryMount();

            await wrapper.setProps({
                query: 'Aberdeen',
            });

            const subCatSlot = wrapper.find('[data-test="places-ui-kit"');
            expect(subCatSlot.exists()).toBe(true);
        });
    });

    describe(':sidebar-logic', () => {
        it('should be able to close and reopen the sidebar', async() => {
            const wrapper = factoryMount();

            const closeSidebarBtn = wrapper.find('[data-test="vs-map-siderbar__sidebar-control--dismiss"]');
            const sidebar = wrapper.find('[data-test="vs-map-sidebar"]');
            const openSidebarBtn = wrapper.find('[data-test="vs-map-sidebar__sidebar-control--open"]');

            // Sidebar and control buttons exist
            expect(closeSidebarBtn.exists()).toBe(true);
            expect(sidebar.exists()).toBe(true);
            expect(openSidebarBtn.exists()).toBe(true);

            // Initial state where the sidebar is open
            expect(sidebar.classes()).toContain('d-block');
            expect(openSidebarBtn.classes()).toContain('d-none');

            // Click close button
            await closeSidebarBtn.trigger('click');

            // New state where the sidebar should now be closed (display: none)
            expect(sidebar.classes()).toContain('d-none');
            expect(openSidebarBtn.classes()).toContain('d-block');

            // Click open button
            await openSidebarBtn.trigger('click');

            // New state where the sidebar should now be closed (display: none)
            expect(sidebar.classes()).toContain('d-block');
            expect(openSidebarBtn.classes()).toContain('d-none');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
