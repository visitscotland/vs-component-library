import VsWarning from '@/components/patterns/warning/Warning.vue';

export default {
    component: VsWarning,
    title: 'Patterns/Warning',
};

const Template = (args) => ({
    components: {
        VsWarning,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
    <VsWarning>
        JavaScript is needed to watch this video.

        <template
            v-slot:extraContent
        >
            You can turn on Javascript in your browser settings.
        </template>
    </VsWarning>
    `,
});

export const Default = Template.bind({
});

Default.args = {
};
