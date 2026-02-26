import {
    shallowMount, mount, config,
} from '@vue/test-utils';
import { createBootstrap } from 'bootstrap-vue-next';
import axe from '@/../test/unit/helpers/axe-helper';
import VsNavigationBarSidebar from '../NavigationBarSidebar.vue';

config.global.renderStubDefaultSlot = true;

const defaultProps = {
    menuAriaLabel: 'Main navigation menu',
    sidebarCloseLabel: 'Close navigation menu',
    show: false,
};

const factoryShallowMount = (propsData) => shallowMount(VsNavigationBarSidebar, {
    global: {
        plugins: [createBootstrap()],
    },
    propsData: {
        ...defaultProps,
        ...propsData,
    },
});

const factoryMount = (propsData, options) => mount(VsNavigationBarSidebar, {
    global: {
        plugins: [createBootstrap()],
    },
    propsData: {
        ...defaultProps,
        ...propsData,
    },
    ...options,
});

describe('VsNavigationBarSidebar', () => {
    it('should render a BOffcanvas component', () => {
        const wrapper = factoryShallowMount();
        const offcanvas = wrapper.findComponent({
            name: 'BOffcanvas',
        });

        expect(offcanvas.exists()).toBe(true);
    });

    describe(':props', () => {
        it('should accept and pass show prop to BOffcanvas', () => {
            const wrapper = factoryShallowMount({
                show: true,
            });
            const offcanvas = wrapper.findComponent({
                name: 'BOffcanvas',
            });

            expect(offcanvas.props('modelValue')).toBe(true);
        });

        it('should default show prop to false', () => {
            const wrapper = factoryShallowMount();
            const offcanvas = wrapper.findComponent({
                name: 'BOffcanvas',
            });

            expect(offcanvas.props('modelValue')).toBe(false);
        });

        it('should accept and pass sidebarCloseLabel to close button', () => {
            const testLabel = 'Test close label';
            const wrapper = factoryMount({
                sidebarCloseLabel: testLabel,
                show: true,
            });
            const closeButton = wrapper.findComponent({
                name: 'VsButton',
            });

            expect(closeButton.text()).toContain(testLabel);
        });
    });

    describe(':methods', () => {
        it('should emit update:show with false when sidebarClose is called', () => {
            const wrapper = factoryShallowMount();

            wrapper.vm.sidebarClose();

            expect(wrapper.emitted('update:show')).toBeTruthy();
            expect(wrapper.emitted('update:show')[0]).toEqual([false]);
        });
    });

    describe(':events', () => {
        it('should emit update:show when close button is clicked', async() => {
            const wrapper = factoryMount({
                show: true,
            });
            const closeButton = wrapper.findComponent({
                name: 'VsButton',
            });

            await closeButton.vm.$emit('click');

            expect(wrapper.emitted('update:show')).toBeTruthy();
            expect(wrapper.emitted('update:show')[0]).toEqual([false]);
        });

        it('should emit update:show when BOffcanvas emits update:model-value', async() => {
            const wrapper = factoryShallowMount();
            const offcanvas = wrapper.findComponent({
                name: 'BOffcanvas',
            });

            await offcanvas.vm.$emit('update:model-value', false);

            expect(wrapper.emitted('update:show')).toBeTruthy();
            expect(wrapper.emitted('update:show')[0]).toEqual([false]);
        });

        it('should emit update:show when backdrop is clicked', async() => {
            const wrapper = factoryMount({
                show: true,
            });
            const backdrop = wrapper.findComponent({
                name: 'VsBackdrop',
            });

            await backdrop.vm.$emit('click');

            expect(wrapper.emitted('update:show')).toBeTruthy();
            expect(wrapper.emitted('update:show')[0]).toEqual([false]);
        });
    });

    describe(':backdrop', () => {
        it('should render VsBackdrop with correct props', () => {
            const wrapper = factoryMount({
                show: true,
            });
            const backdrop = wrapper.findComponent({
                name: 'VsBackdrop',
            });

            expect(backdrop.exists()).toBe(true);
            expect(backdrop.props('show')).toBe(true);
        });

        it('should pass show prop to backdrop', async() => {
            const wrapper = factoryMount();
            const backdrop = wrapper.findComponent({
                name: 'VsBackdrop',
            });

            expect(backdrop.props('show')).toBe(false);

            await wrapper.setProps({
                show: true,
            });

            expect(backdrop.props('show')).toBe(true);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });

        it('should have proper aria-labelledby attribute', () => {
            const wrapper = factoryShallowMount();
            const offcanvas = wrapper.findComponent({
                name: 'BOffcanvas',
            });

            expect(offcanvas.attributes('aria-labelledby')).toBe('sidebar-title');
        });

        it('should require menuAriaLabel for accessibility', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.vm.$props.menuAriaLabel).toBeDefined();
        });

        it('should require sidebarCloseLabel for accessibility', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.vm.$props.sidebarCloseLabel).toBeDefined();
        });
    });
});
