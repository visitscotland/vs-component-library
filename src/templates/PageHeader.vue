<template>
    <div class="vs-sticky-nav">
        <VsNavigationBar
            sidebar-close-label="Close sidebar menu"
            sidebar-open-label="Open sidebar menu"
            sidebar-title="Navigation menu"
        >
            <template #logo-link>
                <VsSvgLink
                    link-alt-text="VisitScotland Home"
                    href="#"
                    :svg-fill="tokens['vs-color-background-brand']"
                    svg-path="visitscotland-logo"
                    svg-width="167px"
                    svg-height="28px"
                />
            </template>

            <template #navigation-bar-menu>
                <VsNavigationBarMenu menu-aria-label="Main navigation menu">
                    <template
                        v-for="(item, index) in menuList"
                        :key="`top-${index}`"
                    >
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
                            variant="primary-menu-item"
                            :href="item.href"
                        >
                            {{ item.title }}
                        </VsNavigationBarMenuItem>
                    </template>
                </VsNavigationBarMenu>
            </template>

            <template #navigation-bar-utilities>
                <nav aria-label="Utility menu">
                    <ul class="d-flex gap-075">
                        <li>
                            <VsNavigationBarSearch />
                        </li>
                        <li
                            class="d-none d-md-block"
                            v-if="menuType === 'b2c'"
                        >
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
                            v-if="menuType === 'b2c'"
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
                    </ul>
                </nav>
            </template>

            <template #sidebar-body>
                <VsAccordion>
                    <nav aria-label="main navigation menu">
                        <ul>
                            <template
                                v-for="(mobileItem, index) in menuList"
                                :key="`sidebar-${index}`"
                            >
                                <li v-if="mobileItem.dropdownNav">
                                    <VsAccordionItem
                                        :control-id="index.toString()"
                                    >
                                        <template #title>
                                            {{ mobileItem.title }}
                                        </template>

                                        <ul>
                                            <VsNavigationBarMenuItem
                                                v-for="(mobileDropdownItem, mobileDropdownIndex)
                                                    in mobileItem.dropdownNav"
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
                v-if="menuType === 'b2c'"
            >
                <div class="p-100 pb-300">
                    <nav aria-label="Utility menu">
                        <ul class="d-flex gap-075 justify-content-end">
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
                            <VsNavigationBarMenuDropdown
                                subtle
                                class="d-block d-md-none"
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
                        </ul>
                    </nav>
                </div>
            </template>
        </VsNavigationBar>
    </div>

    <slot name="breadcrumb" />

    <slot name="heroSection" />
</template>

<script>
import VsNavigationBar from '@/components/navigation-bar/NavigationBar.vue';
import VsNavigationBarMenu from '@/components/navigation-bar/components/NavigationBarMenu.vue';
import VsNavigationBarMenuItem from '@/components/navigation-bar/components/NavigationBarMenuItem.vue';
import VsNavigationBarMenuDropdown from '@/components/navigation-bar/components/NavigationBarMenuDropdown.vue';
import VsNavigationBarSearch from '@/components/navigation-bar/components/NavigationBarSearch.vue';
import VsSvgLink from '@/components/svg-link/SvgLink.vue';
import VsButton from '@/components/button/Button.vue';
import VsLink from '@/components/link/Link.vue';
import VsAccordion from '@/components/accordion/Accordion.vue';
import VsAccordionItem from '@/components/accordion/components/AccordionItem.vue';
import VsDivider from '@/components/divider/Divider.vue';
import designTokens from '@/assets/tokens/tokens.json';

import b2bNav from '@/assets/fixtures/navigation-bar/b2b-nav.json';
import b2cNav from '@/assets/fixtures/navigation-bar/b2c-nav.json';

/**
 * @displayName Page Header
 */
export default {
    name: 'VsPageHeader',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsNavigationBar,
        VsNavigationBarMenu,
        VsNavigationBarMenuItem,
        VsNavigationBarMenuDropdown,
        VsNavigationBarSearch,
        VsSvgLink,
        VsButton,
        VsLink,
        VsAccordion,
        VsAccordionItem,
        VsDivider,
    },
    props: {
        /**
        * Choose which menu to display
        */
        menuType: {
            type: String,
            default: 'b2b',
            validator: (value) => value.match(/(b2b|b2c)/),
        },
    },
    data() {
        return {
            navData: {
                b2c: b2cNav,
                b2b: b2bNav,
            },
            tokens: designTokens,
        };
    },
    computed: {
        menuList() {
            return this.navData[this.menuType] || [];
        },
    },
};
</script>
