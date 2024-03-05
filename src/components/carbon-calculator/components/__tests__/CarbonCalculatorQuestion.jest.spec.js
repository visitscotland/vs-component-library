import { config, mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
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

    describe('props', () => {
        it('should render a radio button component if the question is type `radio`', () => {
            const wrapper = factoryMount();

            expect(wrapper.html()).toContain('vs-radio-button');
        });

        it('should render a number input component if the question is type `number`', () => {
            const wrapper = factoryMount({
                fieldType: 'number',
            });

            expect(wrapper.html()).toContain('vs-number-input');
        });
    });

    describe('methods', () => {
        it('should emit an `updateFieldData` event when the `valueChanged` function fires', () => {
            const wrapper = factoryMount();

            wrapper.vm.valueChanged();

            expect(wrapper.emitted().updateFieldData).toBeTruthy();
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
