import { shallowMount, config } from '@vue/test-utils';
import VsGuestSelector from '../GuestSelector.vue';

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = (propsData) => shallowMount(VsGuestSelector, {
    propsData: {
        availability: true,
        ...propsData,
    },
});

describe('VsGuestSelector', () => {
    it('should render a component with the data-test attribute `vs-guest-selector`', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.attributes('data-test')).toBe('vs-guest-selector');
    });

    describe(':props', () => {
        it('disables the trigger button if `availabilty` is false', async() => {
            const wrapper = factoryShallowMount({
                availability: false,
            });
            const trigger = wrapper.find('.vs-guest-selector__trigger');

            expect(trigger.attributes('disabled')).toBe('');
        });

        it('does not disable the trigger if `availabilty` is true', async() => {
            const wrapper = factoryShallowMount();
            const trigger = wrapper.find('.vs-guest-selector__trigger');

            expect(trigger.attributes('disabled')).toBe(undefined);
        });
    });

    describe(':interactions', () => {
        it('should open the popover when button is clicked', async() => {
            const wrapper = factoryShallowMount();
            const trigger = wrapper.find('.vs-guest-selector__trigger');
            const modal = wrapper.find('.vs-guest-selector__modal');

            expect(modal.classes()).not.toContain('vs-guest-selector__modal--visible');

            await trigger.trigger('click');

            expect(modal.classes()).toContain('vs-guest-selector__modal--visible');
        });

        it('should close the popover when close button is clicked', async() => {
            const wrapper = factoryShallowMount();
            const trigger = wrapper.find('.vs-guest-selector__trigger');
            const closeBtn = wrapper.find('[data-test="vs-guest-selector__close-btn"]');
            const modal = wrapper.find('.vs-guest-selector__modal');

            await trigger.trigger('click');

            expect(modal.classes()).toContain('vs-guest-selector__modal--visible');

            await closeBtn.trigger('click');

            expect(modal.classes()).not.toContain('vs-guest-selector__modal--visible');
        });
    });
});
