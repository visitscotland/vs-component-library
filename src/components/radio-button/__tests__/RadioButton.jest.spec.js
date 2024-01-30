import { config, mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsRadioButton from '../RadioButton.vue';

jest.mock('@/utils/svg-context');

config.global.renderStubDefaultSlot = true;

const factoryMount = (propsData) => mount(VsRadioButton, {
    propsData: {
        fieldCategory: 'Transport',
        fieldClass: '',
        fieldName: 'transportModeTo',
        fieldType: 'radio',
        hintText: '',
        label: '',
        labelFor: '',
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
        ...propsData,
    },
});

describe('VsRadioButton', () => {
    it('should render a div with the correct test attribute', () => {
        const wrapper = factoryMount();
        const Radio = wrapper.find('[data-test=vs-radio-button]');

        expect(Radio.exists()).toBe(true);
    });

    describe(':props', () => {
        it('should render the correct number of options', () => {
            const wrapper = factoryMount();

            expect(wrapper.findAll('.vs-radio-button__option').length).toBe(3);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
