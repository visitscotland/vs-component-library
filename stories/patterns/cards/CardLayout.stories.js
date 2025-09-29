import VsCardLayout from '../../../src/templates/CardLayout.vue';

export default {
    component: VsCardLayout,
    title: 'Patterns/Cards/CardLayout',
    argTypes: {
    },
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['!autodocs'],
};

const Template = (args) => ({
    components: {
        VsCardLayout,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsCardLayout v-bind="args" />
    `,
});

export const SplitLinkGrid3 = Template.bind({
});
SplitLinkGrid3.args = {
    cardType: 'split',
    variant: 'grid',
    cardsPerRow: 3,
};

export const SplitLinkGrid4 = Template.bind({
});
SplitLinkGrid4.args = {
    cardType: 'split',
    variant: 'grid',
    cardsPerRow: 4,
};

export const LinkCardGrid3 = Template.bind({
});
LinkCardGrid3.args = {
    cardType: 'link',
    variant: 'grid',
    cardsPerRow: 3,
};

export const LinkCardGrid4 = Template.bind({
});
LinkCardGrid4.args = {
    cardType: 'link',
    variant: 'grid',
    cardsPerRow: 4,
};
