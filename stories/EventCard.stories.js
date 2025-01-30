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

                <template v-slot:event-card-header-date> {{ args.headerDate }} </template>

                <template v-slot:event-card-content-description> {{ args.description }} </template>

                <template v-slot:event-card-content-details>
                    ${args.details}
                </template>

                <template 
                    v-slot:event-card-content-ttdetails
                    v-if=args.ttdetails    
                >
                    ${args.ttdetails}
                </template>
                
                <template>
                    <VsButton href="{{ctaLink}}">
                        Find out more
                    </VsButton>
                </template>
        </VsEventCard>
    `,
});

const base = {
    title: 'VisitScotland Connect 2025',
    headerDate: '09 - 10 Apr, 2025',
    description: 'VisitScotland Connect is Scotland\'s flagship travel trade event which aims to grow Scotland\'s share of global travel in a sustainable way. The event provides an ideal platform for domestic and international buyers to explore new business opportunities and connect with Scottish tourism suppliers on the ground in Scotland.',
    price: 1950.00,
    currency: 'GBP',
    vat: true,
    startDate: '09/04/2025',
    endDate: '10/10/2025',
    startTime: '09:00 BST',
    endTime: '17:00 BST',
    venue: ' P&J Live, Aberdeen',
    organiser: ' VisitScotland',
    details: '<li><label for="time">Time:</label><p class="vs-event-card__content-details-data" id="time">{{ args.startTime }}</p></li><li><label for="price">Price:</label><p class="vs-event-card__content-details-data" id="price"> {{ args.price }} {{ args.currency }} + VAT</p></li><li><label for="venue">Location:</label><p class="vs-event-card__content-details-data" id="venue"> {{ args.venue }}</p></li><li><label for="organiser">Organiser:</label><p class="vs-event-card__content-details-data" id="organiser">{{ args.organiser }}</p></li>',
    ctaLink: 'https://visitscotland.eventsair.com/visitscotlandconnect/',
};

export const Default = Template.bind({
});

Default.args = base;

export const TravelTradeEvent = Template.bind({
});

TravelTradeEvent.args = {
    ...base,
    details: '<li><label for="time">Time:</label><p class="vs-event-card__content-details-data" id="time"> {{ args.startTime }}</p></li><li><label for="price">Price:</label><p class="vs-event-card__content-details-data" id="price"> {{ args.price }} {{ args.currency }} + VAT</p></li><li><label for="venue">Location:</label><p class="vs-event-card__content-details-data" id="venue"> {{ args.venue }}</p></li>',
    contact: 'connect@visitscotland.com',
    registrationDeadline: '31/03/2025',
    ttdetails: '<li><label for="regDeadline">Registration Deadline: </label><p class="vs-event-card__content-details-data" id="regDeadline"> {{ args.registrationDeadline }}</p></li><li><label for="organiser">Organiser: </label><p class="vs-event-card__content-details-data" id="organiser">{{ args.organiser }}</p></li><li><label for="contact">Contact: </label><p class="vs-event-card__content-details-data" id="contact"> {{ args.contact }}</p></li>',
};
