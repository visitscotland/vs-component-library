import VsImg from '@/components/elements/img/Img.vue';

export default {
  component: VsImg,
  title: 'Elements/Img',
};

const Template = args => ({
  components: { VsImg },
  setup() {
      return { args };
  },
  template: `
    <VsImg
      src="src/assets/images/placeholders/list-default.jpg"
    />
  `,
});

export const Default = Template.bind({});