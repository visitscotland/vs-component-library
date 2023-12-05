import VsSkipTo from '@/components/skip-to/SkipTo.vue';

export default {
    component: VsSkipTo,
    title: 'SkipTo',
    tags: ['autodocs'],
    argTypes: {
        skipToText: {
            control: {
                type: 'text',
            },
        },
        mainMenuText: {
            control: {
                type: 'text',
            },
        },
        searchText: {
            control: {
                type: 'text',
            },
        },
        mainContentText: {
            control: {
                type: 'text',
            },
        },
        footerText: {
            control: {
                type: 'text',
            },
        },
    },
};

const Template = (args) => ({
    components: {
        VsSkipTo,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <p>Tab into the element below to see the Skip To component appear:</p>
        <div class="border" style="overflow: hidden; position: relative;">
            <VsSkipTo
                skip-to-text="${args.skipToText}"
            >   
                <template v-slot:main-menu-text>
                    ${args.mainMenuText}
                </template>
                <template v-slot:main-content-text>
                    ${args.mainContentText}
                </template>
                <template v-slot:search-text>
                    ${args.searchText}
                </template>
                <template v-slot:footer-text>
                    ${args.footerText}
                </template>
            </VsSkipTo>
        </div>
    `,
});

const base = {
    skipToText: 'Skip to',
    mainMenuText: 'Main Menu',
    searchText: 'Search',
    mainContentText: 'Main Content',
    footerText: 'Footer',
};

export const Default = Template.bind({
});

Default.args = base;
