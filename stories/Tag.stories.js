import VsTag from '@/components/tag/Tag.vue';

export default {
    component: VsTag,
    title: 'Components/Actions & controls/Tag',
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
    default: 'Things to do',
    href: '#',
};

export const Default = Template.bind({
});

Default.args = base;
