import {
    config, shallowMount, mount,
} from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsDescriptionList from '../DescriptionList.vue';

config.global.renderStubDefaultSlot = true;

const TestComponent = {
    template: `
        <dt class="vs-description-list__term">Description list term</dd>
        <dd class="vs-description-list__detail">Description list item</dd>
    `,
};

const factoryShallowMount = (propsData) => shallowMount(VsDescriptionList, {
    slots: {
        default: TestComponent,
    },
    propsData: {
        ...propsData,
    },
});

const factoryMount = (propsData) => mount(VsDescriptionList, {
    slots: {
        default: TestComponent,
    },
    propsData: {
        ...propsData,
    },
});

let wrapper;
beforeEach(() => {
    wrapper = factoryShallowMount();
});

describe('VsDescriptionList', () => {
    it('should render a vsrow-stub with a `description-list` class', () => {
        expect(wrapper.element.tagName).toBe('VS-ROW-STUB');
        expect(wrapper.classes('vs-description-list')).toBe(true);
    });

    describe(':props', () => {
        it(':inline - should accept an `inline` property', () => {
            wrapper = factoryShallowMount({
                inline: true,
            });

            expect(wrapper.props().inline).toBe(true);
        });

        it(':inline - should be false by default', () => {
            expect(wrapper.props().inline).toBe(false);
        });

        it(':inline - should provide an `inline` property down to children components', () => {
            wrapper = factoryShallowMount({
                inline: true,
            });

            /* eslint-disable no-underscore-dangle */
            expect(wrapper.vm.inline).toBe(true);
        });
    });

    describe(':slots', () => {
        it('renders content inserted into default `slot`', () => {
            const modifiedWrapper = factoryMount();

            expect(modifiedWrapper.text()).toContain('Description list item');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const modifiedWrapper = factoryMount();
            expect(await axe(modifiedWrapper.html())).toHaveNoViolations();
        });
    });
});
