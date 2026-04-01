import { shallowMount, config } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsVideo from '../Video.vue';
import VsVideoYoutube from '../components/VideoYoutube.vue';
import VsVideoHtml5 from '../components/VideoHtml5.vue';

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = (props = {
}) => shallowMount(VsVideo, {
    props,
});

describe('VsVideo', () => {
    it('should render a component `vs-video`', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.find('div[data-test=vs-video]').exists()).toBe(true);
    });

    it('does not render when reRendering is true', async() => {
        const wrapper = factoryShallowMount();
        await wrapper.setData({
            reRendering: true,
        });
        expect(wrapper.find('div[data-test=vs-video]').exists()).toBe(false);
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });

    describe(':props', () => {
        it('renders youtube player by default', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.html()).toContain('vs-video-youtube-stub');
        });

        it('renders html5 player when videoType is html5', () => {
            const wrapper = factoryShallowMount({
                videoType: 'html5',
            });
            expect(wrapper.html()).toContain('vs-video-html5-stub');
        });

        it('passes videoId to the youtube player', () => {
            const wrapper = factoryShallowMount({
                videoId: 'abc123',
            });
            expect(wrapper.find('vs-video-youtube-stub').attributes('videoid')).toBe('abc123');
        });

        it('passes videoSrc to the html5 player', () => {
            const wrapper = factoryShallowMount({
                videoType: 'html5',
                videoSrc: 'video.mp4',
            });
            expect(wrapper.find('vs-video-html5-stub').attributes('videosrc')).toBe('video.mp4');
        });

        it('passes showToggle prop to the player', () => {
            const wrapper = factoryShallowMount({
                showToggle: false,
            });
            expect(wrapper.find('vs-video-youtube-stub').attributes('showtoggle')).toBe('false');
        });
    });

    describe(':computed', () => {
        it('playerComponent returns VsVideoYoutube by default', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.vm.playerComponent).toBe(VsVideoYoutube);
        });

        it('playerComponent returns VsVideoHtml5 when videoType is html5', () => {
            const wrapper = factoryShallowMount({
                videoType: 'html5',
            });
            expect(wrapper.vm.playerComponent).toBe(VsVideoHtml5);
        });
    });

    describe(':methods', () => {
        const playerMethods = {
            play: jest.fn(),
            pause: jest.fn(),
            toggle: jest.fn(),
        };
        const stubWithMethods = {
            template: '<div />',
            methods: playerMethods,
        };

        const factoryWithStub = () => shallowMount(VsVideo, {
            global: {
                stubs: {
                    VsVideoYoutube: stubWithMethods,
                },
            },
        });

        beforeEach(() => jest.clearAllMocks());

        it('play calls play on the player ref', () => {
            const wrapper = factoryWithStub();
            wrapper.vm.play();
            expect(playerMethods.play).toHaveBeenCalled();
        });

        it('pause calls pause on the player ref', () => {
            const wrapper = factoryWithStub();
            wrapper.vm.pause();
            expect(playerMethods.pause).toHaveBeenCalled();
        });

        it('toggle calls toggle on the player ref', () => {
            const wrapper = factoryWithStub();
            wrapper.vm.toggle();
            expect(playerMethods.toggle).toHaveBeenCalled();
        });
    });
});
