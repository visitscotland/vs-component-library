import { userEvent } from 'storybook/test';
import VsNavigationBar from '@/components/navigation-bar/NavigationBar.vue';
import VsNavigationBarMenu from '@/components/navigation-bar/components/NavigationBarMenu.vue';
import VsNavigationBarMenuDropdown from '@/components/navigation-bar/components/NavigationBarMenuDropdown.vue';
import VsNavigationBarMenuItem from '@/components/navigation-bar/components/NavigationBarMenuItem.vue';
import VsLink from '@/components/link/Link.vue';
import VsIcon from '@/components/icon/Icon.vue';
import VsButton from '@/components/button/Button.vue';
import VsAccordion from '@/components/accordion/Accordion.vue';
import VsAccordionItem from '@/components/accordion/components/AccordionItem.vue';
import VsAccordionToggle from '@/components/accordion/components/AccordionToggle.vue';

import VsSvgLink from '@/components/svg-link/SvgLink.vue';
import designTokens from '@/assets/tokens/tokens.json';
import b2cNavExample from '@/assets/fixtures/navigation-bar/b2c-nav.json';
import b2bNavExample from '@/assets/fixtures/navigation-bar/b2b-nav.json';

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
        VsLink,
        VsIcon,
        VsButton,
        VsAccordion,
        VsAccordionItem,
        VsAccordionToggle,
    },
    setup() {
        return {
            args,
            b2bNavExample,
            b2cNavExample,
        };
    },
    template: `   
        <VsNavigationBar 
            :menu-aria-label="args.menuAriaLabel"
            :sidebar-close-label="args.sidebarCloseLabel"
            :sidebar-open-label="args.sidebarOpenLabel"
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
                <VsNavigationBarMenu>
                    <template v-for="(item, index) in b2bNavExample" :key="index">

                        <VsNavigationBarMenuDropdown v-if="item.dropdownNav">
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

                        <VsNavigationBarMenuItem 
                            v-else
                            main-menu-item
                            :href="item.href"
                        >
                            {{ item.title }}
                        </VsNavigationBarMenuItem>
                    </template>
                </VsNavigationBarMenu>
            </template>

            <template #navigation-bar-utilities>
                <li>
                    <VsButton 
                        variant="secondary"
                        size="sm"
                        icon="vs-icon-control-search"
                    >
                        Search
                    </VsButton>
                </li>
                <li class="d-none d-md-block">
                    <VsButton 
                        variant="subtle"
                        size="sm"
                        icon="fa-regular fa-map"
                        icon-only
                        href="#"
                    > 
                        Map
                    </VsButton>
                </li>
                <VsNavigationBarMenuDropdown 
                    subtle 
                    class="d-none d-md-block"
                >
                    <template #button-content>
                        EN
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
            </template>

            <template #sidebar-body>

                <VsAccordion>
                    <ul>
                        <template v-for="(mobileItem, mobileItemIndex) in b2bNavExample" :key="mobileItemIndex">
                            <li v-if="mobileItem.dropdownNav">
                                <VsAccordionItem 
                                    :control-id="mobileItemIndex.toString()"
                                >
                                    <template v-slot:title>
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

                            <VsNavigationBarMenuItem
                                v-else
                                main-menu-item
                                :href="mobileItem.href"
                            >
                                {{ mobileItem.title }}
                            </VsNavigationBarMenuItem>
                        </template>
                    </ul>
                </VsAccordion>
            </template>

            <template #sidebar-footer>
                <ul class="d-flex gap-075">
                    <li>
                        <VsButton 
                            variant="subtle"
                            size="sm"
                            icon="fa-regular fa-map"
                            href="#"
                            icon-only
                            class="d-block d-md-none"
                        > 
                            Map
                        </VsButton>
                    </li>
                    <VsNavigationBarMenuDropdown subtle class="d-block d-md-none">
                        <template #button-content>
                            <VsIcon
                                icon="fa-regular fa-globe"
                                size="xs"
                                class="me-025"
                            ></VsIcon>
                            EN
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
                </ul>
            </template>
        </VsNavigationBar>
    `,
});

const base = {
    menuAriaLabel: 'Main navigation menu',
    sidebarCloseLabel: 'Close navigation menu',
    sidebarOpenLabel: 'Open navigation menu',
    svgAltText: 'VisitScotland Home',
    svgColor: designTokens['vs-color-background-brand'],
    svgHref: '#',
    svgPath: 'visitscotland-logo',
    svgWidth: '167px',
    svgHeight: '28px',
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
