<template>
    <VsButton
        data-test="vs-site-search"
        class="vs-site-search"
        :class="isShowing ? 'vs-site-search--active' : ''"
        icon="vs-icon-control-search"
        size="md"
        :animate="false"
        @click="toggleAction"
        id="site-search-btn"
        :rounded="false"
    >
        <!-- Default slot for Search button text -->
        <span
            class="visually-hidden-xxl-down"
        >
            <slot />
        </span>
    </VsButton>
</template>

<script>
import VsButton from '@/components/button/Button.vue';
/**
 * Site search lets users find relevant information using
 * a word or phrase to find content.
 *
 * @displayName Site Search
 */

export default {
    name: 'VsSiteSearch',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsButton,
    },
    props: {
        /**
         * Used to know if the search form is currently showing
         */
        isShowing: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['toggleAction'],
    data() {
        return {
            showSearchForm: true,
        };
    },
    methods: {
        /**
         * Toggles search form and emits event with the data
        */
        toggleAction() {
            this.showSearchForm = !this.showSearchForm;

            /**
             * @event toggleAction
             * @type {boolean}
             * @property {boolean} showSearchForm - indicates whether
             * the search form should be hidden or not.
            */
            this.$emit('toggleAction', this.showSearchForm);
        },
    },
};
</script>

<style lang="scss">
.vs-site-search.vs-button.btn-primary {
    z-index: 1;
    height: 45px;
    align-items: center;

    .vs-icon{
        margin-right: 0;
    }

    &.vs-button.btn-md{
        padding: $spacer-050;
    }

    @include media-breakpoint-down(xxl) {
        .visually-hidden-xxl-down {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0px;
            margin: -1px;
            overflow: hidden;
            clip: rect(0px, 0px, 0px, 0px);
            white-space: nowrap;
            border: 0px;
        }
    }

    @include media-breakpoint-up(lg) {
        height: 48px;

        .vs-icon{
            margin-right: $spacer-0;
        }

        &.vs-button.btn-md{
            padding: $spacer-075;
        }

        span.visually-hidden-xxl-down {
            overflow: visible;
        }
    }

    @include media-breakpoint-up(xxl) {
        .vs-icon {
            margin-right: $spacer-050;
        }
    }
}

@include no-js {
    .vs-site-search {
        display: none!important;
    }
}
</style>
