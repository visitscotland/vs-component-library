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
        expect(wrapper.find('a').exists()).toBe(true);
    });

    describe(':props', () => {
        it('href: defaults to #', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.find('a').attributes('href')).toBe('#');
        });

        it('href: applies custom href', () => {
            const wrapper = factoryShallowMount({
                href: '/test',
            });
            expect(wrapper.find('a').attributes('href')).toBe('/test');
        });

        it('mainMenuItem: defaults to false and applies secondary class', () => {
            const wrapper = factoryShallowMount();
            const link = wrapper.find('a');
            expect(link.classes()).toContain('vs-navigation-bar-menu-item__link--level-secondary');
            expect(link.classes()).not.toContain('vs-navigation-bar-menu-item__link--level-primary');
        });

        it('mainMenuItem: applies primary class when true', () => {
            const wrapper = factoryShallowMount({
                mainMenuItem: true,
            });
            const link = wrapper.find('a');
            expect(link.classes()).toContain('vs-navigation-bar-menu-item__link--level-primary');
            expect(link.classes()).not.toContain('vs-navigation-bar-menu-item__link--level-secondary');
        });
    });

    describe(':slots', () => {
        it('renders default slot content', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.text()).toBe('Menu Item');
        });
    });

    describe(':attributes', () => {
        it('applies correct role and data-layer-value', () => {
            const wrapper = factoryShallowMount();
            const link = wrapper.find('a');
            expect(link.attributes('role')).toBe('menuitem');
            expect(link.attributes('data-layer-value')).toBe('menuNavigationDataEvent');
        });
    });
});
