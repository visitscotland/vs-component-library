import { config, mount } from '@vue/test-utils';

import VsCarbonCalculatorQuestion from '../CarbonCalculatorQuestion.vue';

jest.mock('@/utils/svg-context');

config.global.renderStubDefaultSlot = true;

const factoryMount = (propsData) => mount(VsCarbonCalculatorQuestion, {
    propsData: {
        fieldCategory: 'Transport',
        fieldClass: '',
        fieldName: 'transportModeTo',
        fieldType: 'radio',
        hintText: '',
        label: '',
        labelFor: '',
        options: [],
        ...propsData,
    },
});

describe('VsCarbonCalculatorQuestion', () => {
    it('should render a div with the correct test attribute', () => {
        const wrapper = factoryMount();

        const Question = wrapper.find('[data-test=vs-carbon-calculator-question]');

        expect(Question.exists()).toBe(true);
    });

    describe(':props', () => {
        it('should render the correct number of options', () => {
            const wrapper = factoryMount({
                options: [
                    {
                        text: 'I\'m already here',
                        value: 'noTravel',
                        icon: 'city',
                    },
                    {
                        text: 'Plane',
                        value: 'plane',
                        icon: 'plane',
                    },
                    {
                        text: 'Car (Petrol)',
                        value: 'petrolCar',
                        icon: 'car',
                    },
                ],
            });

            expect(wrapper.findAll('.vs-carbon-calculator__radio').length).toBe(3);
        });
    });
});
