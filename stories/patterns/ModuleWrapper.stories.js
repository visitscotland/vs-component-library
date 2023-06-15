import VsModuleWrapper from '@/components/patterns/module-wrapper/ModuleWrapper.vue';

export default {
    component: VsModuleWrapper,
    title: 'Patterns/ModuleWrapper',
    tags: ['autodocs'],
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
            <template v-if="${'vsModuleWrapperHeading' in args}" v-slot:vsModuleWrapperHeading>${args.vsModuleWrapperHeading}</template>
            <template v-if="${'vsModuleWrapperIntro' in args}" v-slot:vsModuleWrapperIntro>${args.vsModuleWrapperIntro}</template>
        </VsModuleWrapper>
    `,
});

const base = {
    theme: 'light',
    vsModuleWrapperHeading: 'More inspiration for your next adventure',
    vsModuleWrapperIntro: 'Not sure where to start? Check out our list of what\'s new to spark your imagination.',
    default: '',
};

export const Default = Template.bind({
});

Default.args = base;
