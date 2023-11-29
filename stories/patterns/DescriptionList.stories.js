import VsDescriptionList from '@/components/description-list/DescriptionList.vue';
import VsDescriptionListItem from '@/components/description-list/components/DescriptionListItem.vue';

export default {
    component: VsDescriptionList,
    title: 'Patterns/DescriptionList',
    tags: ['autodocs'],
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
