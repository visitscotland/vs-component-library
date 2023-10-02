import { shallowMount, config } from '@vue/test-utils';
import VsGuestSelector from '../GuestSelector.vue';

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = (propsData) => shallowMount(VsGuestSelector, {
    propsData: {
        availability: true,
        ...propsData,
    }
});


describe('VsGuestSelector', () => {
    it('should render a component with the data-test attribute `vs-guest-selector`', () => {
        const wrapper = factoryShallowMount();
        console.log(wrapper.html())
        expect(wrapper.attributes('data-test')).toBe('vs-guest-selector');
    });

    // describe(':props', () => {
    //     it('renders the label with correct `ID` and `label` text', async () => {
    //         const wrapper = factoryShallowMount();
    //         const label = wrapper.find('label');

    //         expect(label.attributes('for')).toBe('startDate');
    //         expect(label.text()).toContain('Start Date');
    //     });
    // });

    // describe(':events', () => {
    //     it('should emit a `changeDate` event when date value is changed', async() => {
    //         const wrapper = factoryShallowMount();
    //         const input = wrapper.find('input[type="date"]');
    //         await input.setValue('2023-09-26')

    //         expect(wrapper.emitted('changeDate')[0][0]).toBe('2023-09-26');
    //     });
    // });
});
