import { shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';

import VsPanel from '../Panel.vue';

const factoryShallowMount = (propsData) => shallowMount(VsPanel, {
    propsData: {
        ...propsData,
    },
});

describe('VsPanel', () => {
    it('should render a component with the data-test attribute `vs-panel`', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.attributes('data-test')).toBe('vs-panel');
    });

    describe(':props', () => {
        it('should render the component with `secondary` variant by default', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.classes()).toContain('vs-panel--secondary');
        });

        it('should render the component with `secondary` variant when passed', () => {
            const wrapper = factoryShallowMount({
                variant: 'secondary',
            });
            expect(wrapper.classes()).toContain('vs-panel--secondary');
        });

        it('should render the component with `information` variant when passed', () => {
            const wrapper = factoryShallowMount({
                variant: 'information',
            });
            expect(wrapper.classes()).toContain('vs-panel--information');
        });
    });

    describe(':slots', () => {
        it('should render content in the default slot', () => {
            const wrapper = shallowMount(VsPanel, {
                slots: {
                    default: '<p>Panel content</p>',
                },
            });
            expect(wrapper.html()).toContain('<p>Panel content</p>');
        });

        it('should render content in the deprecated vs-panel-title slot', () => {
            const wrapper = shallowMount(VsPanel, {
                slots: {
                    'vs-panel-title': '<h2>Panel Title</h2>',
                },
            });
            expect(wrapper.html()).toContain('<h2>Panel Title</h2>');
        });

        it('should render both slots when provided', () => {
            const wrapper = shallowMount(VsPanel, {
                slots: {
                    'vs-panel-title': '<h2>Panel Title</h2>',
                    default: '<p>Panel content</p>',
                },
            });
            expect(wrapper.html()).toContain('<h2>Panel Title</h2>');
            expect(wrapper.html()).toContain('<p>Panel content</p>');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
