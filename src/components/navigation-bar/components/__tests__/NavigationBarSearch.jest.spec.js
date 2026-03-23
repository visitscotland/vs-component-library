import { shallowMount, config } from '@vue/test-utils';
import VsNavigationBarSearch from '../NavigationBarSearch.vue';

config.global.renderStubDefaultSlot = true;

describe('VsNavigationBarSearch', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(VsNavigationBarSearch);
    });

    describe(':props', () => {
        it('renders VsButton with correct props', () => {
            const button = wrapper.findComponent({
                name: 'VsButton',
            });
            expect(button.exists()).toBe(true);
            expect(button.props('variant')).toBe('secondary');
            expect(button.props('size')).toBe('sm');
            expect(button.props('icon')).toBe('vs-icon-control-search');
            expect(button.props('showLabelBreakpoint')).toBe('md');
        });

        it('displays button text', () => {
            const button = wrapper.findComponent({
                name: 'VsButton',
            });

            expect(button.text()).toBe('Search');
        });

        it('displays custom button text', () => {
            wrapper = shallowMount(VsNavigationBarSearch, {
                props: {
                    buttonText: 'Find',
                },
            });
            const button = wrapper.findComponent({
                name: 'VsButton',
            });
            expect(button.text()).toBe('Find');
        });

        it('renders VsSiteSearchForm with correct props', () => {
            const form = wrapper.findComponent({
                name: 'VsSiteSearchForm',
            });
            expect(form.exists()).toBe(true);
            expect(form.props('labelText')).toBe('Search');
            expect(form.props('submitButtonText')).toBe('Submit');
            expect(form.props('closeButtonText')).toBe('Close');
        });

        it('passes custom props to VsSiteSearchForm', () => {
            wrapper = shallowMount(VsNavigationBarSearch, {
                props: {
                    labelText: 'Custom Label',
                    submitButtonText: 'Go',
                    closeButtonText: 'Exit',
                },
            });
            const form = wrapper.findComponent({
                name: 'VsSiteSearchForm',
            });
            expect(form.props('labelText')).toBe('Custom Label');
            expect(form.props('submitButtonText')).toBe('Go');
            expect(form.props('closeButtonText')).toBe('Exit');
        });

        it('passes showLabelBreakpoint prop to button', () => {
            wrapper = shallowMount(VsNavigationBarSearch, {
                props: {
                    showLabelBreakpoint: 'lg',
                },
            });
            const button = wrapper.findComponent({
                name: 'VsButton',
            });
            expect(button.props('showLabelBreakpoint')).toBe('lg');
        });
    });

    describe(':events', () => {
        it('toggles showSearch when button is clicked', async() => {
            expect(wrapper.vm.showSearch).toBe(false);
            const button = wrapper.findComponent({
                name: 'VsButton',
            });
            await button.vm.$emit('click');
            expect(wrapper.vm.showSearch).toBe(true);
            await button.vm.$emit('click');
            expect(wrapper.vm.showSearch).toBe(false);
        });

        it('passes active prop to button based on showSearch state', async() => {
            let button = wrapper.findComponent({
                name: 'VsButton',
            });
            expect(button.props('active')).toBe(false);
            wrapper.vm.showSearch = true;
            await wrapper.vm.$nextTick();
            button = wrapper.findComponent({
                name: 'VsButton',
            });
            expect(button.props('active')).toBe(true);
        });

        it('shows search form when showSearch is true', async() => {
            let form = wrapper.findComponent({
                name: 'VsSiteSearchForm',
            });

            expect(form.props('isShowing')).toBe(false);

            wrapper.vm.showSearch = true;
            await wrapper.vm.$nextTick();

            form = wrapper.findComponent({
                name: 'VsSiteSearchForm',
            });
            expect(form.props('isShowing')).toBe(true);
        });

        it('closes search form when toggle-action is emitted', async() => {
            wrapper.vm.showSearch = true;
            await wrapper.vm.$nextTick();
            expect(wrapper.vm.showSearch).toBe(true);
            const form = wrapper.findComponent({
                name: 'VsSiteSearchForm',
            });
            await form.vm.$emit('toggle-action');
            expect(wrapper.vm.showSearch).toBe(false);
        });
    });
});
