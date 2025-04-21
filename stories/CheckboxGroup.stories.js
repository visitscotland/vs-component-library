import { within, waitFor } from '@storybook/test';
import VsCheckboxGroup from '@/components/checkbox-group/CheckboxGroup.vue';

export default {
    component: VsCheckboxGroup,
    title: 'CheckboxGroup',
};

const Template = (args, required) => ({
    components: {
        VsCheckboxGroup,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsCheckboxGroup v-bind="args" required="${required}" />
    `,
});

const base = {
    fieldName: 'sector',
    hintText: '',
    invalid: false,
    label: 'Sector',
    checkboxItems: [
        {
            fieldName: 'accommodation',
            label: 'Accommodation',
            value: 'checked',
        },
        {
            fieldName: 'active-outdoor',
            label: 'Active and Outdoor',
            value: 'checked',
        },
        {
            fieldName: 'events-festivals',
            label: 'Events and Festivals',
            value: 'checked',
        },
        {
            fieldName: 'food-drink',
            label: 'Food and Drink',
            value: 'checked',
        },
        {
            fieldName: 'tours',
            label: 'Tours, Guides and Transport',
            value: 'checked',
        },
        {
            fieldName: 'visitor-attractions',
            label: 'Visitor Attractions',
            value: 'checked',
        },
        {
            fieldName: 'other',
            label: 'Other',
            value: 'checked',
        },
    ],
};

export const Default = Template.bind();

Default.args = base;

export const HintText = Template.bind();

HintText.args = {
    ...base,
    hintText: 'Please select the sector that best describes your business. We will use this information to tailor the information we send to you.',
};

export const Invalid = Template.bind();

Invalid.args = {
    ...base,
    validationRules: {
        minLength: 2,
        required: true,
    },
    genericValidation: {
        minLength: 'Please select two or more sectors',
    },
};

Invalid.play = async({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Accommodation');

    await waitFor(async() => {
        await input.focus();
    });

    await waitFor(async() => {
        await input.click();
    });

    await waitFor(async() => {
        await input.blur();
    });
};
