import VsFileDownload from '@/components/file-download/FileDownload.vue';

export default {
    component: VsFileDownload,
    title: 'FileDownload',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsFileDownload,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsFileDownload v-bind="args" />
    `,
});

const base = {
    title: 'Our marketing calendar 2023 - 2030',
    publishedDate: 'Published 21 July 1990',
    description: 'Download VisitScotland\'s full marketing calendar from winter 2023 through to autumn 2099.',
    buttonText: 'Download (1mb)',
    filename: 'test-file.pdf',
};

export const Default = Template.bind({
});

Default.args = base;
