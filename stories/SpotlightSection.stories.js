import VsSpotlightSection from '@/components/spotlight-section/SpotlightSection.vue';
import {
    VsCol,
    VsContainer,
    VsRow,
} from '@/components/grid';

export default {
    component: VsSpotlightSection,
    parameters: {
        layout: 'fullscreen',
    },
    title: 'SpotlightSection',
    argTypes: {
        inset: {
            options: [true, false],
            control: {
                type: 'radio',
            },
        },
        heading: {
            control: {
                type: 'input',
            },
        },

    },
};

const Template = (args) => ({
    components: {
        VsSpotlightSection,
        VsCol,
        VsContainer,
        VsRow,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsContainer>
            <VsRow>
                <VsCol
                    cols="12"
                >
                    <VsSpotlightSection v-bind="args" />
                </VsCol>
            </VsRow>
        </VsContainer>
    `,
});

const base = {
    heading: 'Inspiring Scotland travel blogs',
    description: 'Find all the Scottish holiday inspiration you need in our Scottish travel blog.',
    ctaLink: '#',
    ctaText: 'Read the blog',
};

export const Standard = Template.bind({
});

Standard.args = {
    imageSrc: 'fixtures/spotlight-section/kinnoul-hill.jpg',
    ...base,
};

export const Compact = Template.bind({
});

Compact.args = {
    imageSrc: 'fixtures/spotlight-section/kinnoul-hill.jpg',
    heading: 'Die besten Aktivitäten und Erlebnisse in Schottland',
    compact: true,
    ...base,
};

export const NoImage = Template.bind({
});

NoImage.args = {
    heading: 'Die besten Aktivitäten und Erlebnisse in Schottland',
    compact: true,
    ...base,
};
