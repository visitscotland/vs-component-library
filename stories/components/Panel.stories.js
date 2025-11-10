import VsPanel from '@/components/panel/Panel.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsBody from '@/components/body/Body.vue';

export default {
    component: VsPanel,
    title: 'Components/Layout & content structure/Panel',
};

const Template = (args) => ({
    components: {
        VsPanel,
        VsHeading,
        VsBody,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsPanel v-bind="args">
            <template v-if="${'default' in args}">
                <VsHeading 
                    level="3" 
                    heading-style="heading-m"
                    no-margins
                    class="mb-050"
                >
                    ${args['vs-panel-title']}
                </VsHeading>
                <VsBody>
                    ${args.default}
                </VsBody>
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

export const Secondary = Template.bind({
});

Secondary.args = base;

export const Information = Template.bind({
});

Information.args = {
    ...base,
    variant: 'information',
};
