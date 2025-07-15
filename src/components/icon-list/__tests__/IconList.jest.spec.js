import {
    config, mount, shallowMount,
} from '@vue/test-utils';
import { h } from 'vue';
import axe from '@/../test/unit/helpers/axe-helper';
import VsIconList from '../IconList.vue';
import VsIconListItem from '../components/IconListItem.vue';

config.global.renderStubDefaultSlot = true;

function mountOptions(propsData) {
    return {
        propsData: {
            ...propsData,
        },
        slots: {
            default: h(VsIconListItem, {
                label: 'wifi',
                icon: 'vs-icon-facility-wifi',
            }),
        },
    };
};

const factoryShallowMount = (propsData) => shallowMount(
    VsIconList,
    mountOptions(propsData),
);

const factoryMount = (propsData) => mount(
    VsIconList,
    mountOptions(propsData),
);

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
            const modifiedWrapper = factoryMount();
            const listItem = modifiedWrapper.find('.vs-icon-list__item');
            expect(listItem.exists()).toBe(true);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const modifiedWrapper = factoryMount();
            expect(await axe(modifiedWrapper.html())).toHaveNoViolations();
        });
    });
});
