import VsBadge from '@/components/badge/Badge.vue';

export default {
    component: VsBadge,
    title: 'Badge',
};
const Template = (args) => ({
    components: {
        VsBadge,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsBadge v-bind="args" v-for="badge in args.badges">
            {{ badge }}
        </VsBadge>
    `,
});

const base = {
    badges: [
        'Read time',
        'Content type',
    ],
};

export const Default = Template.bind();

Default.args = base;

export const Subtle = Template.bind({
});

Subtle.args = {
    ...base,
    variant: 'subtle',
};
