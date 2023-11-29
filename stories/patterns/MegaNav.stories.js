import { userEvent, within } from '@storybook/testing-library';

import VsMeganav from '@/components/mega-nav/MegaNav.vue';
import VsMegaNavTopMenuItem from '@/components/mega-nav/components/MegaNavTopMenuItem.vue';
import VsMegaNavList from '@/components/mega-nav/components/MegaNavList.vue';
import VsMegaNavListItem from '@/components/mega-nav/components/MegaNavListItem.vue';
import VsMegaNavAccordionItem from '@/components/mega-nav/components/MegaNavAccordionItem.vue';
import VsMegaNavFeaturedItem from '@/components/mega-nav/components/MegaNavFeaturedItem.vue';
import VsMegaNavFeaturedEvent from '@/components/mega-nav/components/MegaNavFeaturedEvent.vue';

import VsAccordion from '@/components/accordion/Accordion.vue';

import navExample from '@/assets/fixtures/header/main-nav.json';

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
        VsMegaNavFeaturedItem,
        VsMegaNavFeaturedEvent,
    },
    setup() {
        return {
            args,
            navExample,
        };
    },
    template: `   
        <div :class="args.jsDisabled ? 'no-js' : ''">     
            <VsMeganav
                v-bind="args"
            >
                <template #mega-nav-top-menu-items>
                    <VsMegaNavTopMenuItem
                        v-for="(item, index) in navExample"
                        :key="index"
                        :href="item.href"
                        :cta-text="item.cta"
                        :align="item.title === 'Accommodation' ? 'bottom' : 'top'"
                    >

                        <template v-slot:button-content>{{ item.title }}</template>

                        <template v-slot:dropdown-content>
                            <VsMegaNavList
                                v-for="(subHeading, subHeadingIndex) in item.dropdownNav"
                                :key="subHeadingIndex"
                                :list-heading="subHeading.title"
                            >
                                <template 
                                    v-slot:nav-list-items
                                >
                                    <VsMegaNavListItem
                                        v-for="(navLink, navLinkIndex)
                                            in subHeading.dropdownNav"
                                        :key="navLinkIndex"
                                        :href="navLink.href"
                                    >
                                        {{ navLink.title }}
                                    </VsMegaNavListItem>
                                    <VsMegaNavListItem
                                        v-if="subHeading.href"
                                        :href="subHeading.href"
                                        subheading-link
                                    >
                                        {{ subHeading.cta }}
                                    </VsMegaNavListItem>
                                </template>
                            </VsMegaNavList>
                        </template>

                        <template
                            v-slot:nav-featured-event
                            v-if="item.title === 'Things to do'"
                        >
                            <VsMegaNavFeaturedEvent
                                source-url="https://www.visitscotland.com/data/component/cannedsearch?prodtypes=even&locplace=&locprox=&loc=Scotland&size=1"
                            />
                        </template>
        
                        <template
                            v-slot:nav-featured-item
                            v-if="item.title === 'Accommodation' || item.title === 'Inspiration'"
                        >
                            <VsMegaNavFeaturedItem
                                link="www.visitscotland.com"
                                img-url="fixtures/carousel/claire-standing-stones-craigh-na-dun-outlander.jfif"
                                img-alt="Alt text"
                            >
                                <template v-slot:vs-featured-item-header>
                                    From our home to yours – see Scotland virtually
                                </template>
        
                                <template v-slot:vs-featured-item-content>
                                    <p>
                                        Although it’s not possible to come to Scotland at the moment,
                                        thanks to modern technology, you can still see stunning
                                    </p>
                                </template>
        
                                <template v-slot:vs-featured-item-link>
                                    A link to a page
                                </template>
                            </VsMegaNavFeaturedItem>
                        </template>

                        <div class="featured-items">
                        </div>
                    </VsMegaNavTopMenuItem>
                </template>

                <template v-slot:mega-nav-accordion-items>
                    <VsAccordion>
                        <VsMegaNavAccordionItem
                            v-for="(item, mobileItemIndex) in navExample"
                            :index="mobileItemIndex"
                            :title="item.title"
                            level="1"
                            :control-id="mobileItemIndex.toString()"
                            :cta-link="item.href"
                            :cta-text="item.cta"
                            :data-testid="'mobile-inspiration-link'"
                        >
                            <VsMegaNavAccordionItem
                                v-for="(subHeading, subHeadingIndex) in item.dropdownNav"
                                :index="subHeadingIndex"
                                :title="subHeading.title"
                                level="2"
                                :control-id="subHeadingIndex.toString()"
                            >
                                <VsMegaNavList>
                                    <template
                                        v-slot:nav-list-items
                                    >
                                        <VsMegaNavListItem
                                            v-for="(navLink, navLinkIndex)
                                                in subHeading.dropdownNav"
                                            :key="navLinkIndex"
                                            :href="navLink.href"
                                        >
                                            {{ navLink.title }}
                                        </VsMegaNavListItem>
                                    </template>

                                    <template
                                        v-slot:nav-heading-cta-link
                                    >
                                        <VsMegaNavListItem
                                            v-if="subHeading.href"
                                            :href="subHeading.href"
                                            subheading-link
                                        >
                                            {{ subHeading.cta }}
                                        </VsMegaNavListItem>
                                    </template>
                                </VsMegaNavList>
                            </VsMegaNavAccordionItem>
                            <div class="featured-items">
                                <template
                                    v-if="item.title === 'Things to do'"
                                >
                                    <VsMegaNavFeaturedEvent
                                        source-url="https://develop-nightly.visitscotland.com/data/component/cannedsearch?prodtypes=even&locplace=&locprox=&loc=Scotland&size=1"
                                    />
                                </template>
                                <template
                                    v-if="item.title === 'Accommodation' || item.title === 'Inspiration'"
                                >
                                    <VsMegaNavFeaturedItem
                                        link="www.visitscotland.com"
                                        img-url="fixtures/carousel/claire-standing-stones-craigh-na-dun-outlander.jfif"
                                        img-alt="Alt text"
                                    >
                                        <template v-slot:vs-featured-item-header>
                                            From our home to yours – see Scotland virtually
                                        </template>

                                        <template v-slot:vs-featured-item-content>
                                            <p>
                                                Although it’s not possible to come to
                                                Scotland at the moment.
                                            </p>
                                        </template>

                                        <template v-slot:vs-featured-item-link>
                                            A link to a page
                                        </template>
                                    </VsMegaNavFeaturedItem>
                                </template>
                            </div>
                        </VsMegaNavAccordionItem>
                    </VsAccordion>
                </template>
            </VsMeganav>
        </div>
    `,
});

