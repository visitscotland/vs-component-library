import VsImg from '@/components/img/Img.vue';

export default {
    component: VsImg,
    title: 'Img',
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
    lowResImage: 'images/placeholders/generic-lqip.jpg',
    alt: '',
    fluid: false,
    fluidGrow: false,
    useGenericLqip: false,
    useLazyLoading: true,
};

export const Default = Template.bind({
});

Default.args = base;
