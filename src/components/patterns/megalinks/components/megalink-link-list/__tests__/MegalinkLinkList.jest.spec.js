import { config, mount } from '@vue/test-utils';
import VsMegalinkLinkList from '../MegalinkLinkList.vue';

config.global.renderStubDefaultSlot = true;

const videoId = '12345';
const videoBtnText = 'Play Video';

const mountConfig = {
    propsData: {
        featured: true,
        imgSrc: 'test',
        linkType: 'external',
        theme: 'dark',
        linkUrl: 'www.visitscotland.com',
        days: '3',
        daysLabel: 'days',
        transport: 'bus',
        transportName: 'Bus',
        videoId,
        videoBtnText,
    },
    slots: {
        'vs-link-list-heading': 'Multi-image heading',
        'vs-link-list-content': '<p>Multi-image content</p>',
    },
};

const factoryMount = () => mount(VsMegalinkLinkList, mountConfig);

describe('VsMegalinkLinkList', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = factoryMount();
    });

    describe(':props', () => {
        it('renders the correct theme class', () => {
            expect(wrapper.find('.vs-megalink-link-list--dark').exists()).toBe(true);
        });

        it('should accept a `videoId` property and pass it to the stretched-link-card', () => {
            const card = wrapper.findComponent({
                name: 'VsStretchedLinkCard',
            });

            expect(card.props('videoId')).toBe(videoId);
        });

        it('should accept a `videoBtnText` property and pass it to the stretched-link-card', () => {
            const card = wrapper.findComponent({
                name: 'VsStretchedLinkCard',
            });

            expect(card.props('videoBtnText')).toBe(videoBtnText);
        });
    });
    describe(':slots', () => {
        it('renders content inserted in a vs-link-list-heading slot', () => {
            expect(wrapper.find('[data-test="megalink-link-list__title"]').text()).toBe('Multi-image heading');
        });

        it('renders content inserted in a vs-link-list-content slot', () => {
            expect(wrapper.find('[data-test="megalink-link-list__content"]').html()).toContain('<p>Multi-image content</p>');
        });
        it('renders card panels if days and transport are provided', () => {
            expect(wrapper.find('[data-test="vs-itinerary-panels"]').exists()).toBe(true);
        });
    });
});
