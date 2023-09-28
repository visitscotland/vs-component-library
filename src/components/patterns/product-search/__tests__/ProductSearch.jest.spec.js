import { shallowMount, config } from '@vue/test-utils';
import VsProductSearch from '../ProductSearch.vue';

config.global.renderStubDefaultSlot = true;

const headingSlot = 'Find experiences';
const introSlot = 'Search a wide range of accommodation, events, food & drink options and things to do from indoor and outdoor attractions to activities, tours and more.';

const factoryShallowMount = (propsData) => shallowMount(VsProductSearch, {
    propsData: {
        noJsMessage: 'JS is turned off',
        ...propsData,
    },
    slots: {
        'vs-module-heading': headingSlot,
        'vs-module-intro': introSlot,
    },
});


describe('VsProductSearch', () => {
    it('should render a component with the data-test attribute `vs-product-search`', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.attributes('data-test')).toBe('vs-product-search');
    });

    describe(':props', () => {
        it('should pass correct location when `defaultLocation` prop is specified', () => {
            const wrapper = factoryShallowMount({
                defaultLocation: '4161',
            });
            expect(wrapper.find('vs-product-search-embed-stub').attributes().defaultlocation).toBe('4161');
        });

        it('should pass correct locale when `defaultLocale` prop is specified', () => {
            const wrapper = factoryShallowMount({
                defaultLocale: 'fr',
            });
            expect(wrapper.find('vs-product-search-embed-stub').attributes().defaultlocale).toBe('fr');
        });

        it('should pass correct product type when `defaultProd` prop is specified', () => {
            const wrapper = factoryShallowMount({
                defaultProd: 'acco',
            });
            console.log(wrapper.html());
            expect(wrapper.find('vs-product-search-embed-stub').attributes().defaultprod).toBe('acco');
        });

        it('should render noJS message when `noJsMessage` prop is specified', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.find('vs-warning-stub').text()).toContain('JS is turned off');
        });
    });

    describe(':slots', () => {
        it('renders content inserted into the `vs-module-heading` slot', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.find('vs-heading-stub').text()).toContain(headingSlot);
        });

        it('renders content inserted into the `vs-module-intro` slot', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.find('.vs-product-search__intro').text()).toContain(introSlot);
        });
    });
});
