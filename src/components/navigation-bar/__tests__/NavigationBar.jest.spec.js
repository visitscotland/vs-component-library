import {
    shallowMount, mount, config,
} from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsNavigationBar from '../NavigationBar.vue';

config.global.renderStubDefaultSlot = true;

const defaultProps = {
    menuAriaLabel: 'Main navigation menu',
    sidebarCloseLabel: 'Close navigation menu',
    sidebarOpenLabel: 'Open navigation menu',
};

const factoryShallowMount = (propsData = {
}) => shallowMount(VsNavigationBar, {
    propsData: {
        ...defaultProps,
        ...propsData,
    },
});

const factoryMount = (propsData, options) => mount(VsNavigationBar, {
    propsData: {
        ...defaultProps,
        ...propsData,
    },
    ...options,
});

describe('VsNavigationBar', () => {
    it('should render a header element with correct class and data-test attribute', () => {
        const wrapper = factoryShallowMount();
        const header = wrapper.find('header');

        expect(header.exists()).toBe(true);
        expect(header.classes('vs-navigation-bar')).toBe(true);
        expect(header.attributes('data-test')).toBe('vs-navigation-bar');
    });

    describe(':props', () => {
        it('should accept and pass menuAriaLabel to VsNavigationSidebar', () => {
            const testLabel = 'Test menu label';
            const wrapper = factoryShallowMount({
                menuAriaLabel: testLabel,
            });
            const sidebar = wrapper.findComponent({
                name: 'VsNavigationSidebar',
            });

            expect(sidebar.props('menuAriaLabel')).toBe(testLabel);
        });

        it('should accept and pass sidebarCloseLabel to VsNavigationSidebar', () => {
            const testLabel = 'Test close label';
            const wrapper = factoryShallowMount({
                sidebarCloseLabel: testLabel,
            });
            const sidebar = wrapper.findComponent({
                name: 'VsNavigationSidebar',
            });

            expect(sidebar.props('sidebarCloseLabel')).toBe(testLabel);
        });

        it('should accept and pass sidebarOpenLabel to VsNavigationBarSidebarButton', () => {
            const testLabel = 'Test open label';
            const wrapper = factoryShallowMount({
                sidebarOpenLabel: testLabel,
            });

            const sidebarButton = wrapper.findComponent({
                name: 'VsNavigationBarSidebarButton',
            });
            expect(sidebarButton.props('sidebarOpenLabel')).toBe(testLabel);
        });

        it('sidebarBreakpoint: defaults to md and applies lg classes', () => {
            const wrapper = factoryShallowMount();
            const menuCol = wrapper.find('[data-test=vs-navigation-bar__menu]');
            expect(menuCol.classes()).toContain('d-lg-block');
        });

        it('sidebarBreakpoint: accepts sm and applies md classes', () => {
            const wrapper = factoryShallowMount({
                sidebarBreakpoint: 'sm',
            });
            const menuCol = wrapper.find('[data-test=vs-navigation-bar__menu]');
            expect(menuCol.classes()).toContain('d-md-block');
        });
    });

    describe(':computed', () => {
        it('applies correct menu classes for sm breakpoint', () => {
            const wrapper = factoryShallowMount({
                sidebarBreakpoint: 'sm',
            });
            const menuCol = wrapper.find('[data-test=vs-navigation-bar__menu]');
            expect(menuCol.classes()).toContain('d-none');
            expect(menuCol.classes()).toContain('d-md-block');
            expect(menuCol.classes()).toContain('flex-grow-1');
        });

        it('applies correct menu classes for md breakpoint', () => {
            const wrapper = factoryShallowMount({
                sidebarBreakpoint: 'md',
            });
            const menuCol = wrapper.find('[data-test=vs-navigation-bar__menu]');
            expect(menuCol.classes()).toContain('d-none');
            expect(menuCol.classes()).toContain('d-lg-block');
        });

        it('applies correct sidebar button classes for md breakpoint', () => {
            const wrapper = factoryShallowMount({
                sidebarBreakpoint: 'md',
            });
            const button = wrapper.findComponent({
                name: 'VsNavigationBarSidebarButton',
            });
            expect(button.classes()).toContain('d-lg-none');
        });

        it('applies correct utility column classes for md breakpoint', () => {
            const wrapper = factoryShallowMount({
                sidebarBreakpoint: 'md',
            });
            const utilityCol = wrapper.find('[data-test=vs-navigation-bar__utilities]');
            expect(utilityCol.classes()).toContain('col-lg-auto');
        });
    });

    describe(':methods', () => {
        it('should set sidebarOpen to true when onSidebarOpen is called', () => {
            const wrapper = factoryShallowMount();

            wrapper.vm.onSidebarOpen();

            expect(wrapper.vm.sidebarOpen).toBe(true);
        });
    });

    describe(':events', () => {
        it('should set sidebarOpen to true when sidebar button emits sidebar-open', async() => {
            const wrapper = factoryShallowMount();
            const sidebarButton = wrapper.findComponent({
                name: 'VsNavigationBarSidebarButton',
            });

            await sidebarButton.vm.$emit('sidebar-open');

            expect(wrapper.vm.sidebarOpen).toBe(true);
        });

        it('should update sidebarOpen when sidebar emits update:show', async() => {
            const wrapper = factoryShallowMount();
            const sidebar = wrapper.findComponent({
                name: 'VsNavigationSidebar',
            });

            await sidebar.vm.$emit('update:show', true);
            expect(wrapper.vm.sidebarOpen).toBe(true);

            await sidebar.vm.$emit('update:show', false);
            expect(wrapper.vm.sidebarOpen).toBe(false);
        });
    });

    describe(':slots', () => {
        it('should render logo-link slot content', () => {
            const logoContent = '<a href="/">Logo</a>';
            const wrapper = factoryMount(null, {
                slots: {
                    'logo-link': logoContent,
                },
            });

            expect(wrapper.html()).toContain(logoContent);
        });

        it('should render navigation-bar-menu slot content', () => {
            const menuContent = '<nav>Menu items</nav>';
            const wrapper = factoryMount(null, {
                slots: {
                    'navigation-bar-menu': menuContent,
                },
            });

            expect(wrapper.html()).toContain(menuContent);
        });

        it('should render navigation-bar-utilities slot content', () => {
            const utilitiesContent = '<div>Utilities</div>';
            const wrapper = factoryMount(null, {
                slots: {
                    'navigation-bar-utilities': utilitiesContent,
                },
            });

            expect(wrapper.html()).toContain(utilitiesContent);
        });
    });

    describe(':sidebar', () => {
        it('should pass sidebarOpen state to VsNavigationSidebar show prop', async() => {
            const wrapper = factoryShallowMount();
            const sidebar = wrapper.findComponent({
                name: 'VsNavigationSidebar',
            });

            expect(sidebar.props('show')).toBe(false);

            await wrapper.setData({
                sidebarOpen: true,
            });

            expect(sidebar.props('show')).toBe(true);
        });

        it('should open sidebar when sidebar button is clicked', async() => {
            const wrapper = factoryMount();
            const sidebarButton = wrapper.findComponent({
                name: 'VsNavigationBarSidebarButton',
            });

            await sidebarButton.vm.$emit('sidebar-open');

            expect(wrapper.vm.sidebarOpen).toBe(true);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });

        it('should require menuAriaLabel prop for accessibility', () => {
            const wrapper = factoryShallowMount();
            const sidebar = wrapper.findComponent({
                name: 'VsNavigationSidebar',
            });

            expect(sidebar.props('menuAriaLabel')).toBeDefined();
        });

        it('should require sidebarCloseLabel prop for accessibility', () => {
            const wrapper = factoryShallowMount();
            const sidebar = wrapper.findComponent({
                name: 'VsNavigationSidebar',
            });

            expect(sidebar.props('sidebarCloseLabel')).toBeDefined();
        });

        it('should require sidebarOpenLabel prop for accessibility', () => {
            const wrapper = factoryShallowMount();
            const sidebarButton = wrapper.findComponent({
                name: 'VsNavigationBarSidebarButton',
            });

            expect(sidebarButton.props('sidebarOpenLabel')).toBeDefined();
        });
    });
});
