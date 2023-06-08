import VsRichTextWrapper from '@/components/elements/rich-text-wrapper/RichTextWrapper.vue';
import VsLink from '@/components/elements/link/Link.vue';
import VsHeading from '@/components/elements/heading/Heading.vue';

export default {
    component: VsRichTextWrapper,
    title: 'Elements/RichTextWrapper',
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: [
                'normal',
                'lead',
            ],
            control: {
                type: 'radio',
            },
        },
    },
};

const Template = (args) => ({
    components: {
        VsRichTextWrapper,
        VsLink,
        VsHeading,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsRichTextWrapper v-bind="args">
            <template v-if="${'default' in args}" v-slot>${args.default}</template>
        </VsRichTextWrapper>
    `,
});

const base = {
    default: `
        <VsHeading level="3">
            Experiencing Ben Nevis
        </VsHeading>
        <p>
            Scotland's landscape is scattered with Munros and mist-shrouded hills... But Ben Nevis is the king of them all. In the north west Highlands, near the town of <VsLink href="#">Fort William</VsLink> and part of the Grampian Mountain range, the famous peak attracts 125k walkers a year. 
        </p>
    `,
    variant: 'normal',
};

export const Default = Template.bind({
});

Default.args = base;

export const Lead = Template.bind({
});

Lead.args = {
    ...base,
    variant: 'lead',
};
