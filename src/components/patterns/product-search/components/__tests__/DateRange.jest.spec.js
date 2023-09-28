import { shallowMount, mount, config } from '@vue/test-utils';
import VsDateRange from '../DateRange.vue';

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = (propsData) => shallowMount(VsDateRange, {
    propsData: {
        ...propsData,
    }
});

const factoryMount = (propsData) => mount(VsDateRange, {
    propsData: {
        ...propsData,
    }
});

describe('VsDateRange', () => {
    it('should render a component with the data-test attribute `vs-date-range`', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.attributes('data-test')).toBe('vs-date-range');
    });

    it('renders the date input for startDate', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.find('date-input-stub#startDate').exists()).toBe(true);
    });

    it('renders the date input for endDate', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.find('date-input-stub#endDate').exists()).toBe(true);
    });

    it('should not render a clear button by default', () => {
        const wrapper = factoryShallowMount();
        const clearBtn =  wrapper.find('#clearDateRange');

        expect(clearBtn.exists()).toBe(false);
    });

    describe(':props', () => {
        it('passes correct `startLabel` to date input', () => {
            const wrapper = factoryShallowMount({
                startLabel: 'Start Date'
            });
            const startDate = wrapper.find('date-input-stub#startDate');
            expect(startDate.attributes('label')).toBe('Start Date');
        });

        it('passes correct `endLabel` to date input', () => {
            const wrapper = factoryShallowMount({
                endLabel: 'End Date'
            });
            const endDate = wrapper.find('date-input-stub#endDate');
            expect(endDate.attributes('label')).toBe('End Date');
        });
    });

    describe(':interactions', () => {
        it('should set the endDate fields min date as tomorrow by default', async() => {     
            const wrapper = factoryShallowMount();
            const inputEnd = wrapper.find('#endDate');
            
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(today.getDate()+1);
            const tomorrowIso = tomorrow.toISOString().split('T')[0];

            expect(inputEnd.attributes('mindate')).toBe(tomorrowIso);
        });

        it('should set the endDate fields min date as startDate plus one day', async() => {     
            const wrapper = factoryMount();
            const inputEnd = wrapper.find('#endDate');
            const inputStart = wrapper.find('#startDate');
            await inputStart.setValue('2023-09-24')

            const date = new Date();
            const start = new Date('2023-09-24');
            date.setDate(start.getDate() + 1);
            const returnedDate = date.toISOString().split('T')[0];

            expect(inputEnd.attributes('min')).toBe(returnedDate);
        });

        it('should calculate number of nights when start and end dates are selected', async() => {
            const wrapper = factoryMount();
            const inputNights = wrapper.find('input[name="nights"]');
            const inputStart = wrapper.find('#startDate');
            const inputEnd = wrapper.find('#endDate');

            await inputStart.setValue('2023-09-26')
            await inputEnd.setValue('2023-09-30')

            expect(inputNights.attributes('value')).toBe('4');
        });

        it('should render a clear button when a startDate is entered', async() => {
            const wrapper = factoryMount();
            const inputStart = wrapper.find('#startDate');
            
            await inputStart.setValue('2023-09-26')
            
            const clearBtn =  wrapper.find('#clearDateRange');
            expect(clearBtn.exists()).toBe(true);

        });

        it('should render a clear button when a endDate is entered', async() => {
            const wrapper = factoryMount();
            const inputEnd = wrapper.find('#endDate');
            
            await inputEnd.setValue('2023-09-26')
            
            const clearBtn =  wrapper.find('#clearDateRange');
            expect(clearBtn.exists()).toBe(true);
        });


        it('should clear the inputs when clear button is pressed', async() => {
            const wrapper = factoryMount();
            const inputStart = wrapper.find('#startDate');
            const inputEnd = wrapper.find('#endDate');
            const inputNights = wrapper.find('input[name="nights"]');

            expect(inputNights.attributes('value')).toBe('1');

            await inputStart.setValue('2023-09-26')
            await inputEnd.setValue('2023-09-30')

            expect(inputNights.attributes('value')).toBe('4');
            
            const clearBtn =  wrapper.find('#clearDateRange');
            await clearBtn.trigger('click');

            expect(inputNights.attributes('value')).toBe('1');
        });
    });

});
