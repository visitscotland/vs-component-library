import { userEvent } from 'storybook/test';
import VsNavigationBar from '@/components/navigation-bar/NavigationBar.vue';
import VsSvgLink from '@/components/svg-link/SvgLink.vue';
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
    },
    setup() {
        return {
            args,
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
                />
            </template>

            <template #navigation-bar-menu>
                Menu items here
            </template>

            <template #navigation-bar-utilities>
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
    svgWidth: '184px',
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
