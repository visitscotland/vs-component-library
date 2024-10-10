import VsRichTextWrapper from '@/components/rich-text-wrapper/RichTextWrapper.vue';
import VsLink from '@/components/link/Link.vue';
import VsHeading from '@/components/heading/Heading.vue';

export default {
    component: VsRichTextWrapper,
    title: 'RichTextWrapper',
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
    decorators: [() => ({
        template: '<div style="max-width: 750px;"><story /></div>',
    })],
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
        <VsHeading level="3" heading-style="heading-m">
            Experiencing Ben Nevis
        </VsHeading>
        <p>Ben Nevis is the king of them all. In the north west <a href='#'>Highlands</a>, near the town of <a href='#'>Fort William</a> and part of the <a href='#'>Grampian Mountain</a> range, the famous peak attracts 125k walkers a year. Whether you're an avid ambler or you just love beautiful landscapes, bagging 'the Ben' is likely to feature near the top of your Scottish bucket list.</p>
        <p>An ancient giant of the land, Ben Nevis was once a massive active volcano which exploded and collapsed inwards on itself millions of years ago. At the summit, there is evidence of an explosion in the form of light-coloured granite. The name itself has two translations from the ancient Gaelic language, meaning 'mountain with its head in the clouds', thanks to its iconic mist-shrouded peak, or it can also mean 'venomous mountain' - you can decide which translation you prefer after the climb!</p>
        
        <VsHeading level="4" heading-style="heading-s">
            More Information
        </VsHeading>
        <p>Read on for an overview of walking routes up the mountain, or visit <a href='#'>Walk Highlands</a> for detailed maps, difficulty levels and walking advice.</p>
        <p>Remember it's never 'easy' to bag a Scottish Munro or Corbett. You'll need a good amount of hillwalking experience, fitness, hill craft and navigation skills using a map and compass, before attempting any Scottish mountains, even more so in winter.</p>
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
