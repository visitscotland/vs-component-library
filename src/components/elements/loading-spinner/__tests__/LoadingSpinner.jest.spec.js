import { shallowMount } from '@vue/test-utils';

import VsLoadingSpinner from '../LoadingSpinner.vue';

const factoryShallowMount = (propsData) => shallowMount(VsLoadingSpinner, {
    propsData: {
        ...propsData,
    },
});

describe('VsLoadingSpinner', () => {
    it('should render loading spinner', () => {
        const wrapper = factoryShallowMount();
        const LoadingSpinner = wrapper.find('div[data-test=vs-loading-spinner]');
        expect(LoadingSpinner.exists()).toBe(true);
    });

    describe(':props', () => {
        it(':variant - render the spinner with `light` variant by default', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.classes('vs-loading-spinner--light')).toBe(true);
        });
        it(':variant - should accept and render variants as props', () => {
            const wrapper = factoryShallowMount({
                variant: 'dark',
            });

            expect(wrapper.classes('vs-loading-spinner--dark')).toBe(true);
        });
    });
});
