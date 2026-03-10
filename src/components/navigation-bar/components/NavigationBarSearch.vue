<template>
    <VsButton
        data-test="vs-navigation-bar-search"
        id="site-search-btn"
        variant="secondary"
        size="sm"
        icon="vs-icon-control-search"
        :active="showSearch"
        :show-label-breakpoint="showLabelBreakpoint"
        @click="showSearch = !showSearch"
    >
        {{ buttonText }}
    </VsButton>

    <Teleport to="body">
        <VsSiteSearchForm
            v-show="showSearch"
            @toggle-action="showSearch = false"
            :is-showing="showSearch"
            :label-text="labelText"
            :submit-button-text="submitButtonText"
            :close-button-text="closeButtonText"
        />
    </Teleport>
</template>

<script>
import VsButton from '@/components/button/Button.vue';
import VsSiteSearchForm from '@/components/site-search/components/SiteSearchForm.vue';

export default {
    name: 'VsNavigationBarSearch',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsButton,
        VsSiteSearchForm,
    },
    props: {
        /**
         * Text label for the search button
         */
        buttonText: {
            type: String,
            default: 'Search',
        },
        /**
         * Form label for the search input and placeholder
         * Form label is visually hidden
         */
        labelText: {
            type: String,
            default: 'Search',
        },
        /**
         * Text label for the submit button
         */
        submitButtonText: {
            type: String,
            default: 'Submit',
        },
        /**
         * Text label for the close button (visually-hidden)
         */
        closeButtonText: {
            type: String,
            default: 'Close',
        },
        /**
        * Breakpoint at which to show button label
        */
        showLabelBreakpoint: {
            type: String,
            default: 'md',
            validator: (value) => /^(xs|sm|md|lg|xl|xxl)$/.test(value),
        },
    },
    data() {
        return {
            showSearch: false,
        };
    },
};
</script>
