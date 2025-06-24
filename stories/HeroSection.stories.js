import VsHeroSection from '@/components/hero-section/HeroSection.vue';

export default {
    component: VsHeroSection,
    parameters: {
        layout: 'fullscreen',
    },
    title: 'HeroSection',
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
        <VsHeroSection v-bind="args" />
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

export const WithVideo = Template.bind({
});

WithVideo.args = {
    heading: 'Scotland, <br/>it\'s good for the soul',
    lede: 'Where history meets breathtaking beauty, and every visit feels like home.',
    src: 'fixtures/hero/images/lavendar-fields.jpg',
    videoSrc: 'fixtures/hero/video/lavendar-fields.mp4',
    videoBtnText: 'Play/pause background video',
    videoPlayingStatus: 'Playing',
    videoPausedStatus: 'Paused',
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

export const Split = Template.bind({
});

Split.args = {
    heading: 'Join the journey to change',
    lede: 'Scotland views business events as catalysts for social and economic  transformation, addressing climate change, and advocating human rights.',
    src: 'fixtures/hero/images/visitscotland_38462263949.jpg',
    alt: 'Sunset at Lochan na h-Achlaise on Rannoch Moor',
    imgCaption: 'Sunset at Lochan na h-Achlaise on Rannoch Moor',
    imgCredit: 'VisitScotland / Kenny Lam',
    split: true,
};
