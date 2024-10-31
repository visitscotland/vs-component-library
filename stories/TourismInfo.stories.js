import VsImageWithCaption from '@/components/image-with-caption/ImageWithCaption.vue';
import VsQuote from '@/components/quote/Quote.vue';
import VsCaption from '@/components/caption/Caption.vue';
import VsButton from '@/components/button/Button.vue';
import VsImg from '@/components/img/Img.vue';
import VsLink from '@/components/link/Link.vue';
import VsTourismInfo from '@/components/tourism-info/TourismInfo.vue';

export default {
    component: VsTourismInfo,
    title: 'Tourism Info',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsTourismInfo,
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
        <VsTourismInfo>
            <template v-slot:tourism-info-image-with-caption>
                <VsImageWithCaption
                    :imageSrc="args.imageSrc"
                    :altText="args.imageAltText"
                    :toggleButtonText="args.imageToggleText"
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
                v-slot:tourism-info-quote
            >
                <VsQuote variant="wide">
                    <template 
                        v-slot:quote-image
                        v-if="args.quoteImageSrc"
                    >
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
                            v-if="args.buttonText"
                            :args="args.buttonHref"
                        >
                            {{ args.buttonText }}
                        </VsButton>
                </template>
                </VsQuote>
            </template>

            <template v-slot:tourism-info-links>
                <p>
                    <VsLink :href="args['tourism-info-links'].linkHref">
                        {{ args['tourism-info-links'].linkText }}
                    </VsLink>
                </p>
            </template>
        </VsTourismInfo>
    `,
});

const base = {
    imageSrc: '/fixtures/icentre/icentre.jpg',
    imageAltText: 'Tourism Info',
    imageToggleText: 'Toggle caption',
    imageCaption: 'VisitScotland Information Centre',
    imageCredit: '&copy; VisitScotland',
    quoteImageSrc: '/fixtures/icentre/icentre.jpg',
    quoteImageAltText: 'Penny, icentre staff',
    quoteContent: 'Look out for the incredible architecture, parks and gardens as you browse independent shops, galleries and eateries.',
    quoteAuthor: 'Penny',
    quoteAuthorTitle: 'Visitor Services Advisor at Aberdeen iCentre',
    buttonHref: '#',
    buttonText: 'See more',
    'tourism-info-links': {
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

export const QuoteNoLinks = Template.bind({
});

QuoteNoLinks.args = {
    imageSrc: '/fixtures/icentre/icentre.jpg',
    imageAltText: 'Tourism Info',
    imageToggleText: 'Toggle caption',
    imageCaption: 'VisitScotland Information Centre',
    imageCredit: '&copy; VisitScotland',
    quoteContent: 'Take a walk along St Andrews Pier & the East Sands. There is an amazing skyline as you look back on the town, with the cathedral and the castle. On a clear day you can see right along the coast. ',
    quoteAuthor: 'Lorna',
    quoteAuthorTitle: 'Assistant iCentre Manager at St Andrews iCentre',
    'tourism-info-links': '',
}