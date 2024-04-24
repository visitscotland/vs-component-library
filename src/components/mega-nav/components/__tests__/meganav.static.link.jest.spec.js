import { config, shallowMount } from '@vue/test-utils';
import VsMegaNavStaticLink from '../MegaNavStaticLink.vue';

config.global.renderStubDefaultSlot = true;

const slotContent = 'Venues';
const href = 'https://visitscotland.com/venues';

const factoryShallowMount = (propsData) => shallowMount(VsMegaNavStaticLink, {
    propsData: {
        ...propsData,
        href,
    },
    slots: {
        default: slotContent,
    },
});

describe('VsMegaNavListItem', () => {
    it('should render a component with the data-test attribute `vs-mega-nav-static-link`', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.attributes('data-test')).toBe('vs-mega-nav-static-link');
    });

    describe(':props', () => {
        it('should render a link with the provided href', () => {
            const wrapper = factoryShallowMount();
            const innerLink = wrapper.find('.vs-mega-nav-static-link__inner');

            expect(innerLink.attributes('href')).toBe(href);
        });
    });

    describe(':slots', () => {
        it('renders link content in the default slot', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.html()).toContain(slotContent);
        });
    });
});
