import VsTooltip from '@/components/tooltip/Tooltip.vue';
import VsButton from '@/components/button/Button.vue';

export default {
    component: VsTooltip,
    title: 'Components/Overlays & popups/Tooltip',
    argTypes: {
        position: {
            options: [
                'top',
                'left',
                'bottom',
                'right',
            ],
            control: {
                type: 'radio',
            },
        },
        subtle: {
            control: {
                type: 'boolean',
            },
        },
    },
};

const Template = (args) => ({
    components: {
        VsTooltip,
        VsButton,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
         <!-- NEW TOOLTIP -->
        <VsTooltip
            v-if="!args.useLegacy"
            :title="args.title"
            :position="args.position"
            :subtle="args.subtle"
            :use-legacy="false"
        >
            <VsButton
                icon-only
                :icon="args.icon"
                :size="args.size"
                :variant="args.variant"
            >
                {{ args.title }}
            </VsButton>
        </VsTooltip>

        <!-- LEGACY TOOLTIP -->
        <VsTooltip
            v-else
            :title="args.title"
            :position="args.position"
            :subtle="args.subtle"
            :icon="args.icon"
            :size="args.size"
            :variant="args.variant"
            icon-only
            use-legacy
        >
            {{ args.title }}
        </VsTooltip>
    `,
});

const base = {
    icon: 'fa-regular fa-bus',
    size: 'sm',
    position: 'top',
    title: 'Travel by bus',
    'icon-only': true,
    variant: 'subtle',
};

export const Default = Template.bind({
});

Default.args = {
    ...base,
    useLegacy: false,
};

export const Subtle = Template.bind({
});

Subtle.args = {
    ...base,
    subtle: true,
    useLegacy: false,
};

export const Legacy = Template.bind({
});

Legacy.args = {
    ...base,
    useLegacy: true,
};
