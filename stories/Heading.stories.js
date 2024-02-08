import VsHeading from '@/components/heading/Heading.vue';

export default {
    component: VsHeading,
    title: 'Heading',
    tags: ['autodocs'],
    argTypes: {
        level: {
            control: {
                type: 'range',
                min: 1,
                max: 6,
            },
        },
        overrideStyleLevel: {
            control: {
                type: 'range',
                min: 1,
                max: 6,
            },
        },
    },
};

const Template = (args) => ({
    components: {
        VsHeading,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsHeading v-bind="args">
            <template v-if="${'default' in args}" v-slot>${args.default}</template>
            <template v-if="${'sub-heading' in args}" v-slot:sub-heading>
                ${args['sub-heading']}
            </template>
            <template v-if="${'local-details-context' in args}" v-slot:local-details-context>
                ${args['local-details-context']}
            </template>
        </VsHeading>
    `,
});

window.bypassCookieChecks = true;

const base = {
    default: 'VisitScotland',
    'sub-heading': '',
    level: 1,
    alternative: false,
    thin: false,
};

export const Default = Template.bind({
});

Default.args = {
    ...base,
};

export const OverrideStyleLevel = Template.bind({
});

OverrideStyleLevel.args = {
    ...base,
    overrideStyleLevel: 3,
};

export const WithSubheading = Template.bind({
});

WithSubheading.args = {
    ...base,
    'sub-heading': 'test something',
};

export const WithLocalDetails = Template.bind({
});

const localDetailsContext = `
    <p>Coming from the Scottish Gaelic, meaning 'Gaeldom' or 'Land of the Gaels'.</p>
    <p>The Scottish Gaelic language has its origins in the Highlands & Islands, and is still spoken by many Scots, to this day. You can learn more about Gaelic on <a href="#">our dedicated Gaelic page</a>.</p>
`;

WithLocalDetails.args = {
    ...base,
    default: 'Highlands and Islands',
    'sub-heading': 'Gàidhealtachd',
    hasLocalDetails: true,
    pronunciation: 'gayl-tacht',
    pronunciationVideoId: 'zFq5-ioDILw',
    'local-details-context': localDetailsContext,
};

export const Thin = Template.bind({
});

Thin.args = {
    ...base,
    thin: true,
};

export const Alternative = Template.bind({
});

Alternative.args = {
    ...base,
    alternative: true,
};
