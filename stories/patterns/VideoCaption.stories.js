import VsVideoCaption from '@/components/patterns/video-caption/VideoCaption.vue';
import VsImageWithCaption from '@/components/patterns/image-with-caption/ImageWithCaption.vue';

import VsVideo from '@/components/elements/video/Video.vue';

export default {
    component: VsVideoCaption,
    title: 'Patterns/VideoCaption',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsVideoCaption,
        VsImageWithCaption,
        VsVideo,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsVideoCaption v-bind="args">
            <template v-if="${'video-title' in args}" v-slot:video-title>${args['video-title']}</template>
        </VsVideoCaption>

        <p>The video should be in a modal to test the play controls properly, currently only the video name/duration sharing
        via store can be tested.</p>

        <VsVideo v-bind="args"></VsVideo>
    `,
});

const base = {
    videoId: 'h9bQwcndGfo',
    withToggleBtn: true,
    videoBtnText: 'Play Video',
    'video-title': 'Only in Scotland: Why Scotland Needs You',
    noJsMessage: 'JavaScript needs to be enabled to watch videos',
    noCookiesMessage: 'Please accept cookies to watch videos',
    cookieBtnText: 'Accept cookies here',
    errorMessage: 'Something went wrong, please try again later',
};

export const Default = Template.bind({
});

Default.args = base;
