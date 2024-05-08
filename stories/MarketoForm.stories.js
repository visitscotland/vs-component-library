import {
    userEvent, within, waitFor,
} from '@storybook/test';

import VsMarketoForm from '@/components/marketo-form/MarketoForm.vue';

export default {
    component: VsMarketoForm,
    title: 'MarketoForm',
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

export const ShowingConditionalField = Template.bind({
});

ShowingConditionalField.args = base;

ShowingConditionalField.play = async({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async() => {
        const select = canvas.getByLabelText('Country');
        await userEvent.selectOptions(select, ['United Kingdom (Scotland)']);
    });
};

export const Invalid = Template.bind({
});

Invalid.args = base;

Invalid.play = async({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(() => {
        const submit = canvas.getByText('Subscribe');
        userEvent.click(submit);
    }, {
        timeout: 15000,
        interval: 250,
    });
};

export const NoJavascript = Template.bind({
});

NoJavascript.args = {
    ...base,
    jsDisabled: true,
};
