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
        <VsMarketoForm
            v-bind="args"
        >
        </VsMarketoForm>
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
};

export const Default = Template.bind({
});

Default.args = base;
