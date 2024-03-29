import { mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsButtonToggleGroup from '../ButtonToggleGroup.vue';

const factoryMount = () => mount(VsButtonToggleGroup, {
    propsData: {
        buttonsLabel: 'Select map type',
        options: [
            {
                text: 'Regions',
                value: 'regions',
            },
            {
                text: 'Places',
                value: 'places',
            },
        ],
        initialSelected: 'places',
    },
});

let wrapper;
beforeEach(() => {
    wrapper = factoryMount();
});

describe('VsButtonToggleGroup', () => {
    it('should render a parent element with data-test `vs-button-toggle-group`', () => {
        expect(wrapper.attributes('data-test')).toBe('vs-button-toggle-group');
    });

    describe(':props', () => {
        it('should render radio buttons defined by the `options` props', () => {
            const toggleInputs = wrapper.findAll('.btn');
            expect(toggleInputs.length).toBe(2);
        });

        it('should populate radio input content from the `options` props', () => {
            const firstInput = wrapper.findAll('.btn').at(0);
            expect(firstInput.text()).toBe('Regions');
        });

        it('should populate radio input value from the `options` props', () => {
            const firstInput = wrapper.findAll('.btn').at(0);
            expect(firstInput.text()).toBe('Regions');
        });

        it('should make the item defined by `selected` prop the active item', async() => {
            const secondInput = wrapper.findAll('.vs-button-toggle-group--button').at(1);

            expect(secondInput.classes('active')).toBe(true);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
