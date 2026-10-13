import { shallowMount, config } from '@vue/test-utils';
import VsNavigationBarMenuDropdown from '../NavigationBarMenuDropdown.vue';
import { createSSRApp, h } from 'vue';
import { renderToString } from '@vue/server-renderer';

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = (propsData) => shallowMount(VsNavigationBarMenuDropdown, {
    propsData,
    slots: {
        default: '<li>Item</li>',
    },
});

describe('VsNavigationBarMenuDropdown', () => {
    it('server-renders the closed dropdown links and static label without hydration', async() => {
        const app = createSSRApp({
            render: () => h(VsNavigationBarMenuDropdown, {
            }, {
                'button-content': () => 'Destinations',
                default: () => h('li', [h('a', {
                    href: '/destinations',
                }, 'All destinations')]),
            }),
        });
        const html = await renderToString(app);
        const container = document.createElement('div');
        container.innerHTML = html;

        expect(container.querySelector('.vs-navigation-bar-menu-dropdown__label').textContent)
            .toBe('Destinations');
        expect(container.querySelector('ul.dropdown-menu a').getAttribute('href'))
            .toBe('/destinations');
        expect(container.querySelectorAll('a')).toHaveLength(1);
        expect(container.querySelector('ul.dropdown-menu').getAttribute('role')).toBe('list');
    });

    it('supports a translated static language label distinct from the toggle', () => {
        const wrapper = shallowMount(VsNavigationBarMenuDropdown, {
            slots: {
                'button-content': 'EN',
                'no-js-label': 'Choose language',
            },
        });

        expect(wrapper.find('.vs-navigation-bar-menu-dropdown__label').text())
            .toBe('Choose language');
    });

    it('renders a dropdown stub', () => {
        const wrapper = factoryShallowMount();
        const dropdownStub = wrapper.find('b-dropdown-stub');

        expect(dropdownStub.exists()).toBe(true);
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
            expect(wrapper.text()).toContain('Item');
        });
    });
});
