import { shallowMount, config } from '@vue/test-utils';
import VsMapWithSidebarSubcategory from '../MapWithSidebarSubcategory.vue';
import subCategoriesData from './data/filters-subcategories.json';

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = () => shallowMount(VsMapWithSidebarSubcategory, {
    propsData: {
        data: subCategoriesData,
        selectedSubCategory: '',
    },
});

describe('VsMapWithSidebarSubcategory', () => {
    it('should render a component with the data-test attribute `vs-main-map-subcategory`', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.attributes('data-test')).toBe('vs-main-map-subcategory');
    });
});

//     it('should render a checkbox component for each item in the data', () => {
//         const wrapper = factoryMount();
//         const allCheckboxes = wrapper.findAll('.custom-checkbox');
//         expect(allCheckboxes.length).toBe(7);
//     });
// });
