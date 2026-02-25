import { userEvent } from 'storybook/test';
import VsNavigationBar from '@/components/navigation-bar/NavigationBar.vue';
import VsNavigationBarMenu from '@/components/navigation-bar/components/NavigationBarMenu.vue';
import VsNavigationBarMenuDropdown from '@/components/navigation-bar/components/NavigationBarMenuDropdown.vue';
import VsNavigationBarMenuItem from '@/components/navigation-bar/components/NavigationBarMenuItem.vue';
import VsLink from '@/components/link/Link.vue';
import VsButton from '@/components/button/Button.vue';

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
        VsButton,
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
            :background="args.background"
            sidebar-breakpoint="lg"
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
                                >
                                    {{ item.cta }}
                                </VsLink>
                            </li>
                        </VsNavigationBarMenuDropdown>

                        <VsNavigationBarMenuItem 
                            v-else
                            level="primary"
                            :href="item.href"
                        >
                            {{ item.title }}
                        </VsNavigationBarMenuItem>

                    </template>
                </VsNavigationBarMenu>
            </template>

            <template #navigation-bar-utilities>
                <VsButton
                    icon="vs-icon-control-search"
                    variant="secondary"
                    size="sm"
                >
                    Search
                </VsButton>
            </template>

            <template #sidebar-body>
                Sidebar content here
            </template>

            <template #sidebar-footer>
                Sidebar footer content here
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

export const SubtleNavigationBar = Template.bind({
});

SubtleNavigationBar.args = {
    ...base,
    background: 'inverse',
};

SubtleNavigationBar.globals = {
    backgrounds: {
        value: 'dark',
    },
};
