import { config, mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsEventCard from '../EventCard.vue';

config.global.renderStubDefaultSlot = true;

function mountOptions(slotsData) {
    return {
        propsData: {
            ctaHref: 'https://www.google.com',
            ctaLabel: 'Find out more',
        },
        slots: {
            'event-card-header': 'Event card header',
            'event-card-date': 'EC Date',
            'event-card-content-description': 'Event card description',
            'event-card-content-details': 'Event card details',
        },
        ...slotsData,
    };
};
const factoryMount = (slotsData) => mount(
    VsEventCard,
    mountOptions(slotsData),
);

describe('VsEventCard', () => {
    it('should render the card', () => {
        const wrapper = factoryMount();

        const card = wrapper.findComponent({
            name: 'VsEventCard',
        });

        expect(card.find('[data-test="vs-event-card"]').exists()).toBe(true);
    });

    describe(':slots', () => {
        it('should render a heading', () => {
            const wrapper = factoryMount();

            const card = wrapper.findComponent({
                name: 'VsEventCard',
            });

            expect(card.find('[data-test="vs-event-card__header"]').exists()).toBe(true);
        });

        it('should render a description', () => {
            const wrapper = factoryMount();

            const card = wrapper.findComponent({
                name: 'VsEventCard',
            });

            expect(card.find('[data-test="vs-event-card__description"]').exists()).toBe(true);
        });

        it('should render a details section', () => {
            const wrapper = factoryMount();

            const card = wrapper.findComponent({
                name: 'VsEventCard',
            });

            expect(card.find('[data-test="vs-event-card__event-details"]').exists()).toBe(true);
        });

        it('should render a cta button', () => {
            const wrapper = factoryMount();

            const card = wrapper.findComponent({
                name: 'VsEventCard',
            });

            expect(card.find('[data-test="vs-event-card__event-cta"]').exists()).toBe(true);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
