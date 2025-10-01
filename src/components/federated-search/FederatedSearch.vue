<template>
    <div
        class="vs-federated-search"
        data-test="vs-federated-search"
    >
        <VsFedSearchInput :cludo-credentials="props.cludoCredentials" />
        <VsDivider class="my-200" />
        <div class="d-flex justify-content-between mb-200">
            <div v-if="federatedSearchStore.results">
                <VsHeading
                    heading-style="heading-m"
                    :level="2"
                    class="my-0"
                >
                    Search results
                </VsHeading>
                <VsDetail>
                    Showing {{ federatedSearchStore.totalResults }} results
                </VsDetail>
            </div>
            <VsFedSearchSort
                v-if="federatedSearchStore.selectedCategory === 'Events & Festivals'"
                :date-filter-visible="true"
                :sort-options="props.sortOptions"
                from-date-label="Arriving from"
                to-date-label="To"
                sort-label="Sort by"
                @from-date-updated="updateStartDate"
                @end-date-updated="updateEndDate"
                @sort-order-updated="updateSort"
            />
        </div>

        <VsLoadingSpinner v-if="federatedSearchStore.isLoading" />

        <div v-if="!federatedSearchStore.isLoading && federatedSearchStore.results">
            <VsCardGroup
                :cards-per-row="3"
                :scroll-snap="true"
            >
                <VsFedCard
                    v-for="result in federatedSearchStore.results"
                    :key="result.id"
                    :date="setEventDate(result.startDate, result.endDate)"
                    :img-src="result.imgSrc"
                    :link="result.url"
                    :link-type="result.dataSrc === 'cludo' ? 'INTERNAL' : 'EXTERNAL'"
                    :price="result.minPrice"
                >
                    <template #fed-card-header>
                        {{ result.title }}
                    </template>
                    <template #fed-card-description>
                        {{ result.description }}
                    </template>
                    <template
                        #fed-card-location
                        v-if="result.location"
                    >
                        {{ result.location }}
                    </template>
                </VsFedCard>
            </VsCardGroup>
            <VsPagination
                class="vs-federated-search--pagination"
                v-if="federatedSearchStore.results && totalResultsPages > 1"
                :number-of-pages="totalResultsPages"
                next-button-label="Next"
                previous-button-label="Previous"
                page-label="Page"
                of-label="of"
                v-model="federatedSearchStore.currentPage"
                @page-click="loadPage"
            />
        </div>
    </div>
</template>

<script setup>
import {
    computed,
    onMounted,
} from 'vue';
import {
    VsDetail,
    VsCardGroup,
    VsHeading,
    VsLoadingSpinner,
    VsPagination,
} from '@/components';
import useFederatedSearchStore from '@/stores/federatedSearch.store';
import VsFedSearchInput from './components/FedSearchInput.vue';
import VsFedSearchSort from './components/FedSearchSort.vue';
import VsFedCard from './components/FedCard.vue';
import VsDivider from './components/Divider.vue';

const federatedSearchStore = useFederatedSearchStore();

const props = defineProps({
    /**
     * API key, Customer ID, and engine ID for Cludo search.
    */
    cludoCredentials: {
        type: Object,
        required: true,
    },
    /**
     * Options for sorting the data (e.g date, price) in an object with
     * an id and label.
     * {
     *   id: 'dateAsc',
     *   label: 'Date',
     * },
    */
    sortOptions: {
        type: Array,
        required: true,
    },
});

const totalResultsPages = computed(() => Math.ceil(federatedSearchStore.totalResults / 12));

onMounted(() => {
    federatedSearchStore.cludoCredentials = props.cludoCredentials;

    const params = new URLSearchParams(document.location.search);
    const paramSearchTerm = params.get('search-term');
    const paramPage = parseInt(params.get('page'), 10);

    if (paramPage) {
        federatedSearchStore.currentPage = paramPage;
    }

    if (paramSearchTerm) {
        federatedSearchStore.searchTerm = paramSearchTerm;
        federatedSearchStore.getSearchResults();
    }
});

function updateStartDate(date) {
    federatedSearchStore.startDate = date;
    federatedSearchStore.navigateToResultsPage();
}

function updateEndDate(date) {
    federatedSearchStore.endDate = date;
    federatedSearchStore.navigateToResultsPage();
}

function updateSort(type) {
    federatedSearchStore.sortBy = type;
    federatedSearchStore.navigateToResultsPage();
}

function loadPage(pageNumber) {
    federatedSearchStore.currentPage = pageNumber;

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });

    federatedSearchStore.navigateToResultsPage();
}

function setEventDate(startDate, endDate) {
    if (startDate === endDate) return startDate;

    return `${startDate} - ${endDate}`;
}
</script>

<style lang="scss">

//     &__close-button {
//         position: absolute;
//         right: 8px;
//         top: 6px;

//         @include media-breakpoint-up(xl) {
//             right: $vs-spacer-100;
//             top: $vs-spacer-050;
//         }
//     }

// .autocomplete-suggestions {
//     background-color: #fff;
//     box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
//     cursor: pointer;
//     margin-top: 0.5rem;
//     padding: 1rem;
//     position: absolute;
//     top: 3rem;
//     left: 3rem;
//     width: 91%;
// }

.vs-federated-search {
    &--pagination {
        margin: $vs-spacer-400 $vs-spacer-0 $vs-spacer-300 $vs-spacer-0;
    }
}
</style>
