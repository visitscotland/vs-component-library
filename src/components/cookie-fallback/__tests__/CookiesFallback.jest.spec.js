import { config, shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsCookiesFallback from '../CookiesFallback.vue';

config.global.renderStubDefaultSlot = true;

const fallback = 'Cookies are required to view this content.';

const factoryShallowMount = () => shallowMount(VsCookiesFallback, {
    props: {
        fallbackMessage: fallback,
    },
});

describe('VsCookiesFallback', () => {
    it('should render a VsCookiesFallback element', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.find('[data-test="vs-cookies-fallback"]').exists()).toBe(true);
    });

    describe('props:', () => {
        it('should render fallback message when passed in as  prop', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.text()).toContain(fallback);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
