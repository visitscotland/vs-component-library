import VsCheckbox from '@/components/elements/checkbox/Checkbox.vue';

export default {
    component: VsCheckbox,
    title: 'Elements/Checkbox',
    tags: ['autodocs'],
    argTypes: {

    },
};

const Template = (args, required) => ({
    components: {
        VsCheckbox,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsCheckbox v-bind="$props" required="${required}"></VsCheckbox>
    `,
});

const infoText = '<div>By signing up to the VisitScotland newsletter: <ul>'
    + '<li>I agree to receive inspiration, travel tips, news and offers from VisitScotland by email.</li>'
    + '<li>I agree to the terms of VisitScotland’sprivacy policy</li></ul></div>';

const base = {
    fieldName: 'cookieConsent',
    value: 'true',
    label: 'Yes, I confirm that the above statements apply',
    validationRules: {
    },
    validationMessages: {
    },
    invalid: false,
    genericValidation: {
    },
    hintText: '',
    infoText,
    triggerValidate: false,
    reAlertErrors: false,
};

export const Default = Template.bind({
});

Default.args = base;

export const Invalid = Template.bind({
});

Invalid.args = {
    ...base,
    invalid: true,
    validationRules: {
        required: true,
    },
    validationMessages: {
        required: 'This field is required',
    },
};
