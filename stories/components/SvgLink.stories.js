import VsSvgLink from '@/components/svg-link/SvgLink.vue';

export default {
    component: VsSvgLink,
    title: 'Components/Deprecated/SvgLink',
    tags: ['deprecated'],
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
        <div style="background: #940f2c17; padding: 1rem; border: 1px solid #940F2C; margin-bottom: 1rem;">
            ⚠️ Deprecated: Use Image component wrapped in a link instead. 
            This component will be removed in a future release. 
            See the <a href="https://visitscotland.atlassian.net/wiki/spaces/DE/pages/1315078213/SvgLink+deprecated">Component migration docs.</a> 
        </div>

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
