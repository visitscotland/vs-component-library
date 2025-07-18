import { within, waitFor } from 'storybook/test';

import VsCheckbox from '@/components/checkbox/Checkbox.vue';

export default {
    component: VsCheckbox,
    title: 'Checkbox',
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

export const Checked = Template.bind({
});

Checked.args = {
    ...base,
    value: '',
};

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

export const Disabled = Template.bind({
});

Disabled.args = {
    ...base,
    disabled: true,
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

export const SmallSize = Template.bind();
SmallSize.args = {
    ...base,
    size: 'sm',
};
