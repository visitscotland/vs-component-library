<template>
    <div
        class="vs-footer-social-menu px-0 py-6 py-md-8 py-lg-0 px-lg-3"
        data-test="vs-footer-social-menu"
    >
        <VsHeading
            level="2"
            override-style-level="6"
            class="vs-footer-social-menu__title"
        >
            <!-- @slot Put the menu title here  -->
            <slot name="title" />
        </VsHeading>

        <VsList
            unstyled
            class="mt-5 mt-md-0 mt-lg-5 pe-lg-10 pe-xl-9"
        >
            <!-- @slot The default slot is the content for the menu social items -->
            <slot />
        </VsList>
    </div>
</template>

<script>
import VsList from '@components/list/List.vue';
import VsHeading from '@components/heading/Heading.vue';

/**
 * The FooterSocialMenu is used inside the FooterNavList.
 * It's a wrapper for social media links in the footer.
 *
 * @displayName Footer Social Menu
 */

export default {
    name: 'VsFooterSocialMenu',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsList,
        VsHeading,
    },
};
</script>

<style lang="scss">
.vs-footer-social-menu {
    border-left: 1px solid $vs-color-border-inverse;
    background: $vs-color-background-bold;

    &__title.vs-heading{
        background: $vs-color-background-bold;
        color: $vs-color-text-inverse;
        margin: 0 $spacer-3;

        @include media-breakpoint-up(sm) {
            margin: 0 $spacer-6;
        }

        @include media-breakpoint-up(md) {
            margin: 0;
            padding-top: $spacer-3;
        }
    }

    @include media-breakpoint-down(lg) {
        border-left: 0;

        .vs-list {
            display: flex;
            justify-content: center;

            .vs-footer-social-item {
                margin-bottom: 0;
            }
        }
    }
}
</style>
