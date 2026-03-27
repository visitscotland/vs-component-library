import { userEvent, within } from 'storybook/test';
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
    decorators: [() => ({
        template: '<div style="padding:2rem 5rem;"><story /></div>',
    })],
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
    `,
});

const base = {
    icon: 'fa-regular fa-bus',
    size: 'sm',
    position: 'bottom',
    title: 'Travel by bus',
    'icon-only': true,
    variant: 'subtle',
    useLegacy: false,
};

export const Default = Template.bind({
});

Default.args = base;

export const DefaultHovered = Template.bind({
});

DefaultHovered.args = base;

DefaultHovered.play = async({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button');

    await userEvent.hover(button);
};

export const Subtle = Template.bind({
});

Subtle.args = {
    ...base,
    subtle: true,
};

export const SubtleHovered = Template.bind({
});

SubtleHovered.args = {
    ...base,
    subtle: true,
};

SubtleHovered.play = async({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button');

    await userEvent.hover(button);
};
