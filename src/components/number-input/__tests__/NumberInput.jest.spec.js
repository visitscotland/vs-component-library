import {
    config, shallowMount, mount,
} from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsNumberInput from '../NumberInput.vue';

config.global.renderStubDefaultSlot = true;

function mountOptions(propsData) {
    return {
        propsData: {
            fieldName: 'testname',
            ...propsData,
        },
    };
};

const factoryShallowMount = (propsData) => shallowMount(
    VsNumberInput,
    mountOptions(propsData),
);

const factoryMount = (propsData) => mount(
    VsNumberInput,
    mountOptions(propsData),
);

let wrapper;
beforeEach(() => {
    wrapper = factoryShallowMount();
});

describe('VsInput', () => {
    it('should render an element with the `vs-number-input` test attribute', () => {
        expect(wrapper.attributes('data-test')).toBe('vs-number-input');
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const modifiedWrapper = factoryMount();
            const html = modifiedWrapper.html();
            const results = await axe(html, {
                rules: {
                    // all inputs must have a label
                    label: {
                        enabled: false,
                    },
                },
            });

            expect(results).toHaveNoViolations();
        });
    });

    describe(':props', () => {
        it('value - should accept and render a `value` property', async() => {
            const testValue = 0;
            wrapper.setProps({
                value: testValue,
            });

            await wrapper.vm.$nextTick();

            expect(wrapper.vm.inputVal).toBe(testValue);
        });

        it('value - should accept and render a `fieldName` property', async() => {
            wrapper.setProps({
                fieldName: 'testValue',
            });

            await wrapper.vm.$nextTick();

            expect(wrapper.find('.vs-number-input').attributes('name')).toBe('testValue');
        });

        it('should show the clear button when there is a value if the `closeButtonText` prop is defined', async() => {
            wrapper.setProps({
                clearButtonText: 'clear text',
            });

            wrapper.setData({
                inputVal: 'test',
            });
            await wrapper.vm.$nextTick();

            expect(wrapper.find('[data-test="input-clear-button"]').text()).toBe('clear text');
        });
    });

    describe(':computed', () => {
        it('should add a required prop when its included in valdiation rules', async() => {
            wrapper.setProps({
                validationRules: {
                    required: true,
                },
            });

            await wrapper.vm.$nextTick();

            expect(wrapper.find('.vs-number-input').attributes('required')).toBe('true');
        });

        it('should display a validation message if validation fails', async() => {
            wrapper.setProps({
                value: '',
                validationRules: {
                    required: true,
                },
                validationMessages: {
                    required: 'This is required',
                },
            });

            wrapper.vm.emitStatus();

            setTimeout(() => {
                expect(wrapper.html()).toContain('This is required');
            }, 50);
        });
    });

    describe(':methods', () => {
        it('clears the `inputVal` data when the `clearInput` method is triggered', async() => {
            wrapper.setData({
                inputVal: 10,
            });

            await wrapper.vm.$nextTick();

            wrapper.vm.clearInput();

            expect(wrapper.vm.inputVal).toBe(0);
        });

        it('increases the `inputVal` by 1 when the `incrementValue` method is triggered', async() => {
            const setWrapper = factoryShallowMount({
                value: 5,
                maximumNumber: 10,
            });

            await setWrapper.vm.$nextTick();

            setWrapper.vm.incrementValue();

            await setWrapper.vm.$nextTick();

            expect(setWrapper.vm.inputVal).toBe(6);
        });

        it('won\'t increment value past the maximumNumber', async() => {
            const setWrapper = factoryShallowMount({
                value: 5,
                maximumNumber: 5,
            });

            await setWrapper.vm.$nextTick();

            setWrapper.vm.incrementValue();

            await setWrapper.vm.$nextTick();

            expect(setWrapper.vm.inputVal).toBe(5);
        });

        it('decreases the `inputVal` by 1 when the `decrementValue` method is triggered', async() => {
            const setWrapper = factoryShallowMount({
                value: 5,
                minimumNumber: 0,
            });

            await setWrapper.vm.$nextTick();

            setWrapper.vm.decrementValue();

            await setWrapper.vm.$nextTick();

            expect(setWrapper.vm.inputVal).toBe(4);
        });

        it('won\'t decrement value past the minimumNumber', async() => {
            const setWrapper = factoryShallowMount({
                value: 5,
                minimumNumber: 5,
            });

            await setWrapper.vm.$nextTick();

            setWrapper.vm.decrementValue();

            await setWrapper.vm.$nextTick();

            expect(setWrapper.vm.inputVal).toBe(5);
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
});
