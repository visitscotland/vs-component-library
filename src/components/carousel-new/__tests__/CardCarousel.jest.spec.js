import { config, shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsCardCarousel from '../CardCarousel.vue';

jest.mock('swiper/vue', () => ({
    Swiper: {
        name: 'Swiper',
        render() { return null; },
    },
}));
jest.mock('swiper/modules', () => ({
    Navigation: {
    },
    Scrollbar: {
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
}) => shallowMount(VsCardCarousel, {
    props: {
        ...requiredProps,
        ...(options.props || {
        }),
    },
    slots: options.slots,
    ...options,
});

describe('VsCardCarousel', () => {
    it('renders the carousel container with the expected class and id prefix', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.classes()).toContain('vs-card-carousel');
        expect(wrapper.attributes('id')).toMatch(/^vs-carousel-carousel-/);
    });

    it('renders previous and next buttons with the provided labels', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.find('.vs-card-carousel__control--prev').exists()).toBe(true);
        expect(wrapper.find('.vs-card-carousel__control--next').exists()).toBe(true);
        expect(wrapper.text()).toContain('Previous');
        expect(wrapper.text()).toContain('Next');
    });

    it('renders default slot content inside the swiper wrapper', () => {
        const wrapper = factoryShallowMount({
            slots: {
                default: '<div class="carousel-slide">Slide content</div>',
            },
        });

        expect(wrapper.find('.carousel-slide').exists()).toBe(true);
        expect(wrapper.find('.carousel-slide').text()).toBe('Slide content');
    });

    it('computes swiperBreakpoints using fallback values for unset breakpoints', () => {
        const wrapper = factoryShallowMount({
            propsData: {
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

    it('updates interactive state when user starts interacting', async() => {
        const wrapper = factoryShallowMount();

        expect(wrapper.vm.isInteracting).toBe(false);

        wrapper.vm.onTouchStart();
        expect(wrapper.vm.isInteracting).toBe(true);

        wrapper.vm.isInteracting = false;
        wrapper.vm.onSliderMove();
        expect(wrapper.vm.isInteracting).toBe(true);

        wrapper.vm.isInteracting = false;
        wrapper.vm.onInteractionStart();
        expect(wrapper.vm.isInteracting).toBe(true);
    });

    it('sets isInteracting to false after touch end delay', () => {
        jest.useFakeTimers();

        const wrapper = factoryShallowMount();

        wrapper.vm.isInteracting = true;
        wrapper.vm.onTouchEnd();

        expect(wrapper.vm.isInteracting).toBe(true);

        jest.runAllTimers();

        expect(wrapper.vm.isInteracting).toBe(false);

        jest.useRealTimers();
    });

    it('clears prior interaction timer and ends interaction after a delay', () => {
        jest.useFakeTimers();

        const wrapper = factoryShallowMount();

        wrapper.vm.isInteracting = true;
        wrapper.vm.endInteraction();

        expect(wrapper.vm.isInteracting).toBe(true);

        jest.runAllTimers();

        expect(wrapper.vm.isInteracting).toBe(false);

        jest.useRealTimers();
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();

            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
