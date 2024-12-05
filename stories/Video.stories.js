import VsVideo from '@/components/video/Video.vue';
import VsVideoCaption from '@/components/video-caption/VideoCaption.vue';

export default {
    component: VsVideo,
    title: 'Video',
    decorators: [() => ({
        template: '<div style="max-width: 520px;"><story /></div>',
    })],
};

const Template = (args) => ({
    components: {
        VsVideo,
        VsVideoCaption,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <div
            :class="args.jsDisabled ? 'no-js' : ''"
        >
            <VsVideo v-bind="args"></VsVideo>

            <VsVideoCaption :videoId="args.videoId" v-if="${'video-title' in args}">
                <template v-slot:video-title>
                    ${args['video-title']}
                </template>
            </VsVideoCaption>
        </div>
    `,
});

const base = {
    videoId: 'c05sg3G4oA4',
    errorMessage: 'Sorry, something\'s gone wrong. Please try again later',
    noJsMessage: 'You need Javascript enabled to see this video',
    noCookiesMessage: 'You need cookies enabled to see this video',
    cookieBtnText: 'Manage cookies',
    jsDisabled: false,
};

export const Default = Template.bind();
Default.args = {
    ...base,
};

export const WithCaption = Template.bind();
WithCaption.args = {
    ...base,
    'video-title': 'Only in Scotland: Why Scotland Needs You',
};

export const NoJavascript = Template.bind();
NoJavascript.args = {
    ...base,
    jsDisabled: true,
};
