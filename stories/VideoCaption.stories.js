import VsVideoCaption from '@/components/video-caption/VideoCaption.vue';
import VsImageWithCaption from '@/components/image-with-caption/ImageWithCaption.vue';
import VsModal from '@/components/modal/Modal.vue';

import VsVideo from '@/components/video/Video.vue';
import {
    VsRow,
    VsCol,
} from '@/components/grid';

export default {
    component: VsVideoCaption,
    title: 'VideoCaption',
    tags: ['autodocs'],
    decorators: [() => ({
        template: '<div style="max-width: 500px; margin-top: 4rem;"><story /></div>',
    })],
};

const Template = (args) => ({
    components: {
        VsVideoCaption,
        VsImageWithCaption,
        VsModal,
        VsVideo,
        VsRow,
        VsCol,
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

        <VsModal
            :closeBtnText="args.closeBtnText"
            :modalId="args.videoId"
            :isVideoModal="true"
        >
            <VsRow>
                <VsCol cols="12">
                    <VsVideo
                        v-bind="args"
                        class="mb-200"
                    >
                    </VsVideo>
                </VsCol>
            </VsRow>
        </VsModal>
    `,
});

const base = {
    videoId: 'h9bQwcndGfo',
    withToggleBtn: true,
    videoBtnText: 'Play Video',
    'video-title': 'Only in Scotland: Why Scotland Needs You',
    noJsMessage: 'JavaScript needs to be enabled to watch videos',
    errorMessage: 'Something went wrong, please try again later',
    closeBtnText: 'Close',
};

export const Default = Template.bind({
});

Default.args = base;

export const Narrow = Template.bind({
});

Narrow.args = {
    ...base,
    variant: 'narrow',
};
