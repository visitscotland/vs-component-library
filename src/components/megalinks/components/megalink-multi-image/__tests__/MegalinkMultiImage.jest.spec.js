import {
    config, shallowMount, mount,
} from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import { setActivePinia, createPinia } from 'pinia';
import VsMegalinkMultiImage from '../MegalinkMultiImage.vue';

config.global.renderStubDefaultSlot = true;

jest.mock('@/stores/video.store.ts');

const videoId = '12345';
const videoBtnText = 'Play Video';

const mountOptions = {
    propsData: {
        featured: true,
        lastFeatured: true,
        imgSrc: 'test',
        linkType: 'external',
        linkUrl: 'www.visitscotland.com',
        theme: 'grey',
        days: '3',
        daysLabel: 'days',
        transport: 'bus',
        transportName: 'Bus',
        videoId,
        videoBtnText,
    },
    slots: {
        'vs-multi-image-heading': 'Multi-image heading',
        'vs-multi-image-content': '<p>Multi-image content</p>',
    },
};

const factoryShallowMount = () => shallowMount(VsMegalinkMultiImage, mountOptions);

const factoryMount = () => mount(VsMegalinkMultiImage, mountOptions);

describe('VsMegalinkMultiImage', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    describe(':props', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = factoryShallowMount();
        });

        it('if the featured prop is true, it should render an element with class "megalink-multi-image--featured"', () => {
            expect(wrapper.find('[data-test="megalink-multi-image-featured"]').classes()).toContain('vs-megalink-multi-image-card--featured');
        });

        it('renders with a `megalink-multi-image--featured-last` class if the lastFeatured prop is true', () => {
            expect(wrapper.find('[data-test="megalink-multi-image-featured"]').classes()).toContain('vs-megalink-multi-image-card--featured-last');
        });

        it('renders the correct theme class', () => {
            expect(wrapper.find('[data-test="megalink-multi-image-featured"]').classes()).toContain('vs-megalink-multi-image-card--grey');
        });

        it('renders card panels if days and transport are provided', () => {
            const mountWrapper = factoryMount();

            expect(mountWrapper.find('[data-test="vs-itinerary-panels"]').exists()).toBe(true);
        });

        it('should accept a `videoId` property and pass it to the stretched-link-card', () => {
            const cardStub = wrapper.find('vs-stretched-link-card-stub');
            expect(cardStub.attributes().videoid).toBe(videoId);
        });

        it('should accept a `videoBtnText` property and pass it to the stretched-link-card', () => {
            const cardStub = wrapper.find('vs-stretched-link-card-stub');
            expect(cardStub.attributes().videobtntext).toBe(videoBtnText);
        });
    });

    describe(':slots', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = factoryMount();
        });

        it('renders content inserted in a vs-multi-image-heading slot', () => {
            expect(wrapper.find('[data-test="megalink-multi-image-card__title"]').text()).toBe('Multi-image heading');
        });

        it('renders content inserted in a vs-multi-image-content slot', () => {
            expect(wrapper.find('[data-test="megalink-multi-image-card__content"]').html()).toContain('<p>Multi-image content</p>');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
