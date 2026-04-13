import { userEvent } from 'storybook/test';
import VsNavigationBar from '@/components/navigation-bar/NavigationBar.vue';
import VsNavigationBarMenu from '@/components/navigation-bar/components/NavigationBarMenu.vue';
import VsNavigationBarMenuDropdown from '@/components/navigation-bar/components/NavigationBarMenuDropdown.vue';
import VsNavigationBarMenuItem from '@/components/navigation-bar/components/NavigationBarMenuItem.vue';
import VsNavigationBarSearch from '@/components/navigation-bar/components/NavigationBarSearch.vue';
import VsLink from '@/components/link/Link.vue';
import VsIcon from '@/components/icon/Icon.vue';
import VsButton from '@/components/button/Button.vue';
import VsAccordion from '@/components/accordion/Accordion.vue';
import VsAccordionItem from '@/components/accordion/components/AccordionItem.vue';
import VsAccordionToggle from '@/components/accordion/components/AccordionToggle.vue';
import VsDivider from '@/components/divider/Divider.vue';
import VsTooltip from '@/components/tooltip/Tooltip.vue';
import VsSvgLink from '@/components/svg-link/SvgLink.vue';

import b2cNavExample from '@/assets/fixtures/navigation-bar/b2c-nav.json';
import manyItemsNav from '@/assets/fixtures/navigation-bar/many-items-nav.json';
import designTokens from '@/assets/tokens/tokens.json';

