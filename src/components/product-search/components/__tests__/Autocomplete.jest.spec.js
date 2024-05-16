import {
    shallowMount, mount, config,
} from '@vue/test-utils';
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
    },
});

const factoryMount = (propsData) => mount(VsAutocomplete, {
    propsData: {
        id: 'search-location',
        label: 'Location',
        name: 'loc',
        options: locationsData,
        placeholder: 'Enter a location',
        trackBy: 'name',
        ...propsData,
    },
});

describe('VsAutocomplete', () => {
    it('should render a component with the data-test attribute `vs-autocomplete`', () => {
        const wrapper = factoryMount();
        expect(wrapper.attributes('data-test')).toBe('vs-autocomplete');
    });

    it('updates the hidden input value on autocomplete value change', async() => {
        const wrapper = factoryMount();

        await wrapper.find('.vs-input').trigger('click');
        await wrapper.find('li[id$="vue-combo-blocks-item-0"]').trigger('click');

        expect(wrapper.find('input[name="loc"]').attributes('value')).toBe(locationsData[0].name);
    });

    it('updates the hidden input value on autocomplete value change if `isTourLocation` is true', async() => {
        const wrapper = factoryMount({
            isTourLocation: true,
            options: toursOriginData,
        });

        await wrapper.find('.vs-input').trigger('click');
        await wrapper.find('li[id$="vue-combo-blocks-item-0"]').trigger('click');

        expect(wrapper.find('input[name="loc"]').attributes('value')).toBe(toursOriginData[0].name);
    });

    describe(':props', () => {
        it('renders the label with correct `ID` and `label` text', async() => {
            const wrapper = factoryMount();
            const label = wrapper.find('label');
            expect(label.attributes('for')).toBe('search-location');
            expect(label.text()).toContain('Location');
        });
        
        it('renders the autocomplete input with correct `ID`', async () => {
            const wrapper = factoryMount();
            const autocompleteInput = wrapper.find('.vs-input');
            expect(autocompleteInput.attributes('id')).toBe('search-location');
        });

        it('renders the autocomplete with correct `placeholder`', async() => {
            const wrapper = factoryMount();
            const autocompleteInput = wrapper.find('.vs-input');
            expect(autocompleteInput.attributes('placeholder')).toBe('Enter a location');
        });

        it('sets a `defaultVal` when passed as a prop', async() => {
            const wrapper = factoryMount({
                defaultVal: locationsData[0],
            });
            await wrapper.vm.$nextTick();

            expect(wrapper.find('input[name="loc"]').attributes('value')).toBe(locationsData[0].name);
        });
    });

    describe(':events', () => {
        it('should emit a `changeValue` event when input value is changed', async () => {
            const wrapper = factoryMount();

            await wrapper.find('.vs-input').trigger('click');
            await wrapper.find('li[id$="vue-combo-blocks-item-0"]').trigger('click');

            expect(wrapper.emitted('changeValue')[0][0]).toBe(locationsData[0].name);
        });
    });
});
