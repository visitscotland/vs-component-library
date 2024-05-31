import {
    config, shallowMount, mount,
} from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import { setActivePinia, createPinia } from 'pinia';
import VsImageWithCaption from '../ImageWithCaption.vue';

config.global.renderStubDefaultSlot = true;

const defaultSlotText = 'Image';
const toggleIconSlot = 'Toggle icon';
const alertSlot = 'Video alert message';
const videoTitleSlot = 'Video title';
const videoDurationSlot = 'Video duration';
const captionSlot = 'Image caption';
const imageSrcValue = 'visitscotland';
const youtubeId = '123456';

jest.mock('@/utils/svg-context');
jest.mock('@/stores/video.store.ts');
jest.mock('@/utils/required-cookies-data');

function mountOptions(propsData) {
    return {
        slots: {
            'toggle-icon': toggleIconSlot,
            'img-caption': captionSlot,
            'video-no-js-alert': alertSlot,
            'video-title': videoTitleSlot,
            'video-duration': videoDurationSlot,
            default: defaultSlotText,
        },
        propsData: {
            ...propsData,
            imageSrc: imageSrcValue,
            isVideo: true,
            playButtonText: 'Play video',
            videoId: youtubeId,
            toggleButtonText: 'Toggle caption',
        },
    };
};

const factoryShallowMount = (propsData) => shallowMount(
    VsImageWithCaption,
    mountOptions(propsData),
);

const factoryMount = (propsData) => mount(
    VsImageWithCaption,
    mountOptions(propsData),
);

describe('VsImageWithCaption', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('should render a component with the data-test attribute `vs-image-with-caption`', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.attributes('data-test')).toBe('vs-image-with-caption');
    });

    it('hides caption by default', async() => {
        const wrapper = factoryShallowMount();
        const captionWrapper = wrapper.find('[data-test="vs-image-with-caption"]').find('.vs-image-with-caption__caption-wrapper');

        expect(captionWrapper.classes('d-block')).toBe(false);
    });

    describe(':props', () => {
        it('should set correct class if `closedDefaultCaption` is true', () => {
            const wrapper = factoryShallowMount({
                closedDefaultCaption: true,
            });
            const imageWithCaption = wrapper.find('[data-test="vs-image-with-caption"]');

            expect(imageWithCaption.classes('vs-image-with-caption--closed-default')).toBe(true);
        });

        it('should set correct classes if `isHeroImage` is true', () => {
            const wrapper = factoryMount({
                isHeroImage: true,
            });
            const imageWithCaption = wrapper.find('[data-test="vs-image-with-caption"]');
            const captionWrapper = wrapper.find('[data-test="vs-image-with-caption"]').find('.vs-image-with-caption__caption-wrapper');

            expect(imageWithCaption.classes('vs-image-with-caption--hero')).toBe(true);
            expect(captionWrapper.classes('container')).toBe(true);
        });

        it('should set correct classes if `mobileOverlap` is true', () => {
            const wrapper = factoryShallowMount({
                mobileOverlap: true,
            });
            const imageWrapper = wrapper.find('[data-test="vs-image-with-caption"]').find('.vs-image-with-caption__image-wrapper');

            expect(imageWrapper.classes('vs-image-with-caption--overlapped')).toBe(true);
        });

        it('should render correct `toggleButtonText` on the toggle button', () => {
            const wrapper = factoryShallowMount();
            const toggleCaptionBtn = wrapper.find('vs-toggle-button-stub');

            expect(toggleCaptionBtn.text()).toContain('Toggle caption');
        });

        it('should add a Video Caption component if `isVideo` is true', async() => {
            const wrapper = factoryShallowMount({
                propsData: {
                    isVideo: true,
                },
            });

            expect(wrapper.find('.vs-image-with-caption__video-caption-wrapper').exists()).toBe(true);
        });

        it('should pass the correct videoID via prop to the video caption component', () => {
            const wrapper = factoryShallowMount();
            const videoCaption = wrapper.find('vs-video-caption-stub');

            expect(videoCaption.html()).toContain(youtubeId);
        });
    });

    describe(':slots', () => {
        it('renders content in the `default` slot', () => {
            const wrapper = factoryShallowMount();
            const imageWrapper = wrapper.find('[data-test="vs-image-with-caption"]').find('.vs-image-with-caption__image-wrapper');

            expect(imageWrapper.text()).toContain(defaultSlotText);
        });

        it('renders content in the `imgCaption` slot', () => {
            const wrapper = factoryShallowMount();
            const captionWrapper = wrapper.find('[data-test="vs-image-with-caption"]').find('.vs-image-with-caption__caption-wrapper');

            expect(captionWrapper.text()).toContain(captionSlot);
        });

        it('renders content in the `video-title` slot', () => {
            const wrapper = factoryMount();

            const videoCaptionStub = wrapper.findComponent({
                name: 'VsVideoCaption',
            });
            expect(videoCaptionStub.text()).toContain(videoTitleSlot);
        });
    });

    describe(':methods', () => {
        it(':toggleCaption - caption is shown when toggle method is called', async() => {
            const wrapper = factoryShallowMount();
            wrapper.setData({
                showCaption: false,
            });
            wrapper.vm.toggleCaption();
            await wrapper.vm.$nextTick();

            expect(wrapper.vm.showCaption).toBe(true);
        });

        it(':toggleCaption - caption is hidden when toggle method is called twice', async() => {
            const wrapper = factoryShallowMount();
            const captionWrapper = wrapper.find('[data-test="vs-image-with-caption"]').find('.vs-image-with-caption__caption-wrapper');
            wrapper.vm.toggleCaption();
            wrapper.vm.toggleCaption();

            await wrapper.vm.$nextTick();

            expect(captionWrapper.classes('d-block')).toBe(false);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
