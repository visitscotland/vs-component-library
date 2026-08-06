import VsDescriptionList from '@/components/description-list/DescriptionList.vue';
import VsDescriptionListItem from '@/components/description-list/components/DescriptionListItem.vue';

export default {
    component: VsDescriptionList,
    title: 'Components/Deprecated/DescriptionList',
    tags: ['deprecated'],
};

const Template = (args) => ({
    components: {
        VsDescriptionList,
        VsDescriptionListItem,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <div style="background: #940f2c17; padding: 1rem; border: 1px solid #940F2C; margin-bottom: 1rem;">
            ⚠️ Deprecated: This component will be removed in a future release. 
            See the <a href="https://visitscotland.atlassian.net/wiki/spaces/DE/pages/1372061712/Description+List+deprecated">Component migration docs.</a> 
        </div>

        <VsDescriptionList v-bind="args">
            <VsDescriptionListItem title>Highlights</VsDescriptionListItem>
            <VsDescriptionListItem>East Neuk of Fife</VsDescriptionListItem>
            <VsDescriptionListItem>St Andrews</VsDescriptionListItem>
            <VsDescriptionListItem>Dundee</VsDescriptionListItem>
            <VsDescriptionListItem>Angus</VsDescriptionListItem>
        </VsDescriptionList>
    `,
});

const base = {
    inline: false,
};

export const Default = Template.bind({
});

Default.args = base;

export const InLine = Template.bind({
});

InLine.args = {
    ...base,
    inline: true,
};
