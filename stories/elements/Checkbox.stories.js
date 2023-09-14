import { within, waitFor } from '@storybook/testing-library';

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
        <VsCheckbox v-bind="args" required="${required}"></VsCheckbox>
    `,
});

const base = {
    fieldName: 'cookieConsent',
    value: 'checked',
    label: 'I accept the terms and conditions',
    invalid: false,
    hintText: '',
    infoText: '',
};

export const Default = Template.bind({
});

Default.args = base;

export const InfoText = Template.bind({
});

InfoText.args = {
    ...base,
    infoText: '<b>Terms and conditions</b>',
};

export const HintText = Template.bind({
});

HintText.args = {
    ...base,
    hintText: 'Required',
};

export const Invalid = Template.bind({
});

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
    const input = canvas.getByLabelText('I accept the terms and conditions');

    await waitFor(async() => {
        await input.focus();
    });

    await waitFor(async() => {
        await input.click();
    });

    await waitFor(async() => {
        await input.click();
    });

    await waitFor(async() => {
        await input.blur();
    });
};

export const Checked = Template.bind({
});

Checked.args = {
    ...base,
    value: '',
};

const GroupTemplate = (args) => ({
    components: {
        VsCheckbox,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <fieldset>
            <VsCheckbox
                v-for="item in args.items"
                :key="item.fieldName"
                v-bind="item"
            >
            </VsCheckbox>
        </fieldset>
    `,
});

export const CheckboxGroup = GroupTemplate.bind({
});

CheckboxGroup.args = {
    items: [
        {
            ...Default.args,
            fieldName: 'bus',
            label: 'Bus',
        },
        {
            ...Default.args,
            fieldName: 'train',
            label: 'Train',
        },
        {
            ...Default.args,
            fieldName: 'car',
            label: 'Car',
        },
        {
            ...Default.args,
            fieldName: 'walking',
            label: 'Walking',
        },
    ],
};
