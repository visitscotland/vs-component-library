import VsHeading from '@/components/elements/heading/Heading.vue';

export default {
    component: VsHeading,
    title: 'Elements/Heading',
    tags: ['autodocs'],
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
        <VsHeading v-bind="$props">
            <template v-if="${'default' in args}" v-slot>${args.default}</template>
            <template v-if="${'sub-heading' in args}" v-slot:sub-heading>${
        args['sub-heading']
    }</template>
        </VsHeading>
    `,
});

const base = {
    default: 'VisitScotland',
    'sub-heading': '',
    overrideStyleLevel: null,
    alternative: false,
    thin: false,
};

export const Default = Template.bind({
});

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
    'sub-heading': 'test something',
};

export const Thin = Template.bind({
});

Thin.args = {
    ...base,
    thin: true,
};

export const Alternative = Template.bind({
});

Alternative.args = {
    ...base,
    alternative: true,
};
