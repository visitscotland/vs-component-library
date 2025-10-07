<template>
    <div
        class="vs-federated-search"
        data-test="vs-federated-search"
    >
        <div class="vs-federated-search__container">
            <VsFedSearchInput
                :cludoa-api-key="props.cludoApiKey"
                :cludo-customer-id="props.cludoCustomerId"
                :cludo-engine-id="props.cludoEngineID"
                :sub-filters="props.subFilters"
                :sub-filter-header="props.subFilterHeader"
            />
            <VsDivider class="my-200" />
            <div
                v-if="federatedSearchStore.results"
                class="d-flex justify-content-between mb-200"
            >
                <div>
                    <VsHeading
                        heading-style="heading-m"
                        :level="2"
                        class="my-0"
                    >
                        Search results
                    </VsHeading>
                    <VsDetail v-if="federatedSearchStore.totalResults !== 0">
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

            <div
                v-if="!federatedSearchStore.isLoading
                    && federatedSearchStore.results
                    && !federatedSearchStore.eventsApiError"
            >
                <VsCardGroup
                    :cards-per-row="3"
                    :scroll-snap="true"
                >
                    <VsFedCard
                        v-for="result in federatedSearchStore.results"
                        :key="result.id"
                        :date="setEventDate(result.startDate, result.endDate)"
                        :img-src="result.imgSrc"
                        :link="setCardLink(result)"
                        :link-type="result.dataSrc === 'cludo' ? 'INTERNAL' : 'EXTERNAL'"
                        :price="result.minPrice"
                        fromText="From"
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
            <div
                v-if="isError.error"
                class="vs-federated-search--warning"
            >
                <VsWarning
                    v-if="isError.error"
                >
                    {{ isError.message }}
                </VsWarning>
            </div>
        </div>
        <VsWarning
            data-test="vs-federated-search__error--no-js"
            class="vs-federated-search__error--no-js"
        >
            {{ noJsText }}
        </VsWarning>
    </div>
</template>

<script setup>
import {
    ref,
    computed,
    onMounted,
    onUpdated,
} from 'vue';
import {
    VsDetail,
    VsCardGroup,
    VsHeading,
    VsLoadingSpinner,
    VsPagination,
    VsWarning,
} from '@/components';
import useFederatedSearchStore from '@/stores/federatedSearch.store';
import getEnvValue from '@/utils/get-env-value';
import VsDivider from '@/custom-components/divider/Divider.vue';
import VsFedSearchInput from './components/FedSearchInput.vue';
import VsFedSearchSort from './components/FedSearchSort.vue';
import VsFedCard from './components/FedCard.vue';

const federatedSearchStore = useFederatedSearchStore();
const isError = ref(
    {
        message: '',
        error: false,
    },
);

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
    cludoEngineID: {
        type: Number,
        default: Number(getEnvValue('CLUDO_ENGINE_ID')),
    },
    /**
     * Base API endpoint for the events API
    */
    eventsApi: {
        type: String,
        default: getEnvValue('EVENTS_API_URL'),
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
    /**
     * Array of sub filters.
    */
    subFilters: {
        type: Array,
        default: undefined,
    },
    /**
     * Subfilter header.
    */
    subFilterHeader: {
        type: String,
        default: undefined,
    },
    /**
     * Text to be passed into to explain search won't
     * work without JS
     */
    noJsText: {
        type: String,
        required: true,
    },
    /**
     * Object of error messages
     */
    errorMessages: {
        type: Object,
        required: true,
    },
});

const totalResultsPages = computed(() => Math.ceil(federatedSearchStore.totalResults / 12));

async function calculateError() {
    if (
        // Start date is after end date
        federatedSearchStore.endDate
        && (federatedSearchStore.startDate > federatedSearchStore.endDate)
    ) {
        isError.value.error = true;
        isError.value.message = props.errorMessages.incorrectDateOrder;
    } else if (
        // Events API down
        federatedSearchStore.selectedCategory === 'Events & Festivals'
        && federatedSearchStore.eventsApiError
        && !federatedSearchStore.isLoading
    ) {
        isError.value.error = true;
        isError.value.message = props.errorMessages.eventError;
    } else if (
        // Cludo down
        (federatedSearchStore.searchTerm || federatedSearchStore.selectedCategory)
        && federatedSearchStore.selectedCategory !== 'Events & Festivals'
        && federatedSearchStore.cludoError
        && !federatedSearchStore.isLoading
    ) {
        isError.value.error = true;
        isError.value.message = props.errorMessages.cludoError;
    } else if (
        // No Results
        federatedSearchStore.totalResults === 0
        && !federatedSearchStore.isLoading
    ) {
        isError.value.error = true;
        isError.value.message = props.errorMessages.noResults;
    } else {
        // No error
        isError.value.error = false;
        isError.value.message = '';
    }

    return 0;
}

onMounted(async() => {
    federatedSearchStore.cludoCredentials = {
        apiKey: props.cludoApiKey,
        customerId: props.cludoCustomerId,
        engineId: props.cludoEngineID,
    };
    federatedSearchStore.eventsApi = props.eventsApi;

    await calculateError();

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
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

    if (typeof window !== 'undefined') {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    federatedSearchStore.navigateToResultsPage();
}

function setEventDate(startDate, endDate) {
    if (startDate === endDate) return startDate;

    return `${startDate} - ${endDate}`;
}

function setCardLink(result) {
    if (result.url) {
        return result.url;
    }

    if (result.placeUrl) {
        return result.placeUrl;
    }

    const dataThistleBase = 'https://www.datathistle.com/event/';
    const title = result.title
        .replaceAll(' ', '-')
        .toLowerCase();
    return `${dataThistleBase}${result.parentId}-${title}`;
}

onUpdated(async() => {
    await calculateError();
});

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

    &__error--no-js {
        display: none;
    }
}

@include no-js {
    .vs-federated-search {
        &__container{
            display: none;
        }

        &__error--no-js {
            display: block;
        }
    }
}
</style>
