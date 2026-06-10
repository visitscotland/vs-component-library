import { config, shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsContentSwiper from '../ContentSwiper.vue';

jest.mock('swiper/vue', () => ({
    Swiper: {
        name: 'Swiper',
        render() {
            return null; 
        },
    },
}));
jest.mock('swiper/modules', () => ({
    Navigation: {
    },
    Scrollbar: {
    },
    A11y: {
    },
}));
jest.mock('swiper/css', () => {});
jest.mock('swiper/css/scrollbar', () => {});

config.global.renderStubDefaultSlot = true;

const requiredProps = {
    previousButtonLabel: 'Previous',
    nextButtonLabel: 'Next',
};

const factoryShallowMount = (options = {
}) => shallowMount(VsContentSwiper, {
    props: {
        ...requiredProps,
        ...(options.props || {
        }),
    },
    slots: options.slots,
});

describe('VsContentSwiper', () => {
    it('renders the content swiper container with the expected class and id prefix', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.classes()).toContain('vs-content-swiper');
        expect(wrapper.attributes('id')).toMatch(/^vs-content-swiper-v-\d+$/);
    });

    it('renders as a div element by default', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.element.tagName).toBe('DIV');
    });

    describe(':props', () => {
        it('renders previous and next buttons with the provided labels', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.find('.vs-content-swiper__control--prev').exists()).toBe(true);
            expect(wrapper.find('.vs-content-swiper__control--next').exists()).toBe(true);
            expect(wrapper.text()).toContain('Previous');
            expect(wrapper.text()).toContain('Next');
        });

        it('computes swiperBreakpoints using fallback values for unset breakpoints', () => {
            const wrapper = factoryShallowMount({
                props: {
                    ...requiredProps,
                    slidesPerViewXs: 1,
                    slidesPerViewSm: 2,
                    slidesPerViewMd: null,
                    slidesPerViewLg: 4,
                },
            });

            expect(wrapper.vm.swiperBreakpoints).toEqual({
                0: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 4,
                },
                1400: {
                    slidesPerView: 4,
                },
                1680: {
                    slidesPerView: 4,
                },
            });
        });

        it('does not add vs-content-swiper--contained class by default', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.classes()).not.toContain('vs-content-swiper--contained');
        });

        it('adds vs-content-swiper--contained class when contained prop is true', () => {
            const wrapper = factoryShallowMount({
                props: {
                    contained: true,
                },
            });
            expect(wrapper.classes()).toContain('vs-content-swiper--contained');
        });

        it('adds is-interacting class to content swiper when isInteracting is true', async() => {
            const wrapper = factoryShallowMount();

            expect(wrapper.classes()).not.toContain('is-interacting');

            wrapper.vm.isInteracting = true;
            await wrapper.vm.$nextTick();

            expect(wrapper.classes()).toContain('is-interacting');
        });

        it('renders scrollbar container with instance-specific class', () => {
            const wrapper = factoryShallowMount();
            const scrollbar = wrapper.find('.vs-content-swiper__scrollbar-container');

            expect(scrollbar.exists()).toBe(true);
            expect(scrollbar.classes()).toContain(`vs-content-swiper__scrollbar-${wrapper.vm.instanceId}`);
        });
    });

    describe(':slots', () => {
        it('renders default slot content inside the swiper wrapper', () => {
            const wrapper = factoryShallowMount({
                slots: {
                    default: '<div class="vs-content-swiper__slide">Slide content</div>',
                },
            });

            expect(wrapper.find('.vs-content-swiper__slide').exists()).toBe(true);
            expect(wrapper.find('.vs-content-swiper__slide').text()).toBe('Slide content');
        });
    });

    describe(':methods', () => {
        it('updates interactive state when user starts interacting', async() => {
            const wrapper = factoryShallowMount();

            expect(wrapper.vm.isInteracting).toBe(false);

            wrapper.vm.startInteraction();
            expect(wrapper.vm.isInteracting).toBe(true);
        });

        it('sets isInteracting to false after touch end delay', () => {
            jest.useFakeTimers();

            const wrapper = factoryShallowMount();

            wrapper.vm.isInteracting = true;
            wrapper.vm.endInteraction();

            expect(wrapper.vm.isInteracting).toBe(true);

            jest.runAllTimers();

            expect(wrapper.vm.isInteracting).toBe(false);

            jest.useRealTimers();
        });

        it('clears prior interaction timer and ends interaction after a delay', () => {
            jest.useFakeTimers();
            const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');

            const wrapper = factoryShallowMount();

            wrapper.vm.isInteracting = true;
            wrapper.vm.endInteraction();

            expect(wrapper.vm.isInteracting).toBe(true);
            expect(clearTimeoutSpy).toHaveBeenCalled();

            jest.runAllTimers();

            expect(wrapper.vm.isInteracting).toBe(false);

            clearTimeoutSpy.mockRestore();
            jest.useRealTimers();
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();

            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
