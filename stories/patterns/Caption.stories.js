import VsCaption from '@/components/patterns/caption/Caption.vue';

export default {
    component: VsCaption,
    title: 'Patterns/Caption',
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: [
                'fullwidth',
                'large',
            ],
            control: {
                type: 'inline-radio',
            },
        },
        textAlign: {
            options: [
                'left',
                'right',
            ],
            control: {
                type: 'inline-radio',
            },
        },
    },
};

const Template = (args) => ({
    components: {
        VsCaption,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsCaption v-bind="args">
            <template v-if="${'caption' in args}" v-slot:caption>${args.caption}</template>
            <template v-if="${'credit' in args}" v-slot:credit>${args.credit}</template>
        </VsCaption>
    `,
});

const base = {
    caption: 'A Scottish Castle',
    credit: '&copy; VisitScotland',
    variant: 'fullwidth',
    latitude: '',
    longitude: '',
    textAlign: 'left',
};

export const Default = Template.bind({
});

Default.args = base;

export const WithMap = Template.bind({
});

WithMap.args = {
    ...base,
    variant: 'large',
    latitude: '55.9485947',
    longitude: '-3.2021022',
};
