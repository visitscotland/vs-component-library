<template>
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
                v-for="(item, index) in staticNavExampleData"
                :key="index"
                :href="item.href"
            >
                {{ item.title }}
            </VsMegaNavStaticLink>
        </template>

        <template #mega-nav-accordion-items>
            <VsMegaNavStaticLink
                v-for="(item, index) in staticNavExampleData"
                :key="index"
                :href="item.href"
                :is-full-width="true"
            >
                {{ item.title }}
            </VsMegaNavStaticLink>
        </template>
    </VsMeganav>

    <VsContainer
        class="mt-075 mt-lg-200"
    >
        <VsRow>
            <VsCol
                cols="10"
                lg="8"
            >
                <VsBreadcrumb>
                    <VsBreadcrumbItem
                        href="#"
                        text="Home"
                    />
                    <VsBreadcrumbItem
                        href="#"
                        text="Advice and Support"
                    />
                    <VsBreadcrumbItem
                        href="#"
                        text="Manage your social media"
                        active
                    />
                </VsBreadcrumb>
            </VsCol>
        </VsRow>
    </VsContainer>

    <slot name="heroSection" />

    <slot name="content" />
</template>

<script>

import {
    VsCol, VsRow, VsContainer,
} from '@/components/grid';
import VsMeganav from '@/components/mega-nav/MegaNav.vue';
import VsMegaNavStaticLink from '@/components/mega-nav/components/MegaNavStaticLink.vue';
import VsGlobalMenu from '@/components/global-menu/GlobalMenu.vue';
import VsBreadcrumb from '@/components/breadcrumb/Breadcrumb.vue';
import VsBreadcrumbItem from '@/components/breadcrumb/components/BreadcrumbItem.vue';
import navExample from '@/assets/fixtures/header/main-nav.json';
import staticNavExample from '@/assets/fixtures/header/static-nav.json';

/**
 * @displayName Card Layout
 */
export default {
    name: 'VsNavigationPage',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsCol,
        VsRow,
        VsContainer,
        VsMeganav,
        VsMegaNavStaticLink,
        VsGlobalMenu,
        VsBreadcrumb,
        VsBreadcrumbItem,
    },
    props: {
        /**
        * Card grid pattern variant
        */
        variant: {
            type: String,
            default: 'grid',
            validator: (value) => value.match(/(grid)/),
        },
    },
    data() {
        return {
            navExampleData: navExample,
            staticNavExampleData: staticNavExample,
        };
    },
};
</script>
