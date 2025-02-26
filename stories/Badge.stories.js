import VsBadge from '@/components/badge/VsBadge.vue';

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
        <VsBadge v-for="badge in args.badges">
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
