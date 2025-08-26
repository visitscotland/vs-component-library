import VsEmbedWrapper from '@/components/embed-wrapper/EmbedWrapper.vue';

export default {
    component: VsEmbedWrapper,
    title: 'Components/Media & data visualisation/EmbedWrapper',
};

const Template = (args) => ({
    components: {
        VsEmbedWrapper,
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
            <div style="text-align: center;">
                <VsEmbedWrapper v-bind="args">
                    <template v-if="args['embed-intro-copy']" v-slot:embed-intro-copy>
                        {{ args['embed-intro-copy'] }}
                    </template>
                    <template v-if="args['embed-widget']" v-slot:embed-widget>
                        {{ args['embed-widget'] }}
                    </template>
                    <template v-if="args['embed-button-text']" v-slot:embed-button-text>
                        {{ args['embed-button-text'] }}
                    </template>
                </VsEmbedWrapper>
            </div>
        </div>
    `,
});

const base = {
    jsDisabled: false,
    noCookiesRequired: true,
    'embed-intro-copy': 'Share your snaps with us by using #ScottishCastle or #VisitScotland   ',
    'embed-button-text': 'Manage cookie settings',
    errorText: 'Sorry, there\'s been an error, please try again later',
    noCookieText: 'You need cookies enabled to view this content',
    noJsText: 'You need Javascript enabled to see this content',
    'embed-widget': 'Widget Goes Here',
    extraContent: '',
};

export const Default = Template.bind({
});

Default.args = base;

export const NoCookies = Template.bind({
});

NoCookies.args = {
    ...base,
    noCookiesRequired: false,
};

NoCookies.decorators = [
    () => {
        window.bypassCookieChecks = false;

        return {
            template: `
                <story/>
            `,
        };
    },
];

export const ExtraContent = Template.bind({
});

ExtraContent.args = {
    ...base,
    noCookiesRequired: false,
    extraContent: 'You can also see photos of this location on our <a href="#">Instagram page</a>.',
};

ExtraContent.decorators = [
    () => {
        window.bypassCookieChecks = false;

        return {
            template: `
                <story/>
            `,
        };
    },
];

export const NoJavascript = Template.bind({
});

NoJavascript.args = {
    ...base,
    jsDisabled: true,
};
