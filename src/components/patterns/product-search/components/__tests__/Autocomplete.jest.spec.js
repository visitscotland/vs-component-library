import { shallowMount, mount,config } from '@vue/test-utils';
import VsAutocomplete from '../Autocomplete.vue';
import locationsData from './data/locationsData.json';
import toursOriginData from './data/toursOriginData.json';

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = (propsData) => shallowMount(VsAutocomplete, {
    propsData: {
        id: 'search-location',
        label: 'Location',
        name: 'loc',
        options: locationsData,
        placeholder: 'Enter a location',
        ...propsData,
    }
});

const factoryMount = (propsData) => mount(VsAutocomplete, {
    propsData: {
        id: 'search-location',
        label: 'Location',
        name: 'loc',
        options: locationsData,
        placeholder: 'Enter a location',
        ...propsData,
    }
});


describe('VsAutocomplete', () => {
    it('should render a component with the data-test attribute `vs-autocomplete`', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.attributes('data-test')).toBe('vs-autocomplete');
    });

    it('updates the hidden input value on autocomplete value change', async () => {
        const wrapper = factoryMount();

        await wrapper.find('.simple-typeahead-input').setValue('Aberdeen & Aberdeenshire')
        expect(wrapper.find('input[name="loc"]').attributes('value')).toBe('Aberdeen & Aberdeenshire');
    });

    it('updates the hidden input value on autocomplete value change if `isTourLocation` is true', async () => {
        const wrapper = factoryMount({
            isTourLocation: true,
            options: toursOriginData,
        });

        await wrapper.find('.simple-typeahead-input').setValue('Aberdeen & Aberdeenshire')
        expect(wrapper.find('input[name="loc"]').attributes('value')).toBe('aberdeen-and-aberdeenshire');
    });
   
    describe(':props', () => {
        it('renders the label with correct `ID` and `label` text', async () => {
            const wrapper = factoryShallowMount();
            const label = wrapper.find('label');
            expect(label.attributes('for')).toBe('search-location');
            expect(label.text()).toContain('Location');
        });
        it('renders the autocomplete with correct `ID`', async () => {
            const wrapper = factoryShallowMount();
            const autocomplete = wrapper.find('vue3-simple-typeahead-stub');
            expect(autocomplete.attributes('id')).toBe('search-location');
        });
        it('renders the autocomplete with correct `placeholder`', async () => {
            const wrapper = factoryShallowMount();
            const autocomplete = wrapper.find('vue3-simple-typeahead-stub');
            expect(autocomplete.attributes('placeholder')).toBe('Enter a location');
        });
        it('sets a `defaultVal` when passed as a prop', async () => {
            const wrapper = factoryShallowMount({
                defaultVal: '4161',
            });
            const autocomplete = wrapper.find('vue3-simple-typeahead-stub');
            expect(autocomplete.attributes('defaultitem')).toBe('4161');
        });
    });

    describe(':events', () => {
        it('should emit a `changeValue` event when input value is changed', async() => {
            const wrapper = factoryMount();
            await wrapper.find('.simple-typeahead-input').setValue('Aberdeen & Aberdeenshire')

            expect(wrapper.emitted('changeValue')[0][0]).toBe('Aberdeen & Aberdeenshire');
        });
    });
});
