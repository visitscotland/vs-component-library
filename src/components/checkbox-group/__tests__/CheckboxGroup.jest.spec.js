import {
    config, shallowMount, mount,
} from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsCheckboxGroup from '../CheckboxGroup.vue';

config.global.renderStubDefaultSlot = true;

const defaultData = {
    value: 'accepted',
    label: 'Test label',
    fieldName: 'testname',
    infoText: 'This is the info text',
    checkboxItems: [
        {
            fieldName: 'accommodation',
            label: 'Accommodation',
            value: 'checked',
        },
    ],
};

const factoryShallowMount = (propsData) => shallowMount(VsCheckboxGroup, {
    propsData: {
        ...defaultData,
        ...propsData,
    },
});

const factoryMount = (propsData) => mount(VsCheckboxGroup, {
    propsData: {
        ...defaultData,
        ...propsData,
    },
});

let wrapper;
beforeEach(() => {
    wrapper = factoryShallowMount();
});

describe('VsCheckboxGroup', () => {
    it('should render a b-form-checkbox-stub', () => {
        const checkboxGroupStub = wrapper.find('b-form-checkbox-group-stub');

        expect(checkboxGroupStub.exists()).toBe(true);
    });

    describe(':props', () => {
        it('should not render if the name prop is missing', async() => {
            wrapper.setProps({
                fieldName: '',
            });

            await wrapper.vm.$nextTick();

            const checkboxStub = wrapper.find('b-form-checkbox-group-stub');

            expect(checkboxStub.exists()).toBe(false);
        });

        it('should render the fieldset legend set by the label prop', () => {
            const formGroup = wrapper.find('b-form-group-stub');

            expect(formGroup.attributes('label')).toBe(defaultData.label);
        });

        it('should display a validation message if validation fails', async() => {
            const mountedWrapper = factoryMount();

            mountedWrapper.setProps({
                validationRules: {
                    required: true,
                },
                validationMessages: {
                    required: 'This is required',
                },
            });

            mountedWrapper.setData({
                inputVal: '',
            });

            await mountedWrapper.vm.$nextTick();

            mountedWrapper.vm.manualValidate();

            expect(mountedWrapper.vm.errorsList.length).toBeGreaterThan(0);
        });
    });

    describe(':watchers', () => {
        it('should call the `manualValidate` method when `triggerValidation` is emitted', async() => {
            const mockedMethod = jest.spyOn(wrapper.vm, 'manualValidate');

            wrapper.setProps({
                triggerValidate: true,
            });

            await wrapper.vm.$nextTick();

            expect(mockedMethod).toBeCalled();
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const mountedWrapper = factoryMount();
            expect(await axe(mountedWrapper.html())).toHaveNoViolations();
        });
    });
});
