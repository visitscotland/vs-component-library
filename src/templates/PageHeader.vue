<template>
    <div class="vs-sticky-nav">
        <VsGlobalMenu
            dropdown-label="Our websites"
            active-site="https://www.visitscotland.com/"
        />

        <VsMeganav
            href="#"
            menu-toggle-alt-text="Toggle Menu"
            search-button-text="Search"
            search-label-text="What are you looking for?"
            search-clear-button-text="Clear form"
            search-close-button-text="Close search form"
        >
            <template #mega-nav-top-menu-items>
                <VsMegaNavStaticLink
                    v-for="(item, index) in menuList"
                    :key="`top-${index}`"
                    :href="item.href"
                >
                    {{ item.title }}
                </VsMegaNavStaticLink>
            </template>

            <template #mega-nav-accordion-items>
                <VsMegaNavStaticLink
                    v-for="(item, index) in menuList"
                    :key="`accordion-${index}`"
                    :href="item.href"
                    :is-full-width="true"
                >
                    {{ item.title }}
                </VsMegaNavStaticLink>
            </template>
        </VsMeganav>
    </div>

    <slot name="breadcrumb" />

    <slot name="heroSection" />
</template>

<script>
import VsMeganav from '@/components/mega-nav/MegaNav.vue';
import VsMegaNavStaticLink from '@/components/mega-nav/components/MegaNavStaticLink.vue';
import VsGlobalMenu from '@/components/global-menu/GlobalMenu.vue';
import navExample from '@/assets/fixtures/header/main-nav.json';
import bshNavExample from '@/assets/fixtures/header/bsh-nav.json';

/**
 * @displayName Page Header
 */
export default {
    name: 'VsPageHeader',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsMeganav,
        VsMegaNavStaticLink,
        VsGlobalMenu,
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
                b2c: navExample,
                b2b: bshNavExample,
            },
        };
    },
    computed: {
        menuList() {
            return this.navData[this.menuType] || [];
        },
    },
};
</script>
