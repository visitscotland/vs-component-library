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
                    @keyup.enter="federatedSearchStore.navigateToResultsPage"
                />
            </div>
            <VsButton
                class="d-none d-lg-block px-200"
                :disabled="federatedSearchStore.isLoading"
                @click="federatedSearchStore.navigateToResultsPage"
            >
                Search
            </VsButton>
        </div>

        <VsFedFilter
            v-if="federatedSearchStore.cludoCategories"
            :active-filter="federatedSearchStore.selectedCategory"
            :filter-categories="federatedSearchStore.cludoCategories"
            :wrap="true"
            @filter-updated="updateSelectedCategory"
        />

        <VsFedFilter
            v-if="federatedSearchStore.selectedCategory === 'Events & Festivals'"
            :active-filter="federatedSearchStore.selectedSubCategory"
            class="mt-200"
            :filter-categories="subFilters"
            @filter-updated="updateSelectedSubCategory"
        />

        <VsDivider />
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import useFederatedSearchStore from '@/stores/federatedSearch.store';
import {
    VsButton,
    VsIcon,
    VsInput,
} from '@/components';
import VsDivider from './Divider.vue';
import VsFedFilter from './FedFilter.vue';

const props = defineProps({
    /**
     * API key, Customer ID, and engine ID for Cludo search.
    */
    cludoCredentials: {
        type: Object,
        required: true,
    },
    isHomePage: {
        type: Boolean,
        default: false,
    },
});

const subFilters = [
    {
        Key: 'Books',
    },
    {
        Key: 'Clubs',
    },
    {
        Key: 'Comedy',
    },
    {
        Key: 'Dance',
    },
    {
        Key: 'Days out',
    },
    {
        Key: 'Festivals',
    },
    {
        Key: 'Films',
    },
    {
        Key: 'Kids',
    },
    {
        Key: 'LGBTQIA+',
    },
    {
        Key: 'Music',
    },
    {
        Key: 'Sport',
    },
    {
        Key: 'Talks & Lectures',
    },
    {
        Key: 'Theatre',
    },
];

const federatedSearchStore = useFederatedSearchStore();

function updateSearchTerm(event) {
    federatedSearchStore.currentPage = 1;
    federatedSearchStore.searchTerm = event.value;
}

function updateSelectedCategory(category) {
    federatedSearchStore.currentPage = 1;
    federatedSearchStore.selectedCategory = (federatedSearchStore.selectedCategory !== category)
        ? category
        : '';

    federatedSearchStore.navigateToResultsPage();
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

    federatedSearchStore.navigateToResultsPage();
}

onMounted(() => {
    federatedSearchStore.cludoCredentials = props.cludoCredentials;
    federatedSearchStore.isHomePage = props.isHomePage;

    const url = window.location.search;
    const params = new URLSearchParams(url);

    if (params.has('search-term')) {
        federatedSearchStore.searchTerm = params.get('search-term');
    }

    if (params.has('category')) {
        federatedSearchStore.selectedCategory = decodeURIComponent(params.get('category'));
    }

    if (!params.has('search-term') && !params.has('category')) {
        federatedSearchStore.getCludoCategories();
    } else {
        federatedSearchStore.getSearchResults();
    }
});
</script>

<!-- <script setup>
import { onMounted } from 'vue';
import useFederatedSearchStore from '@/stores/federatedSearch.store';
import {
    VsButton,
    VsIcon,
    VsInput,
} from '@/components';
import VsDivider from './Divider.vue';
import VsFedFilter from './FedFilter.vue';

const federatedSearchStore = useFederatedSearchStore();

const props = defineProps({
    /**
     * API key, Customer ID, and engine ID for Cludo search.
    */
    cludoCredentials: {
        type: Object,
        required: true,
    },
});

// Search input
    // Clicking search button navigates to search page
// Categories
    // Come from Cludo.
    // Query Cludo API on mount to get category list.
// Clicking a category navigates to search page.

onMounted(() => {
    federatedSearchStore.cludoCredentials = props.cludoCredentials;

    const params = new URLSearchParams(window.location.search);
    const paramSearchTerm = params.get('search-term');
    const paramCategory = params.get('category');

    if (!params.has('search-term') && !params.has('category')) {
        federatedSearchStore.getCludoCategories();
    } else {
        federatedSearchStore.searchTerm = params.get('search-term');
        federatedSearchStore.selectedCategory = params.get('category');

        federatedSearchStore.getSearchResults();
    }

    // if (!paramSearchTerm && !paramCategory) {
    //     console.log('get categories');
    //     federatedSearchStore.getCludoCategories();
    // } else {
    //     console.log('query apis');
    //     searchTerm.value = paramSearchTerm;

    //     federatedSearchStore.searchTerm = paramSearchTerm;
    //     federatedSearchStore.selectedCategory = paramCategory;
    //     federatedSearchStore.getSearchResults();
    // }
});

function navigateToSearchResults() {
    // URL of search results page.
    const url = '.';
    const params = new URLSearchParams(url.search);

    if (searchTerm.value) {
        params.set('search-term', searchTerm.value);
    }

    if (selectedCategory.value) {
        params.set('category', selectedCategory.value);
    }

    window.location.href = `${url}/?${params}`;
    // history.pushState(null, null, `?${params.toString()}`);
}

function setSelectedCategory(category) {
    selectedCategory.value = (selectedCategory.value !== category)
        ? category
        : '';

    navigateToSearchResults();
}
</script> -->

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
}
</style>
