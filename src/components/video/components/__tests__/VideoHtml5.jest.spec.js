import { shallowMount, config } from '@vue/test-utils';
import VsVideoHtml5 from '../VideoHtml5.vue';

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = (props = {
}) => shallowMount(
    VsVideoHtml5,
    {
        props: {
            videoSrc: 'video.mp4',
            ...props,
        },
    },
);

describe('VsVideo', () => {
    it('should render component `vs-video-html5`', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.find('div[data-test=vs-video-html5]').exists()).toBe(true);
    });

    describe(':props', () => {
        it('does not render toggle button when showToggle is false', () => {
            const wrapper = factoryShallowMount({
                showToggle: false,
            });
            expect(wrapper.find('vs-toggle-button-stub').exists()).toBe(false);
        });

        it('renders toggle button when showToggle is true', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.find('vs-toggle-button-stub').exists()).toBe(true);
        });

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
    });

    describe(':methods', () => {
        afterEach(() => jest.restoreAllMocks());

        it('play calls play on the video element', () => {
            const wrapper = factoryShallowMount();
            const playSpy = jest.spyOn(wrapper.vm.$refs.html5Video, 'play').mockImplementation(() => Promise.resolve());
            wrapper.vm.play();
            expect(playSpy).toHaveBeenCalled();
        });

        it('pause calls pause on the video element', () => {
            const wrapper = factoryShallowMount();
            const pauseSpy = jest.spyOn(wrapper.vm.$refs.html5Video, 'pause').mockImplementation(() => {});
            wrapper.vm.pause();
            expect(pauseSpy).toHaveBeenCalled();
        });

        it('toggle calls play when video is paused', () => {
            const wrapper = factoryShallowMount();
            const video = wrapper.vm.$refs.html5Video;
            jest.spyOn(video, 'play').mockImplementation(() => Promise.resolve());
            Object.defineProperty(video, 'paused', {
                value: true,
                configurable: true,
            });
            wrapper.vm.toggle();
            expect(video.play).toHaveBeenCalled();
        });

        it('toggle calls pause when video is playing', () => {
            const wrapper = factoryShallowMount();
            const video = wrapper.vm.$refs.html5Video;
            jest.spyOn(video, 'pause').mockImplementation(() => {});
            Object.defineProperty(video, 'paused', {
                value: false,
                configurable: true,
            });
            wrapper.vm.toggle();
            expect(video.pause).toHaveBeenCalled();
        });
    });
});
