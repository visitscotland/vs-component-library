import { config, mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import { setActivePinia, createPinia } from 'pinia';
import VsMegalinkLinkList from '../MegalinkLinkList.vue';

const videoId = '12345';
const videoBtnText = 'Play Video';

config.global.renderStubDefaultSlot = true;

const factoryMount = () => mount(VsMegalinkLinkList, {
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
        'vs-link-list-heading': 'Megalink heading',
        'vs-link-list-content': 'Megalink content',
    },
});

describe('VsMegalinkLinkList', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    describe(':props', () => {
        it('renders the correct theme class', () => {
            const wrapper = factoryMount();
            expect(wrapper.find('.vs-megalink-link-list--dark').exists()).toBe(true);
        });

        it('should accept a `videoId` property and pass it to the stretched-link-card', () => {
            const wrapper = factoryMount();

            const card = wrapper.findComponent({
                name: 'VsStretchedLinkCard',
            });

            expect(card.props('videoId')).toBe(videoId);
        });

        it('should accept a `videoBtnText` property and pass it to the stretched-link-card', () => {
            const wrapper = factoryMount();

            const card = wrapper.findComponent({
                name: 'VsStretchedLinkCard',
            });

            expect(card.props('videoBtnText')).toBe(videoBtnText);
        });
    });
    describe(':slots', () => {
        it('renders content inserted in a vs-link-list-heading slot', () => {
            const wrapper = factoryMount({
                slots: {
                    'vs-link-list-heading': 'Multi-image heading',
                },
            });

            expect(wrapper.find('[data-test="megalink-link-list__title"]').text()).toBe('Multi-image heading');
        });

        it('renders content inserted in a vs-link-list-content slot', () => {
            const wrapper = factoryMount({
                slots: {
                    'vs-link-list-content': '<p>Multi-image content</p>',
                },
            });

            expect(wrapper.find('[data-test="megalink-link-list__content"]').html()).toContain('<p>Multi-image content</p>');
        });
        it('renders card panels if days and transport are provided', () => {
            const wrapper = factoryMount();

            expect(wrapper.find('[data-test="vs-itinerary-panels"]').exists()).toBe(true);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
