import VsImg from '@/components/img/Img.vue';

export default {
    component: VsImg,
    title: 'Elements/Img',
    tags: ['autodocs'],
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
    src: 'images/placeholders/list-default.jpg',
    lowResImage: 'images/placeholders/generic-lqip.png',
    alt: '',
    fluid: false,
    fluidGrow: false,
    useGenericLqip: false,
    useLazyLoading: true,
};

export const Default = Template.bind({
});

Default.args = base;
