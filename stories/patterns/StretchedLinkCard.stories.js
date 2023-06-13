import VsStretchedLinkCard from '@/components/patterns/stretched-link-card/StretchedLinkCard.vue';
import VsStretchedLinkPanels from '@/components/patterns/stretched-link-card/components/StretchedLinkPanels.vue';

export default {
    component: VsStretchedLinkCard,
    title: 'Patterns/StretchedLinkCard',
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: {
                type: 'radio',
            },
            options: [
                'external',
                'internal',
                'download',
                'video',
            ],
        },
        headingLevel: {
            control: {
                type: 'radio',
            },
            options: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
            ],
        },
        warningSize: {
            control: {
                type: 'inline-radio',
            },
            options: [
                'small',
                'normal',
            ],
        },
    },
};

const Template = (args) => ({
    components: {
        VsStretchedLinkCard,
        VsStretchedLinkPanels,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsStretchedLinkCard v-bind="args">
            <template v-if="${'default' in args}" v-slot>${args.default}</template>
            <template v-if="args.stretchedCardCategory" v-slot:stretchedCardCategory>${args.stretchedCardCategory}</template>
            <template v-if="args.stretchedCardHeader" v-slot:stretchedCardHeader>${args.stretchedCardHeader}</template>
            <template v-if="args.stretchedCardContent" v-slot:stretchedCardContent>${args.stretchedCardContent}</template>
            <template v-if="args.stretchedCardPanels" v-slot:stretchedCardPanels>${args.stretchedCardPanels}</template>
            <template v-if="args.stretchedCardLink" v-slot:stretchedCardLink>${args.stretchedCardLink}</template>
        </VsStretchedLinkCard>
    `,
});

const base = {
    link: 'https://visitscotland.com',
    type: 'internal',
    imgSrc: 'https://cimg.visitscotland.com/cms-images/attractions/outlander/claire-standing-stones-craigh-na-dun-outlander?size=sm',
    imgAlt: 'This is the alt text',
    theme: 'light',
    headingLevel: '3',
    disabled: false,
    videoId: '',
    videoBtnText: '',
    errorMessage: '',
    errorType: 'image',
    warningSize: 'small',
    stretchedCardCategory: 'Tours',
    stretchedCardHeader: 'Tour scotland with outlander',
    stretchedCardContent: '<p>See Outlander filming locations, book locations, and attractions with real life Jacobite connections.</p>',
    stretchedCardPanels: '',
    stretchedCardLink: '',
};

export const Default = Template.bind({
});

Default.args = base;

export const WithPanels = Template.bind({
});

WithPanels.args = {
    ...base,
    stretchedCardPanels: `
        <VsStretchedLinkPanels
            days="14"
            transport="car"
            transportName="Car"
            daysLabel="days"
        />
    `,
};

export const WithVideo = Template.bind({
});

WithVideo.args = {
    ...base,
    type: 'video',
    videoId: 'FlG6tbYaA88',
    videoBtnText: 'Play Video',
};
