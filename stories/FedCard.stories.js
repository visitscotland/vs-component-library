import VsFedCard from '@/components/federated-search/components/FedCard.vue';

export default {
    component: VsFedCard,
    title: 'Components/Custom components/Fed Card',
    decorators: [() => ({
        template: '<div style="max-width:272px;"><story /></div>',
    })],
};

const Template = (args) => ({
    components: {
        VsFedCard,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <div>
            <VsFedCard v-bind="args">
                <template #fed-card-header v-if="args.heading">
                    {{ args.heading }}
                </template>
                <template #fed-card-description v-if="args.description">
                    {{ args.description }}
                </template>
                <template #fed-card-location v-if="args.location">
                    {{ args.location }}
                </template>
                <template #fed-card-link-label>Visit website</template>
            </VsFedCard>
        </div>
    `,
});

export const Default = Template.bind();

Default.args = {
    heading: 'Tentsmuir Forest',
    description: 'Discover a massive sand dune system, one of Scotland\'s most dynamic coastlines, a pine-scented forest and wonderful wildlife including seals at Tentsmuir National Nature Reserve. It\'s an ideal place for walking and off-road cycling and a picnic on the beach. Collect seashells and look out for red squirrels and dragonflies too.',
    link: 'https://forestryandland.gov.scot/visit/tentsmuir',
    linkType: 'EXTERNAL',
    imgSrc: 'https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2024/08/23/tentsmuir-forest?size=lg',
    location: 'Fife',
};

export const Event = Template.bind();

Event.args = {
    heading: 'The Dundee Hooley',
    description: 'This event boasts free family fun for all with street theatre, live music, and a sparkling torchlight procession. Take part in the lantern making workshops, the lively ceilidh at the end of the night, and the wee ones can enjoy face painting and fire performances too.',
    link: 'https://www.dundee.com/dundee-hooley',
    linkType: 'EXTERNAL',
    imgSrc: 'https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2023/05/11/scottish-ceilidh?size=lg',
    location: 'Dundee City',
    price: 'Free',
    date: '30 Nov 2025',
};
