import VsCaption from '@/components/caption/Caption.vue';
import VsImg from '@/components/img/Img.vue';
import VsImageWithCaption from '@/components/image-with-caption/ImageWithCaption.vue';
import VsSocialCreditLink from '@/components/social-credit-link/SocialCreditLink.vue';

export default {
    component: VsImageWithCaption,
    title: 'Patterns/ImageWithCaption',
    tags: ['autodocs'],
    decorators: [() => ({
        template: '<div style="max-width: 500px;"><story /></div>',
    })],
};
const Template = (args) => ({
    components: {
        VsCaption,
        VsImg,
        VsImageWithCaption,
        VsSocialCreditLink,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsImageWithCaption
            v-bind="args"
        >
            <template v-slot:img-caption>
                <VsCaption
                    :latitude='args.latitude'
                    :longitude='args.longitude'
                    :variant="args.variant"
                >

                    <template v-slot:caption>
                        {{ args['img-caption'].caption }}
                    </template>

                    <template
                        v-if="!args.socialPostUrl"
                        v-slot:credit
                    >
                        {{ args['img-caption'].credit }}
                    </template>

                    <template
                        v-else
                        v-slot:credit
                    >
                        <VsSocialCreditLink
                            :credit="args['img-caption'].credit"
                            :socialPostUrl="args.socialPostUrl"
                            :source="args.source"
                        />
                    </template>
                </VsCaption>
            </template>
        </VsImageWithCaption>
    `,
});

const base = {
    altText: 'Visit the birthplace of JM Barrie in Kirriemuir',
    closedDefaultCaption: false,
    cookieLinkText: '',
    errorMessage: '',
    'img-caption': {
        caption: 'Visit the birthplace of JM Barrie in Kirriemuir',
        credit: 'VisitScotland / Kenny Lam',
    },
    imageSrc: 'fixtures/image-with-caption/images/jm-barrie.jpg',
    isHeroImage: false,
    isVideo: false,
    mobileOverlap: false,
    noCookiesMessage: '',
    noJsMessage: '',
    playButtonText: '',
    showToggle: true,
    smallPlayButton: '',
    toggleButtonText: '',
    useLazyLoading: true,
    videoId: '',
};

export const Default = Template.bind({
});

Default.args = {
    ...base,
    latitude: '55.9485947',
    longitude: '-3.2021022',
    variant: 'large',
};

export const FullWidthCaption = Template.bind({
});

FullWidthCaption.args = {
    ...base,
};

export const ClosedCaption = Template.bind({
});

ClosedCaption.args = {
    ...base,
    closedDefaultCaption: true,
};

export const WithSocialLink = Template.bind({
});

WithSocialLink.args = {
    ...base,
    socialPostUrl: '#',
    source: 'instagram',
};
