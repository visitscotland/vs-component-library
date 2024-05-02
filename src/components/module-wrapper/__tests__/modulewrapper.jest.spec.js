import { config, shallowMount } from '@vue/test-utils';
import VsModuleWrapper from '../ModuleWrapper.vue';

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = (slotData) => shallowMount(VsModuleWrapper, {
    ...slotData,
});

describe('VsModuleWrapper', () => {
    it('should render a component with the data-test attribute `vs-module-wrapper`', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.attributes('data-test')).toBe('vs-module-wrapper');
    });

    describe(':props', () => {
        it('sets the module wrapper to `grey` theme', async() => {
            const wrapper = factoryShallowMount();

            await wrapper.setProps({
                theme: 'grey',
            });

            expect(wrapper.find('[data-test="vs-module-wrapper"]').classes()).toContain('vs-module-wrapper--grey');
        });

        it('sets the module wrapper to `neutral` theme', async() => {
            const wrapper = factoryShallowMount();

            await wrapper.setProps({
                theme: 'neutral',
            });

            expect(wrapper.find('[data-test="vs-module-wrapper"]').classes()).toContain('vs-module-wrapper--neutral');
        });

        it('sets the module wrapper to `light` theme', async() => {
            const wrapper = factoryShallowMount();

            await wrapper.setProps({
                theme: 'light',
            });

            expect(wrapper.find('[data-test="vs-module-wrapper"]').classes()).toContain('vs-module-wrapper--light');
        });
    });

    describe(':slots', () => {
        it('renders content inserted in the default slot', () => {
            const wrapper = factoryShallowMount({
                slots: {
                    default: 'Default slot content',
                },
            });

            expect(wrapper.text()).toContain('Default slot content');
        });

        it('renders content inserted in a vs-module-wrapper-heading slot', () => {
            const wrapper = factoryShallowMount({
                slots: {
                    'vs-module-wrapper-heading': 'Module wrapper heading',
                },
            });
            expect(wrapper.find('[data-test="vs-module-wrapper__heading"]').text()).toBe('Module wrapper heading');
        });

        it('renders content inserted in a vs-module-wrapper-intro slot', () => {
            const wrapper = factoryShallowMount({
                slots: {
                    'vs-module-wrapper-intro': '<p>Module wrapper content</p>',
                },
            });
            expect(wrapper.find('[data-test="vs-module-wrapper__intro"]').html()).toContain('<p>Module wrapper content</p>');
        });

        it('does not render the heading if no vsModuleWrapperHeading slot is supplied', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.find('[data-test="vs-module-wrapper__heading"]').exists()).toBe(false);
        });

        it('does not render the intro if no vsModuleWrapperHeading slot is supplied', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.find('[data-test="vs-module-wrapper__intro"]').exists()).toBe(false);
        });
    });
});
