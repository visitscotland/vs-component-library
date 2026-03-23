import VsSpotlightSection from '@/components/spotlight-section/SpotlightSection.vue';

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
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsSpotlightSection v-bind="args" />
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
    compact: true,
    ...base,
};

export const NoImage = Template.bind({
});

NoImage.args = {
    heading: 'Inspiring Scotland travel blogs',
    compact: true,
    ...base,
};
