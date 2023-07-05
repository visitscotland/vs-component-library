import VsVideoCaption from '@/components/patterns/video-caption/VideoCaption.vue';
import VsImageWithCaption from '@/components/patterns/image-with-caption/ImageWithCaption.vue';

export default {
    component: VsVideoCaption,
    title: 'Patterns/VideoCaption',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsVideoCaption,
        VsImageWithCaption,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsImageWithCaption v-bind="args">
            <VsVideoCaption v-bind="args">
                <template v-if="${'video-title' in args}" v-slot:video-title>${args['video-title']}</template>
            </VsVideoCaption>
        </VsImageWithCaption>
    `,
});

const base = {
    videoId: 'h9bQwcndGfo',
    withToggleBtn: true,
    videoBtnText: 'Play Video',
    'video-title': 'Only in Scotland: Why Scotland Needs You',
    noJsMessage: 'JavaScript needs to be enabled to watch videos',
    noCookiesMessage: 'Please accept cookies to watch videos',
    cookieLinkText: 'Accept cookies here',
    errorMessage: 'Something went wrong, please try again later',
};

export const Default = Template.bind({
});

Default.args = base;
