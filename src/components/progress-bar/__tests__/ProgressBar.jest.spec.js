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

    describe(':props', () => {
        it('should render a stepped progress bar if the `isStepped` prop is set to true', () => {
            const wrapper = factoryShallowMount({
                isStepped: true,
            });

            expect(wrapper.findAll('b-progress-stub').length).toBe(4);
        });

        it('should render the current progress as a generic string if no progressLabel supplied', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.text()).toContain('1 / 4');
        });

        it('should render the current progress as an interpolated string if progressLabel supplied', () => {
            const wrapper = factoryShallowMount({
                progressLabel: 'Step xxx of yyy',
            });

            expect(wrapper.text()).toContain('Step 1 of 4');
        });
    });
});
