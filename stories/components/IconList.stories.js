import VsIconList from '@/components/icon-list/IconList.vue';
import VsIconListItem from '@/components/icon-list/components/IconListItem.vue';

export default {
    component: VsIconList,
    title: 'Components/Deprecated/IconList',
    tags: ['deprecated'],
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
        <div style="background: #940f2c17; padding: 1rem; border: 1px solid #940F2C; margin-bottom: 1rem;">
            ⚠️ Deprecated: This component is no longer supported and should not be used. It will be removed in a future release.
            See the <a href="https://visitscotland.atlassian.net/wiki/spaces/DE/pages/1273299012/Icon+List+deprecated">Component migration docs.</a>
        </div>

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
