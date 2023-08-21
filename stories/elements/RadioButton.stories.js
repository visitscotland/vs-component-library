import VsRadioButton from '@/components/elements/radio-button/RadioButton.vue';

export default {
    component: VsRadioButton,
    title: 'Elements/RadioButton',
    tags: ['autodocs'],
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
            icon: 'city',
        },
        {
            text: 'Plane',
            value: 'plane',
            icon: 'plane',
        },
        {
            text: 'Car (Petrol)',
            value: 'petrolCar',
            icon: 'car',
        },
    ],
};

export const Default = Template.bind({
});

Default.args = base;
