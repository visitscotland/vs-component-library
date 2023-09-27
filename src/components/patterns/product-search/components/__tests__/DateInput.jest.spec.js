import { shallowMount, mount,config } from '@vue/test-utils';
import VsDateInput from '../DateInput.vue';

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = (propsData) => shallowMount(VsDateInput, {
    propsData: {
        label: 'Start Date',
        id: 'startDate',
        name: 'isostartdate',
        ...propsData,
    }
});


describe('VsDateInput', () => {
    it('should render a component with the data-test attribute `vs-date-input`', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.attributes('data-test')).toBe('vs-date-input');
    });

    it('should set the `min` date as today by default', () => {
        const wrapper = factoryShallowMount();
        const input = wrapper.find('input[type="date"]');
        const today = new Date().toISOString().split('T')[0];
        
        expect(input.attributes('min')).toBe(today);
    });

    describe(':props', () => {
        it('renders the label with correct `ID` and `label` text', async () => {
            const wrapper = factoryShallowMount();
            const label = wrapper.find('label');

            expect(label.attributes('for')).toBe('startDate');
            expect(label.text()).toContain('Start Date');
        });

        it('renders the label with correct `ID` and `name`', async () => {
            const wrapper = factoryShallowMount();
            const input = wrapper.find('input[type="date"]');

            expect(input.attributes('id')).toBe('startDate');
            expect(input.attributes('name')).toBe('isostartdate');
        });

        it('renders the correct min date when `minDate` is passed', async () => {
            const wrapper = factoryShallowMount({
                minDate: "2023-06-12",
            });
            const input = wrapper.find('input[type="date"]');
            
            expect(input.attributes('min')).toBe("2023-06-12");
        });

        it('sets the default selected value when `value` is passed', async () => {
            const wrapper = factoryShallowMount({
                value: "2023-09-26",
            });

            setTimeout(() => {
                expect(wrapper.emitted('changeDate')[0][0]).toBe('2023-09-26');
            }, 100);
            
        });
    });

    describe(':events', () => {
        it('should emit a `changeDate` event when date value is changed', async() => {
            const wrapper = factoryShallowMount();
            const input = wrapper.find('input[type="date"]');
            await input.setValue('2023-09-26')

            expect(wrapper.emitted('changeDate')[0][0]).toBe('2023-09-26');
        });
    });
});
