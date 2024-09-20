import VsRichTextWrapper from '@/components/rich-text-wrapper/RichTextWrapper.vue';
import VsHeadingSection from '@/components/heading-section/HeadingSection.vue';

export default {
    component: VsHeadingSection,
    parameters: {
        layout: 'fullscreen',
    },
    title: 'Heading Section',
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
        VsHeadingSection,
        VsRichTextWrapper,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsHeadingSection v-bind="args">
            <template v-slot:heading>
                ${args.headingText}
            </template>
            <template v-slot:content>
                <VsRichTextWrapper variant="lead">
                    ${args.sectionText}
                </VsRichTextWrapper>
            </template>
        </VsHeadingSection>
    `,
});

const base = {
    headingText: 'VisitScotland\'s corporate site',
    sectionText: `
        <p>Oh, we do like to be beside the seaside! St Andrews is one of Scotland's favourite coastal destinations, with its two brilliant award-winning beaches, <a href="https://www.visitscotland.com/info/towns-villages/st-andrews-east-sands-p315871">East Sands</a> and <a href="http://www.visitscotland.com/info/towns-villages/st-andrews-west-sands-p315881">West Sands</a>. In the summertime</p>
    `,
    src: 'https://www.visitscotland.org/binaries/content/gallery/dot-org/people/a-salesperson-helps-two-customers-at-edinburgh-zoo.jpg/a-salesperson-helps-two-customers-at-edinburgh-zoo.jpg/bloat%3Axl',
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
