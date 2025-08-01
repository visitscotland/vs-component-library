import {
    userEvent, within, waitFor,
} from 'storybook/test';

import VsForm from '@/components/form/Form.vue';

export default {
    component: VsForm,
    title: 'Form',
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
                <template
                    v-slot:hidden-fields
                    v-if="args['hidden-fields']"
                >
                    <input
                        v-for="field in args['hidden-fields']"
                        type="hidden"
                        :name="field.name"
                        :value="field.value"
                    />
                </template>

                <template v-slot:no-js v-if="args['no-js']">
                    <p>{{ args['no-js'] }}</p>
                </template>

                <template v-slot:submit-error v-if="args['submit-error']">
                    {{ args['submit-error'] }}
                </template>
            </VsForm>
        </div>
    `,
});

const base = {
    isMarketo: true,
    submitUrl: '/test/api/url',
    dataUrl: './fixtures/forms/form-example.json',
    messagingUrl: './fixtures/forms/messaging.json',
    countryListUrl: './fixtures/forms/countries.json',
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

export const FEPL = Template.bind({
});

FEPL.args = {
    ...base,
    isMarketo: false,
    submissionType: 'fepl',
    dataUrl: '/fixtures/forms/fepl-form-example.json',
};

export const HiddenFields = Template.bind({
});

HiddenFields.args = {
    ...base,
    isMarketo: false,
    submissionType: 'breg',
    'hidden-fields': [
        {
            name: 'activity_description',
            value: 'Website opt in for Snow Alerts (ski) and VS Email',
        },
        {
            name: 'activity_source',
            value: 'E-News Signups',
        },
    ],
};

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
