import VsRadioButton from '@/components/radio-button/RadioButton.vue';

export default {
    component: VsRadioButton,
    title: 'RadioButton',
    argTypes: {

    },
};

const Template = (args) => ({
    components: {
        VsRadioButton,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsRadioButton v-bind="args">
            <template v-if="${'default' in args}" v-slot>${args.default}</template>
        </VsRadioButton>
    `,
});

const base = {
    fieldName: 'transportModeTo',
    label: 'How are you getting here?',
    options: [
        {
            text: 'I\'m already here',
            value: 'noTravel',
            icon: 'fa-regular fa-city',
        },
        {
            text: 'Plane',
            value: 'plane',
            icon: 'fa-regular fa-plane',
        },
        {
            text: 'Car (Petrol)',
            value: 'petrolCar',
            icon: 'fa-regular fa-car-side',
        },
    ],
};

export const Default = Template.bind({
});

Default.args = base;

export const Selected = Template.bind({
});

Selected.args = {
    ...base,
    value: 'plane',
};

export const WithHint = Template.bind({
});

WithHint.args = {
    ...base,
    hintText: 'Select the option that best describes your journey to get to Scotland.',
};

export const Disabled = Template.bind({
});

Disabled.args = {
    ...base,
    options: [
        {
            text: 'I\'m already here',
            value: 'noTravel',
            icon: 'fa-regular fa-city',
        },
        {
            text: 'Plane',
            value: 'plane',
            icon: 'fa-regular fa-plane',
        },
        {
            text: 'Car (Petrol)',
            value: 'petrolCar',
            icon: 'fa-regular fa-car-side',
            disabled: true,
        },
    ],
};
