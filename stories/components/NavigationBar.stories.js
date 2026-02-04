// import { userEvent, within } from 'storybook/test';

import VsNavigationBar from '@/components/navigation-bar/NavigationBar.vue';
import VsNavigationBarMenu from '@/components/navigation-bar/components/NavigationBarMenu.vue';
import VsNavigationBarMenuItem from '@/components/navigation-bar/components/NavigationBarMenuItem.vue';
import VsNavigationBarDropdown from '@/components/navigation-bar/components/NavigationBarDropdown.vue';
import VsNavigationBarHighlight from '@/components/navigation-bar/components/NavigationBarHighlight.vue';
import VsSvgLink from '@/components/svg-link/SvgLink.vue';

import designTokens from '@/assets/tokens/tokens.json';
import mainNavExample from '@/assets/fixtures/header/main-nav.json';
import b2cNavExample from '@/assets/fixtures/header/b2c-nav.json';
import b2bNavExample from '@/assets/fixtures/header/b2b-nav.json';

import staticNavExample from '@/assets/fixtures/header/static-nav.json';

export default {
    component: VsNavigationBar,
    title: 'Components/Navigation/NavigationBar',
};

const Template = (args) => ({
    components: {
        VsNavigationBar,
        VsNavigationBarMenu,
        VsNavigationBarMenuItem,
        VsNavigationBarDropdown,
        VsNavigationBarHighlight,
        VsSvgLink,
    },
    setup() {
        return {
            args,
            mainNavExample,
            staticNavExample,
            b2bNavExample,
            b2cNavExample,
        };
    },
    template: `   
        <div :class="args.jsDisabled ? 'no-js' : ''">


            <VsNavigationBar
                v-bind="args"
            >
                <template #logo-link>
                    <VsSvgLink
                        :linkAltText="args.logoAltText"
                        :href="args.href"
                        :svgFill="args.logoColor"
                        :svgPath="args.svgPath"
                        :svgWidth="args.svgWidth"
                    />
                </template>

                <template #navigation-bar-menu>
                    <VsNavigationBarMenu>
                        <template v-for="(item, index) in b2bNavExample" :key="index">

                            <VsNavigationBarDropdown v-if="item.dropdownNav">
                                <template #button-content>
                                    {{ item.title }}
                                </template>


                                <VsNavigationBarMenuItem 
                                    v-for="(dropdownItem, dropdownIndex) in item.dropdownNav.filter(item => !item.isHighlight)" 
                                    :key="dropdownIndex"
                                >
                                    {{ dropdownItem.title }}
                                </VsNavigationBarMenuItem>

                                <template #menu-highlight>
                                    <VsNavigationBarHighlight
                                        v-for="(dropdownItem, dropdownIndex) in item.dropdownNav.filter(item => item.isHighlight)" 
                                        :key="dropdownIndex"
                                    >
                                        {{ dropdownItem.title }}
                                    </VsNavigationBarHighlight>
                                </template>

                            </VsNavigationBarDropdown>

                            <VsNavigationBarMenuItem v-else>
                                {{ item.title }}
                            </VsNavigationBarMenuItem>
 
                        </template>
                    </VsNavigationBarMenu>
                </template>

            </VsNavigationBar>


        </div>
    `,
});

const base = {
    logoAltText: 'VisitScotland Home',
    logoColor: designTokens['vs-color-background-brand'],
    href: '#',
    svgPath: 'visitscotland-logo',
    svgWidth: '184px',
};

export const Default = Template.bind({
});

Default.args = base;

export const NoJavascript = Template.bind({
});

NoJavascript.args = {
    ...base,
    jsDisabled: true,
};
