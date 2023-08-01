import VsInput from '@/components/elements/input/Input.vue';

export default {
    component: VsInput,
    title: 'Elements/Input',
    tags: ['autodocs'],
};

const Template = (args, required) => ({
    components: {
        VsInput,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <label for="args.fieldName">Email address</label>
        <VsInput v-bind="args" required="${required}"></VsInput>
    `,
});

const base = {
    fieldName: 'email-address',
    value: '',
    type: 'email',
    hintText: '',
    clearButtonText: '',
    placeholder: '',
    reAlertErrors: false,
    autoComplete: true,
    invalid: false,
    triggerValidate: false,
};

export const Default = Template.bind({
});

Default.args = base;

export const Placeholder = Template.bind({
});

Placeholder.args = {
    ...base,
    placeholder: 'e.g john.smith@gmail.com',
};

export const WithValue = Template.bind({
});

WithValue.args = {
    ...base,
    value: 'john.smith@gmail.com',
};

export const HintText = Template.bind({
});

HintText.args = {
    ...base,
    hintText: 'We\'ll only use this to email you our newsletter.',
};

export const Required = Template.bind({
});

Required.args = {
    ...base,
    validationRules: {
        required: true,
    },
    genericValidation: {
        required: 'This field is required',
    },
};

export const Invalid = Template.bind({
});

Invalid.args = {
    ...base,
    invalid: true,
    validationRules: {
        required: true,
    },
    genericValidation: {
        required: 'This field is required',
    },
};
