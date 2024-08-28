import VsVideoStories from '@/components/video-stories/VideoStories.vue';

export default {
    component: VsVideoStories,
    title: 'VideoStories',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsVideoStories,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsVideoStories v-bind="args">
        </VsVideoStories>
    `,
});

const base = {
    items: [
        {
            url: 'https://picsum.photos/750/800/',
            type: 'image',
            alt: 'Alt text 1',
        },
        {
            url: 'https://picsum.photos/800/801/',
            type: 'image',
            alt: 'Alt text 2',
        },
        {
            url: 'fixtures/video/dark-skies.mp4',
            type: 'video',
        },
    ],
};

export const Default = Template.bind({
});

Default.args = base;
