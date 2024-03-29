import { shallowMount, config } from '@vue/test-utils';
import { setActivePinia, createPinia } from 'pinia';
import VsMapWithSidebarControls from '../MapWithSidebarControls.vue';

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = () => shallowMount(VsMapWithSidebarControls, {
    global: {
        provide: {
            clearSelectionText: 'Clear selection',
            applyFiltersText: 'Apply filter',
        },
    },
});

describe('VsMapWithSidebarControls', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('should render a component with the data-test attribute "vs-main-map-controls"', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.attributes('data-test')).toBe('vs-main-map-controls');
    });

    it('should display the text from the `clearSelectionText` injected value', () => {
        const wrapper = factoryShallowMount();
        const clearBtn = wrapper.find('[data-test="vs-main-map-subcategory__clear-selection"]');
        expect(clearBtn.text()).toBe('Clear selection');
    });

    it('should display the text from the `applyFilterText` injected value', () => {
        const wrapper = factoryShallowMount();
        const applyBtn = wrapper.find('[data-test="vs-main-map-subcategory__apply-filters"]');
        expect(applyBtn.text()).toBe('Apply filter');
    });

    describe(':methods', () => {
        it('should set `isDisabled` to true when clear all button is clicked', async() => {
            const wrapper = factoryShallowMount();
            const clearBtn = wrapper.find('[data-test="vs-main-map-subcategory__clear-selection"]');
            await clearBtn.trigger('click');

            expect(wrapper.vm.isDisabled).toBe(true);
        });

        it('should ensure that the submit button is disabled by default', async() => {
            const wrapper = factoryShallowMount();
            const applyBtn = wrapper.find('[data-test="vs-main-map-subcategory__apply-filters"]');
            expect(applyBtn.attributes('aria-disabled')).toBe('true');
        });

        it('should ensure that the submit button is enabled when the data attribute is changed', async() => {
            const wrapper = factoryShallowMount();
            wrapper.setData({
                isDisabled: false,
            });

            await wrapper.vm.$nextTick();

            const applyBtn = wrapper.find('[data-test="vs-main-map-subcategory__apply-filters"]');
            expect(applyBtn.attributes('aria-disabled')).toBe('false');
        });
    });
});
