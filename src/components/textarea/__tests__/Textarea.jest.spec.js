import {
    shallowMount, mount, config,
} from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsTextarea from '../Textarea.vue';

config.global.renderStubDefaultSlot = true;

function mountOptions(propsData) {
    return {
        propsData: {
            fieldName: 'testname',
            type: 'text',
            ...propsData,
        },
    };
};

const factoryShallowMount = (propsData) => shallowMount(
    VsTextarea,
    mountOptions(propsData),
);

const factoryMount = (propsData) => mount(
    VsTextarea,
    mountOptions(propsData),
);

let wrapper;
beforeEach(() => {
    wrapper = factoryShallowMount();
});

describe('VsTextarea', () => {
    it('should render an element with the `vs-textarea` test attribute', () => {
        expect(wrapper.attributes('data-test')).toBe('vs-textarea');
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
        it('should accept and render a `value` property', async() => {
            const testValue = 'Test Value';
            wrapper.setProps({
                value: testValue,
            });

            await wrapper.vm.$nextTick();

            expect(wrapper.vm.inputVal).toBe(testValue);
        });

        it('should set the correct name if `fieldName` property is passed', async() => {
            wrapper.setProps({
                fieldName: 'testValue',
            });

            await wrapper.vm.$nextTick();

            expect(wrapper.find('.vs-textarea').attributes('name')).toBe('testValue');
        });

        it('should set the correct id if `fieldName` property is passed', async() => {
            wrapper.setProps({
                fieldName: 'testValue',
            });

            await wrapper.vm.$nextTick();

            expect(wrapper.find('.vs-textarea').attributes('id')).toBe('testValue');
        });

        it('should set the  name if `name` property is passed', async() => {
            wrapper.setProps({
                name: 'testName',
            });

            await wrapper.vm.$nextTick();

            expect(wrapper.find('.vs-textarea').attributes('name')).toBe('testName');
        });

        it('should set the name as `name` if both `fieldName` `name` are passed', async() => {
            wrapper.setProps({
                fieldName: 'testValue',
                name: 'testName',
            });

            await wrapper.vm.$nextTick();

            expect(wrapper.find('.vs-textarea').attributes('name')).toBe('testName');
        });

        it(':rows - should set the rows attribute to `2` when unset', () => {
            expect(wrapper.find('.vs-textarea').attributes('rows')).toBe('2');
        });

        it(':rows - should set the rows attribute to the set number', async() => {
            const rows = '5';

            await wrapper.setProps({
                rows,
            });

            expect(wrapper.find('.vs-textarea').attributes('rows')).toBe(rows);
        });
    });

    describe(':computed', () => {
        it('should add a required prop when its included in validation rules', async() => {
            wrapper.setProps({
                validationRules: {
                    required: true,
                },
            });

            await wrapper.vm.$nextTick();

            expect(wrapper.find('.vs-textarea').attributes('required')).toBe('true');
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

        it('should fail validation if a required field contains only whitespace', async() => {
            wrapper.setProps({
                value: '      ',
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
                inputVal: 'test',
            });

            await wrapper.vm.$nextTick();

            wrapper.vm.clearInput();

            expect(wrapper.vm.inputVal).toBe('');
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
