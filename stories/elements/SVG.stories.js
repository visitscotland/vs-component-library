import VsSvg from '@/components/elements/svg/Svg.vue';

export default {
    component: VsSvg,
    title: 'Elements/Svg',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsSvg,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsSvg v-bind="args">
            <template v-if="${'default' in args}" v-slot>${args.default}</template>
        </VsSvg>
    `,
});

const base = {
    path: 'visitscotland',
    height: '',
};

export const Default = Template.bind({
});

Default.args = base;

export const DefinedSize = Template.bind({
});

DefinedSize.args = {
    ...base,
    height: '150',
};
