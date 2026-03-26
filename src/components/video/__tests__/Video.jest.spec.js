import { shallowMount, config } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsVideo from '../Video.vue';

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = (props = {
}) => shallowMount(
    VsVideo,
    {
        props: {
            ...props,
        },
    },
);

describe('VsVideo', () => {
    it('should render a component `vs-video`', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.find('div[data-test=vs-video]').exists()).toBe(true);
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });

    describe(':props', () => {
        it('should render a youtube video component when video-id is passed', async() => {
            const wrapper = factoryShallowMount({
                videoId: '123456',
                noJsMessage: 'Js is off',
                noCookiesMessage: 'Cookies are off',
                cookieBtnText: 'Manage cookies',
                errorMessage: 'Error content',
            });

            await wrapper.setData({
                requiredCookies: [],
            });

            await wrapper.vm.$nextTick();

            expect(wrapper.find('vs-video-youtube-stub').attributes('videoid')).toBe('123456');
        });

        it('renders html5 player when videoType html5 and videosrc is passed', () => {
            const wrapper = factoryShallowMount({
                videoType: 'html5',
                videoSrc: 'video.mp4',
            });

            expect(wrapper.html()).toContain('vs-video-html5-stub');
        });
    });
});
