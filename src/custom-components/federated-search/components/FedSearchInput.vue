<template>
    <div class="vs-fed-search-input">
        <div class="vs-fed-search__input">
            <div class="vs-fed-search__text-input">
                <!-- search input -->
                <label
                    for="federated-search"
                    class="vs-federated-search__label"
                >
                    <span class="visually-hidden">
                        Search for something
                    </span>
                    <VsIcon
                        icon="vs-icon-control-search"
                        size="xs"
                    />
                </label>
                <VsInput
                    :auto-complete="false"
                    class="vs-federated-search__input w-100"
                    field-name="federated-search"
                    name="searchrequest"
                    :placeholder="props.labels.searchLabel"
                    type="search"
                    :value="federatedSearchStore.searchTerm"
                    @updated="updateSearchTerm"
                    @keyup.enter="search"
                />
            </div>
            <VsButton
                class="d-none d-lg-block px-200"
                :disabled="isLoading"
                @click="search"
            >
                {{ props.labels.search }}
            </VsButton>
        </div>

        <div
            v-if="searchSuggestions && searchSuggestions.length > 0"
            class="position-relative"
        >
            <div
                v-if="searchSuggestions"
                class="vs-fed-search-input__autocomplete"
            >
                <VsList unstyled>
                    <li
                        v-for="suggestion in searchSuggestions"
                        :key="suggestion"
                        class="vs-fed-search-input__autocomplete__suggestion"
                        @click="suggestedSearch(suggestion)"
                        @keyup.enter="suggestedSearch(suggestion)"
                        tabindex="0"
                        v-html="highlightAutocompleteSuggestion(suggestion)"
                    />
                </VsList>
            </div>
        </div>

        <VsFedFilter
            v-if="props.filters"
            :active-filter="federatedSearchStore.selectedCategoryKey"
            :filter-categories="props.filters"
            ref="categoryFilter"
            :wrap="true"
            @filter-updated="updateSelectedCategory"
        />

        <VsFedFilter
            v-if="federatedSearchStore.selectedCategoryKey === 'events'
                && props.subFilters"
            :active-filter="federatedSearchStore.selectedSubCategoryKey"
            class="mt-200"
            :filter-categories="props.subFilters"
            ref="subCategoryFilter"
            variant="secondary"
            @filter-updated="updateSelectedSubCategoryKey"
        >
            <template #fed-filter-header>
                {{ props.labels.refine }}
            </template>
        </VsFedFilter>
    </div>
</template>

<script setup>
import {
    onMounted, ref, watch,
} from 'vue';
import { storeToRefs } from 'pinia';
import useFederatedSearchStore from '@/custom-components/federated-search/stores/federatedSearch.store';
import {
    VsButton,
    VsIcon,
    VsInput,
    VsList,
} from '@/components';
import getEnvValue from '@/utils/get-env-value';
import VsFedFilter from './FedFilter.vue';

import dataLayerComposable from '../composables/dataLayerComposable';

const dataLayerHelper = dataLayerComposable();

const props = defineProps({
    /**
     * API Key for Cludo.
    */
    cludoApiKey: {
        type: String,
        default: getEnvValue('CLUDO_API_KEY'),
    },
    /**
     * Customer ID for Cludo.
    */
    cludoCustomerId: {
        type: Number,
        default: Number(getEnvValue('CLUDO_CUSTOMER_ID')),
    },
    /**
     * Engine ID for Cludo.
    */
    cludoEngineId: {
        type: Number,
        default: Number(getEnvValue('CLUDO_ENGINE_ID')),
    },
    /**
     * Used to determine the search and filter buttons actions.
    */
    isHomePage: {
        type: Boolean,
        default: false,
    },
    /**
     * URL of search page.
    */
    searchUrl: {
        type: String,
        default: undefined,
    },
    /**
     * Array of filters to be used in the FedSearchInput component.
    */
    filters: {
        type: Array,
        default: undefined,
    },
    /**
     * Array of sub filters to be used in the FedSearchInput component.
    */
    subFilters: {
        type: Array,
        default: undefined,
    },
    /**
     * Labels for the component.
    */
    labels: {
        type: Object,
        required: true,
    },
});

