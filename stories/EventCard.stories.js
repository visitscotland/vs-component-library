import VsEventCard from '@/components/event-card/EventCard.vue';

export default {
    component: VsEventCard,
    title: 'EventCard',
    decorators: [() => ({
        template: '<div style="max-width:900px;"><story /></div>',
    })],
};

const Template = (args) => ({
    components: {
        VsEventCard,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsEventCard v-bind="args">
                <template v-slot:event-card-header> {{args.title}} </template>

                <template v-slot:event-card-header-date> {{ args.dates }} </template>

                <template v-slot:event-card-content-description> {{ args.description }} </template>

                <template v-slot:event-card-content-details>
                    <li>
                        <label for="time">Time:</label>
                        <p class="vs-event-card__details-data" id="time">{{ args.times }}</p>
                    </li>
                    <li>
                        <label for="price">Price:</label>
                        <p class="vs-event-card__details-data" id="price"> {{ args.price }}</p>
                    </li>
                    <li>
                        <label for="location">Location:</label>
                        <p class="vs-event-card__details-data" id="location"> {{ args.location }}</p>
                    </li>
                    <li v-if="!(args.registrationDeadline && args.contact)">
                        <label for="organizer">Organiser:</label>
                        <p class="vs-event-card__details-data" id="organizer">{{ args.organizer }}</p>
                    </li>
                </template>
                <VsButton></VsButton>
        </VsEventCard>
    `,
});

const base = {
    title: 'VisitScotland Connect 2025',
    description: 'VisitScotland Connect is Scotland\'s flagship travel trade event which aims to grow Scotland\'s share of global travel in a sustainable way. The event provides an ideal platform for domestic and international buyers to explore new business opportunities and connect with Scottish tourism suppliers on the ground in Scotland.',
    dates: '09 - 10 Apr, 2025',
    times: '09:00 BST',
    price: '1950 GBP + VAT',
    location: ' P&J Live, Aberdeen',
    organizer: 'VisitScotland',
    ctaHref: 'https://visitscotland.eventsair.com/visitscotlandconnect/',
    ctaLabel: 'Find out more',
};

export const Default = Template.bind({
});

Default.args = base;
