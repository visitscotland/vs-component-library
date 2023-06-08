import VsTag from '@/components/elements/tag/Tag.vue';

export default {
    component: VsTag,
    title: 'Elements/Tag',
    tags: ['autodocs'],
    argTypes: {

    },
};

const Template = (args) => ({
    components: {
        VsTag,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsTag v-bind="args">
            <template v-if="${'default' in args}" v-slot>${args.default}</template>
        </VsTag>
    `,
});

const base = {
    default: 'Something',
    href: '#',
};

export const Default = Template.bind({
});

Default.args = base;
