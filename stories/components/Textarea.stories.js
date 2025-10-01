import {
    within, waitFor, userEvent,
} from 'storybook/test';
import VsTextarea from '@/components/textarea/Textarea.vue';

export default {
    component: VsTextarea,
    title: 'Components/Actions & controls/Textarea',
};

const Template = (args) => ({
    components: {
        VsTextarea,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <label :for="args.fieldName">{{ args.label }}</label>
        <VsTextarea v-bind="args" />
    `,
});

const base = {
    label: 'Please use the space to tell use about your enquiry.',
    fieldName: 'details',
    value: '',
    hintText: '',
    clearButtonText: '',
    placeholder: '',
    reAlertErrors: false,
    autoComplete: true,
    invalid: false,
    triggerValidate: false,
};

export const Default = Template.bind();

Default.args = base;

export const Placeholder = Template.bind();

Placeholder.args = {
    ...base,
    placeholder: 'Enter your text',
};

export const WithValue = Template.bind();

WithValue.args = {
    ...base,
    value: 'I\'d like to find more information about how VisitScotland can help my events business',
};

export const HintText = Template.bind();

HintText.args = {
    ...base,
    hintText: 'Please provide as much relevant information as you can that will help our team assist you.',
};

export const Invalid = Template.bind();

Invalid.args = {
    ...base,
    validationRules: {
        required: true,
    },
    genericValidation: {
        required: 'This field is required',
    },
};

Invalid.play = async({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText(base.label);

    await waitFor(async() => {
        await input.focus();
    });

    await waitFor(async() => {
        await userEvent.type(input, ' ');
    });

    await waitFor(async() => {
        await input.blur();
    });
};

export const Disabled = Template.bind();

Disabled.args = {
    ...base,
    disabled: true,
};
