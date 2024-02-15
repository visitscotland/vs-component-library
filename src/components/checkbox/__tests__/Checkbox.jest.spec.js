import { shallowMount, mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsCheckbox from '../Checkbox.vue';

const defaultData = {
    value: 'accepted',
    label: 'Test label',
    fieldName: 'testname',
    infoText: 'This is the info text',
};

const factoryShallowMount = (propsData) => shallowMount(VsCheckbox, {
    propsData: {
        ...defaultData,
        ...propsData,
    },
});

const factoryMount = (propsData) => mount(VsCheckbox, {
    propsData: {
        ...defaultData,
        ...propsData,
    },
});

let wrapper;
beforeEach(() => {
    wrapper = factoryShallowMount();
});

describe('VsCheckbox', () => {
    it('should render a b-form-checkbox-stub', () => {
        const checkboxStub = wrapper.find('b-form-checkbox-stub');

        expect(checkboxStub.exists()).toBe(true);
    });

    describe(':props', () => {
        it('should not render if the name prop is missing', async() => {
            wrapper.setProps({
                fieldName: '',
            });

            await wrapper.vm.$nextTick();

            const checkboxStub = wrapper.find('b-form-checkbox-stub');

            expect(checkboxStub.exists()).toBe(false);
        });

        it('should add the value prop to the element', () => {
            const checkboxStub = wrapper.find('b-form-checkbox-stub');

            expect(checkboxStub.attributes('value')).toBe('accepted');
        });

        it('should add the info text from the `infoText` prop', () => {
            expect(wrapper.html()).toContain('This is the info text');
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
