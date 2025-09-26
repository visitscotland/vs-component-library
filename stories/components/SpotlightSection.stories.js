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
    description: 'Find all the Scottish holiday inspiration you need in our Scottish travel blog.',
    ctaLink: '#',
    ctaText: 'Read the blog',
};

export const Standard = Template.bind({
});

Standard.args = {
    heading: 'Inspiring Scotland travel blogs',
    imageSrc: 'fixtures/spotlight-section/kinnoul-hill.jpg',
    compact: false,
    ...base,
};

export const Compact = Template.bind({
});

Compact.args = {
    imageSrc: 'fixtures/spotlight-section/kinnoul-hill.jpg',
    heading: 'Inspiring Scotland travel blogs',
    compact: true,
    ...base,
};

export const LongTitle = Template.bind({
});

LongTitle.args = {
    imageSrc: 'fixtures/spotlight-section/kinnoul-hill.jpg',
    heading: 'Conditions of contact for supply of consultancy services',
    compact: true,
    ...base,
};
LongTitle.globals = {
    viewport: {
        value: 'mobile1',
    },
};

export const NoImage = Template.bind({
});

NoImage.args = {
    heading: 'Inspiring Scotland travel blogs',
    compact: true,
    ...base,
};
