import VsVideo from '@/components/video/Video.vue';

export default {
    component: VsVideo,
    title: 'Components/Media & data visualisation/Video',
    decorators: [() => ({
        template: '<div style="max-width: 520px;"><story /></div>',
    })],
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
        <div :class="args.jsDisabled ? 'no-js' : ''">
            <VsVideo v-bind="args"></VsVideo>
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

export const NoCookies = Template.bind();
NoCookies.args = {
    ...base,
};

NoCookies.decorators = [
    () => {
        window.bypassCookiesRequired = false;

        return {
            template: `
                <story/>
            `,
        };
    },
];

export const NoJavascript = Template.bind();
NoJavascript.args = {
    ...base,
    jsDisabled: true,
};
