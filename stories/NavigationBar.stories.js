import VsNavigationBar from '@/components/navigation-bar/NavigationBar.vue';
import VsSvgLink from '@/components/svg-link/SvgLink.vue';
import designTokens from '@/assets/tokens/tokens.json';

export default {
    component: VsNavigationBar,
    title: 'Components/Navigation/NavigationBar',
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
