import VsRouteFinder from '@/components/route-finder/RouteFinder.vue';

export default {
    component: VsRouteFinder,
    title: 'Route Finder',
};

const Template = (args) => ({
    components: {
        VsRouteFinder,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <div>
            <VsRouteFinder v-bind="args">
            </VsRouteFinder>
        </div>
    `,
});

const base = {
    dataUrl: 'http://2.96.77.4:8080/api/routes',
    method: 'post',
};

export const Default = Template.bind({
});

Default.args = base;

export const HardCodedRoute = Template.bind({
});

HardCodedRoute.args = {
    ...base,
    dataUrl: 'http://localhost:3000/hard-coded-route.json',
    method: 'get',
};
