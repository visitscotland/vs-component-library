import VsContainer from '@/components/elements/grid/Container.vue';
import VsRow from '@/components/elements/grid/Row.vue';
import VsCol from '@/components/elements/grid/Col.vue';

export default {
    component: VsCol,
    title: 'Elements/Grid',
    tags: ['autodocs'],
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
        <vs-container>
            <vs-row>
                <VsCol v-bind="args" style="border: 1px solid black;">
                    <template v-if="${'default' in args}" v-slot>${args.default}</template>
                </VsCol>
            </vs-row>
        </vs-container>
    `,
});

const defaultSlot = `<p>cols="12"</p>`;

const base = {
    default: defaultSlot,
    cols: 12,
};

export const Default = Template.bind({
});

Default.args = base;

export const SetWidth = Template.bind({
});

SetWidth.args = {
    ...base,
    default: '<p>cols="6"</p>',
    cols: 6,
};

export const Responsive = Template.bind({
});

Responsive.args = {
    ...base,
    default: '<p>sm="12" md="6" lg="4"</p>',
    sm: 12,
    md: 6,
    lg: 4,
};
