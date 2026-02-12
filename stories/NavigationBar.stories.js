import VsNavigationBar from '@/components/navigation-bar/NavigationBar.vue';
import VsNavigationBarSidebar from '@/components/navigation-bar/components/NavigationBarSidebar.vue';
import VsNavigationBarSidebarToggle from '@/components/navigation-bar/components/NavigationBarSidebarToggle.vue';

import VsSvgLink from '@/components/svg-link/SvgLink.vue';

import designTokens from '@/assets/tokens/tokens.json';

export default {
    component: VsNavigationBar,
    title: 'Components/Navigation/NavigationBar',
};

const Template = (args) => ({
    components: {
        VsNavigationBar,
        VsNavigationBarSidebar,
        VsNavigationBarSidebarToggle,
        VsSvgLink,
    },
    setup() {
        return {
            args,
        };
    },
    template: `   
        <VsNavigationBar>

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
                Utility items here
            </template>

        </VsNavigationBar>
    `,
});

const base = {
    svgAltText: 'VisitScotland Home',
    svgColor: designTokens['vs-color-background-brand'],
    svgHref: '#',
    svgPath: 'visitscotland-logo',
    svgWidth: '184px',
};

export const Default = Template.bind({
});

Default.args = base;
