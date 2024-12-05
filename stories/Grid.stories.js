import VsContainer from '@/components/grid/Container.vue';
import VsRow from '@/components/grid/Row.vue';
import VsCol from '@/components/grid/Col.vue';

export default {
    component: VsCol,
    title: 'Grid',
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
        <vs-container :fluid="args.fluid">
            <vs-row>
                <vs-col v-bind="args" v-for="n in args.NumOfCols" :key="n" style="padding: .25rem;">
                    <div
                        v-if="${'default' in args}"
                        style="background-color: #e7f5f6; padding: .25rem 1rem;"
                    >
                        ${args.default}
                    </div>
                </vs-col>
            </vs-row>
        </vs-container>
    `,
});

const base = {
    default: 'cols="12"',
    cols: 12,
    NumOfCols: 1,
    fluid: false,
};

export const Container = Template.bind({
});

Container.args = {
    ...base,
    default: 'This is a fixed-width container',
    cols: 12,
    NumOfCols: 1,
};

export const ContainerFluid = Template.bind({
});

ContainerFluid.args = {
    ...base,
    default: 'This is a fluid container',
    cols: 12,
    NumOfCols: 1,
    fluid: true,
};

export const Row = Template.bind({
});

Row.args = {
    ...base,
    default: 'This is a row with three columns',
    cols: 4,
    NumOfCols: 3,
};

export const Col = Template.bind({
});

Col.args = {
    ...base,
    default: 'cols="12" md="4" lg="3"',
    cols: 12,
    md: 4,
    xl: 3,
    NumOfCols: 6,
};
