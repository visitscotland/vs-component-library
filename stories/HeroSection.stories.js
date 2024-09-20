import VsRichTextWrapper from '@/components/rich-text-wrapper/RichTextWrapper.vue';
import VsHeroSection from '@/components/hero-section/HeroSection.vue';

export default {
    component: VsHeroSection,
    parameters: {
        layout: 'fullscreen',
    },
    title: 'Hero',
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: [
                'fullwidth',
                'large',
            ],
            control: {
                type: 'inline-radio',
            },
        },
    },
};

const Template = (args) => ({
    components: {
        VsHeroSection,
        VsRichTextWrapper,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsHeroSection v-bind="args">
     
        </VsHeroSection>
    `,
});

const base = {
    headingText: 'scotland, the biggest wee country in the world',
    sectionText: `
        <p>Oh, we do like to be beside the seaside! St Andrews is one of Scotland's favourite coastal destinations, with its two brilliant award-winning beaches, <a href="https://www.visitscotland.com/info/towns-villages/st-andrews-east-sands-p315871">East Sands</a> and <a href="http://www.visitscotland.com/info/towns-villages/st-andrews-west-sands-p315881">West Sands</a>. In the summertime</p>
    `,
    src: 'https://www.visitscotland.com/binaries/content/gallery/visitscotland/cms-images/2023/01/20/paddleboarding---basking-shark-scotland.jpg?size=lg',
    alt: '',
};

export const Default = Template.bind(
    {
    },
);

Default.args = {
    ...base,
};

export const Minimal = Template.bind({
});

Minimal.args = {
    ...base,
    overrideStyleLevel: 3,
};

// export const WithSubheading = Template.bind({
// });

// WithSubheading.args = {
//     ...base,
//     default: 'Heart of Neolithic Orkney',
//     'sub-heading': 'Mainland, Orkney',
// };

// export const Thin = Template.bind({
// });

// Thin.args = {
//     ...base,
//     default: 'Find out more',
//     thin: true,
// };

// export const Alternative = Template.bind({
// });

// Alternative.args = {
//     ...base,
//     default: 'Find experiences',
//     level: '2',
//     alternative: true,
// };
