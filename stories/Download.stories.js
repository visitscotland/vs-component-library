import VsDownload from '@/components/download/Download.vue';

export default {
    component: VsDownload,
    title: 'Download',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsDownload,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsDownload v-bind="args"></VsDownload>
    `,
});

const base = {
    fileName: "Our marketing calendar 2023 - 2030",
    published: "Published 21 July 1990",
    description: "Download VisitScotland's full marketing calendar from winter 2023 through to autumn 2099.",
    buttonText: "Download (1mb)"
};

export const Default = Template.bind({
});

Default.args = base;