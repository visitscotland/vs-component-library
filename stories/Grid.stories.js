import VsContainer from '@/components/grid/Container.vue';
import VsRow from '@/components/grid/Row.vue';
import VsCol from '@/components/grid/Col.vue';

export default {
    component: VsCol,
    title: 'Grid',
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
                <VsCol v-bind="args" v-for="n in [1,2,3]" :key="n" style="padding: .25rem;">
                    <div
                        v-if="${'default' in args}"
                        style="background-color: #e7f5f6; padding: .25rem 1rem;"
                    >
                        ${args.default}
                    </div>
                </VsCol>
            </vs-row>
        </vs-container>
    `,
});

const defaultSlot = 'cols="12"';

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
    default: 'cols="6"',
    cols: 6,
};

export const Responsive = Template.bind({
});

Responsive.args = {
    ...base,
    default: 'sm="12" md="6" lg="4"',
    sm: 12,
    md: 6,
    lg: 4,
};
