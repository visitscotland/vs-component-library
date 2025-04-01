import VsHeading from '@/components/heading/Heading.vue';

export default {
    component: VsHeading,
    title: 'Heading',
    argTypes: {
        headingStyle: {
            options: ['display-m', 'display-s', 'heading-xl', 'heading-l', 'heading-m', 'heading-s', 'heading-xs', 'heading-xxs', 'heading-xxxs'],
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
        </VsHeading>
    `,
});

const base = {
    default: 'Welcome to Scotland',
    level: 1,
    id: 'welcome-to-scotland',
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
    headingStyle: 'display-m',
    ...base,
};
