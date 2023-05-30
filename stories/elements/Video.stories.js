import VsVideo from '@/components/elements/video/Video.vue';

export default {
    component: VsVideo,
    title: 'Elements/Video',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsVideo,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsVideo v-bind="$props"></VsVideo>
    `,
});

const base = {
    videoId: 'c05sg3G4oA4',
    errorMessage: 'Sorry, something\'s gone wrong. Please try again later',
    noJsMessage: 'You need Javascript enabled to see this video',
    noCookiesMessage: 'You need cookies enabled to see this video',
    cookieBtnText: 'Manage cookies',
};

export const Default = Template.bind({
});

Default.args = {
    ...base,
};
