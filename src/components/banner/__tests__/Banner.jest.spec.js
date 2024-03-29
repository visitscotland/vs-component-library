import { config, shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import cookieMixin from '../../../mixins/cookieMixin';
import VsBanner from '../Banner.vue';

config.global.renderStubDefaultSlot = true;

const textSlotText = 'Banner text';
const ctaSlotText = 'Banner link';

const factoryShallowMount = (props) => shallowMount(VsBanner, {
    props: {
        ...props,
        closeBtnText: 'close',
        dontShowAgain: true,
    },
    slots: {
        'banner-text': textSlotText,
        'banner-cta': ctaSlotText,
    },
});

let wrapper;
beforeEach(() => {
    wrapper = factoryShallowMount();
});

describe('VsBanner', () => {
    it('should render a component with the data-test attribute `vs-banner`', () => {
        expect(wrapper.attributes('data-test')).toBe('vs-banner');
    });

    describe(':props', () => {
        it('should render sr-only text `close` when passed `closeBtnText` prop', () => {
            const closeBtn = wrapper.find('[data-test=vs-banner__close-btn]');
            expect(closeBtn.text()).toContain('close');
        });

        it('does not set a cookie if `dontShowAgain` is false', async() => {
            await wrapper.setProps({
                dontShowAgain: false,
            });
            const mockSetCookie = jest.fn();

            wrapper.vm.setHiddenCookie = mockSetCookie;

            await wrapper.find('[data-test=vs-banner__close-btn]').trigger('click');

            expect(mockSetCookie).not.toHaveBeenCalled();
        });
    });

    describe(':slots', () => {
        it('renders content inserted in a bannerText slot', () => {
            expect(wrapper.text()).toContain(textSlotText);
        });

        it('renders content inserted in a bannerCta slot', () => {
            expect(wrapper.text()).toContain(ctaSlotText);
        });
    });

    describe(':methods', () => {
        it('hides banner on close button click', async() => {
            await wrapper.find('[data-test=vs-banner__close-btn]').trigger('click');
            const banner = wrapper.find('[data-test=vs-banner]');

            expect(banner.exists()).toBe(false);
        });

        it('should set the cookie when close button is clicked', async() => {
            const mockSet = jest.fn();
            cookieMixin.setCookie = mockSet;
            cookieMixin.setCookie('vs_showbanner', false, false, true);

            expect(mockSet).toBeCalled();
        });

        it('should hide banner if cookie is already set when mounted', async() => {
            const mockGet = jest.fn();
            cookieMixin.cookieExists = mockGet;
            cookieMixin.cookieExists('vs_showbanner');
            const banner = wrapper.find('[data-test=vs-banner]');

            expect(mockGet).toBeCalled();
            expect(banner.exists()).toBe(false);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
