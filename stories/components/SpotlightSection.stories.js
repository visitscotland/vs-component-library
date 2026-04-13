import VsSpotlightSection from '@/components/spotlight-section/SpotlightSection.vue';
import VsVideo from '@/components/video/Video.vue';
import VsToggleButton from '@/components/toggle-button/ToggleButton.vue';
import prefersReducedMotion from '@/utils/prefers-reduced-motion';

export default {
    component: VsSpotlightSection,
    parameters: {
        layout: 'fullscreen',
    },
    title: 'Components/Layout & content structure/SpotlightSection',
    argTypes: {
        compact: {
            control: 'boolean',
        },
        heading: {
            control: {
                type: 'text',
            },
        },

    },
};

const Template = (args) => ({
    components: {
        VsSpotlightSection,
        VsVideo,
        VsToggleButton,
    },
    setup() {
        return {
            args,
        };
    },
    data() {
        return {
            isReducedMotion: prefersReducedMotion(),
        };
    },
    methods: {
        /**
         * Toggles the video in the video examples with the ref given
         * using the exposed toggleVideo method in the video component
         */
        toggleVideo(refKey) {
            this.$refs[refKey]?.toggleVideo?.();
        },
    },
    template: `
        <VsSpotlightSection v-bind="args">
            <template #vs-spotlight-section-media>
                <VsVideo
                    v-if="args.videoSrc"
                    ref="spotlightVideo"
                    video-type="html5"
                    :poster-image-src="args.imageSrc"
                    :video-src="args.videoSrc"
                    :show-toggle="false"
                    video-id="spotlight-video"
                />
            </template>

            <template #vs-spotlight-section-overlay-controls>
                <VsToggleButton
                    v-if="args.videoSrc && !isReducedMotion"
                    variant="overlay"
                    icon="vs-icon-control-pause"
                    pressed-icon="vs-icon-control-play"
                    :label="args.pauseButtonLabel"
                    :pressed-label="args.playButtonLabel"
                    aria-controls="spotlight-video"
                    @click="(val) => toggleVideo('spotlightVideo')"
                />
            </template>
        </VsSpotlightSection>
    `,
});

const base = {
    ctaLink: '#',
};

export const Standard = Template.bind({
});

Standard.args = {
    heading: 'Inspiring Scotland travel blogs',
    description: 'Find all the Scottish holiday inspiration you need in our Scottish travel blog.',
    ctaText: 'Read the blog',
    imageSrc: 'fixtures/spotlight-section/kinnoul-hill.jpg',
    compact: false,
    ...base,
};

export const Compact = Template.bind({
});

Compact.args = {
    heading: 'Inspiring Scotland travel blogs',
    description: 'Find all the Scottish holiday inspiration you need in our Scottish travel blog.',
    ctaText: 'Read the blog',
    imageSrc: 'fixtures/spotlight-section/kinnoul-hill.jpg',
    compact: true,
    ...base,
};

export const LongTitle = Template.bind({
});

LongTitle.args = {
    heading: 'Conditions of contact for supply of consultancy services',
    description: 'Find all the Scottish holiday inspiration you need in our Scottish travel blog.',
    ctaText: 'Read the article',
    imageSrc: 'fixtures/spotlight-section/kinnoul-hill.jpg',
    compact: true,
    ...base,
};
LongTitle.globals = {
    viewport: {
        value: 'mobile1',
    },
};

export const WithVideo = Template.bind({
});

WithVideo.args = {
    heading: 'Slow travel and wellness retreats',
    description: 'Slow down and explore Scotland’s breathtaking scenery. Unplug, find moments of wellness, and savour every experience.',
    ctaText: 'Explore slow travel adventures',
    imageSrc: 'fixtures/hero/images/lavendar-fields.jpg',
    videoSrc: 'fixtures/hero/video/lavendar-fields.mp4',
    playButtonLabel: 'Play video',
    pauseButtonLabel: 'Pause video',
    compact: false,
    ...base,
};

export const WithVideoCompact = Template.bind({
});

WithVideoCompact.args = {
    heading: 'Slow travel and wellness retreats',
    description: 'Slow down and explore Scotland’s breathtaking scenery. Unplug, find moments of wellness, and savour every experience.',
    ctaText: 'Explore slow travel adventures',
    imageSrc: 'fixtures/hero/images/lavendar-fields.jpg',
    videoSrc: 'fixtures/hero/video/lavendar-fields.mp4',
    playButtonLabel: 'Play video',
    pauseButtonLabel: 'Pause video',
    compact: true,
    ...base,
};

export const NoImage = Template.bind({
});

NoImage.args = {
    heading: 'Inspiring Scotland travel blogs',
    ctaText: 'Read the blog',
    compact: true,
    ...base,
};
