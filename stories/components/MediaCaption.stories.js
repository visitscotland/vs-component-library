import VsMediaCaption from '@/components/media-caption/MediaCaption.vue';
import { createPinia, setActivePinia } from 'pinia';
import useVideoStore from '@/stores/video.store';

export default {
    component: VsMediaCaption,
    title: 'Components/Media & data visualisation/MediaCaption',
    decorators: [
        (story) => {
            // Mock the store
            const pinia = createPinia();
            setActivePinia(pinia);

            const videoStore = useVideoStore();
            videoStore.videos = {
                h9bQwcndGfo: {
                    videoDurationMsg: '3 minute video',
                },
            };

            return {
                setup() {
                    return {
                        story,
                    };
                },
                template: '<story />',
                created() {
                    if (this.$root && this.$root.$app) {
                        this.$root.$app.use(pinia);
                    }
                },
            };
        },
    ],
};

const Template = (args) => ({
    components: {
        VsMediaCaption,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsMediaCaption v-bind="args">
            <template v-if="args.caption" #caption>{{ args.caption }}</template>
            <template v-if="args.credit" #credit>{{ args.credit }}</template>
        </VsMediaCaption>
    `,
});

export const Default = Template.bind({
});
Default.args = {
    caption: 'Driving along the Solway Firth',
    credit: '© VisitScotland / Cutmedia',
};

export const CaptionOnly = Template.bind({
});
CaptionOnly.args = {
    caption: 'Driving along the Solway Firth',
};

export const CreditOnly = Template.bind({
});
CreditOnly.args = {
    credit: '© VisitScotland / Cutmedia',
};

export const WithVideoDuration = Template.bind({
});
WithVideoDuration.args = {
    caption: 'A promotional film inviting viewers to rediscover Scotland’s landscapes and culture.',
    videoId: 'h9bQwcndGfo',
};
export const InvalidVideoId = Template.bind({
});
InvalidVideoId.args = {
    caption: 'A promotional film inviting viewers to rediscover Scotland’s landscapes and culture.',
    videoId: 'non-existent-id',
};
