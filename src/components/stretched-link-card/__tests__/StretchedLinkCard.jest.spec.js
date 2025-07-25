import {
    config, shallowMount, mount,
} from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import { setActivePinia, createPinia } from 'pinia';
import VsStretchedLinkCard from '../StretchedLinkCard.vue';

config.global.renderStubDefaultSlot = true;

const imgUrl = 'https://cimg.visitscotland.com/cms-images/attractions/outlander/claire-standing-stones-craigh-na-dun-outlander';

jest.mock('@/stores/video.store.ts');

function mountOptions(slotsData) {
    return {
        propsData: {
            link: 'https://www.visitscotland.com/',
            type: 'external',
            imgSrc: imgUrl,
            imgAlt: 'Image alt',
            disabled: false,
        },
        slots: {
            'stretched-card-header': 'Stretched link header',
            'stretched-card-category': 'Stretched link category',
            'stretched-card-content': 'Stretched link content',
            'stretched-card-badges': 'Stretched badges content',
        },
        ...slotsData,
    };
};

const factoryShallowMount = (slotsData) => shallowMount(
    VsStretchedLinkCard,
    mountOptions(slotsData),
);

const factoryMount = (slotsData) => mount(
    VsStretchedLinkCard,
    mountOptions(slotsData),
);

describe('VsStretchedLinkCard', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('should render an element with class stretched-link', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.find('[data-test="vs-stretched-link"]').exists()).toBe(true);
    });

    describe(':props', () => {
        it('should render the component with the link prop passed as the stretched link href', async() => {
            const wrapper = factoryShallowMount();

            expect(wrapper.find('[data-test="vs-stretched-link"]').attributes().href).toBe('https://www.visitscotland.com/');
        });

        it('should not render an image if no src attribute is set', async() => {
            const wrapper = factoryShallowMount();

            wrapper.setProps({
                imgSrc: '',
            });

            await expect(wrapper.find('[data-test="vs-stretched-link__img"]').exists()).toBe(false);
        });

        it('should render the correct headingStyle', async() => {
            const wrapper = factoryMount();

            wrapper.setProps({
                headingStyle: 'heading-xxs',
            });

            wrapper.setData({
                requiredCookies: [],
            });

            await wrapper.vm.$nextTick();

            const heading = wrapper.find('[data-test="vs-stretched-link-card__title"]');

            expect(heading.classes()).toContain('vs-heading--heading-xxs');
        });

        it('should render a video play button if a videoId is set', async() => {
            const wrapper = factoryMount();

            wrapper.setProps({
                videoId: '123456',
            });

            wrapper.setData({
                requiredCookies: [],
            });

            await wrapper.vm.$nextTick();

            expect(wrapper.find('[data-test="vs-stretched-link-card__video-button"]').exists()).toBe(true);
        });

        it('should render `videoBtnText` if set and a videoId is present', async() => {
            const videoBtnText = 'Play Video';
            const wrapper = factoryMount();

            wrapper.setProps({
                videoId: '123456',
                videoBtnText,
            });

            wrapper.setData({
                requiredCookies: [],
            });

            await wrapper.vm.$nextTick();

            expect(wrapper.html()).toContain(videoBtnText);
        });

        it('should render a image warning component if `errorType` is `image`', async() => {
            const wrapper = factoryShallowMount();

            wrapper.setProps({
                videoId: '123456',
                errorMessage: 'Error',
                errorType: 'image',
            });

            wrapper.setData({
                cookiesInitStatus: 'error',
            });

            await wrapper.vm.$nextTick();

            expect(wrapper.find('[data-test="vs-stretched-link-card__image-warning"]').exists()).toBe(true);
        });

        it('should render a full warning component if `errorType` is `full`', async() => {
            const wrapper = factoryShallowMount();

            await wrapper.setProps({
                videoId: '123456',
                videoBtnText: 'Play',
                errorType: 'full',
            });

            expect(wrapper.find('[data-test="vs-stretched-link-card__full-warning"]').exists()).toBe(true);
        });
    });

    describe(':slots', () => {
        it('renders content inserted in a stretchedCardCategory slot', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.find('[data-test="vs-stretched-link-card__category"]').text()).toBe('Stretched link category');
        });
        it('renders content inserted in a stretchedCardHeader slot', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.find('[data-test="vs-stretched-link"]').text()).toBe('Stretched link header');
        });
        it('renders content inserted in a stretchedCardContent slot', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.find('[data-test="vs-stretched-link-card__content"]').text()).toBe('Stretched link content');
        });
        it('should only render the link if stretchedCardLink slot content is supplied', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.find('[data-test="vs-stretched-link-card__link"]').exists()).toBe(false);
        });
        it('renders content inserted in a stretchedCardLink slot', async() => {
            const wrapper = factoryShallowMount({
                slots: {
                    'stretched-card-link': 'Stretched link link text',
                },
            });
            expect(wrapper.find('[data-test="vs-stretched-link-card__link"]').text()).toBe('Stretched link link text');
        });
        it('renders a link in the header if no stretchedCardLink is supplied', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.find('[data-test="vs-stretched-link-card__title"]').find('[data-test="vs-stretched-link"]').exists()).toBe(true);
        });
        it('does not render a link in the header if a stretchedCardLink slot content is supplied', () => {
            const wrapper = factoryShallowMount({
                slots: {
                    'stretched-card-header': 'Stretched link header',
                    'stretched-card-link': 'Stretched link link text',
                },
            });

            const headerElement = wrapper.find('[data-test="vs-stretched-link-card__title"]');
            expect(headerElement.find('vslink-stub').exists()).toBe(false);
        });

        it('renders content inserted in a stretched-card-badges slot', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.find('[data-test="vs-stretched-link-card__badges"]').text()).toBe('Stretched badges content');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
