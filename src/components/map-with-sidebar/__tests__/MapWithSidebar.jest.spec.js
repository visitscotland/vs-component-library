import { shallowMount, config } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import axios from 'axios';
import VsMapWithSidebar from '../MapWithSidebar.vue';
import placesJson from './data/places.json';
import filtersJson from './data/filters.json';
import filtersSubcatJson from './data/fitlersSubcat.json';
import mockPlacesResponse from './data/mockPlacesResponse.json';
import filteredSubcatJson from './data/filteredSubcat.json';

config.global.renderStubDefaultSlot = true;

// Following lines tell Jest to mock any call to `axios.get`
jest.spyOn(axios, 'get').mockResolvedValue(mockPlacesResponse);

const factoryShallowMount = () => shallowMount(VsMapWithSidebar, {
    slots: {
        'open-side-panel-text': 'Open panel',
        'no-js': 'Javascript is needed for this map',
    },
    propsData: {
        placesData: placesJson.features,
        filters: filtersJson,
        selectedItem: 'a4260a0c-9d66-425b-835a-eec833c30a92',
        mapId: 'vs-map',
        currentStage: 0,
        clearSelectionText: 'Clear selection',
        applyFiltersText: 'Apply filters',
        clearFiltersText: 'Clear filters',
        filtersAppliedText: 'filters applied',
        mapFilterMessage: 'Filter map',
        mapNoResultsMessage: 'No results',
        toggleData: [
            {
                text: 'Regions',
                value: 'regions',
                icon: 'map',
            },
            {
                text: 'Places',
                value: 'places',
                icon: 'map-marker',
            },
        ],
    },
    global: {
        provide: {
            regions: [
            ],
        },
    },
});

describe('VsMapWithSidebar', () => {
    it('should render a component with the data-test attribute `vs-map-with-sidebar`', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.attributes('data-test')).toBe('vs-map-with-sidebar');
    });

    describe(':props', () => {
        it('should show the toggle buttons when `toggleData` is passed in', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.find('[data-test="vs-map-with-sidebar__map-toggle-group"]').exists()).toBe(true);
        });

        it('should not show the toggle buttons when no `toggleData` is passed in', async() => {
            const wrapper = factoryShallowMount();
            await wrapper.setProps({
                toggleData: [],
            });

            expect(wrapper.find('[data-test="vs-map-with-sidebar__map-toggle-group"]').exists()).toBe(false);
        });
    });

    describe(':methods', () => {
        it('should hide the side panel after the `closePanel` method is fired', async() => {
            const wrapper = factoryShallowMount();
            const panel = wrapper.find('[data-test="vs-map-with-sidebar__side-panel"]');

            wrapper.vm.closePanel();

            await wrapper.vm.$nextTick();

            expect(panel.classes('d-none')).toBe(true);
        });

        it('should show the side panel after the `openMenu` method is fired', async() => {
            const wrapper = factoryShallowMount();
            const panel = wrapper.find('[data-test="vs-map-with-sidebar__side-panel"]');

            wrapper.vm.closePanel();

            await wrapper.vm.$nextTick();

            wrapper.vm.openMenu();

            await wrapper.vm.$nextTick();

            expect(panel.classes('d-none')).toBe(false);
        });

        it('should set the stage to 0 when the `openMenu` method is fired', async() => {
            const wrapper = factoryShallowMount();
            wrapper.setProps({
                currentStage: 2,
            });

            wrapper.vm.closePanel();

            await wrapper.vm.$nextTick();

            wrapper.vm.openMenu();

            await wrapper.vm.$nextTick();

            expect(wrapper.vm.currentStage).toBe(0);
        });

        it('should change the `selectedItem` data when the `showDetail` method is fired', async() => {
            const wrapper = factoryShallowMount();

            wrapper.vm.showDetail(placesJson.features[0]);
            await wrapper.vm.$nextTick();
            expect(wrapper.vm.selectedItem).toStrictEqual(placesJson.features[0]);
        });

        it('should add all places to `activePins` when `showAllPlaces` is fired', async() => {
            const wrapper = factoryShallowMount();
            wrapper.vm.showAllPlaces();
            await wrapper.vm.$nextTick();
            expect(wrapper.vm.activePins.length).toBe(13);
        });

        it('should change the `selectedCategory` data when the `setCategory` method is fired', async() => {
            const wrapper = factoryShallowMount();

            wrapper.vm.setCategory('cities');
            await wrapper.vm.$nextTick();
            expect(wrapper.vm.selectedCategory).toBe('cities');
        });

        it('should add all objects from `placesData` prop to `activePins` when `showAllPlaces` is fired', async() => {
            const wrapper = factoryShallowMount();
            wrapper.vm.showAllPlaces();

            await wrapper.vm.$nextTick();
            expect(wrapper.vm.activePins.length).toBe(13);
        });

        it('filters places by a category when `filterPlaces` is fired', async() => {
            const wrapper = factoryShallowMount();
            wrapper.vm.filterPlaces('cities');

            expect(wrapper.vm.activePins.length).toBe(3);
        });

        it('should remove all pins if `id` is set to `regions`', async() => {
            const wrapper = factoryShallowMount();
            wrapper.vm.filterPlaces('regions');

            expect(wrapper.vm.activePins.length).toBe(0);
        });

        it('should update the `selectedSubCategory` data value when method is run', async() => {
            const wrapper = factoryShallowMount();

            await wrapper.setProps({
                filters: filtersSubcatJson,
            });

            wrapper.vm.setSubCategory('acco');

            expect(wrapper.vm.selectedSubCategory).toBe('acco');
        });

        it('should make two API calls when the subcategory is changed', async() => {
            const wrapper = factoryShallowMount();
            await wrapper.setProps({
                filters: filtersSubcatJson,
            });
            wrapper.vm.setSubCategory('acco');
            wrapper.vm.filterSubCategories(filteredSubcatJson);

            await wrapper.vm.$nextTick();
            expect(axios.get).toHaveBeenCalledTimes(2);
        });
    });

    describe(':slots', () => {
        it('should display the `openMapText` slot', () => {
            const wrapper = factoryShallowMount();
            const openMapBtn = wrapper.find('[data-test="vs-map-with-sidebar__map-toggle"]');

            expect(openMapBtn.text()).toBe('Open panel');
        });

        it('should render the `no-js` slot content', () => {
            const wrapper = factoryShallowMount();
            const warning = wrapper.find('vs-warning-stub');
            expect(warning.text()).toContain('Javascript is needed for this map');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
