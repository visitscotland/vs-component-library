import VsHeading from '@/components/heading/Heading.vue';

export default {
    component: VsHeading,
    title: 'Heading',
    tags: ['autodocs'],
    argTypes: {
        level: {
            options: [1, 2, 3, 4, 5, 6],
            control: {
                type: 'inline-radio',
                labels: {
                    1: 'h1',
                    2: 'h2',
                    3: 'h3',
                    4: 'h4',
                    5: 'h5',
                    6: 'h6',
                },
            },
        },
        overrideStyleLevel: {
            options: [1, 2, 3, 4, 5, 6],
            control: {
                type: 'inline-radio',
                labels: {
                    1: 'h1',
                    2: 'h2',
                    3: 'h3',
                    4: 'h4',
                    5: 'h5',
                    6: 'h6',
                },
            },
        },
    },
};

const Template = (args) => ({
    components: {
        VsHeading,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsHeading v-bind="args">
            <template v-if="${'default' in args}" v-slot>${args.default}</template>
            <template v-if="${'sub-heading' in args}" v-slot:sub-heading>
                ${args['sub-heading']}
            </template>
        </VsHeading>
    `,
});

const base = {
    default: 'VisitScotland',
    'sub-heading': '',
    level: 1,
    alternative: false,
    thin: false,
};

export const Default = Template.bind(
    {
    },
);

Default.args = {
    ...base,
};

export const OverrideStyleLevel = Template.bind({
});

OverrideStyleLevel.args = {
    ...base,
    overrideStyleLevel: 3,
};

export const WithSubheading = Template.bind({
});

WithSubheading.args = {
    ...base,
    default: 'Heart of Neolithic Orkney',
    'sub-heading': 'Mainland, Orkney',
};

export const Thin = Template.bind({
});

Thin.args = {
    ...base,
    default: 'Find out more',
    thin: true,
};

export const Alternative = Template.bind({
});

Alternative.args = {
    ...base,
    default: 'Find experiences',
    level: '2',
    alternative: true,
};
