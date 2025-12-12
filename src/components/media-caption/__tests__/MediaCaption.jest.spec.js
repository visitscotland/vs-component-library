import { config, shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsMediaCaption from '../MediaCaption.vue';

config.global.renderStubDefaultSlot = true;

const mockVideoStore = {
    videos: {
        'test-video': {
            videoDurationMsg: '2:30',
        },
    },
};

jest.mock('@/stores/video.store', () => ({
    __esModule: true,
    default: () => mockVideoStore,
}));

const factoryShallowMount = (propsData, slots) => shallowMount(VsMediaCaption, {
    propsData: {
        ...propsData,
    },
    slots: {
        ...slots,
    },
});

describe('VsMediaCaption', () => {
    it('should render a div with correct class and data-test attribute', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.element.tagName).toBe('DIV');
        expect(wrapper.classes('vs-media-caption')).toBe(true);
        expect(wrapper.attributes('data-test')).toBe('vs-media-caption');
    });

    describe(':slots', () => {
        it('should render caption slot when provided', () => {
            const wrapper = factoryShallowMount(null, {
                caption: 'Test caption content',
            });

            const captionElement = wrapper.find('.vs-media-caption__image-caption');
            expect(captionElement.exists()).toBe(true);
            expect(captionElement.text()).toBe('Test caption content');
        });

        it('should not render caption element when slot is not provided', () => {
            const wrapper = factoryShallowMount();

            const captionElement = wrapper.find('.vs-media-caption__image-caption');
            expect(captionElement.exists()).toBe(false);
        });

        it('should render credit slot when provided and no videoId', () => {
            const wrapper = factoryShallowMount(null, {
                credit: 'Test credit content',
            });

            const creditElement = wrapper.find('.vs-media-caption__image-credit');
            expect(creditElement.exists()).toBe(true);
            expect(creditElement.text()).toBe('Test credit content');
        });

        it('should not render credit slot when videoId is provided', () => {
            const wrapper = factoryShallowMount({
                videoId: 'test-video',
            }, {
                credit: 'Test credit content',
            });

            const creditElement = wrapper.find('.vs-media-caption__image-credit');
            expect(creditElement.text()).not.toContain('Test credit content');
        });
    });

    describe(':props', () => {
        it('should display video duration when videoId is provided', () => {
            const wrapper = factoryShallowMount({
                videoId: 'test-video',
            });

            const creditElement = wrapper.find('.vs-media-caption__image-credit');
            expect(creditElement.exists()).toBe(true);
            expect(creditElement.text()).toBe('2:30');
        });

        it('should not display video duration when videoId has no details', () => {
            const wrapper = factoryShallowMount({
                videoId: 'non-existent-video',
            });

            const creditElement = wrapper.find('.vs-media-caption__image-credit');
            expect(creditElement.text()).toBe('');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount(null, {
                caption: 'Test caption',
                credit: 'Test credit',
            });
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
