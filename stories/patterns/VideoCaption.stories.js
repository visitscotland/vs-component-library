import VsVideoCaption from '@/components/patterns/video-caption/VideoCaption.vue';

export default {
    component: VsVideoCaption,
    title: 'Patterns/VideoCaption',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsVideoCaption,
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
    `,
});

const base = {
    videoId: 'h9bQwcndGfo',
    withToggleBtn: true,
    videoBtnText: 'Play Video',
    'video-title': 'Only in Scotland: Why Scotland Needs You',

    // These should come from image with caption, not yet ported

    // noJsMessage: 'JavaScript needs to be enabled to watch videos',
    // noCookiesMessage: 'Please accept cookies to watch videos',
    // cookieLinkText: 'Accept cookies here',
    // errorMessage: 'Something went wrong, please try again later',
};

export const Default = Template.bind({
});

Default.args = base;
