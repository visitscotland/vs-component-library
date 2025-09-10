import VsModuleWrapper from '@/components/module-wrapper/ModuleWrapper.vue';

export default {
    component: VsModuleWrapper,
    title: 'Components/Layout & content structure/ModuleWrapper',
    argTypes: {
        theme: {
            options: [
                'light',
                'grey',
                'dark',
            ],
            control: {
                type: 'radio',
            },
        },
    },
};

const Template = (args) => ({
    components: {
        VsModuleWrapper,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsModuleWrapper v-bind="args">
            <template v-if="${'vs-module-wrapper-heading' in args}" v-slot:vs-module-wrapper-heading>${args['vs-module-wrapper-heading']}</template>
            <template v-if="${'vs-module-wrapper-intro' in args}" v-slot:vs-module-wrapper-intro>${args['vs-module-wrapper-intro']}</template>
        </VsModuleWrapper>
    `,
});

const base = {
    theme: 'light',
    'vs-module-wrapper-heading': 'More inspiration for your next adventure',
    'vs-module-wrapper-intro': 'Not sure where to start? Check out our list of what\'s new to spark your imagination.',
    default: '',
};

export const Default = Template.bind({
});

Default.args = base;

export const Grey = Template.bind({
});

Grey.args = {
    ...base,
    theme: 'grey',
};

export const Neutral = Template.bind({
});

Neutral.args = {
    ...base,
    theme: 'neutral',
};

export const BusinessSupportHub = Template.bind({
});

BusinessSupportHub.args = {
    ...base,
    businessSupport: true,
};
