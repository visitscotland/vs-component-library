import VsRecaptcha from '@/components/recaptcha/Recaptcha.vue';

export default {
    component: VsRecaptcha,
    title: 'Components/Actions & controls/Recaptcha',
};

const Template = (args) => ({
    components: {
        VsRecaptcha,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsRecaptcha v-bind="args">
        </VsRecaptcha>
    `,
});

const base = {
    errorMsg: 'Please check here to verify your submission',
    reAlertErrors: false,
    invalid: false,
    language: 'en',
    textareaLabel: 'Does not need any text',
};

export const Default = Template.bind({
});

Default.args = base;

export const Invalid = Template.bind({
});

Invalid.args = {
    ...base,
    invalid: true,
};
