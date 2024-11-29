import VsImg from '@/components/img/Img.vue';

export default {
    component: VsImg,
    title: 'Img',
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

export const WebpWithResizer = Template.bind({
});

WebpWithResizer.args = {
    ...base,
    src: 'https://www.visitscotland.com/binaries/content/gallery/visitscotland/cms-images/2024/10/04/lady-marys-walk',
};
