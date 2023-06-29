import VsMeganav from '@/components/patterns/mega-nav/MegaNav.vue';
import VsMegaNavTopMenuItem from '@/components/patterns/mega-nav/components/MegaNavTopMenuItem.vue';
import VsMegaNavList from '@/components/patterns/mega-nav/components/MegaNavList.vue';
import VsMegaNavListItem from '@/components/patterns/mega-nav/components/MegaNavListItem.vue';
import VsMegaNavAccordionItem from '@/components/patterns/mega-nav/components/MegaNavAccordionItem.vue';

import VsAccordion from '@/components/patterns/accordion/Accordion.vue';

export default {
    component: VsMeganav,
    title: 'Patterns/MegaNav',
    tags: ['autodocs'],
    argTypes: {
        topMenuItemAlign: {
            options: [
                'top',
                'bottom',
            ],
            control: {
                type: 'inline-radio',
            },
        },
    },
};

const Template = (args) => ({
    components: {
        VsMeganav,
        VsMegaNavTopMenuItem,
        VsAccordion,
        VsMegaNavAccordionItem,
        VsMegaNavList,
        VsMegaNavListItem,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsMeganav
            v-bind="args"
        >
            <template #megaNavTopMenuItems>
                <VsMegaNavTopMenuItem
                    :key="1"
                    :href="args.topMenuItemHref"
                    :cta-text="args.topMenuItemCta"
                    :align="args.topMenuItemAlign"
                >

                    <template v-if="${'topMenuButtonContent' in args}" v-slot:buttonContent>${args.topMenuButtonContent}</template>

                    <template v-slot:dropdownContent>
                        <VsMegaNavList
                            :list-heading="args.subTopMenuListHeading"
                        >
                            <template 
                                v-slot:navListItems
                            >
                                <VsMegaNavListItem
                                    :href="args.subTopMenuListLinkHref"
                                >
                                    {{ args.subTopMenuListLinkText }}
                                </VsMegaNavListItem>
                            </template>
                        </VsMegaNavList>
                    </template>
                </VsMegaNavTopMenuItem>
            </template>

            <template v-slot:megaNavAccordionItems>
                <VsAccordion>
                    <VsMegaNavAccordionItem
                        :title="args.topMenuButtonContent"
                        level="1"
                        control-id="1"
                        :cta-link="args.topMenuItemHref"
                        :cta-text="args.topMenuItemCta"
                    >
                        <VsMegaNavAccordionItem
                            :title="args.subTopMenuListHeading"
                            level="2"
                            control-id="1"
                        >
                            <VsMegaNavList>
                                <template
                                    v-slot:navListItems
                                >
                                    <VsMegaNavListItem
                                        :href="args.subTopMenuListLinkHref"
                                    >
                                        {{ args.subTopMenuListLinkText }}
                                    </VsMegaNavListItem>
                                </template>
                            </VsMegaNavList>
                        </VsMegaNavAccordionItem>
                    </VsMegaNavAccordionItem>
                </VsAccordion>
            </template>

        </VsMeganav>
    `,
});

const base = {
    href: '#',
    menuToggleAltText: 'Toggle Menu',
    searchButtonText: 'Search',
    searchLabelText: 'What are you looking for?',
    searchClearButtonText: 'Clear form',
    searchCloseButtonText: 'Close search form',
    megaNavTopMenuItems: '',
    megaNavAccordionItems: '',
    topMenuItemHref: '#',
    topMenuItemCta: 'Explore Scotland',
    topMenuItemAlign: 'bottom',
    topMenuButtonContent: 'Places to Go',
    subTopMenuListHeading: 'Cities',
    subTopMenuListLinkText: 'Aberdeen',
    subTopMenuListLinkHref: '#',
};

export const Default = Template.bind({
});

Default.args = base;

export const OnMobile = Template.bind({
});

OnMobile.args = base;

OnMobile.parameters = {
    viewport: {
        defaultViewport: 'mobile2',
    },
};
