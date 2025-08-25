import VsSvg from '@/components/svg/Svg.vue';

export default {
    component: VsSvg,
    title: 'Components/Media & data visualisation/Svg',
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
        <VsSvg v-bind="args" fill="#000000">
            <template v-if="${'default' in args}" v-slot>${args.default}</template>
        </VsSvg>
    `,
});

const base = {
    path: 'visitscotland-logo',
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
