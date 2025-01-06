import VsProgressBar from '@/components/progress-bar/ProgressBar.vue';

export default {
    component: VsProgressBar,
    title: 'ProgressBar',
    argTypes: {

    },
};

const Template = (args) => ({
    components: {
        VsProgressBar,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsProgressBar v-bind="args">
        </VsProgressBar>
    `,
});

const base = {
    max: 5,
    currentStep: 1,
    animated: true,
    isStepped: false,
};

export const Default = Template.bind({
});

Default.args = base;

export const ProgressLabel = Template.bind({
});

ProgressLabel.args = {
    ...base,
    progressLabel: 'Step xxx of yyy',
};

export const Full = Template.bind({
});

Full.args = {
    ...base,
    isFull: true,
    currentStep: 5,
};

export const Empty = Template.bind({
});

Empty.args = {
    ...base,
    currentStep: 0,
};

export const Stepped = Template.bind({
});

Stepped.args = {
    ...base,
    isStepped: true,
    currentStep: 2,
};
