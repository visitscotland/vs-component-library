import VsToggleButton from '@/components/toggle-button/ToggleButton.vue';
import VsTooltip from '@/components/tooltip/Tooltip.vue';

export default {
    component: VsToggleButton,
    title: 'Components/Actions & controls/ToggleButton',
};

const Template = (args) => ({
    components: {
        VsToggleButton,
        VsTooltip,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsTooltip title="Save item">
            <VsToggleButton v-bind="args" />
        </VsTooltip>
        
    `,
});

const base = {
    variant: 'subtle',
    size: 'md',
    default: 'Search',
    icon: 'vs-icon-control-search',
};

export const Subtle = Template.bind();
Subtle.args = {
    ...base,
    icon: 'fa-regular fa-heart',
    pressedIcon: 'fa-solid fa-heart',
    label: 'Add to favourites',
    pressedLabel: 'Remove from favourites',
};

export const Small = Template.bind();
Small.args = {
    ...base,
    icon: 'fa-regular fa-heart',
    pressedIcon: 'fa-solid fa-heart',
    label: 'Add to favourites',
    pressedLabel: 'Remove from favourites',
    size: 'sm',
};

export const Large = Template.bind();
Large.args = {
    ...base,
    icon: 'fa-regular fa-heart',
    pressedIcon: 'fa-solid fa-heart',
    label: 'Add to favourites',
    pressedLabel: 'Remove from favourites',
    size: 'lg',
};

export const Secondary = Template.bind();
Secondary.args = {
    ...base,
    variant: 'secondary',
    icon: 'vs-icon-control-play',
    pressedIcon: 'vs-icon-control-pause',
};
