import VsMegalinks from '@/components/patterns/megalinks/Megalinks.vue';
import VsMegalinkMultiImage from '@/components/patterns/megalinks/components/megalink-multi-image/MegalinkMultiImage.vue';
import VsImageWithCaption from '@/components/patterns/image-with-caption/ImageWithCaption.vue';
import VsCaption from '@/components/patterns/caption/Caption.vue';

import VsLink from '@/components/elements/link/Link.vue';
import {
    VsContainer,
    VsRow,
    VsCol,
} from '@/components/elements/grid';

export default {
    component: VsMegalinks,
    title: 'Patterns/Megalinks/MultiImage',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsMegalinks,
        VsMegalinkMultiImage,
        VsImageWithCaption,
        VsLink,
        VsContainer,
        VsRow,
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
            variant="multi-image"
            :noJsMessage="args.noJsMessage"
            :noCookiesMessage="args.noCookiesMessage"
            :noCookiesLink="args.noCookiesLink"
        >
            <template v-slot:vs-megalinks-intro>
                <p>{{ args.megalinksIntro }}</p>
            </template>

            <template v-slot:vs-megalinks-button>
                {{ args.buttonText }}
            </template>

            <VsCol cols="10" class="offset-1">
                <VsContainer>
                    <VsRow>
                        <VsCol
                            v-for="link in args.links"
                            cols="12"
                            md="6"
                            :xl="link.featured ? 12 : 4"
                        >
                            <VsMegalinkMultiImage
                                v-bind="link"
                            >
                                <template v-slot:vs-multi-image-heading>
                                    {{ link.heading }}
                                </template>

                                <template v-slot:vs-multi-image-content>
                                    <p>{{ link.content }}</p>
                                </template>
                            </VsMegalinkMultiImage>
                        </VsCol>
                    </VsRow>
                </VsContainer>
            </VsCol>
        </VsMegalinks>
    `,
});

const megalinksIntro = `From the rugged coastline to sparkling city lights,
    the ancient Caledonian forests of the Highlands to the rich history of the Lowlands,
    there are plenty of places to start your Scottish adventure. `;

const base = {
    mainTitle: 'Uncover Scotland\'s regions',
    buttonLink: '#',
    buttonText: 'Get more inspiration',
    noJsMessage: 'JavaScript is needed to watch this video.',
    noCookiesMessage: 'Cookies are needed to watch this video.',
    noCookiesLink: {
        url: 'https://google.com',
        label: 'Update my cookie settings',
    },
    megalinksIntro,
    links: [
        {
            featured: true,
            imgSrc: '/fixtures/megalinks/glentress-forest.jpg',
            imgAlt: 'Clycling in glentress forest',
            linkType: 'internal',
            linkUrl: '#',
            heading: '2023 UCI Cycling World Championships',
            content: 'We\'ve pulled together a handy guide on dates and times, travel info, accommodation and things to see near host venues.',
        },
        {
            featured: false,
            imgSrc: '/fixtures/megalinks/wellness.jpg',
            imgAlt: 'Wellness breaks in Scotland',
            linkType: 'internal',
            linkUrl: '#',
            heading: 'Wellness breaks in Scotland',
            content: 'Slow down and refresh your mind, body and spirit in Scotland.',
        },
        {
            featured: false,
            imgSrc: '/fixtures/megalinks/grand-hotel.jpg',
            imgAlt: 'Luxury holidays and breaks in Scotland',
            linkType: 'internal',
            linkUrl: '#',
            heading: 'Luxury holidays and breaks in Scotland',
            content: 'Plan your luxury getaway in SCotland, from 5-star accommodation to Michelin-star dining.',
        },
        {
            featured: false,
            imgSrc: '/fixtures/megalinks/outlander-wedding.jpg',
            imgAlt: 'Tour Scotland with Outlander',
            linkType: 'internal',
            linkUrl: '#',
            heading: 'Tour Scotland with Outlander',
            content: 'See Outlander filming locations, book locations and attractions with real-life Jacobite connections.',
        },
        {
            featured: true,
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
