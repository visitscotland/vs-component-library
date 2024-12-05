import VsHeading from '@/components/heading/Heading.vue';

export default {
    component: VsHeading,
    title: 'Heading',
    argTypes: {
        headingStyle: {
            options: ['display-l', 'display-m', 'display-s', 'display-xs', 'heading-xxl', 'heading-xl', 'heading-l', 'heading-m', 'heading-s', 'heading-xs', 'heading-xxs'],
            control: {
                type: 'select',
            },
        },
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
    default: 'Welcome to Scotland',
    'sub-heading': '',
    level: 1,
};

export const Default = Template.bind({
});

Default.args = {
    headingStyle: 'heading-l',
    ...base,
};

export const Display = Template.bind({
});

Display.args = {
    headingStyle: 'display-l',
    ...base,
};

export const WithSubheading = Template.bind({
});

WithSubheading.args = {
    headingStyle: 'heading-l',
    ...base,
    default: 'Heart of Neolithic Orkney',
    'sub-heading': 'Mainland, Orkney',
};

export const WithSubheadingDisplay = Template.bind({
});

WithSubheadingDisplay.args = {
    headingStyle: 'display-l',
    ...base,
    default: 'Welcome to VisitScotland',
    'sub-heading': 'What VisitScotland can do for you',
};
