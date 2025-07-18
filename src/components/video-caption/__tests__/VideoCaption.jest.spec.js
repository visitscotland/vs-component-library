import { config, shallowMount } from '@vue/test-utils';
import { setActivePinia, createPinia } from 'pinia';
import VsVideoCaption from '../VideoCaption.vue';

config.global.renderStubDefaultSlot = true;

jest.mock('@/stores/video.store.ts');
jest.mock('@/utils/svg-context');

const videoTitleSlot = 'Video title';
const buttonText = 'Button text';

const factoryShallowMount = (propsData) => shallowMount(VsVideoCaption, {
    slots: {
        'video-title': videoTitleSlot,
    },
    propsData: {
        videoBtnText: buttonText,
        withToggleBtn: true,
        videoId: '123456',
        ...propsData,
    },
});

describe('VsVideoCaption', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('should render a component with the data-test attribute `video-caption`', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.attributes('data-test')).toBe('video-caption');
    });

    describe(':slots', () => {
        it('should render the video title slot content', async() => {
            const wrapper = factoryShallowMount();

            wrapper.setData({
                requiredCookies: [],
            });

            await wrapper.vm.$nextTick();

            expect(wrapper.html()).toContain(videoTitleSlot);
        });
    });

    describe(':computed', () => {
        it('should get the video details', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.vm.videoDetails.videoId).toBe('123456');
        });

        it('renders the video duration', async() => {
            const wrapper = factoryShallowMount();

            wrapper.setData({
                requiredCookies: [],
            });

            await wrapper.vm.$nextTick();

            const durationText = wrapper.find('.vs-video-caption__duration');

            expect(durationText.text()).toBe('1 minute video');
        });

        it('should not show the content if a video has not been loaded', async() => {
            const wrapper = factoryShallowMount();

            expect(wrapper.find('.vs-video-caption__title').exists()).toBe(false);
        });
    });

    describe(':props', () => {
        it('should populate button text with the `videoBtnText` prop', async() => {
            const wrapper = factoryShallowMount();

            wrapper.setData({
                requiredCookies: [],
            });

            await wrapper.vm.$nextTick();

            const playButton = wrapper.find('.vs-video-caption__button');

            expect(playButton.text()).toBe(buttonText);
        });

        it('should include a toggle button if `withToggleBtn` prop is true', async() => {
            const wrapper = factoryShallowMount();

            wrapper.setData({
                requiredCookies: [],
            });

            await wrapper.vm.$nextTick();

            expect(wrapper.find('vs-toggle-button-stub').exists()).toBe(true);
        });

        it('should not include a toggle button if `withToggleBtn` prop is false', async() => {
            const wrapper = factoryShallowMount();
            wrapper.setProps({
                withToggleBtn: false,
            });
            wrapper.setData({
                requiredCookies: [],
            });
            await wrapper.vm.$nextTick();

            expect(wrapper.find('vs-toggle-button-stub').exists()).toBe(false);
        });

        it(':variant - should accept and render variants as props', async() => {
            const wrapper = factoryShallowMount();
            wrapper.setProps({
                variant: 'narrow',
            });
            wrapper.setData({
                requiredCookies: [],
            });
            await wrapper.vm.$nextTick();

            const variantHolder = wrapper.find('div[data-test="video-caption-variants"]');
            expect(variantHolder.classes()).toContain('vs-video-caption--narrow');
        });
    });

    describe(':methods', () => {
        it('emits `toggleAction` when emitToggle method is called', async() => {
            const wrapper = factoryShallowMount();
            wrapper.vm.emitToggle();
            await wrapper.vm.$nextTick();

            expect(wrapper.emitted().toggleAction).toBeTruthy();
        });
    });
});
