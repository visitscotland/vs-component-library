import VsLink from '@/components/elements/link/Link.vue';

export default {
    component: VsLink,
    title: 'Elements/Link',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsLink,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
      <VsLink href="#">dsfgdfgdfgdfg</VsLink>
  `,
});

export const Default = Template.bind({
});
