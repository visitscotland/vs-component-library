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
});
