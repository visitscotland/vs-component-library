import VsVisualList from '@/components/visual-list/VisualList.vue';
import VsVisualListItem from '@/components/visual-list/components/VisualListItem.vue';

export default {
    component: VsVisualList,
    title: 'VisualList',
    tags: ['autodocs'],
    argTypes: {
    },
};

const Template = (args) => ({
    components: {
        VsVisualList,
        VsVisualListItem,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsVisualList>
            <template v-slot:title>
                {{ args.title }}
            </template>
        
            <VsVisualListItem
                v-for="(item, index) in args.listItems"
                :key="index"
            >
                <template v-slot:item-heading>
                    {{ item.heading }}
                </template>

                <div v-html="item.content" />
            </VsVisualListItem>
        </VsVisualList>
    `,
});

const base = {
    title: 'Critical factors for younger people\'s travel journeys are',
    listItems: [
        {
            heading: 'New',
            imgSrc: 'https://placehold.co/600x400',
            content: `
                <p>Originality for young travellers means providing new opportunities or reviving and refreshing existing traditions and brands so that young travellers feel they are discovering them for the first time.</p>
            `,
        },
        {
            heading: 'Value for money',
            content: `
                <p>Affordability is key, particularly when income may not match the desire for new experiences. Young travellers are adept at seeking out deals and signing up to offers that keep them "in the know".</p>
                <p>Those without children can be agile and spontaneous. They're able to take advantage of last-minute opportunities.</p>
            `,
        },
        {
            heading: 'Braggable',
            content: `
                <p>Being seen as "ahead of the curve" is important to young travellers, allowing them to feel like a leader rather than a follower.</p>
                <p>Reframing an experience (staying in a log cabin rather than a hotel for example) means "bragging rights" are rooted in a genuinely differentiated experience rather than simply ticking off a destination.</p>
            `,
        },
        {
            heading: 'Unique',
            content: `
                <p>Younger people want a deeper level of involvement when they travel.</p>
                <p>They often seek out experiences that are unique to the destination. These may not be particularly unusual, but are different to normal behaviour and different from previous (and future) holidays.</p>
            `,
        },
    ],
};

export const Default = Template.bind({
});

Default.args = base;
