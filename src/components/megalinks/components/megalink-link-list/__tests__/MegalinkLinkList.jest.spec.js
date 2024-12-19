import { config, mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import { setActivePinia, createPinia } from 'pinia';
import VsMegalinkLinkList from '../MegalinkLinkList.vue';

const videoId = '12345';
const videoBtnText = 'Play Video';
const slotHeading = 'Megalink heading';
const slotContent = 'Megalink content';

config.global.renderStubDefaultSlot = true;

const factoryMount = () => mount(VsMegalinkLinkList, {
    propsData: {
        featured: true,
        imgSrc: 'test',
        linkType: 'external',
        linkUrl: 'www.visitscotland.com',
        days: '3',
        daysLabel: 'days',
        transport: 'bus',
        transportName: 'Bus',
        videoId,
        videoBtnText,
        badges: ['How to'],
    },
    slots: {
        'vs-link-list-heading': slotHeading,
        'vs-link-list-content': slotContent,
    },
});

describe('VsMegalinkLinkList', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    describe(':props', () => {
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
            const wrapper = factoryMount();

            expect(wrapper.find('[data-test="megalink-link-list__title"]').text()).toBe(slotHeading);
        });

        it('renders content inserted in a vs-link-list-content slot', () => {
            const wrapper = factoryMount();

            expect(wrapper.find('[data-test="megalink-link-list__content"]').html()).toContain(slotContent);
        });
        it('renders card panels if days and transport are provided', () => {
            const wrapper = factoryMount();

            expect(wrapper.find('[data-test="vs-itinerary-panels"]').exists()).toBe(true);
        });
        it('renders content inseted into a badge slot', () => {
            const wrapper = factoryMount();

            expect(wrapper.find('[data-test="megalink-link-list__badge"]').exists()).toBe(true);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
