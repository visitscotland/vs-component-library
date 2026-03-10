import { shallowMount, mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsNavigationBarMenu from '../NavigationBarMenu.vue';

const defaultProps = {
    menuAriaLabel: 'Main navigation menu',
};

const factoryShallowMount = (propsData = {
}) => shallowMount(VsNavigationBarMenu, {
    propsData: {
        ...defaultProps,
        ...propsData,
    },
});

const factoryMount = (propsData, options) => mount(VsNavigationBarMenu, {
    propsData: {
        ...defaultProps,
        ...propsData,
    },
    ...options,
});

describe('VsNavigationBarMenu', () => {
    it('should render a nav element', () => {
        const wrapper = factoryShallowMount();
        const nav = wrapper.find('nav');

        expect(nav.exists()).toBe(true);
    });

    it('should render a nav with correct attributes', () => {
        const wrapper = factoryShallowMount();
        const nav = wrapper.find('nav');

        expect(nav.exists()).toBe(true);
        expect(nav.classes('vs-navigation-bar-menu')).toBe(true);
        expect(nav.attributes('data-test')).toBe('vs-navigation-bar-menu');
    });

    describe(':props', () => {
        it('should accept and render menuAriaLabel on nav element', () => {
            const testLabel = 'Test menu label';
            const wrapper = factoryShallowMount({
                menuAriaLabel: testLabel,
            });

            const navElement = wrapper.find('[data-test=vs-navigation-bar-menu]');

            expect(navElement.attributes('aria-label')).toBe(testLabel);
        });
    });

    describe(':slots', () => {
        it('should render default slot content', () => {
            const wrapper = factoryMount({
            }, {
                slots: {
                    default: '<li>Menu item</li>',
                },
            });

            expect(wrapper.text()).toContain('Menu item');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
