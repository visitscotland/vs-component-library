import { config, shallowMount } from '@vue/test-utils';

import VsExperiencesCalculatorIntro from '../ExperiencesCalculatorIntro.vue';

config.global.renderStubDefaultSlot = true;

const heading = 'Calculate your experiences';
const content = 'Lorem ipsum dolor sit amet';

const factoryShallowMount = (propsData) => shallowMount(VsExperiencesCalculatorIntro, {
    propsData: {
        ...propsData,
    },
    global: {
        provide: {
            labelsMap: {
                introHeading: heading,
                introContent: content,
            },
        },
    },
});

describe('VsExperiencesCalculatorIntro', () => {
    it('should render a div with the correct test attribute', () => {
        const wrapper = factoryShallowMount();

        const Intro = wrapper.find('div[data-test=vs-experiences-calculator-intro]');

        expect(Intro.exists()).toBe(true);
    });

    describe(':props', () => {
        it('should correctly render the labelsMap `introHeading`', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.text()).toContain(heading);
        });

        it('should correctly render the labelsMap `introContent`', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.text()).toContain(content);
        });
    });
});
