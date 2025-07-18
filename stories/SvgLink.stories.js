import VsSvgLink from '@/components/svg-link/SvgLink.vue';

export default {
    component: VsSvgLink,
    title: 'SvgLink',
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
    svgPath: 'visitscotland-logo',
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
    svgPath: 'brandscotland-logo',
    svgFill: '#ffffff',
    svgWidth: '180',
    linkVariant: 'on-dark',
};

OnDark.globals = {
    backgrounds: {
        value: 'dark',
    },
};