const federatedSearchStore = useFederatedSearchStore();
const { isLoading } = storeToRefs(federatedSearchStore);
const searchSuggestions = ref();

const categoryFilter = ref(null);
const subCategoryFilter = ref(null);

async function updateSearchTerm(event) {
    federatedSearchStore.currentPage = 1;
    federatedSearchStore.searchTerm = event.value.trim();

    const url = window.location.search;
    const params = new URLSearchParams(url);

    if (federatedSearchStore.searchTerm && params.get('search-term') !== federatedSearchStore.searchTerm) {
        searchSuggestions.value = await federatedSearchStore.getAutoComplete();
    }

    if (!federatedSearchStore.searchTerm) {
        searchSuggestions.value = null;
    }
}

async function search() {
    searchSuggestions.value = null;
    await federatedSearchStore.navigateToResultsPage();

    dataLayerHelper.createDataLayerObject('siteSearchUsageEvent', {
        search_query: federatedSearchStore.searchTerm,
        query_input: federatedSearchStore.queryInput,
        results_count: federatedSearchStore.totalResults,
        search_usage_index: federatedSearchStore.searchInSessionCount,
        search_type: federatedSearchStore.searchInSessionCount === 1 ? 'initial' : 'follow-up',
    });
}

function autoSuggestAnalytics(suggestion) {
    dataLayerHelper.createDataLayerObject('siteSearchClickEvent', {
        interaction_type: 'search_autosuggest',
        search_query: federatedSearchStore.searchTerm,
        page_number: federatedSearchStore.currentPage,
        search_usage_index: federatedSearchStore.searchInSessionCount,
        results_count: federatedSearchStore.totalResults,
        click_text: suggestion,
        query_input: federatedSearchStore.queryInput,
    });
}

function suggestedSearch(query) {
    federatedSearchStore.searchTerm = query;
    searchSuggestions.value = null;
    federatedSearchStore.navigateToResultsPage(false, true);
    autoSuggestAnalytics(query);
}

function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function highlightAutocompleteSuggestion(suggestion) {
    const term = (federatedSearchStore.searchTerm || '').trim();
    if (!term) return escapeHtml(suggestion);
    const reg = new RegExp(`(${escapeRegExp(term)})`, 'gi');
    return escapeHtml(suggestion).replace(reg, '<strong>$1</strong>');
}

function categoryClickAnalytics(category) {
    dataLayerHelper.createDataLayerObject('siteSearchClickEvent', {
        interaction_type: 'facet_click',
        search_query: federatedSearchStore.searchTerm,
        page_number: federatedSearchStore.currentPage,
        search_usage_index: federatedSearchStore.searchInSessionCount,
        results_count: federatedSearchStore.totalResults,
        click_text: category.Label || category.Key,
    });
}

async function updateSelectedCategory(category) {
    const url = new URL(window.location);

    // Reset to page 1
    url.searchParams.delete('page');
    federatedSearchStore.currentPage = 1;

    // Reset dates
    url.searchParams.delete('start-date');
    url.searchParams.delete('end-date');
    federatedSearchStore.startDate = '';
    federatedSearchStore.endDate = '';

    // Reset sort options
    federatedSearchStore.sortBy = undefined;

    // Reset sub category
    federatedSearchStore.selectedSubCategory = [];
    federatedSearchStore.selectedSubCategoryKey = [];

    federatedSearchStore.selectedCategory = (federatedSearchStore.selectedCategory
        !== category.Label)
        ? category.Label
        : '';

    federatedSearchStore.selectedCategoryKey = (federatedSearchStore.selectedCategoryKey
        !== category.Key)
        ? category.Key
        : '';

    await federatedSearchStore.navigateToResultsPage(true);

    categoryClickAnalytics(category);
}

function updateSelectedSubCategoryKey(category) {
    if (!federatedSearchStore.selectedSubCategoryKey.includes(category.Key)) {
        federatedSearchStore.selectedSubCategory.push(category.Label);
        federatedSearchStore.selectedSubCategoryKey.push(category.Key);
    } else {
        const index = federatedSearchStore.selectedSubCategoryKey.indexOf(category.Key);

        if (index >= 0) {
            federatedSearchStore.selectedSubCategory.splice(index, 1);
            federatedSearchStore.selectedSubCategoryKey.splice(index, 1);
        }
    }

    federatedSearchStore.navigateToResultsPage(true);

    categoryClickAnalytics(category);
}

