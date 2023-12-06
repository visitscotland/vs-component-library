import {
    config, shallowMount, mount,
} from '@vue/test-utils';

import VsMegaNavDropdown from '../MegaNavDropdown.vue';

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = () => shallowMount(VsMegaNavDropdown, {
    propsData: {
        menuToggleAltText: 'Toggle menu',
    },
    slots: {
        'button-content': '<div class="button-content"></div>',
        'cta-link': '<div class="cta-link"></div>',
        'dropdown-content': '<div class="dropdown-content"></div>',
    },
});

const factoryMount = () => mount(VsMegaNavDropdown, {
    propsData: {
        menuToggleAltText: 'Toggle menu',
    },
});

describe('VsMegaNavDropdown', () => {
    it('should render a component with the data-test attribute `vs-mega-nav-dropdown`', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.attributes('data-test')).toBe('vs-mega-nav-dropdown');
    });

    describe(':slots', () => {
        it('renders content inserted in a cta-link slot', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.findAll('.cta-link').length).toBe(1);
        });

        it('renders content inserted in a dropdown-content slot', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.findAll('.dropdown-content').length).toBe(1);
        });
    });

    describe(':events', () => {
        it('emits `menuToggled` event when `bv::dropdown::show` is emitted from root', () => {
            const wrapper = factoryMount();
            wrapper.vm.emitter.emit('bv::dropdown::show');
            expect(wrapper.emitted().menuToggled).toBeTruthy();
        });

        it('emits `menuToggled` event when `bv::dropdown::hide` is emitted from root', () => {
            const wrapper = factoryMount();
            wrapper.vm.emitter.emit('bv::dropdown::hide');
            expect(wrapper.emitted().menuToggled).toBeTruthy();
        });
    });
});
