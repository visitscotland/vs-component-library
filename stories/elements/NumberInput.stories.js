import VsNumberInput from '@/components/number-input/NumberInput.vue';

export default {
    component: VsNumberInput,
    title: 'NumberInput',
    tags: ['autodocs'],
};

const Template = (args, required) => ({
    components: {
        VsNumberInput,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <label for="args.fieldName">{{ args.label }}</label>
        <VsNumberInput v-bind="args" required="${required}"></VsNumberInput>
    `,
});

const base = {
    label: 'How many nights are you staying?',
    fieldName: 'length-of-stay',
    value: 0,
    hintText: '',
    clearButtonText: '',
    placeholder: '',
    reAlertErrors: false,
    autoComplete: true,
    invalid: false,
    triggerValidate: false,
    minimumNumber: 0,
    maximumNumber: 20,
};

export const Default = Template.bind({
});

Default.args = base;

export const WithValue = Template.bind({
});

WithValue.args = {
    ...base,
    value: 15,
};

export const AtMaximum = Template.bind({
});

AtMaximum.args = {
    ...base,
    value: 25,
    maximumNumber: 25,
};

export const HintText = Template.bind({
});

HintText.args = {
    ...base,
    hintText: 'We\'ll only use this to calculate your result',
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
