import { shallowMount, mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsNavigationBarMenu from '../NavigationBarMenu.vue';

const factoryShallowMount = () => shallowMount(VsNavigationBarMenu);

const factoryMount = (options) => mount(VsNavigationBarMenu, options);

describe('VsNavigationBarMenu', () => {
    it('should render a nav element', () => {
        const wrapper = factoryShallowMount();
        const nav = wrapper.find('nav');

        expect(nav.exists()).toBe(true);
    });

    it('should render a ul with correct attributes', () => {
        const wrapper = factoryShallowMount();
        const ul = wrapper.find('ul');

        expect(ul.exists()).toBe(true);
        expect(ul.classes('vs-navigation-bar-menu')).toBe(true);
        expect(ul.attributes('data-test')).toBe('vs-navigation-bar-menu');
        expect(ul.attributes('role')).toBe('menubar');
    });

    describe(':slots', () => {
        it('should render default slot content', () => {
            const slotContent = '<li>Menu item</li>';
            const wrapper = factoryMount({
                slots: {
                    default: slotContent,
                },
            });

            expect(wrapper.html()).toContain(slotContent);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });

        it('should have menubar role for accessibility', () => {
            const wrapper = factoryShallowMount();
            const ul = wrapper.find('ul');

            expect(ul.attributes('role')).toBe('menubar');
        });
    });
});
