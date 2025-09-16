import VsSectionHeader from '@/components/section-header/SectionHeader.vue';
import VsButton from '@/components/button/Button.vue';

export default {
    component: VsSectionHeader,
    parameters: {
        layout: 'fullscreen',
    },
    title: 'Components/Layout & content structure/SectionHeader',
    argTypes: {
        heading: {
            control: {
                type: 'text',
            },
        },
        lede: {
            control: {
                type: 'text',
            },
        },
        withAction: {
            control: { type: 'boolean' },
        },
    },
};

const Template = (args) => ({
    components: {
        VsSectionHeader,
        VsButton,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsSectionHeader v-bind="args">
            <template v-slot:section-header-lede v-if="args.lede">
                <div v-html="args.lede" />
            </template>
            <template v-slot:section-header-actions v-if="args.withAction">
                <VsButton variant="secondary" href="#">
                    Discover more
                </VsButton>
            </template>
        </VsSectionHeader>
    `,
});

const base = {
    heading: 'Explore the lochs and mountains of Scotland',
};

export const WithLede = Template.bind({
});

WithLede.args = {
    lede: `
        <p>Northwest Sutherland is a stunning landscape of perfect sandy beaches and sweeping moorland studded with glittering lochans, overlooked by some of Scotland's most remarkable mountains, individual peaks each with great character.</p>
    `,
    ...base,
};

export const WithAction = Template.bind({
});

WithAction.args = {
    withAction: true,
    ...base,
};

export const WithAll = Template.bind({
});

WithAll.args = {
    lede: `
        <p>Northwest Sutherland is a stunning landscape of perfect sandy beaches and sweeping moorland studded with glittering lochans, overlooked by some of Scotland's most remarkable mountains, individual peaks each with great character.</p>
    `,
    withAction: true,
    ...base,
};

export const HeadingOnly = Template.bind({
});

HeadingOnly.args = {
    ...base,
};

export const StackedMobile = Template.bind({
});

StackedMobile.args = {
    lede: `
        <p>Northwest Sutherland is a stunning landscape of perfect sandy beaches and sweeping moorland studded with glittering lochans, overlooked by some of Scotland's most remarkable mountains, individual peaks each with great character.</p>
    `,
    withAction: true,
    ...base,
};
StackedMobile.globals = {
    viewport: {
        value: 'mobile1',
    },
};
