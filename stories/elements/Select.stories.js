import VsSelect from '@/components/elements/select/Select.vue';

export default {
    component: VsSelect,
    title: 'Elements/Select',
    tags: ['autodocs'],
    decorators: [
        (story) => ({
            components: {
                story,
            },
            template: `
                <label>Please enter a country</label>
                <story />
            `,
        }),
    ],
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
    value: 'other',
    invalid: true,
    validationRules: {
        invalidVal: 'other',
    },
    validationMessages: {
        invalidVal: 'To qualify, you must be based in the uk',
    },
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