onMounted(() => {
    federatedSearchStore.cludoCredentials = {
        apiKey: props.cludoApiKey,
        customerId: props.cludoCustomerId,
        engineId: props.cludoEngineId,
    };
    federatedSearchStore.isHomePage = props.isHomePage;

    if (props.searchUrl) {
        federatedSearchStore.searchUrl = props.searchUrl;
    }

    const url = window.location.search;
    const params = new URLSearchParams(url);

    if (params.has('search-term')) {
        federatedSearchStore.searchTerm = params.get('search-term');
    }

    if (params.has('category')) {
        federatedSearchStore.selectedCategoryKey = decodeURIComponent(params.get('category'));
    }

    if (params.has('sub-category')) {
        const subCategories = decodeURIComponent(params.get('sub-category')).split(',');
        subCategories.forEach((subCategory) => (
            federatedSearchStore.selectedSubCategoryKey.push(subCategory)
        ));
    }

    if (params.has('category') && params.get('category') === 'events' && params.has('sort-by')) {
        federatedSearchStore.sortBy = params.get('sort-by');
    }

    if (params.has('start-date')) {
        federatedSearchStore.startDate = params.get('start-date');
    }

    if (params.has('end-date')) {
        federatedSearchStore.endDate = params.get('end-date');
    }

    if (params.has('search-term') || params.has('category')) {
        federatedSearchStore.getSearchResults();
    }

    if (params.has('postcode')) {
        federatedSearchStore.postcode = params.get('postcode');
    }

    if (params.has('location')) {
        federatedSearchStore.location = params.get('location');
    }

    if (params.has('radius')) {
        federatedSearchStore.radius = params.get('radius');
    }

    if (params.has('postcodeareas')) {
        federatedSearchStore.postcodeareas = params.get('postcodeareas');
    }
});

// Reset the filter scroll when a search has run (isLoading is set from true to false).
watch(isLoading, (newValue) => {
    if (!newValue) {
        categoryFilter.value?.resetScroll();
        subCategoryFilter.value?.resetScroll();
    }
});
</script>

<style lang="scss">
.vs-fed-search-input {
    .vs-fed-search__input {
        display: flex;
        position: relative;
        z-index: 1;
        padding: $vs-spacer-100 0;

        @include media-breakpoint-up(lg) {
            padding: $vs-spacer-200 0;
        }

        & .vs-fed-search__text-input {
            flex-grow: 1;

            @include media-breakpoint-up(lg){
                margin-right: $vs-spacer-100;
            }

            & label {
                position: absolute;
                left: $vs-spacer-075;
                top: 50%;
                transform: translate(0, -50%);

                @include media-breakpoint-up(lg) {
                    left: $vs-spacer-150;

                    .vs-icon {
                        font-size: $icon-size-sm;
                    }
                }
            }
        }

        .vs-input.form-control {
            font-size: $font-size-body;
            padding: $vs-spacer-075 $vs-spacer-125 $vs-spacer-075 $vs-spacer-250;
            margin: 0;
            border-radius: $vs-radius-full;

            &:focus{
                @include form-focus-state;
            }

            @include media-breakpoint-up(lg) {
                padding: $vs-spacer-100 $vs-spacer-100 $vs-spacer-100 $vs-spacer-400;
                font-size: $font-size-6;
                height: $vs-spacer-300;
            }
        }
    }

    &__autocomplete {
        position: absolute;
        z-index: 10;
        background-color: $vs-color-background-primary;
        width: 90%;
        margin: 0 auto;
        border: 1px solid $vs-color-border-primary;

        @include media-breakpoint-down(lg) {
            width: 100%;
            right: 0;
        }

        &__suggestion {
            padding: $vs-spacer-050 $vs-spacer-050;
            text-decoration: none;

            &:hover {
                background: $vs-color-interaction-cta-subtle-hover;
            }

            &:focus{
                @include form-focus-state;
            }
        }
    }
}
</style>
