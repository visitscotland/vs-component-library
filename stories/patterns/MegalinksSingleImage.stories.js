import VsMegalinks from '@/components/patterns/megalinks/Megalinks.vue';
import VsMegalinkSingleImage from '@/components/patterns/megalinks/components/megalink-single-image/MegalinkSingleImage.vue';
import VsImageWithCaption from '@/components/patterns/image-with-caption/ImageWithCaption.vue';
import VsCaption from '@/components/patterns/caption/Caption.vue';
import VsLinkListItem from '@/components/patterns/link-list/components/LinkListItem.vue';
import VsModal from '@/components/patterns/modal/Modal.vue';
import VsVideo from '@/components/elements/video/Video.vue';
import {
    VsRow,
    VsCol,
} from '@/components/elements/grid';

export default {
    component: VsMegalinks,
    title: 'Patterns/Megalinks/SingleImage',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsMegalinks,
        VsMegalinkSingleImage,
        VsImageWithCaption,
        VsLinkListItem,
        VsCol,
        VsCaption,
        VsModal,
        VsVideo,
        VsRow,
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
            variant="single-image"
        >
            <VsCol cols="12">
                <vs-megalink-single-image
                    :title="args.subTitle"
                    :buttonLink="args.buttonLink"
                >
                    <template v-slot:vs-single-image>
                        <VsImageWithCaption
                            mobile-overlap
                            :altText="args.imageAltText"
                            :imageSrc="args.imageSrc"
                            :errorMessage="args.videoErrorMessage"
                        >
                            <template
                                v-slot:img-caption
                            >
                                <VsCaption
                                    text-align="right"
                                >
                                    <template v-slot:caption>
                                        {{ args.imageCaption }}
                                    </template>

                                    <template v-slot:credit>
                                        {{ args.imageCredit }}
                                    </template>
                                </VsCaption>
                            </template>
                        </VsImageWithCaption>
                    </template>
                    <template v-slot:vs-single-image-content>
                        <p>
                            {{ args.cardContent }}
                        </p>
                    </template>
                    <template v-slot:vs-single-image-links>
                        <VsLinkListItem
                            v-for="link in args.links"
                            v-bind="link"
                        >
                            {{ link.text }}
                        </VsLinkListItem>
                    </template>
                    <template v-slot:vs-single-image-button-text>
                        {{ args.buttonText }}
                    </template>
                </vs-megalink-single-image>
            </VsCol>
        </VsMegalinks>

        <VsModal
            modalId="g-Fhvj7vW-E"
            closeBtnText="Close"
            :isVideoModal="true"
        >
            <VsRow>
                <VsCol cols="12">
                    <VsVideo
                        videoId="g-Fhvj7vW-E"
                        class="mb-8"
                        cookie-btn-text="Manage cookies"
                        no-js-message="You need Javascript enabled to see this video"
                        no-cookies-message="You need cookies enabled to see this video"
                    />
                </VsCol>
            </VsRow>
        </VsModal>
    `,
});

const cardContent = `From the rugged coastline to sparkling city lights,
    the ancient Caledonian forests of the Highlands to the rich history of the Lowlands,
    there are plenty of places to start your Scottish adventure. `;

const base = {
    mainTitle: 'Uncover Scotland\'s regions',
    buttonLink: '#',
    buttonText: 'View our map of Scotland',
    subTitle: 'Where will you explore?',
    imageSrc: '/fixtures/megalinks/illustrated-map-of-scotland.jpg',
    altText: 'A map of Scotland',
    videoErrorMessage: 'Something went wrong',
    imageCaption: 'Map of SCotland',
    imageCredit: '@2023 VisitScotland',
    cardContent,
    links: [
        {
            href: '#',
            text: '14 Places You Must Visit in 2023',
        },
        {
            href: '#',
            text: 'Top Attractions',
        },
        {
            type: 'external',
            href: '#',
            text: 'Visit our partners',
        },
    ],
};

export const Default = Template.bind({
});

Default.args = base;

export const WithVideo = Template.bind({
});

WithVideo.args = base;

WithVideo.args = {
    ...base,
    links: [
        {
            href: '#',
            text: 'Keep Scotland Unspoiled',
            videoId: 'g-Fhvj7vW-E',
            videoDescriptor: 'Video',
            type: 'video',
        },
        {
            type: 'external',
            href: '#',
            text: 'Visit our partners',
        },
    ],
};
