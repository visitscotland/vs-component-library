import VsGrid from '@/components/grid/Container.vue';
import VsRow from '@/components/grid/Row.vue';
import VsCol from '@/components/grid/Col.vue';
import VsEventCard from '@/components/event-card/EventCard.vue';
import VsList from '@/components/list/List.vue';

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
        VsList,
        VsCol,
        VsRow,
        VsGrid,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsEventCard v-bind="args">
                <template v-slot:event-card-header> {{args.title}} </template>

                <template v-slot:event-card-date> {{ args.dates }} </template>

                <template v-slot:event-card-content>

                    <p class="mb-050"> {{ args.description }} </p>

                    <VsRow class="mb-050">
                        <VsCol
                            sm="12"
                            md="4"
                        >
                            <VsList
                                unstyled
                            >
                                <li>
                                    <label for="time">Time:</label>
                                    <span class="vs-event-card__details-data" id="time"> {{ args.times }}</span>
                                </li>
                                <li>
                                    <label for="price">Price:</label>
                                    <span class="vs-event-card__details-data" id="price"> {{ args.price }}</span>
                                </li>
                                <li>
                                    <label for="location">Location:</label>
                                    <span class="vs-event-card__details-data" id="location"> {{ args.location }}</span>
                                </li>
                                <li v-if="!(args.registrationDeadline && args.contact)">
                                    <label for="organizer">Organiser:</label>
                                    <span class="vs-event-card__details-data" id="organizer"> {{ args.organizer }}</span>
                                </li>
                                </VsList>
                        </VsCol>
                        <VsCol
                            sm="12"
                            md="6"
                        >
                            <VsList
                                unstyled
                            >
                                <li v-if="args.registrationDeadline">
                                    <label for="registrationDeadline">Registration Deadline:</label>
                                    <span class="vs-event-card__details-data" id="registrationDeadline"> {{ args.registrationDeadline }}</span>
                                </li>
                                <li v-if="(args.registrationDeadline && args.contact)">
                                    <label for="organizer">Organiser:</label>
                                    <span class="vs-event-card__details-data" id="organizer"> {{ args.organizer }}</span>
                                </li>
                                <li v-if="args.contact">
                                    <label for="contact">Contact:</label>
                                    <span class="vs-event-card__details-data" id="contact"> {{ args.contact }}</span>
                                </li>
                            </VsList>
                        </VsCol>
                    </VsRow>
                </template>
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
    ctaIcon: 'external-link',
};

export const Default = Template.bind({
});

Default.args = base;

export const TravelTradeEvent = Template.bind({
});

TravelTradeEvent.args = {
    ...base,
    contact: 'connect@visitscotland.com',
    registrationDeadline: '31/03/2025',
};
