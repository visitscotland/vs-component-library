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
        <VsToggleButton v-bind="args" />
    `,
});

const base = {
    variant: 'default',
    default: 'Search',
    icon: 'vs-icon-control-search',
};

export const Default = Template.bind();
Default.args = {
    ...base,
    icon: 'fa-regular fa-heart',
    pressedIcon: 'fa-solid fa-heart',
    label: 'Add to favourites',
    pressedLabel: 'Remove from favourites',
};

export const Overlay = Template.bind();
Overlay.args = {
    ...base,
    variant: 'overlay',
    icon: 'fa-regular fa-heart',
    pressedIcon: 'fa-solid fa-heart',
    label: 'Add to favourites',
    pressedLabel: 'Remove from favourites',
};
Overlay.globals = {
    backgrounds: {
        value: 'dark',
    },
};

export const OverlayStrong = Template.bind();
OverlayStrong.args = {
    ...base,
    variant: 'overlay-strong',
    icon: 'fa-regular fa-heart',
    pressedIcon: 'fa-solid fa-heart',
    label: 'Add to favourites',
    pressedLabel: 'Remove from favourites',
};
OverlayStrong.globals = {
    backgrounds: {
        value: 'dark',
    },
};

export const WithLabelDefault = Template.bind();
WithLabelDefault.args = {
    ...base,
    variant: 'default',
    icon: 'fa-regular fa-heart',
    pressedIcon: 'fa-solid fa-heart',
    label: 'Add to favourites',
    pressedLabel: 'Remove from favourites',
    labelBreakpoint: 'md',
};

export const WithLabelOverlay = Template.bind();
WithLabelOverlay.args = {
    ...base,
    variant: 'overlay',
    icon: 'fa-regular fa-heart',
    pressedIcon: 'fa-solid fa-heart',
    label: 'Add to favourites',
    pressedLabel: 'Remove from favourites',
    labelBreakpoint: 'md',
};
WithLabelOverlay.globals = {
    backgrounds: {
        value: 'dark',
    },
};

export const WithLabelOverlayStrong = Template.bind();
WithLabelOverlayStrong.args = {
    ...base,
    variant: 'overlay-strong',
    icon: 'fa-regular fa-heart',
    pressedIcon: 'fa-solid fa-heart',
    label: 'Add to favourites',
    pressedLabel: 'Remove from favourites',
    labelBreakpoint: 'md',
};
WithLabelOverlayStrong.globals = {
    backgrounds: {
        value: 'dark',
    },
};
