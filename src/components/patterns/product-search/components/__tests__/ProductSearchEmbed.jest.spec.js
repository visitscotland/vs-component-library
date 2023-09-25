import { shallowMount, config, flushPromises } from '@vue/test-utils';
import VsProductSearchEmbed from '../ProductSearchEmbed.vue';
import axios from 'axios';
import locationsData from './data/locationsData.json';

config.global.renderStubDefaultSlot = true;

jest.spyOn(axios, 'get').mockResolvedValue(locationsData);

const factoryShallowMount = (propsData) => shallowMount(VsProductSearchEmbed, {
    propsData: {
        ...propsData,
    }
});

describe('VsProductSearchEmbed', () => {
    it('should render a component with the data-test attribute `vs-product-search-embed`', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.attributes('data-test')).toBe('vs-product-search-embed');
    });

    it('displays loading state on initial mount', async () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.find('vs-loading-spinner-stub').exists()).toBe(true);
        expect(wrapper.find('[data-test="psw-form"]').exists()).toBe(false);
        await flushPromises()
        expect(wrapper.find('vs-loading-spinner-stub').exists()).toBe(false);
        expect(wrapper.find('[data-test="psw-form"]').exists()).toBe(true);
    });

    it('should show the form when location data is loaded on mounted', async () => {
        const wrapper = factoryShallowMount();
        expect(axios.get).toHaveBeenCalledWith('https://www.visitscotland.com/data/locations?locale=')
        await flushPromises()
        expect(wrapper.find('[data-test="psw-form"]').exists()).toBe(true);
    });

    describe(':props', () => {
        // it.only('should pass correct location when `defaultLocation` prop is specified', async () => {
        //     const wrapper = factoryShallowMount();
        //     expect(axios.get).toHaveBeenCalledTimes(1)
        //     expect(axios.get).toHaveBeenCalledWith('https://www.visitscotland.com/data/locations?locale=')
        //     console.log(wrapper.html())
        //     await flushPromises()
        //     console.log(wrapper.html())
        //     // expect(wrapper.find('vs-product-search-embed-stub').attributes().defaultlocation).toBe('4161');
        // });

        // it('should pass correct locale when `defaultLocale` prop is specified', () => {
        //     const wrapper = factoryShallowMount({
        //         defaultLocale: 'fr',
        //     });
        //     expect(wrapper.find('vs-product-search-embed-stub').attributes().defaultlocale).toBe('fr');
        // });

        // it('should pass correct product type when `defaultProd` prop is specified', () => {
        //     const wrapper = factoryShallowMount({
        //         defaultProd: 'acco',
        //     });
        //     console.log(wrapper.html());
        //     expect(wrapper.find('vs-product-search-embed-stub').attributes().defaultprod).toBe('acco');
        // });
    });

    // describe(':slots', () => {
    //     it('renders content inserted into the `vs-module-heading` slot', () => {
    //         const wrapper = factoryShallowMount();
    //         expect(wrapper.find('vs-heading-stub').text()).toContain(headingSlot);
    //     });

    //     it('renders content inserted into the `vs-module-intro` slot', () => {
    //         const wrapper = factoryShallowMount();
    //         expect(wrapper.find('.vs-product-search__intro').text()).toContain(introSlot);
    //     });
    // });
});
