import VsSvg from '@/components/svg/Svg.vue';

export default {
    component: VsSvg,
    title: 'Components/Deprecated/Svg',
    tags: ['deprecated'],
};

const Template = (args) => ({
    components: {
        VsSvg,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <div style="background: #940f2c17; padding: 1rem; border: 1px solid #940F2C; margin-bottom: 1rem;">
            ⚠️ Deprecated: Use image component instead. 
            This component will be removed in a future release. 
            See the <a href="https://visitscotland.atlassian.net/wiki/spaces/DE/pages/1315831810/SVG+deprecated">Component migration docs.</a> 
        </div>

        <VsSvg v-bind="args" fill="#000000">
            <template v-if="${'default' in args}" v-slot>${args.default}</template>
        </VsSvg>
    `,
});

const base = {
    path: 'visitscotland-logo',
    height: '',
};

export const Default = Template.bind({
});

Default.args = base;

export const DefinedSize = Template.bind({
});

DefinedSize.args = {
    ...base,
    height: '150',
};
