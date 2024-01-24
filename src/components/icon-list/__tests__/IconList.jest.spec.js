import {
    config, mount, shallowMount,
} from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsIconList from '../IconList.vue';

config.global.renderStubDefaultSlot = true;

const slotContent = `
    <li class="vs-icon-list__item"><i class="fak fa-facility-wifi vs-icon"></i> wifi</li>
`;

const factoryShallowMount = (propsData) => shallowMount(VsIconList, {
    propsData: {
        ...propsData,
    },
    slots: {
        default: slotContent,
    },
});

const factoryMount = (propsData) => mount(VsIconList, {
    propsData: {
        ...propsData,
    },
    slots: {
        default: slotContent,
    },
});

let wrapper;
beforeEach(() => {
    wrapper = factoryShallowMount();
});

describe('VsIconList', () => {
    it('should render a component with the data-test attribute `vs-icon-list`', () => {
        expect(wrapper.attributes('data-test')).toBe('vs-icon-list');
    });

    describe(':props', () => {
        it('should accept and render a `title` property', async() => {
            await wrapper.setProps({
                title: 'Some title',
            });
            expect(wrapper.text()).toContain('Some title');
        });
    });

    describe(':slots', () => {
        it('renders content inserted into the default `slot`', () => {
            expect(wrapper.text()).toContain('wifi');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const modifiedWrapper = factoryMount();
            expect(await axe(modifiedWrapper.html())).toHaveNoViolations();
        });
    });
});
