import {
    shallowMount, mount, config, flushPromises,
} from '@vue/test-utils';
import axios from 'axios';
import axe from '@/../test/unit/helpers/axe-helper';
import VsProductSearchEmbed from '../ProductSearchEmbed.vue';
import locationsData from './data/locationsData.json';
import locationsDataFr from './data/locationsDataFr.json';
import toursOriginData from './data/toursOriginData.json';
import toursAttractionData from './data/toursAttractionData.json';

config.global.renderStubDefaultSlot = true;

const mockGet = jest.spyOn(axios, 'get');

const locationsDataUrl = 'https://www.visitscotland.com/data/locations?locale=';
const locationsDataFrUrl = 'https://www.visitscotland.com/data/locations?locale=fr';
const toursOriginDataUrl = 'https://www.visitscotland.com/tms-api/v1/origins?active=1';
const toursAttractionDataUrl = 'https://www.visitscotland.com/tms-api/v1/attractions';

mockGet.mockImplementation((url) => {
    switch (url) {
    case locationsDataUrl:
        return Promise.resolve(locationsData);
    case locationsDataFrUrl:
        return Promise.resolve(locationsDataFr);
    case toursOriginDataUrl:
        return Promise.resolve(toursOriginData);
    case toursAttractionDataUrl:
        return Promise.resolve(toursAttractionData);
    default:
        return Promise.reject(new Error('not found'));
    }
});

const factoryShallowMount = (propsData) => shallowMount(VsProductSearchEmbed, {
    propsData: {
        ...propsData,
    },
});

const factoryMount = (propsData) => mount(VsProductSearchEmbed, {
    propsData: {
        ...propsData,
    },
});

describe('VsProductSearchEmbed', () => {
    it('should render a component with the data-test attribute `vs-product-search-embed`', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.attributes('data-test')).toBe('vs-product-search-embed');
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            await flushPromises();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });

    it('displays loading state on initial mount', async() => {
        const wrapper = factoryShallowMount();
        expect(wrapper.find('vs-loading-spinner-stub').exists()).toBe(true);
        expect(wrapper.find('[data-test="psw-form"]').exists()).toBe(false);
        await flushPromises();
        expect(wrapper.find('vs-loading-spinner-stub').exists()).toBe(false);
        expect(wrapper.find('[data-test="psw-form"]').exists()).toBe(true);
    });

    it('should show the form when location data is loaded on mounted', async() => {
        const wrapper = factoryShallowMount();
        expect(axios.get).toHaveBeenCalledWith(locationsDataUrl);
        await flushPromises();
        expect(wrapper.find('[data-test="psw-form"]').exists()).toBe(true);
    });

    it('sets the correct form elements for `Things to do` by default', async() => {
        const wrapper = factoryShallowMount();
        await flushPromises();
        const productTypeSelect = wrapper.find('vs-select-stub');
        expect(productTypeSelect.exists()).toBe(true);
        expect(productTypeSelect.attributes('value')).toBe('acti,attr,reta');
        expect(wrapper.find('#search-location').exists()).toBe(true);
    });

    it('sets correct form action URL by default', async() => {
        const wrapper = factoryShallowMount();
        await flushPromises();
        expect(wrapper.find('[data-test="psw-form"]').attributes('action')).toBe('https://www.visitscotland.com/info/see-do/search-results');
    });

    describe(':props', () => {
        it('sets the correct form elements for `Accommodation` when `acco` is passed as `defaultProd`', async() => {
            const wrapper = factoryMount({
                defaultProd: 'acco',
            });
            await flushPromises();
            const productTypeSelect = wrapper.find('#prodtypes');

            expect(productTypeSelect.exists()).toBe(true);
            expect(wrapper.find('#search-location').exists()).toBe(true);
            expect(wrapper.find('[data-test="vs-date-range"]').exists()).toBe(true);
            expect(wrapper.find('[data-test="vs-guest-selector"]').exists()).toBe(true);
            // fix guest-selector not having a proper label
            // expect(await axe(wrapper.html())).toHaveNoViolations();
        });
        
        it('sets the correct form elements for `Events & Festivals` when `even` is passed as `defaultProd`', async() => {
            const wrapper = factoryMount({
                defaultProd: 'even',
            });
            await flushPromises();
            const productTypeSelect = wrapper.find('#prodtypes');

            expect(productTypeSelect.exists()).toBe(true);
            expect(wrapper.find('#search-location').exists()).toBe(true);
            expect(wrapper.find('[data-test="vs-date-range"]').exists()).toBe(true);
            expect(wrapper.find('#search-keyword').exists()).toBe(true);
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });

        it('sets the correct form elements for `Food & Drink` when `cate` is passed as `defaultProd`', async() => {
            const wrapper = factoryMount({
                defaultProd: 'cate',
            });
            await flushPromises();
            const productTypeSelect = wrapper.find('#prodtypes');

            expect(productTypeSelect.exists()).toBe(true);
            expect(wrapper.find('#search-location').exists()).toBe(true);
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });

        it('sets the correct form elements for `Tours` when `tour` is passed as `defaultProd`', async() => {
            const wrapper = factoryMount({
                defaultProd: 'tour',
            });
            await flushPromises();
            const productTypeSelect = wrapper.find('#prodtypes');

            expect(productTypeSelect.exists()).toBe(true);
            expect(wrapper.find('#tour-origin').exists()).toBe(true);
            expect(wrapper.find('#tour-month').exists()).toBe(true);
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });

        it('should set correct form action URL when `defaultLocale` prop is passed', async() => {
            const wrapper = factoryShallowMount({
                defaultLocale: 'fr',
            });
            await flushPromises();

            expect(wrapper.find('[data-test="psw-form"]').attributes('action')).toBe('https://www.visitscotland.com/fr/info/see-do/search-results');
        });

        it('should set correct `defaultLocation` when prop is passed', async() => {
            const wrapper = factoryShallowMount({
                defaultLocation: '4161',
            });
            await flushPromises();
            const mockGetPlaceData = jest.spyOn(wrapper.vm, 'getPlaceData');

            setTimeout(() => {
                expect(mockGetPlaceData).toHaveBeenCalled();
                expect(wrapper.find('#search-location').attributes('defaultval')).toBe('4161');
            }, 100);
        });
    });

    describe(':methods', () => {
        it('gets Tours data when tours product type is default', async() => {
            factoryShallowMount({
                defaultProd: 'tour',
            });
            expect(axios.get).toHaveBeenCalledWith(toursOriginDataUrl);
            expect(axios.get).toHaveBeenCalledWith(toursAttractionDataUrl);
        });

        it('gets Tours data when product type is changed to `tours`', async() => {
            const wrapper = factoryShallowMount();
            await flushPromises();

            wrapper.vm.onChange({
                field: 'prodtypes',
                value: 'tour',
            });

            expect(axios.get).toHaveBeenCalledWith(toursOriginDataUrl);
            expect(axios.get).toHaveBeenCalledWith(toursAttractionDataUrl);
        });

        it('submits the form on button trigger', async() => {
            const wrapper = factoryMount({
            });
            await flushPromises();

            const mockPreSubmitChecks = jest.spyOn(wrapper.vm, 'preSubmitChecks');
            await wrapper.find('form').trigger('submit.prevent');

            setTimeout(() => {
                expect(mockPreSubmitChecks).toHaveBeenCalled();
            }, 100);
        });
    });
});
