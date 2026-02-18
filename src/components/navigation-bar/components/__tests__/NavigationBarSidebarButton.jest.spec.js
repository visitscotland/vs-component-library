import { shallowMount, mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsNavigationBarSidebarButton from '../NavigationBarSidebarButton.vue';

const defaultProps = {
    sidebarOpenLabel: 'Open navigation menu',
};

const factoryShallowMount = (propsData) => shallowMount(VsNavigationBarSidebarButton, {
    propsData: {
        ...defaultProps,
        ...propsData,
    },
});

const factoryMount = (propsData) => mount(VsNavigationBarSidebarButton, {
    propsData: {
        ...defaultProps,
        ...propsData,
    },
});

describe('VsNavigationBarSidebarButton', () => {
    it('should render a VsButton component', () => {
        const wrapper = factoryShallowMount();
        const button = wrapper.findComponent({
            name: 'VsButton',
        });

        expect(button.exists()).toBe(true);
    });

    describe(':props', () => {
        it('should accept and render sidebarOpenLabel as button text', () => {
            const testLabel = 'Test open menu';
            const wrapper = factoryMount({
                sidebarOpenLabel: testLabel,
            });

            expect(wrapper.text()).toContain(testLabel);
        });
    });

    describe(':methods', () => {
        it('should emit sidebar-open event when sidebarOpen method is called', () => {
            const wrapper = factoryShallowMount();

            wrapper.vm.sidebarOpen();

            expect(wrapper.emitted('sidebar-open')).toBeTruthy();
            expect(wrapper.emitted('sidebar-open')[0]).toEqual([true]);
        });
    });

    describe(':events', () => {
        it('should call sidebarOpen method when button is clicked', async() => {
            const wrapper = factoryShallowMount();
            const sidebarOpenSpy = jest.spyOn(wrapper.vm, 'sidebarOpen');
            const button = wrapper.findComponent({
                name: 'VsButton',
            });

            await button.vm.$emit('click');

            expect(sidebarOpenSpy).toHaveBeenCalled();
        });

        it('should emit sidebar-open event when button is clicked', async() => {
            const wrapper = factoryMount();

            await wrapper.trigger('click');

            expect(wrapper.emitted('sidebar-open')).toBeTruthy();
            expect(wrapper.emitted('sidebar-open')[0]).toEqual([true]);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });

        it('should have proper aria-haspopup for menu button', () => {
            const wrapper = factoryMount();

            expect(wrapper.attributes('aria-haspopup')).toBe('true');
        });

        it('should use sidebarOpenLabel for screen readers', () => {
            const testLabel = 'Open main navigation';
            const wrapper = factoryMount({
                sidebarOpenLabel: testLabel,
            });

            expect(wrapper.text()).toContain(testLabel);
        });
    });
});
