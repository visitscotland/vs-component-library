import VsEmbedWrapper from '@/components/patterns/embed-wrapper/EmbedWrapper.vue';

export default {
    component: VsEmbedWrapper,
    title: 'Patterns/EmbedWrapper',
    tags: ['autodocs'],
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
        <div style="text-align: center;">
            <VsEmbedWrapper v-bind="args">
                <template v-if="args['embed-intro-copy']" v-slot:embed-intro-copy>{{ args['embed-intro-copy'] }}</template>
                <template v-if="args['embed-widget']" v-slot:embed-widget>{{ args['embed-widget'] }}</template>
            </VsEmbedWrapper>
        </div>
    `,
});

const base = {
    noCookiesRequired: false,
    'embed-intro-copy': 'Share your snaps with us by using #ScottishCastle or #VisitScotland   ',
    errorText: 'Sorry, there\'s been an error, please try again later',
    noCookieText: 'You need cookies enabled to view this content',
    noJsText: 'You need Javascript enabled to see this content',
    'embed-widget': 'Widget Goes Here',
};

export const Default = Template.bind({
});

Default.args = base;

export const NoCookiesRequired = Template.bind({
});

NoCookiesRequired.args = {
    ...base,
    noCookiesRequired: true,
};
