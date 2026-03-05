import { shallowMount, config } from '@vue/test-utils';
import VsNavigationBarMenuDropdown from '../NavigationBarMenuDropdown.vue';

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = (propsData) => shallowMount(VsNavigationBarMenuDropdown, {
    propsData,
    slots: {
        default: '<li>Item</li>',
    },
});

describe('VsNavigationBarMenuDropdown', () => {
    it('renders as list item with correct role', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.element.tagName).toBe('LI');
        expect(wrapper.attributes('role')).toBe('menuitem');
        expect(wrapper.attributes('data-test')).toBe('vs-navigation-bar-menu-dropdown');
    });

    describe(':props', () => {
        it('subtle: defaults to false', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.classes()).not.toContain('vs-navigation-bar-menu-dropdown--subtle');
        });

        it('subtle: applies class when true', () => {
            const wrapper = factoryShallowMount({
                subtle: true,
            });
            expect(wrapper.classes()).toContain('vs-navigation-bar-menu-dropdown--subtle');
        });
    });

    describe(':slots', () => {
        it('renders default slot in main content area', () => {
            const wrapper = factoryShallowMount();
            const mainContent = wrapper.find('.vs-navigation-bar-menu-dropdown__main');
            expect(mainContent.exists()).toBe(true);
        });
    });
});
