import { config, mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsEventCard from '../EventCard.vue';

config.global.renderStubDefaultSlot = true;

function mountOptions(slotsData) {
    return {
        slots: {
            'event-card-header': 'Event card header',
            'event-card-date': 'EC Date',
            'event-card-content': 'Event card content',
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

        it('should render a date', () => {
            const wrapper = factoryMount();

            const card = wrapper.findComponent({
                name: 'VsEventCard',
            });

            expect(card.find('[data-test="vs-event-card__date"]').exists()).toBe(true);
        });

        it('should render a slot for content when filled', () => {
            const wrapper = factoryMount();

            const card = wrapper.findComponent({
                name: 'VsEventCard',
            });

            expect(card.find('[data-test="vs-event-card__content"]').exists()).toBe(true);
        });
    });

    describe(':props', () => {
        it('should render a cta button when props are passed', async() => {
            const wrapper = factoryMount();

            wrapper.setProps({
                ctaHref: 'https://www.google.com',
                ctaLabel: 'Find out more',
            });

            await wrapper.vm.$nextTick();

            const card = wrapper.findComponent({
                name: 'VsEventCard',
            });

            expect(card.find('[data-test="vs-event-card__cta"]').exists()).toBe(true);
        });

        it('should not render a cta button when no props are passed', () => {
            const wrapper = factoryMount();

            const card = wrapper.findComponent({
                name: 'VsEventCard',
            });

            expect(card.find('[data-test="vs-event-card__cta"]').exists()).toBe(false);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
