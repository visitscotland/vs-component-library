import VsCaption from '@/components/caption/Caption.vue';
import VsImg from '@/components/img/Img.vue';
import VsImageWithCaption from '@/components/image-with-caption/ImageWithCaption.vue';
import VsSocialCreditLink from '@/components/social-credit-link/SocialCreditLink.vue';
import VsModal from '@/components/modal/Modal.vue';
import VsVideo from '@/components/video/Video.vue';
import { VsCol, VsRow } from '@/components/grid';

export default {
    component: VsImageWithCaption,
    title: 'Components/Media & data visualisation/ImageWithCaption',
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
        VsModal,
        VsVideo,
        VsCol,
        VsRow,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <div
            :class="args.jsDisabled ? 'no-js' : ''"
        >
            <VsImageWithCaption
                v-if="!args.isVideo"
                v-bind="args"
            >
                <template v-slot:img-caption>
                    <VsCaption
                        :latitude='args.latitude'
                        :longitude='args.longitude'
                        :variant="args.variant"
                        text-align="left"
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
                                :social-post-url="args.socialPostUrl"
                                :source="args.source"
                            />
                        </template>
                    </VsCaption>
                </template>
            </VsImageWithCaption>

            <VsImageWithCaption
                v-if="args.isVideo"
                v-bind="args"
            >

                <template v-slot:video-title>
                    {{ args.videoTitle}}
                </template>
            </VsImageWithCaption>


            
        </div>

        <VsModal
            modal-id='c05sg3G4oA4' 
            close-btn-text='Close' 
            :is-video-modal='true'
        >
            <VsRow>
                <VsCol cols="12">
                    <VsVideo
                        video-id="c05sg3G4oA4"
                        video-title="Test Video"
                        class="mb-200"
                        error-message="Sorry, something's gone wrong. Please try again later"
                        no-js-message="You need JavaScript enabled to see this video"
                        cookie-btn-text="Manage cookies"
                        no-cookies-message="You need cookies enabled to see this video"
                    />
                </VsCol>
            </VsRow>
        </VsModal>
    `,
});

const base = {
    imageSrc: 'fixtures/image-with-caption/images/jm-barrie.jpg',
    altText: 'Visit the birthplace of JM Barrie in Kirriemuir',
    closedDefaultCaption: false,
    'img-caption': {
        caption: 'Visit the birthplace of JM Barrie in Kirriemuir',
        credit: 'VisitScotland / Kenny Lam',
    },
    isHeroImage: false,
    mobileOverlap: false,
    toggleButtonText: 'Toggle image caption',
    useLazyLoading: true,
    isVideo: false,
    videoId: '',
    playButtonText: 'Play',
    smallPlayButton: true,
    errorMessage: 'Sorry, something has gone wrong, Please try again later',
    noJsMessage: 'You need JavaScript enabled to see this video',
    jsDisabled: false,
    cookieLinkText: 'Manage cookies',
    noCookiesMessage: 'You need cookies enabled to see this video',
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

export const WithVideo = Template.bind({
});

WithVideo.args = {
    ...base,
    isVideo: true,
    videoId: 'c05sg3G4oA4',
    videoTitle: 'Only in Scotland',
    showToggle: false,
};

export const NoCookies = Template.bind({
});

NoCookies.args = {
    ...base,
    ...WithVideo.args,
};

NoCookies.decorators = [
    () => {
        window.bypassCookiesRequired = false;

        return {
            template: `
                <story/>
            `,
        };
    },
];

export const NoJavascript = Template.bind({
});

NoJavascript.args = {
    ...base,
    ...WithVideo.args,
    jsDisabled: true,
};

export const SvgImage = Template.bind();

SvgImage.args = {
    ...base,
    imageSrc: 'fixtures/image-with-caption/images/thistle.svg',
    'img-caption': {
        caption: 'VisitScotland logo',
    },
};
