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

const defaultProps = {
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
};

const factoryMount = () => mount(VsMegalinkLinkList, {
    propsData: {
        ...defaultProps,
    },
    slots: {
        'vs-link-list-heading': slotHeading,
        'vs-link-list-content': slotContent,
    },
});

const factoryShallowMount = () => shallowMount(VsMegalinkLinkList, {
    propsData: {
        ...defaultProps,
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
        it('should not render badges on a bsh homepage', async() => {
            const wrapper = factoryShallowMount();

            await wrapper.setProps({
                businessSupport: true,
                isHomePage: true,
            });

            const card = wrapper.findComponent({
                name: 'VsStretchedLinkCard',
            });

            expect(card.find('[data-test="vs-stretched-link-card__badges"]').exists()).toBe(false);
        });

        it('should not render images when viewport is <=sm on a bsh homepage)', async() => {
            const wrapper = factoryShallowMount();

            await wrapper.setProps({
                businessSupport: true,
                isHomePage: true,
            });

            wrapper.innerWidth = 500;

            const card = wrapper.findComponent({
                name: 'VsStretchedLinkCard',
            });

            expect(card.find('[data-test="vs-stretched-link-card__img"]').exists()).toBe(false);
        });

        it('should not render images when on an internal bsh page', async() => {
            const wrapper = factoryShallowMount();

            await wrapper.setProps({
                businessSupport: true,
                isHomePage: false,
            });

            const card = wrapper.findComponent({
                name: 'VsStretchedLinkCard',
            });

            expect(card.find('[data-test="vs-stretched-link-card__img"]').exists()).toBe(false);
        });

        it('should set megalink class to bsh variant when bsh prop is true', async() => {
            const wrapper = factoryMount();

            await wrapper.setProps({
                businessSupport: true,
            });

            const megalinkList = wrapper.find('div[data-test="vs-megalink-link-list"]');

            expect(megalinkList.classes()).toContain('vs-megalink-link-list--business-support');
        });

        it('should set megalink to bsh internal page variant when bsh prop is true and homepage prop is false', async() => {
            const wrapper = factoryMount();

            await wrapper.setProps({
                businessSupport: true,
            });

            const megalinkList = wrapper.find('div[data-test="vs-megalink-link-list"]');

            expect(megalinkList.classes()).toContain('vs-megalink-link-list--internal-page');
        });

        it('shouldnt set megalink to bsh internal page variant when bsh and homepage props are true', async() => {
            const wrapper = factoryMount();

            await wrapper.setProps({
                businessSupport: true,
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
