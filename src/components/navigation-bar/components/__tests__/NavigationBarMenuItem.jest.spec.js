import { shallowMount } from '@vue/test-utils';
import VsNavigationBarMenuItem from '../NavigationBarMenuItem.vue';

const factoryShallowMount = (propsData) => shallowMount(VsNavigationBarMenuItem, {
    propsData,
    slots: {
        default: 'Menu Item',
    },
});

describe('VsNavigationBarMenuItem', () => {
    it('renders as list item with link', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.element.tagName).toBe('LI');
        expect(wrapper.classes()).toContain('vs-navigation-bar-menu-item');
        expect(wrapper.find('[data-test=vs-navigation-bar-menu-item] .vs-navigation-bar-menu-item__link').exists()).toBe(true);
    });

    describe(':props', () => {
        it('href: defaults to #', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.find('[data-test=vs-navigation-bar-menu-item] .vs-navigation-bar-menu-item__link').attributes('href')).toBe('#');
        });

        it('href: applies custom href', () => {
            const wrapper = factoryShallowMount({
                href: '/test',
            });
            expect(wrapper.find('[data-test=vs-navigation-bar-menu-item] .vs-navigation-bar-menu-item__link').attributes('href')).toBe('/test');
        });

        it('variant: defaults to secondary-menu-item', () => {
            const wrapper = factoryShallowMount();
            const link = wrapper.find('[data-test=vs-navigation-bar-menu-item] .vs-navigation-bar-menu-item__link');
            expect(link.classes()).toContain('vs-navigation-bar-menu-item__link--secondary-menu-item');
        });

        it('variant: applies primary-menu-item class', () => {
            const wrapper = factoryShallowMount({
                variant: 'primary-menu-item',
            });
            const link = wrapper.find('[data-test=vs-navigation-bar-menu-item] .vs-navigation-bar-menu-item__link');
            expect(link.classes()).toContain('vs-navigation-bar-menu-item__link--primary-menu-item');
        });

        it('variant: applies primary-sidebar-item class', () => {
            const wrapper = factoryShallowMount({
                variant: 'primary-sidebar-item',
            });
            const link = wrapper.find('[data-test=vs-navigation-bar-menu-item] .vs-navigation-bar-menu-item__link');
            expect(link.classes()).toContain('vs-navigation-bar-menu-item__link--primary-sidebar-item');
        });
    });

    describe(':slots', () => {
        it('renders default slot content', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.text()).toBe('Menu Item');
        });
    });
});
