import VsHeroSection from '@/components/hero-section/HeroSection.vue';

export default {
    component: VsHeroSection,
    parameters: {
        layout: 'fullscreen',
    },
    title: 'HeroSection',
    tags: ['autodocs'],
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
        VsHeroSection,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsHeroSection v-bind="args">
            <template v-if="${'videoHeading' in args}" v-slot:videoHeading>${args.videoHeading}</template>
        </VsHeroSection>
    `,
});

const base = {
    heading: 'Scotland, the biggest wee country in the world',
    lede: 'Welcome to Scotland, where history meets breathtaking beauty, and every visit feels like home.',
};

export const NoImage = Template.bind({
});

NoImage.args = base;

export const FullBleed = Template.bind({
});

FullBleed.args = {
    ...base,
    src: 'fixtures/hero/images/visitscotland_38462263949.jpg',
    alt: 'Sunset at Lochan na h-Achlaise on Rannoch Moor',
    imgCaption: 'Sunset at Lochan na h-Achlaise on Rannoch Moor',
    imgCredit: 'VisitScotland / Kenny Lam',
};

export const Inset = Template.bind({
});

Inset.args = {
    ...base,
    src: 'fixtures/hero/images/visitscotland_38462263949.jpg',
    imgCaption: 'Sunset at Lochan na h-Achlaise on Rannoch Moor',
    imgCredit: 'VisitScotland / Kenny Lam',
    inset: true,
};

export const WithVideo = Template.bind({
});

WithVideo.args = {
    videoHeading: 'Scotland, <br/>it\'s good for the soul',
    lede: 'Where history meets breathtaking beauty, and every visit feels like home.',
    src: 'fixtures/hero/images/winter-web-test.jpg',
    videoSrc: 'fixtures/hero/video/winter-web-test.mp4',
};
