import VsPanel from '@/components/panel/Panel.vue';
import VsHeading from '@/components/heading/Heading.vue';

export default {
    component: VsPanel,
    title: 'Elements/Panel',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsPanel,
        VsHeading,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsPanel v-bind="args">
            <template v-if="${'vs-panel-title' in args}" v-slot:vs-panel-title>
                <VsHeading thin level="4">
                    ${args['vs-panel-title']}
                </VsHeading>
            </template>
            <template v-if="${'default' in args}">
                ${args.default}
            </template>
        </VsPanel>
  `,
});

const base = {
    default: `We might be biased, but we think Scotland truly is one of 
    the most beautiful places in the world. From towering mountains, 
    crashing waterfalls, and atmospheric woodlands, to white, sandy 
    beaches, quaint towns and incredible hidden gems, Scotland is 
    home to some truly beautiful spots that will be sure to make a 
    lasting impression on your holiday!`,
    'vs-panel-title': 'Summary',
};

export const Default = Template.bind({
});

Default.args = base;
