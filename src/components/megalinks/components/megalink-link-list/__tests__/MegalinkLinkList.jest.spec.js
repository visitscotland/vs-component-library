import {
    config,
    mount,
    shallowMount,
} from '@vue/test-utils';
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
        transport: 'fa-regular fa-bus',
        transportName: 'Bus',
        videoId,
        videoBtnText,
    },
    slots: {
        'vs-link-list-heading': slotHeading,
        'vs-link-list-content': slotContent,
    },
});

const bshMount = () => mount(VsMegalinkLinkList, {
    propsData: {
        featured: true,
        imgSrc: 'test',
        linkType: 'external',
        linkUrl: 'www.visitscotland.com',
        days: '3',
        daysLabel: 'days',
        transport: 'fa-regular fa-bus',
        transportName: 'Bus',
        videoId,
        videoBtnText,
        businessSupport: true,
        isHomePage: false,
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
    });

    describe(':businessSupportHub', () => {
        it('renders content inserted into a badge slot', () => {
            const wrapper = bshMount();

            const card = wrapper.findComponent({
                name: 'VsStretchedLinkCard',
            });

            expect(card.find('[data-test="vs-stretched-link-card__badges"]').exists()).toBe(true);
        });

        it('shouldnt render badges on a bsh homepage)', () => {
            const wrapper = shallowMount(VsMegalinkLinkList, {
                bshMount,
                propsData: {
                    isHomePage: true,
                },
            });

            const card = wrapper.findComponent({
                name: 'VsStretchedLinkCard',
            });

            expect(card.find('[data-test="vs-stretched-link-card__badges"]').exists()).toBe(false);
        });

        it('shouldnt render images when viewport is <=sm on a bsh homepage)', () => {
            const wrapper = shallowMount(VsMegalinkLinkList, {
                bshMount,
                propsData: {
                    isHomePage: true,
                },
            });

            wrapper.innerWidth = 500;

            const card = wrapper.findComponent({
                name: 'VsStretchedLinkCard',
            });

            expect(card.find('[data-test="vs-stretched-link-card__img"]').exists()).toBe(false);
        });

        it('shouldnt render images when on an internal bsh page)', () => {
            const wrapper = shallowMount(VsMegalinkLinkList, {
                bshMount,
                propsData: {
                    isHomePage: false,
                },
            });

            const card = wrapper.findComponent({
                name: 'VsStretchedLinkCard',
            });

            expect(card.find('[data-test="vs-stretched-link-card__img"]').exists()).toBe(false);
        });

        it('should set megalink class to bsh variant when bsh prop is true', () => {
            const wrapper = bshMount();

            const megalinkList = wrapper.find('div[data-test="vs-megalink-link-list"]');

            expect(megalinkList.classes()).toContain('vs-megalink-link-list--business-support');
        });

        it('should set megalink to bsh internal page variant when bsh prop is true and homepage prop is false', () => {
            const wrapper = bshMount();

            const megalinkList = wrapper.find('div[data-test="vs-megalink-link-list"]');

            expect(megalinkList.classes()).toContain('vs-megalink-link-list--internal-page');
        });

        it('shouldnt set megalink to bsh internal page variant when bsh and homepage props are true', async() => {
            const wrapper = bshMount();

            await wrapper.setProps({
                isHomePage: true,
            });

            const megalinkList = wrapper.find('div[data-test="vs-megalink-link-list"]');

            expect(megalinkList.classes()).toContain('vs-megalink-link-list--business-support');
            expect(megalinkList.classes()).not.toContain('vs-megalink-link-list--internal-page');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
