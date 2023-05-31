import VsContainer from '@/components/elements/grid/Container.vue';
import VsRow from '@/components/elements/grid/Row.vue';
import VsCol from '@/components/elements/grid/Col.vue';

export default {
    component: VsCol,
    title: 'Elements/Grid',
    tags: ['autodocs'],
    decorators: [
        (story) => ({
            components: {
                story,
                VsContainer,
                VsRow,
            },
            template: '<vs-container><vs-row><story /></vs-row></vs-container>',
        }),
    ],
    argTypes: {
        cols: {
            control: {
                type: 'number',
            },
        },
        sm: {
            control: {
                type: 'number',
            },
        },
        md: {
            control: {
                type: 'number',
            },
        },
        lg: {
            control: {
                type: 'number',
            },
        },
    },
};

const Template = (args) => ({
    components: {
        VsContainer,
        VsRow,
        VsCol,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsCol v-bind="$props">
            <template v-if="${'default' in args}" v-slot>${args.default}</template>
        </VsCol>
    `,
});

const defaultSlot = `<div style="border: 1px solid black; padding: 1rem;">
        <p>Test</p>
    </div>`;

const base = {
    default: defaultSlot,
    cols: 12,
};

export const Default = Template.bind({
});

Default.args = base;

export const Responsive = Template.bind({
});

Responsive.args = {
    ...base,
    sm: 6,
    md: 9,
    lg: 12,
};
