<template>
    <nav
        class="vs-mega-nav-list"
        data-test="vs-mega-nav-list"
        :aria-label="listHeadingId"
    >
        <VsHeading
            v-if="listHeading"
            class="vs-mega-nav-list__heading"
            :id="listHeadingId"
            level="2"
            heading-style="heading-xxs"
        >
            {{ listHeading }}
        </VsHeading>

        <VsList
            class="vs-mega-nav-list__list"
            role="menu"
        >
            <!-- @slot Slot for nav list heading cta link at bottom of the menu group  -->
            <slot name="nav-heading-cta-link" />

            <!-- @slot Slot for nav list items  -->
            <slot name="nav-list-items" />
        </VsList>
    </nav>
</template>

<script>
import VsList from '@/components/list/List.vue';
import VsHeading from '@/components/heading/Heading.vue';
/**
 *  Meganav list wrapper with a slots list items
 *
 * @displayName MegaNav List
 */
export default {
    name: 'VsMegaNavList',
    status: 'prototype',
    release: '0.1.0',
    components: {
        VsList,
        VsHeading,
    },
    props: {
        /**
         * The URL for the nav list link
         */
        listHeading: {
            type: String,
            default: '',
        },
    },
    computed: {
        listHeadingId() {
            if (this.listHeading) {
                const transformedHeading = this.listHeading.replace(/\W/g, '');

                return `vsMeganav${transformedHeading}`;
            }

            return '';
        },
    },
};
</script>

<style lang="scss">
.vs-mega-nav-list {
    position: relative;
    padding: 0;
    margin: 0;
    width: 100%;

    @include media-breakpoint-up(lg) {
        margin: 0 $spacer-150 $spacer-100 0;
        width: 23%;
    }

    @include media-breakpoint-up(xl) {
        margin-right: $spacer-300;
        width: 21.8%;
    }

    @include media-breakpoint-up(xxl) {
        margin-right: $spacer-400;
        width: 21.3%;
    }

    .vs-list.vs-mega-nav-list__list{
        padding-inline-start: 0;
        margin: 0;

        li::before{
            display: none;
        }
    }

    .vs-heading.vs-mega-nav-list__heading {
        display: none;
        padding: $spacer-025 $spacer-100;
        margin: 0 0 $spacer-025;
        border-bottom: 1px solid $vs-color-border-primary;

        @include media-breakpoint-up(lg) {
            display: flex;
        }
    }
}

@include no-js {
    .vs-mega-nav-list {
        width: 100%;
        margin: 0 $spacer-150 $spacer-100 0;

        @include media-breakpoint-up(sm) {
            width: 50%;
        }

        @include media-breakpoint-up(md) {
            width: 32%;
        }
    }
}
</style>
