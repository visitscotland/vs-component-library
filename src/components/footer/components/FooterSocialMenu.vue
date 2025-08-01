<template>
    <div
        class="vs-footer-social-menu px-0 py-150 py-md-200 py-lg-0 px-lg-075"
        data-test="vs-footer-social-menu"
    >
        <VsHeading
            level="2"
            heading-style="heading-xxs"
            class="vs-footer-social-menu__title"
        >
            <!-- @slot Put the menu title here  -->
            <slot name="title" />
        </VsHeading>

        <VsList
            unstyled
            class="mt-125 mt-md-0 mt-lg-125 pe-lg-400 pe-xl-300"
        >
            <!-- @slot The default slot is the content for the menu social items -->
            <slot />
        </VsList>
    </div>
</template>

<script>
import VsList from '@/components/list/List.vue';
import VsHeading from '@/components/heading/Heading.vue';

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
        margin: 0 $vs-spacer-075;

        @include media-breakpoint-up(sm) {
            margin: 0 $vs-spacer-150;
        }

        @include media-breakpoint-up(md) {
            margin: 0;
            padding-top: $vs-spacer-075;
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
