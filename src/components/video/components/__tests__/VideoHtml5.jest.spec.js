import { shallowMount, config } from '@vue/test-utils';
import VsVideoHtml5 from '../VideoHtml5.vue';

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = (props = {
}) => shallowMount(VsVideoHtml5, {
    props: {
        videoSrc: 'video.mp4',
        ...props,
    },
});

describe('VsVideo', () => {
    it('should render component `vs-video-html5`', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.find('div[data-test=vs-video-html5]').exists()).toBe(true);
    });

    describe(':props', () => {
        it('renders html5 player when videoSrc is provided', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.find('video').exists()).toBe(true);
        });

        it('should apply videoSrc to source element', () => {
            const src = 'video.mp4';

            const wrapper = factoryShallowMount();

            expect(wrapper.find('source').attributes('src')).toBe(src);
        });

        it('passes posterImageSrc to the video element', () => {
            const wrapper = factoryShallowMount({
                posterImageSrc: 'poster.jpg',
            });

            expect(wrapper.find('video').attributes('poster')).toBe('poster.jpg');
        });

        it('should set preload to none when lazyLoad is true', () => {
            const wrapper = factoryShallowMount({
                lazyLoad: true,
            });

            expect(wrapper.find('video').attributes('preload')).toBe('none');
        });

        it('should set preload to auto when lazyLoad is false', () => {
            const wrapper = factoryShallowMount({
                lazyLoad: false,
            });

            expect(wrapper.find('video').attributes('preload')).toBe('auto');
        });
    });
});
