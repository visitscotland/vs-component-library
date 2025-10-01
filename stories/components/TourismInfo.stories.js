import VsImageWithCaption from '@/components/image-with-caption/ImageWithCaption.vue';
import VsQuote from '@/components/quote/Quote.vue';
import VsCaption from '@/components/caption/Caption.vue';
import VsButton from '@/components/button/Button.vue';
import VsImg from '@/components/img/Img.vue';
import VsLink from '@/components/link/Link.vue';
import VsTourismInfo from '@/components/tourism-info/TourismInfo.vue';

export default {
    component: VsTourismInfo,
    title: 'Components/To be reviewed/Tourism Info',
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
                    <template 
                        v-if="args['buttonText']" 
                        v-slot:quote-link
                    >
                        <VsButton
                            v-if="args.buttonText"
                            :args="args.buttonHref"
                        >
                            {{ args.buttonText }}
                        </VsButton>
                    </template>
                </VsQuote>
            </template>

            <template 
                v-if="args['tourism-info-links']"
                v-slot:tourism-info-links>
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
    imageSrc: './fixtures/icentre/icentre.jpg',
    imageAltText: 'Tourism Info',
    imageToggleText: 'Toggle caption',
    imageCaption: 'VisitScotland Information Centre',
    imageCredit: '&copy; VisitScotland',
    quoteContent: 'Look out for the incredible architecture, parks and gardens as you browse independent shops, galleries and eateries.',
    quoteAuthor: 'Penny',
    quoteAuthorTitle: 'Visitor Services Advisor at Aberdeen iCentre',
};

export const Default = Template.bind({
});

Default.args = base;

Default.globals = {
    backgrounds: {
        value: 'grey',
    },
};

export const WithLinks = Template.bind({
});

WithLinks.args = {
    ...base,
    'tourism-info-links': {
        linkText: 'See all Aberdeen attractions',
        linkHref: '#',
    },
};

export const WithButton = Template.bind({
});

WithButton.args = {
    ...base,
    buttonHref: '#',
    buttonText: 'See more',
};

export const WithButtonAndLink = Template.bind({
});

WithButtonAndLink.args = {
    ...base,
    buttonHref: '#',
    buttonText: 'See more',
    'tourism-info-links': {
        linkText: 'See all Aberdeen attractions',
        linkHref: '#',
    },
};

export const WithQuoteImage = Template.bind({
});

WithQuoteImage.args = {
    ...base,
    quoteImageSrc: './fixtures/icentre/icentre.jpg',
    quoteImageAltText: 'Penny, icentre staff',
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
    'tourism-info-links': {
        linkText: 'See all Aberdeen attractions',
        linkHref: '#',
    },
};

NoQuote.parameters = Default.parameters;
