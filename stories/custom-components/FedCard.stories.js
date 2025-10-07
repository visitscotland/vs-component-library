import VsFedCard from '@/custom-components/federated-search/components/FedCard.vue';

export default {
    component: VsFedCard,
    title: 'Custom components/Fed Card',
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
    fromText: 'From',
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

export const NoImageOrPrice = Template.bind();

NoImageOrPrice.args = {
    heading: 'Charity Garden Opening - Cambo Gardens',
    description: 'Best known for snowdrops (mail order February), but exciting throughout the year, this Victorian walled garden features constantly evolving, magnificent herbaceous borders featuring rare and unusual plants, many of which are propagated for sale at Cambo. The garden is renowned too for its tulips and a stunning rose collection. Outside the main garden an inspiring Winter Garden and North American Prairie continue to be developed. Woodland walks to the sea.',
    link: 'https://scotlandsgardens.org/cambo-house/',
    linkType: 'EXTERNAL',
    location: 'Kingsbarns, Fife',
    date: '24 Sept - 31 Dec 2025',
};
