<template>
    <div class="vs-fed-search-input">
        <div class="d-flex">
            <div class="vs-fed-search__input d-flex flex-grow-1 me-100 position-relative">
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
            @filter-updated="updateSelectedCategory"
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
