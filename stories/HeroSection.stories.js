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
        inset: {
            options: [true, false],
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
    headingText: 'Scotland, the biggest wee country in the world',
    src: 'https://www.visitscotland.com/binaries/content/gallery/visitscotland/cms-images/2023/01/20/paddleboarding---basking-shark-scotland.jpg?size=lg',
    alt: '',
    inset: false,
};

export const Default = Template.bind({
});

Default.args = {
    ...base,
};

export const Inset = Template.bind({
    ...base,
    inset: true,
});

export const WithLede = Template.bind({
    ...base,
    lede: 'Welcome to Scotland, where history meets breathtaking beauty, and every visit feels like home.',
});
