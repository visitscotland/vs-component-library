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
                    placeholder="What are you looking for?"
                    type="search"
                    :value="federatedSearchStore.searchTerm"
                    @updated="updateSearchTerm"
                    @keyup.enter="search"
                />
            </div>
            <VsButton
                class="d-none d-lg-block px-200"
                :disabled="federatedSearchStore.isLoading"
                @click="search"
            >
                Search
            </VsButton>
        </div>

        <div
            v-if="searchSuggestions"
            class="vs-fed-search-input--autocomplete"
        >
            <VsList unstyled>
                <li
                    v-for="suggestion in searchSuggestions"
                    :key="suggestion"
                    class="vs-fed-search-input--autocomplete__suggestion"
                    @click="suggestedSearch(suggestion)"
                    @keyup.enter="suggestedSearch(suggestion)"
                    tabindex="0"
                >
                    {{ suggestion }}
                </li>
            </VsList>
        </div>

        <VsFedFilter
            v-if="federatedSearchStore.cludoCategories"
            :active-filter="federatedSearchStore.selectedCategory"
            :filter-categories="federatedSearchStore.cludoCategories"
            :wrap="true"
            @filter-updated="updateSelectedCategory"
        />

        <VsFedFilter
            v-if="federatedSearchStore.selectedCategory === 'Events & Festivals'
                && props.subFilters"
            :active-filter="federatedSearchStore.selectedSubCategory"
            class="mt-200"
            :filter-categories="props.subFilters"
            variant="secondary"
            @filter-updated="updateSelectedSubCategory"
        >
            <template #fed-filter-header>
                {{ subFilterHeader }}
            </template>
        </VsFedFilter>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import useFederatedSearchStore from '@/stores/federatedSearch.store';
import {
    VsButton,
    VsIcon,
    VsInput,
    VsList,
} from '@/components';
import getEnvValue from '@/utils/get-env-value';
import VsFedFilter from './FedFilter.vue';

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
     * Array of sub filters to be used in the FedSearchInput component.
    */
    subFilters: {
        type: Array,
        default: undefined,
    },
    /**
     * Label for subfilter header.
    */
    subFilterHeader: {
        type: String,
        default: '',
    },
});

const federatedSearchStore = useFederatedSearchStore();
const searchSuggestions = ref();

async function updateSearchTerm(event) {
    federatedSearchStore.currentPage = 1;
    federatedSearchStore.searchTerm = event.value;

    const url = window.location.search;
    const params = new URLSearchParams(url);

    if (federatedSearchStore.searchTerm && params.get('search-term') !== federatedSearchStore.searchTerm) {
        searchSuggestions.value = await federatedSearchStore.getAutoComplete();
    }
}

function search() {
    searchSuggestions.value = null;
    federatedSearchStore.navigateToResultsPage();
}

function suggestedSearch(query) {
    federatedSearchStore.searchTerm = query;
    searchSuggestions.value = null;
    federatedSearchStore.navigateToResultsPage();
}

function updateSelectedCategory(category) {
    federatedSearchStore.currentPage = 1;
    federatedSearchStore.selectedCategory = (federatedSearchStore.selectedCategory !== category)
        ? category
        : '';

    federatedSearchStore.navigateToResultsPage(true);
}

function updateSelectedSubCategory(category) {
    if (!federatedSearchStore.selectedSubCategory.includes(category)) {
        federatedSearchStore.selectedSubCategory.push(category);
    } else {
        const index = federatedSearchStore.selectedSubCategory.indexOf(category);

        if (index >= 0) {
            federatedSearchStore.selectedSubCategory.splice(index, 1);
        }
    }

    federatedSearchStore.navigateToResultsPage(true);
}

onMounted(() => {
    federatedSearchStore.cludoCredentials = {
        apiKey: props.cludoApiKey,
        customerId: props.cludoCustomerId,
        engineId: props.cludoEngineId,
    };
    federatedSearchStore.isHomePage = props.isHomePage;

    federatedSearchStore.getCludoCategories();

    const url = window.location.search;
    const params = new URLSearchParams(url);

    if (params.has('search-term')) {
        federatedSearchStore.searchTerm = params.get('search-term');
    }

    if (params.has('category')) {
        federatedSearchStore.selectedCategory = decodeURIComponent(params.get('category'));
    }

    if (params.has('sub-category')) {
        federatedSearchStore.selectedSubCategory.push(decodeURIComponent(params.get('sub-category')));
        console.log(federatedSearchStore.selectedSubCategory);
    }

    if (params.has('search-term') && params.has('category')) {
        federatedSearchStore.getSearchResults();
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

    &--autocomplete {
        position: absolute;
        top: 6em;
        left: 0;
        //pushes it the length of the button + then centers under searchbar
        right: calc(48px + 6.25%);
        z-index: 10;
        background-color: $vs-color-background-primary;
        width: 75%;
        margin: 0 auto;
        border: 1px solid $vs-color-border-primary;

        @include media-breakpoint-down(lg) {
            width: 90%;
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
