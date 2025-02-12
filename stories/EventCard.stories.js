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

                    <p class="mb-025"> {{ args.description }} </p>

                    <VsRow class="mb-025">
                        <VsCol
                            sm="12"
                            md="4"
                            
                        >
                            <dl class="mb-0">
                                <div v-if="args.times">
                                    <dt class="d-inline">Time: </dt>
                                    <dd class="d-inline"> {{ args.times }}</dd>
                                </div>
                                    
                                <div v-if="args.price">
                                    <dt class="d-inline">Price: </dt>
                                    <dd class="d-inline"> {{ args.price }}</dd>
                                </div>
                                    
                                <div v-if="args.location">
                                    <dt class="d-inline">Location: </dt>
                                    <dd class="d-inline"> {{ args.location }}</dd>
                                </div>                                
                                <div v-if="!(args.registrationDeadline && args.contact)">
                                    <dt class="d-inline">Organiser: </dt>
                                    <dd class="d-inline m-0"> {{ args.organizer }}</dd>
                                </div>
                            </dl>
                        </VsCol>
                        <VsCol
                            sm="12"
                            md="5"
                        >
                            <dl class="m-md-0">
                                <div v-if="args.registrationDeadline">
                                    <dt class="d-inline">Registration Deadline: </dt>
                                    <dd class="d-inline"> {{ args.registrationDeadline }}</dd>
                                </div>
                                <div v-if="(args.registrationDeadline && args.contact)">
                                    <dt class="d-inline">Organiser: </dt>
                                    <dd class="d-inline"> {{ args.organizer }}</dd>
                                </div>
                                <div v-if="args.contact">
                                    <dt class="d-inline">Contact: </dt>
                                    <dd class="d-inline m-0"> {{ args.contact }}</dd>
                                </div>
                            </dl>
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