const base = {
    href: '#',
    menuToggleAltText: 'Toggle Menu',
    searchButtonText: 'Search',
    searchLabelText: 'What are you looking for?',
    searchClearButtonText: 'Clear form',
    searchCloseButtonText: 'Close search form',
    'mega-nav-top-menu-items': '',
    'mega-nav-accordion-items': '',
    jsDisabled: false,
};

export const Default = Template.bind({
});

Default.args = base;

export const InspirationOpen = Template.bind({
});

InspirationOpen.args = base;

InspirationOpen.play = async({ canvasElement }) => {
    const canvas = within(canvasElement);

    const inspirationLink = canvas.getByText('Inspiration');

    await userEvent.click(inspirationLink);
};

export const OnMobile = Template.bind({
});

OnMobile.args = base;

OnMobile.parameters = {
    viewport: {
        defaultViewport: 'mobile2',
    },
};

export const InspirationOpenMobile = Template.bind({
});

InspirationOpenMobile.args = base;

InspirationOpenMobile.parameters = {
    viewport: {
        defaultViewport: 'mobile2',
    },
};

InspirationOpenMobile.play = async({ canvasElement }) => {
    const burgerLink = canvasElement.querySelector('.vs-mega-nav__mobile-menu-toggle');

    await userEvent.click(burgerLink);

    const inspLink = canvasElement.querySelector(['[aria-controls="vs-mega-nav-accordion-item-vs-mega-nav-inspiration-3"']);

    await userEvent.click(inspLink);
};

export const NoJs = Template.bind({
});

NoJs.args = {
    ...base,
    jsDisabled: true,
};
