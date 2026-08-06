import {
    config,
    mount,
} from '@vue/test-utils';

import VsMegaNavDropdown from '../MegaNavDropdown.vue';

config.global.renderStubDefaultSlot = true;

const factory = () => mount(VsMegaNavDropdown, {
    props: {
        menuToggleAltText: 'Toggle menu',
    },
    slots: {
        'button-content': '<div class="button-content">Menu</div>',
        'cta-link': '<div class="cta-link"></div>',
        'dropdown-content': '<div class="dropdown-content"></div>',
    },
});

describe('VsMegaNavDropdown', () => {
    it('should render a component with the data-test attribute `vs-mega-nav-dropdown`', () => {
        const wrapper = factory();

        expect(
            wrapper.attributes('data-test'),
        ).toBe('vs-mega-nav-dropdown');
    });

    describe(':slots', () => {
        it('renders content inserted in a cta-link slot', async () => {
            const wrapper = factory();

            await wrapper.vm.toggleMenu();

            expect(
                wrapper.find('.cta-link').exists(),
            ).toBe(true);
        });

        it('renders content inserted in a dropdown-content slot', async () => {
            const wrapper = factory();

            await wrapper.vm.toggleMenu();

            expect(
                wrapper.find('.dropdown-content').exists(),
            ).toBe(true);
        });
    });

    describe(':toggleMenu', () => {
        it('opens menu when toggle is clicked', async () => {
            const wrapper = factory();

            await wrapper.find('.vs-mega-nav-dropdown__toggle').trigger('click');

            expect(wrapper.vm.isOpen).toBe(true);
            expect(
                wrapper.find('.vs-mega-nav-dropdown__panel').exists(),
            ).toBe(true);
        });

        it('closes menu when toggle is clicked twice', async () => {
            const wrapper = factory();

            const toggle = wrapper.find('.vs-mega-nav-dropdown__toggle');

            await toggle.trigger('click');
            await toggle.trigger('click');

            expect(wrapper.vm.isOpen).toBe(false);
        });

        it('adds active class when menu is open', async () => {
            const wrapper = factory();

            await wrapper.find('.vs-mega-nav-dropdown__toggle').trigger('click');

            expect(
                wrapper.find('.vs-mega-nav-dropdown__toggle')
                    .classes(),
            ).toContain('is-active');
        });
    });

    describe(':events', () => {
        it('emits menuToggled with true when opened', async () => {
            const wrapper = factory();

            await wrapper.find('.vs-mega-nav-dropdown__toggle').trigger('click');

            expect(
                wrapper.emitted('menuToggled'),
            ).toEqual([[true]]);
        });

        it('emits menuToggled with false when closed', async () => {
            const wrapper = factory();

            const toggle = wrapper.find('.vs-mega-nav-dropdown__toggle');

            await toggle.trigger('click');
            await toggle.trigger('click');

            expect(
                wrapper.emitted('menuToggled'),
            ).toEqual([[true], [false]]);
        });
    });

    describe(':closeMenu', () => {
        it('closes when close button is clicked', async () => {
            const wrapper = factory();

            await wrapper.find('.vs-mega-nav-dropdown__toggle').trigger('click');

            await wrapper
                .find('.vs-mega-nav-dropdown__close-btn')
                .trigger('click');

            expect(wrapper.vm.isOpen).toBe(false);
        });
    });

    describe(':handleOutsideClick', () => {
        it('closes when clicking outside', async () => {
            const wrapper = factory();

            await wrapper.find('.vs-mega-nav-dropdown__toggle').trigger('click');

            document.body.click();

            await wrapper.vm.$nextTick();

            expect(wrapper.vm.isOpen).toBe(false);
        });
    });

    describe(':handleEscape', () => {
        it('closes when escape key is pressed', async () => {
            const wrapper = factory();

            await wrapper.find('.vs-mega-nav-dropdown__toggle').trigger('click');

            document.dispatchEvent(
                new KeyboardEvent('keydown', {
                    key: 'Escape',
                }),
            );

            await wrapper.vm.$nextTick();

            expect(wrapper.vm.isOpen).toBe(false);
        });
    });

    describe(':multiple dropdowns', () => {
        it('closes previously opened dropdown', async () => {
            const wrapper1 = factory();
            const wrapper2 = factory();

            await wrapper1
                .find('.vs-mega-nav-dropdown__toggle')
                .trigger('click');

            expect(wrapper1.vm.isOpen).toBe(true);

            await wrapper2
                .find('.vs-mega-nav-dropdown__toggle')
                .trigger('click');

            expect(wrapper1.vm.isOpen).toBe(false);
            expect(wrapper2.vm.isOpen).toBe(true);
        });
    });
});
