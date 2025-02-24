import VsIconList from '@/components/icon-list/IconList.vue';
import VsIconListItem from '@/components/icon-list/components/IconListItem.vue';

export default {
    component: VsIconList,
    title: 'IconList',
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
            icon: 'vs-icon-facility-wifi',
            label: 'Wifi',
        },
        {
            icon: 'vs-icon-facility-pets-welcome',
            label: 'Pets Welcome',
        },
        {
            icon: 'vs-icon-facility-parking',
            label: 'Parking',
        },
        {
            icon: 'vs-icon-facility-wheelchair-access',
            label: 'Level Access',
        },
        {
            icon: 'vs-icon-facility-audio-loop',
            label: 'Hearing Loop',
        },
    ],
};

export const Default = Template.bind({
});

Default.args = base;
