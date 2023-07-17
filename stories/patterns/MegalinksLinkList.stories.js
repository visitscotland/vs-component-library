import VsMegalinks from '@/components/patterns/megalinks/Megalinks.vue';
import VsMegalinkLinkList from '@/components/patterns/megalinks/components/megalink-link-list/MegalinkLinkList.vue';
import VsImageWithCaption from '@/components/patterns/image-with-caption/ImageWithCaption.vue';
import VsCaption from '@/components/patterns/caption/Caption.vue';

import VsLink from '@/components/elements/link/Link.vue';
import VsCol from '@/components/elements/grid/Col.vue';

export default {
    component: VsMegalinks,
    title: 'Patterns/Megalinks/LinkList',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsMegalinks,
        VsMegalinkLinkList,
        VsImageWithCaption,
        VsLink,
        VsCol,
        VsCaption,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsMegalinks
            :title="args.mainTitle"
            class="vs-megalinks--single-image"
            :buttonLink="args.buttonLink"
            variant="link-list"
        >
            <template v-slot:vs-megalinks-button>
                {{ args.buttonText }}
            </template>

            <VsCol
                v-for="link in args.links"
                cols="12"
                md="6"
            >
                <vs-megalink-link-list
                    v-bind="link"
                >
                    <template v-slot:vs-link-list-heading>
                        {{ link.heading }}
                    </template>
                    <template v-slot:vs-link-list-content>
                        <p>{{ link.content }}</p>
                    </template>
                </vs-megalink-link-list>
            </VsCol>
        </VsMegalinks>
    `,
});

const base = {
    mainTitle: 'More inspiration for your next adventure',
    buttonLink: '#',
    buttonText: 'Get more inspiration',
    links: [
        {
            imgSrc: '/fixtures/megalinks/glentress-forest.jpg',
            imgAlt: 'Clycling in glentress forest',
            linkType: 'internal',
            linkUrl: '#',
            heading: '2023 UCI Cycling World Championships',
            content: 'We\'ve pulled together a handy guide on dates and times, travel info, accommodation and things to see near host venues.',
        },
        {
            imgSrc: '/fixtures/megalinks/wellness.jpg',
            imgAlt: 'Wellness breaks in Scotland',
            linkType: 'internal',
            linkUrl: '#',
            heading: 'Wellness breaks in Scotland',
            content: 'Slow down and refresh your mind, body and spirit in Scotland.',
        },
        {
            imgSrc: '/fixtures/megalinks/grand-hotel.jpg',
            imgAlt: 'Luxury holidays and breaks in Scotland',
            linkType: 'internal',
            linkUrl: '#',
            heading: 'Luxury holidays and breaks in Scotland',
            content: 'Plan your luxury getaway in SCotland, from 5-star accommodation to Michelin-star dining.',
        },
        {
            imgSrc: '/fixtures/megalinks/ashton-lane.jpg',
            imgAlt: 'City breaks',
            linkType: 'internal',
            linkUrl: '#',
            heading: 'City breaks',
            content: 'Get inspiration on city accommodation, attractions and hidden gems loved by locals',
        },
    ],
};

export const Default = Template.bind({
});

Default.args = base;
