import VsMediaCaption from '@/components/media-caption/MediaCaption.vue';
import { createPinia, setActivePinia } from 'pinia';
import useVideoStore from '@/stores/video.store';

export default {
    component: VsMediaCaption,
    title: 'Components/Media & data visualisation/MediaCaption',
    decorators: [
        () => {
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
                template: '<story />',
                pinia,
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

export const WithVideoDuration = Template.bind({
});
WithVideoDuration.args = {
    videoId: 'h9bQwcndGfo',
    caption: 'Only in Scotland: Why Scotland Needs You',
};
