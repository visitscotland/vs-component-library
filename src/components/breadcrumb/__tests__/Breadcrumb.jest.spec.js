import {
    config, shallowMount, mount,
} from '@vue/test-utils';
import { createBootstrap } from 'bootstrap-vue-next';
import axe from '@/../test/unit/helpers/axe-helper';
import VsBreadcrumb from '../Breadcrumb.vue';

config.global.renderStubDefaultSlot = true;

const mountOptions = {
    global: {
        plugins: [
            createBootstrap(),
        ],
    },
    slots: {
        default: '<li class="vs-breadcrumb-item"><a href="#" target="_self">Breadcrumb Item</a></li>',
    },
    attrs: {
        class: 'test-class',
    },
};

const factoryShallowMount = () => shallowMount(
    VsBreadcrumb,
    mountOptions,
);
const factoryMount = () => mount(
    VsBreadcrumb,
    mountOptions,
);

describe('VsBreadcrumb', () => {
    it('should render a nav with a b-breadcrumb-stub', () => {
        const wrapper = factoryShallowMount();
        const breadcrumb = wrapper.find('b-breadcrumb-stub');

        expect(breadcrumb.exists()).toBe(true);
    });

    it('should bind given attributes to b-breadcrumb-stub', () => {
        const wrapper = factoryShallowMount();
        const breadcrumb = wrapper.find('b-breadcrumb-stub');

        expect(breadcrumb.classes()).toContain('test-class');
    });

    describe(':slots', () => {
        it('renders content inserted into default `slot`', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.find('.vs-breadcrumb-item').exists()).toBe(true);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
