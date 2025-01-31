import VsEventCard from '@/components/event-card/EventCard.vue';
import VsButton from '@/components/button/Button.vue';

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
        VsButton,
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
                        <p class="vs-event-card__content-details-data" id="time">{{ args.times }}</p>
                    </li>
                    <li>
                        <label for="price">Price:</label>
                        <p class="vs-event-card__content-details-data" id="price"> {{ args.price }}</p>
                    </li>
                    <li>
                        <label for="location">Location:</label>
                        <p class="vs-event-card__content-details-data" id="location"> {{ args.location }}</p>
                    </li>
                    <li v-if="!(args.registrationDeadline && args.contact)">
                        <label for="organizer">Organiser:</label>
                        <p class="vs-event-card__content-details-data" id="organizer">{{ args.organizer }}</p>
                    </li>
                </template>

                <template 
                    v-slot:event-card-content-ttdetails
                    v-if="(args.organizer && args.contact)"
                >
                    <li>
                        <label for="regDeadline">Registration Deadline: </label>
                        <p class="vs-event-card__content-details-data" id="regDeadline"> {{ args.registrationDeadline }}</p>
                    </li>
                    <li>
                        <label for="organizer">Organiser: </label>
                        <p class="vs-event-card__content-details-data" id="organizer">{{ args.organizer }}</p>
                    </li>
                    <li>
                        <label for="contact">Contact: </label>
                        <p class="vs-event-card__content-details-data" id="contact"> {{ args.contact }}</p>
                    </li>
                </template>
                
                <template v-slot:event-card-cta>
                    <VsButton 
                        href="${args.cta.link}"
                        icon="external-link"
                        icon-position="right"
                        icon-size="xs"
                        data-test="vs-event-card__cta"
                    >
                        ${args.cta.label}
                    </VsButton>
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
    cta: {
        label: 'Find out more',
        link: 'https://visitscotland.eventsair.com/visitscotlandconnect/',
        type: 'EXTERNAL',
    },
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
