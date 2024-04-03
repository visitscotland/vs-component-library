import {
    userEvent, within, waitFor,
} from '@storybook/testing-library';

import VsForm from '@/components/form/Form.vue';

export default {
    component: VsForm,
    title: 'Form',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsForm,
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
            <VsForm
                v-bind="args"
            >
                <template v-slot:no-js v-if="args['no-js']">
                    <p>{{ args['no-js'] }}</p>
                </template>
            </VsForm>
        </div>
    `,
});

const base = {
    isMarketo: false,
    submitUrl: '/test/api/url',
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

export const Marketo = Template.bind({
});

Marketo.args = {
    ...base,
    isMarketo: true,
};

export const ShowingConditionalField = Template.bind({
});

ShowingConditionalField.args = base;

ShowingConditionalField.play = async({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(() => {
        const countryDropdown = canvas.getByLabelText('Country');

        userEvent.selectOptions(countryDropdown, ['United Kingdom (Scotland)']);
    }, {
        timeout: 15000,
        interval: 250,
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

export const NoJs = Template.bind({
});

NoJs.args = {
    ...base,
    jsDisabled: true,
};
