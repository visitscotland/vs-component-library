import { shallowMount } from '@vue/test-utils';

import VsProgressBar from '../ProgressBar.vue';

const factoryShallowMount = (propsData) => shallowMount(VsProgressBar, {
    propsData: {
        ...propsData,
        max: 4,
        currentStep: 1,
    },
});

describe('VsProgressBar', () => {
    it('should render a div with the correct test attribute', () => {
        const wrapper = factoryShallowMount();

        const ProgressBar = wrapper.find('div[data-test=vs-progress-bar]');

        expect(ProgressBar.exists()).toBe(true);
    });
});
