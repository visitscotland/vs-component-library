import { shallowMount, config } from '@vue/test-utils';
import VsMapWithSidebarCategory from '../MapWithSidebarCategory.vue';

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = () => shallowMount(VsMapWithSidebarCategory, {
    propsData: {
        categoryName: 'Cities',
        type: 'cities',
    },
});

describe('VsMapWithSidebarCategory', () => {
    it('should render a component with the data-test attribute `vs-map-with-sidebar-panel`', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.attributes('data-test')).toBe('vs-main-map-category');
    });

    describe(':props', () => {
        it('should display the content of the `categoryName` prop', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.text()).toContain('Cities');
        });

        it('should display the marker corresponding to the `type` prop', () => {
            const wrapper = factoryShallowMount();
            const iconStub = wrapper.find('vs-map-marker-icon-stub');
            expect(iconStub.attributes('id')).toBe('cities');
        });
    });

    describe(':methods', () => {
        it('should call the `selectCategory` method when the button element is clicked', async() => {
            const wrapper = factoryShallowMount();
            const mockMethod = jest.spyOn(wrapper.vm, 'selectCategory');
            const categoryButton = wrapper.find('[data-test="vs-main-map-category__button"]');
            await categoryButton.trigger('click');

            expect(mockMethod).toHaveBeenCalledWith('cities');
        });
    });
});
