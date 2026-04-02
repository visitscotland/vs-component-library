import VsToggleButton from '@/components/toggle-button/ToggleButton.vue';

export default {
    component: VsToggleButton,
    title: 'Components/Actions & controls/ToggleButton',
    argTypes: {
        variant: {
            options: [
                'default',
                'overlay',
                'overlay-strong',
            ],
            control: {
                type: 'radio',
            },
        },
        labelBreakpoint: {
            options: [
                null,
                'xs',
                'sm',
                'md',
                'lg',
                'xl',
                'xxl',
            ],
            control: {
                type: 'select',
            },
        },
    },
};

const Template = (args) => ({
    components: {
        VsToggleButton,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsToggleButton 
            v-bind="args"
        />
    `,
});

export const DefaultToggle = Template.bind();
DefaultToggle.args = {
    variant: 'default',
    icon: 'fa-regular fa-heart',
    pressedIcon: 'fa-solid fa-heart',
    label: 'Add to favourites',
    pressedLabel: 'Remove from favourites',
};

export const Overlay = Template.bind();
Overlay.args = {
    variant: 'overlay',
    icon: 'vs-icon-control-pause',
    pressedIcon: 'vs-icon-control-play',
    label: 'Pause',
    pressedLabel: 'Play',
};
Overlay.globals = {
    backgrounds: {
        value: 'dark',
    },
};

export const OverlayStrong = Template.bind();
OverlayStrong.args = {
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

export const WithLabel = Template.bind();
WithLabel.args = {
    variant: 'default',
    icon: 'fa-regular fa-heart',
    pressedIcon: 'fa-solid fa-heart',
    label: 'Add to favourites',
    pressedLabel: 'Remove from favourites',
    labelBreakpoint: 'md',
};

export const NoIconChange = Template.bind();
NoIconChange.args = {
    variant: 'default',
    label: 'Search',
    icon: 'vs-icon-control-search',
};

export const Controlled = (args) => ({
    components: {
        VsToggleButton,
    },
    setup() {
        return {
            args,
        };
    },
    data() {
        return {
            pressed: false,
        };
    },
    template: `
        <div style="display:flex; gap:1.5rem; align-items:center;">
            <VsToggleButton
                v-bind="args"
                v-model="pressed"
            />

            <small>
                Pressed: {{ pressed }}
            </small>
        </div>
    `,
});

Controlled.args = {
    variant: 'default',
    icon: 'vs-icon-control-play',
    pressedIcon: 'vs-icon-control-pause',
    label: 'Play',
    pressedLabel: 'Pause',
};
