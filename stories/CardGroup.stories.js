import VsCardGroup from '@/components/card-group/CardGroup.vue';
import VsCard from '@/components/card/Card.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsImg from '@/components/img/Img.vue';
import VsLink from '@/components/link/Link.vue';
import VsButton from '@/components/button/Button.vue';
import VsBody from '@/components/body/Body.vue';

export default {
    component: VsCardGroup,
    title: 'CardGroup',
    argTypes: {

    },
};

const Template = (args) => ({
    components: {
        VsCardGroup,
        VsCard,
        VsHeading,
        VsImg,
        VsLink,
        VsButton,
        VsBody,
    },
    setup() {
        const cards = [
            {
                image: './fixtures/megalinks/ashton-lane-wide.jpg',
                title: '11 off-the-beaten-track holiday destinations',
                description: 'Escape the tourist trails with out best off-the-beaten-track holiday ideas',
                link: '#',
            },
            {
                image: './fixtures/megalinks/glentress-forest.jpg',
                title: 'Walking in Scotland',
                description: 'Walking in Scotland means mighty mountains to conquer...',
                link: '#',
            },
            {
                image: './fixtures/megalinks/grand-hotel.jpg',
                title: 'Family holidays in Scotland',
                description: 'You\'ll wish your family holiday in Scotland could last forever.',
                link: '#',
            },
            {
                image: './fixtures/megalinks/wellness.jpg',
                title: 'Walking in Scotland',
                description: 'Walking in Scotland means mighty mountains to conquer...',
                link: '#',
            },
            {
                image: './fixtures/megalinks/outlander-wedding.jpg',
                title: 'Family holidays in Scotland',
                description: 'You\'ll wish your family holiday in Scotland could last forever.',
                link: '#',
            },
            {
                image: './fixtures/megalinks/illustrated-map-of-scotland.jpg',
                title: '11 off-the-beaten-track holiday destinations',
                description: 'Escape the tourist trails with out best off-the-beaten-track holiday ideas',
                link: '#',
            },
        ];

        return {
            args,
            cards,
        };
    },
    template: `
    <VsCardGroup 
        v-bind="args"
    >
        <VsCard v-for="(card, index) in cards" :key="index">
            <template #vs-card-header>
                <VsImg
                    :src="card.image"
                    class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                />
            </template>

            <template #vs-card-body>
                <VsHeading
                    level="3"
                    heading-style="heading-s"
                >
                    <VsLink
                        :href="card.link"
                        class="stretched-link"
                        variant="secondary"
                    >
                        {{ card.title }}
                    </VsLink>
                </VsHeading>

                <VsBody>
                    {{ card.description }}
                </VsBody>
            </template>
        </VsCard>
    </VsCardGroup>
    `,
});

export const Grid3 = Template.bind({
});

export const Grid4 = Template.bind({
});

Grid4.args = {
    cardsPerRow: 4,
};

export const ScrollSnap = Template.bind({
});

ScrollSnap.args = {
    scrollSnap: true,
};

ScrollSnap.parameters = {
    viewport: {
        defaultViewport: 'mobile1',
    },
};
