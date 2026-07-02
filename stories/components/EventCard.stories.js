import VsGrid from '@/components/grid/Container.vue';
import VsRow from '@/components/grid/Row.vue';
import VsCol from '@/components/grid/Col.vue';
import VsEventCard from '@/components/event-card/EventCard.vue';
import VsList from '@/components/list/List.vue';

export default {
    component: VsEventCard,
    title: 'Components/Deprecated/EventCard',
    decorators: [() => ({
        template: '<div style="max-width:900px;"><story /></div>',
    })],
    tags: ['deprecated'],
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
        <div style="background: #940f2c17; padding: 1rem; border: 1px solid #940F2C; margin-bottom: 1rem;">
            ⚠️ Deprecated: Use the new Card component and card patterns. This component will be removed in a future release.
            See the <a href="https://visitscotland.atlassian.net/wiki/spaces/DE/pages/1273397354/Event+Card+deprecated">Component migration docs.</a>
        </div>
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
                            <VsList unstyled class="m-md-0">
                                <li v-if="args.times">
                                    <span class="fw-bold">Time: </span> {{ args.times }}
                                </li>
                                <li v-if="args.price">
                                    <span class="fw-bold">Price: </span>{{ args.price }}
                                </li>
                                <li v-if="args.location">
                                    <span class="fw-bold">Location: </span>{{ args.location }}
                                </li>                                
                                <li v-if="!(args.registrationDeadline && args.contact)">
                                    <span class="fw-bold">Organiser: </span>{{ args.organizer }}
                                </li>
                            </VsList>
                        </VsCol>
                        <VsCol
                            sm="12"
                            md="5"
                        >
                            <VsList unstyled class="m-md-0">
                                <li v-if="args.registrationDeadline">
                                    <span class="fw-bold">Registration Deadline: </span>{{ args.registrationDeadline }}
                                </li>
                                <li v-if="(args.registrationDeadline && args.contact)">
                                    <span class="fw-bold">Organiser: </span>{{ args.organizer }}
                                </li>
                                <li v-if="args.contact">
                                    <span class="fw-bold">Contact: </span>{{ args.contact }}
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
    ctaIcon: 'fa-regular fa-square-arrow-up-right',
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