export default {
    component: VsNavigationBar,
    title: 'Components/Navigation/NavigationBar',
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => ({
    components: {
        VsNavigationBar,
        VsSvgLink,
        VsNavigationBarMenu,
        VsNavigationBarMenuDropdown,
        VsNavigationBarMenuItem,
        VsNavigationBarSearch,
        VsLink,
        VsIcon,
        VsButton,
        VsAccordion,
        VsAccordionItem,
        VsAccordionToggle,
        VsDivider,
        VsTooltip,
    },
    setup() {
        return {
            args,
            manyItemsNav,
            b2cNavExample,
        };
    },
    template: `   
        <VsNavigationBar 
            :sidebar-close-label="args.sidebarCloseLabel"
            :sidebar-open-label="args.sidebarOpenLabel"
            :sidebar-title="args.sidebarTitle"
            :sidebarBreakpoint="args.sidebarBreakpoint"
        >
            <template #logo-link>
                <VsSvgLink
                    :linkAltText="args.svgAltText"
                    :href="args.svgHref"
                    :svgFill="args.svgColor"
                    :svgPath="args.svgPath"
                    :svgWidth="args.svgWidth"
                    :svgHeight="args.svgHeight"
                />
            </template>

            <template #navigation-bar-menu>
                <VsNavigationBarMenu :menu-aria-label="args.menuAriaLabel">
                    <template v-for="(item, index) in args.navData" :key="index">
                        <li v-if="item.dropdownNav">
                            <VsNavigationBarMenuDropdown>
                                <template #button-content>
                                    {{ item.title }}
                                </template>

                                <VsNavigationBarMenuItem 
                                    v-for="(dropdownItem, dropdownIndex) in item.dropdownNav" 
                                    :key="dropdownIndex"
                                    :href="dropdownItem.href"
                                >
                                    {{ dropdownItem.title }}
                                </VsNavigationBarMenuItem>

                                <li class="my-075 mx-100">
                                    <VsLink 
                                        v-if="item.cta" 
                                        :href="item.href"
                                        type="internal"
                                        no-visited-styles
                                    >
                                        {{ item.cta }}
                                    </VsLink>
                                </li>
                            </VsNavigationBarMenuDropdown>
                        </li>

                        <VsNavigationBarMenuItem 
                            v-else
                            variant="primary-menu-item"
                            :href="item.href"
                        >
                            {{ item.title }}
                        </VsNavigationBarMenuItem>
                    </template>
                </VsNavigationBarMenu>
            </template>

            <template #navigation-bar-utilities>
                <nav :aria-label="args.utilityMenuAriaLabel">
                    <ul class="d-flex">
                        <li class="me-075">
                            <VsNavigationBarSearch
                                :showLabelBreakpoint="args.searchShowLabelBreakpoint"
                            />
                        </li>
                        <li 
                            v-if="!args.compactUtilities" 
                            class="d-none d-md-block me-075"
                        >
                            <VsTooltip
                                title="Map of Scotland"
                                subtle
                                :use-legacy="false"
                            >
                                <VsButton
                                    icon-only
                                    icon="fa-regular fa-map"
                                    href="#"
                                    size="sm"
                                    variant="subtle"
                                >
                                    Map of Scotland
                                </VsButton>
                            </VsTooltip>
                        </li>
                        <li
                            v-if="!args.compactUtilities" 
                            class="d-none d-md-block me-0 me-md-075 me-lg-0"
                        >
                            <VsNavigationBarMenuDropdown subtle>
                                <template #button-content>
                                    <span class="visually-hidden">Choose language: </span>EN 
                                </template>
                                <VsNavigationBarMenuItem href="#">
                                    English
                                </VsNavigationBarMenuItem>
                                <VsNavigationBarMenuItem href="#">
                                    Spanish
                                </VsNavigationBarMenuItem>
                                <VsNavigationBarMenuItem href="#">
                                    French
                                </VsNavigationBarMenuItem>
                            </VsNavigationBarMenuDropdown>
                        </li>
                    </ul>
                </nav>
            </template>

            <template #sidebar-body>
                <VsAccordion>
                    <nav :aria-label="args.menuAriaLabel">
                        <ul>
                            <template v-for="(mobileItem, mobileItemIndex) in args.navData" :key="mobileItemIndex">
                                <li v-if="mobileItem.dropdownNav">
                                    <VsAccordionItem 
                                        :control-id="mobileItemIndex.toString()"
                                    >
                                        <template #title>
                                            {{ mobileItem.title }}
                                        </template>

                                        <ul>
                                            <VsNavigationBarMenuItem
                                                v-for="(mobileDropdownItem, mobileDropdownIndex) in mobileItem.dropdownNav" 
                                                :key="mobileDropdownIndex"
                                                :href="mobileDropdownItem.href"
                                            >
                                                {{ mobileDropdownItem.title }}
                                            </VsNavigationBarMenuItem>

                                            <li class="my-075 mx-100">
                                                <VsLink 
                                                    v-if="mobileItem.cta" 
                                                    :href="mobileItem.href"
                                                    type="internal"
                                                    no-visited-styles
                                                >
                                                    {{ mobileItem.cta }}
                                                </VsLink>
                                            </li>
                                        </ul>
                                    </VsAccordionItem>
                                </li>

                                <template v-else>
                                    <VsNavigationBarMenuItem
                                        variant="primary-sidebar-item"
                                        :href="mobileItem.href"
                                    >
                                        {{ mobileItem.title }}
                                    </VsNavigationBarMenuItem>

                                    <VsDivider class="my-025" />
                                </template>
                            </template>
                        </ul>
                    </nav>
                </VsAccordion>
            </template>

            <template 
                #sidebar-footer
                v-if="!args.compactUtilities"
            >
                <div class="p-100 pb-300">
                    <nav :aria-label="args.sidebarUtilityMenuAriaLabel">
                        <ul class="d-flex justify-content-end">
                            <li class="d-block d-md-none me-075">
                                <VsTooltip
                                    title="Map of Scotland"
                                    subtle
                                    :use-legacy="false"
                                >
                                    <VsButton
                                        icon-only
                                        icon="fa-regular fa-map"
                                        href="#"
                                        size="sm"
                                        variant="subtle"
                                    >
                                        Map of Scotland
                                    </VsButton>
                                </VsTooltip>
                            </li>
                            <li class="d-block d-md-none">
                                <VsNavigationBarMenuDropdown subtle>
                                    <template #button-content>
                                        <span class="visually-hidden">Choose language: </span>EN 
                                    </template>

                                    <VsNavigationBarMenuItem href="#">
                                        English
                                    </VsNavigationBarMenuItem>
                                    <VsNavigationBarMenuItem href="#">
                                        Spanish
                                    </VsNavigationBarMenuItem>
                                    <VsNavigationBarMenuItem href="#">
                                        French
                                    </VsNavigationBarMenuItem>
                                </VsNavigationBarMenuDropdown>
                            </li>
                        </ul>
                    </nav>
                </div>
            </template>
        </VsNavigationBar>
    `,
});

const base = {
    menuAriaLabel: 'Main navigation menu',
    utilityMenuAriaLabel: 'Utility menu',
    sidebarUtilityMenuAriaLabel: 'Sidebar Utility menu',
    sidebarCloseLabel: 'Close navigation menu',
    sidebarOpenLabel: 'Main menu',
    sidebarTitle: 'Navigation menu',
    svgAltText: 'VisitScotland Home',
    svgColor: designTokens['vs-color-background-brand'],
    svgHref: '#',
    svgPath: 'visitscotland-logo',
    svgWidth: '167px',
    svgHeight: '28px',
    navData: b2cNavExample,
    compactUtilities: false,
    sidebarBreakpoint: 'md',
};

export const Default = Template.bind({
});
Default.args = base;

export const MobileNavigation = Template.bind({
});

MobileNavigation.args = base;

MobileNavigation.globals = {
    viewport: {
        value: 'mobile1',
    },
};

export const MobileSidebarOpen = Template.bind({
});

MobileSidebarOpen.args = base;

MobileSidebarOpen.globals = {
    viewport: {
        value: 'mobile1',
    },
};

MobileSidebarOpen.play = async({ canvasElement }) => {
    const sidebarButton = canvasElement.querySelector('.vs-navigation-bar-sidebar-button');

    await userEvent.click(sidebarButton);
};

export const CustomBreakpoints = Template.bind({
});
CustomBreakpoints.args = {
    ...base,
    navData: manyItemsNav,
    compactUtilities: true,
    sidebarBreakpoint: 'lg',
    searchShowLabelBreakpoint: 'xxl',
};
