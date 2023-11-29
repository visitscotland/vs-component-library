import VsIconList from '@/components/icon-list/IconList.vue';
import VsIconListItem from '@/components/icon-list/components/IconListItem.vue';

export default {
    component: VsIconList,
    title: 'IconList',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsIconList,
        VsIconListItem,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsIconList
            v-bind="args"
        >
            <VsIconListItem
                v-for="(icon, index) in args.icons"
                :icon="icon.icon"
                :label="icon.label"
            />
        </VsIconList>
    `,
});

const base = {
    title: 'Key Facilities',
    icons: [
        {
            icon: 'facility-wifi',
            label: 'Wifi',
        },
        {
            icon: 'facility-petswelcom',
            label: 'Pets Welcome',
        },
        {
            icon: 'facility-parking',
            label: 'Parking',
        },
        {
            icon: 'facility-dsblaccess',
            label: 'Level Access',
        },
        {
            icon: 'facility-audioloop',
            label: 'Hearing Loop',
        },
    ],
};

export const Default = Template.bind({
});

Default.args = base;
