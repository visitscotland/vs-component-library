import VsIcentre from '@/components/patterns/icentre/Icentre.vue';
import VsImageWithCaption from '@/components/patterns/image-with-caption/ImageWithCaption.vue';
import VsQuote from '@/components/patterns/quote/Quote.vue';
import VsCaption from '@/components/patterns/caption/Caption.vue';
import VsButton from '@/components/elements/button/Button.vue';
import VsImg from '@/components/elements/img/Img.vue';
import VsLink from '@/components/elements/link/Link.vue';

export default {
    component: VsIcentre,
    title: 'Patterns/Icentre',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsIcentre,
        VsImageWithCaption,
        VsQuote,
        VsCaption,
        VsButton,
        VsImg,
        VsLink,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsIcentre>
            <template v-slot:icentre-image-with-caption>
                <VsImageWithCaption
                    :imageSrc="args.imageSrc"
                    :altText="args.imageAltText"
                >
                    <template v-slot:img-caption>
                        <VsCaption>
                            <template v-slot:caption>
                                <span>{{ args.imageCaption }}</span>
                            </template>

                            <template v-slot:credit>
                                <span>{{ args.imageCredit }}</span>
                            </template>
                        </VsCaption>
                    </template>
                </VsImageWithCaption>
            </template>

            <template
                v-if="args.quoteContent"
                v-slot:icentre-quote
            >
                <VsQuote variant="wide">
                    <template v-slot:quote-image>
                        <VsImg
                            :src="args.quoteImageSrc"
                            :alt="args.quoteImageAltText"
                        >
                        </VsImg>
                    </template>
                    <template v-slot:quote-content>
                        {{ args.quoteContent }}
                    </template>
                    <template v-slot:quote-author-name>
                        {{ args.quoteAuthor }}
                    </template>
                    <template v-slot:quote-author-title>
                        {{ args.quoteAuthorTitle }}
                    </template>
                    <template v-slot:quote-link>
                        <VsButton
                            :args="buttonHref"
                        >
                            {{ args.buttonText }}
                        </VsButton>
                </template>
                </VsQuote>
            </template>

            <template v-slot:icentre-links>
                <p>
                    <VsLink :href="args['icentre-links'].linkHref">
                        {{ args['icentre-links'].linkText }}
                    </VsLink>
                </p>
            </template>
        </VsIcentre>
    `,
});

const base = {
    imageSrc: '/fixtures/icentre/icentre.jpg',
    imageAltText: 'Aberdeen iCentre',
    imageCaption: 'VisitScotland Information Centre',
    imageCredit: '&copy; VisitScotland',
    quoteImageSrc: '/fixtures/icentre/icentre.jpg',
    quoteImageAltText: 'Penny, icentre staff',
    quoteContent: 'Look out for the incredible architecture, parks and gardens as you browse independent shops, galleries and eateries.',
    quoteAuthor: 'Penny',
    quoteAuthorTitle: 'Visitor Services Advisor at Aberdeen iCentre',
    buttonHref: '#',
    buttonText: 'See more',
    'icentre-links': {
        linkText: 'See all Aberdeen attractions',
        linkHref: '#',
    },
};

export const Default = Template.bind({
});

Default.args = base;

Default.parameters = {
    backgrounds: {
        default: 'Grey',
    },
};

export const NoQuote = Template.bind({
});

NoQuote.args = {
    ...base,
    quoteContent: '',
    quoteAuthor: '',
    quoteAuthorTitle: '',
    quoteImageAltText: '',
    quoteImageSrc: '',
};

NoQuote.parameters = Default.parameters;
