import { shallowMount, mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsSelect from '../Select.vue';

function mountOptions(propsData) {
    return {
        propsData: {
            fieldName: 'test-select',
            options: [
                {
                    text: 'Item 1',
                    value: 'first',
                },
                {
                    text: 'Item 2',
                    value: 'second',
                },
            ],
            ...propsData,
        },
    };
};

const factoryShallowMount = (propsData) => shallowMount(
    VsSelect,
    mountOptions(propsData),
);

const factoryMount = (propsData) => mount(
    VsSelect,
    mountOptions(propsData),
);

let wrapper;
beforeEach(() => {
    wrapper = factoryShallowMount();
});

describe('VsSelect', () => {
    it('should render a b-form-select-stub', () => {
        const selectStub = wrapper.find('b-form-select-stub');

        expect(selectStub.exists()).toBe(true);
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const modifiedWrapper = factoryMount();
            const html = modifiedWrapper.html();
            const results = await axe(html, {
                rules: {
                    // all selects must have a label
                    'select-name': {
                        enabled: false,
                    },
                },
            });

            expect(results).toHaveNoViolations();
        });
    });

    describe(':props', () => {
        it('should render the element with the `fieldName` prop as the name attribute', () => {
            expect(wrapper.find('[data-test="vs-select"]').attributes('name')).toBe('test-select');
        });

        it('value - should accept and render a `fieldName` property', async() => {
            wrapper.setProps({
                fieldName: 'testValue',
            });

            await wrapper.vm.$nextTick();

            expect(wrapper.find('.vs-select__element').attributes('name')).toBe('testValue');
        });

        it('value - should accept and render a `value` property', async() => {
            const testValue = 'first';
            wrapper.setProps({
                value: testValue,
            });

            await wrapper.vm.$nextTick();

            expect(wrapper.vm.inputVal).toBe(testValue);
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

            expect(wrapper.find('.vs-select__element').attributes('required')).toBe('true');
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
