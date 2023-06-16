import VsSvgLink from '@/components/elements/svg-link/SvgLink.vue';

export default {
    component: VsSvgLink,
    title: 'Elements/SvgLink',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsSvgLink,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsSvgLink v-bind="args">
            <template v-if="${'default' in args}" v-slot>${args.default}</template>
        </VsSvgLink>
    `,
});

const base = {
    href: 'https://visitscotland.com',
    linkAltText: 'VisitScotland Home',
    svgPath: 'visitscotland',
    svgFill: '#700e57',
    svgHeight: '',
    svgWidth: '',
    linkVariant: 'primary',
};

export const Default = Template.bind({
});

Default.args = base;

export const OnDark = Template.bind({
});

OnDark.args = {
    ...base,
    linkVariant: 'on-dark',
};

OnDark.parameters = {
    backgrounds: {
        default: 'Dark',
    },
};
