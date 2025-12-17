import VsCaption from '@/components/caption/Caption.vue';

export default {
    component: VsCaption,
    title: 'Components/Deprecated/Caption',
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
        theme: {
            options: [
                'bold',
                'subtle',
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
    tags: ['deprecated'],
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
        <div style="background: #940f2c17; padding: 1rem; border: 1px solid #940F2C; margin-bottom: 1rem;">
            ⚠️ Deprecated: Use new MediaCaption component and utility-based spacing instead. 
            This component will be removed in a future release. 
            See the <a href="https://visitscotland.atlassian.net/wiki/spaces/DE/pages/941457411/Caption+deprecated">Caption migration docs.</a> 
        </div>

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

export const SubtleTheme = Template.bind({
});

SubtleTheme.args = {
    ...base,
    theme: 'subtle',
};
