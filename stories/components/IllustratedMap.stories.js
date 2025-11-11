import VsIllustratedMap from '@/components/illustrated-map/IllustratedMap.vue';

export default {
    component: VsIllustratedMap,
    title: 'Components/Media & data visualisation/Illustrated map',
    argTypes: {
        highlightedRegions: {
            control: 'multi-select',
            options: [
                'borders',
                'dumfries',
                'highlands',
                'outerhebs',
                'shetland',
                'orkney',
                'edinburgh',
                'glasgow',
                'fife',
                'dundee',
                'aberdeen',
                'perth',
                'lomond',
                'arranayr',
                'argyll',
            ],
        },
    },
    decorators: [() => ({
        template: '<div style="max-width: 300px;"><story /></div>',
    })],
};

const Template = (args) => ({
    components: {
        VsIllustratedMap,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsIllustratedMap
            v-bind="args"
        ></VsIllustratedMap>
    `,
});

const base = {
    highlightedRegions: [],
};

export const Default = Template.bind({
});

Default.args = base;

export const WithHighlighted = Template.bind({
});

WithHighlighted.args = {
    highlightedRegions: [
        'edinburgh', 'fife', 'dundee',
    ],
};
