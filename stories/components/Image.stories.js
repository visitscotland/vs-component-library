import VsImg from '@/components/img/Img.vue';

export default {
    component: VsImg,
    title: 'Components/Media & data visualisation/Img',
};

const Template = (args) => ({
    components: {
        VsImg,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
    <VsImg
        v-bind="args"
    />
  `,
});

const base = {
    src: 'images/placeholders/placeholder-img.jpg',
};

export const Default = Template.bind({
});

Default.args = base;

export const FluidGrow = Template.bind({
});

FluidGrow.args = {
    ...base,
    fluidGrow: true,
};

export const Fluid = Template.bind({
});

Fluid.args = {
    ...base,
    fluid: true,
};

export const Svg = Template.bind({
});

Svg.args = {
    ...base,
    src: 'svg/highland-cow.svg',
};

