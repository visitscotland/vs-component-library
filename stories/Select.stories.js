import {
    within, waitFor, userEvent,
} from '@storybook/test';

import VsSelect from '@/components/select/Select.vue';

export default {
    component: VsSelect,
    title: 'Select',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsSelect,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <label :for="args.fieldName">Please enter a country</label>
        <VsSelect v-bind="args" required="true"></VsSelect>
    `,
});

const base = {
    fieldName: 'country',
    options: [
        {
            value: '',
            text: '',
        },
        {
            value: 'england',
            text: 'England',
        },
        {
            value: 'northernireland',
            text: 'Northern Ireland',
        },
        {
            value: 'scotland',
            text: 'Scotland',
        },
        {
            value: 'wales',
            text: 'Wales',
        },
        {
            value: 'other',
            text: 'Rest of World',
        },
    ],
    validationRules: {
        invalidVal: 'other',
    },
    validationMessages: {
        noInvalid: 'To qualify, you must be based in the uk',
    },
    invalid: false,
    genericValidation: {
    },
    hintText: '',
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
    validationRules: {
        invalidVal: 'other',
    },
    validationMessages: {
        noInvalid: 'To qualify, you must be based in the uk',
    },
};

Invalid.play = async({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByLabelText('Please enter a country');

    await waitFor(async() => {
        await userEvent.selectOptions(select, ['other']);
    });

    await waitFor(async() => {
        await select.blur();
    });
};

export const Selected = Template.bind({
});

Selected.args = {
    ...base,
    value: 'scotland',
};

export const HintText = Template.bind({
});

HintText.args = {
    ...base,
    hintText: 'If you\'re not based in the UK, please choose \'Rest of the world\'',
};
