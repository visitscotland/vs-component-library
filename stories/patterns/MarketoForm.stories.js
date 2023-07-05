import VsMarketoForm from '@/components/patterns/marketo-form/MarketoForm.vue';

export default {
    component: VsMarketoForm,
    title: 'Patterns/MarketoForm',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsMarketoForm,
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
            <VsMarketoForm
                v-bind="args"
            >
                <template v-slot:no-js v-if="args['no-js']">
                    <p>{{ args['no-js'] }}</p>
                </template>
            </VsMarketoForm>
        </div>
    `,
});

const base = {
    dataUrl: '/fixtures/marketo-forms/form-example.json',
    messagingUrl: '/fixtures/marketo-forms/messaging.json',
    countryListUrl: '/fixtures/marketo-forms/countries.json',
    marketoInstance: '',
    munchkinId: '',
    language: 'en',
    isProd: false,
    recaptchaTextareaLabel: 'Does not need any text',
    'submit-error': 'We\'re sorry there\'s been a problem, please try again later.',
    submitting: 'We\'re just submitting your form',
    'no-js': 'You need JavaScript enabled to be able to display our newsletter subscription form',
    jsDisabled: false,
};

export const Default = Template.bind({
});

Default.args = base;

export const NoJs = Template.bind({
});

NoJs.args = {
    ...base,
    jsDisabled: true,
};
