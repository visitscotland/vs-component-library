import VsImg from '@/components/elements/img/Img.vue';

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
        v-bind="$props"
        src="src/assets/images/placeholders/list-default.jpg"
    />
  `,
});

export const Default = Template.bind({
});
