<template>
    <div
        class="vs-federated-search"
        data-test="vs-federated-search"
    >
        <div class="vs-federated-search__container">
            <VsFedSearchInput
                :cludo-api-key="props.cludoApiKey"
                :cludo-customer-id="props.cludoCustomerId"
                :cludo-engine-id="props.cludoEngineId"
                :filters="props.filters"
                :sub-filters="props.subFilters"
                :labels="props.searchLabels"
            />
            <VsDivider class="my-200" />
            <template
                v-for="(category, index) in federatedSearchStore.filters"
                :key="index"
            >
                <div
                    v-show="federatedSearchStore.selectedCategoryKey === category.Key"
                    class="mb-200"
                >
                    <slot
                        :name="`federated-search__spotlight-${category.Key}`"
                    />
                </div>
            </template>
            <div
                v-if="federatedSearchStore.results"
                class="vs-federated-search__results"
            >
                <div>
                    <VsHeading
                        heading-style="heading-m"
                        :level="2"
                        class="my-0"
                    >
                        {{ props.searchLabels.searchResults }}
                    </VsHeading>
                    <VsDetail v-if="federatedSearchStore.totalResults !== 0">
                        {{ props.searchLabels.resultsFirst }}
                        {{ federatedSearchStore.totalResults }}
                        {{ props.searchLabels.resultsSecond }}
                    </VsDetail>
                </div>
                <VsFedSearchSort
                    v-if="federatedSearchStore.selectedCategoryKey === 'events'"
                    :date-filter-visible="true"
                    :sort-options="props.sortLabels.sortOptions"
                    :from-date-label="props.sortLabels.dateFrom"
                    :to-date-label="props.sortLabels.dateTo"
                    :sort-label="props.sortLabels.sort"
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
                    :class="federatedSearchStore.results && totalResultsPages <= 1 ? 'mb-300' : null"
                >
                    <VsCard
                        v-for="result in federatedSearchStore.results"
                        :key="result.id"
                    >
                        <template #vs-card-header>
                            <div class="position-relative">
                                <VsImg
                                    :src="result.imgSrc || fallbackImg"
                                    class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                                />
                                <div class="position-absolute bottom-0 start-0 d-flex gap-2">
                                    <VsBadge
                                        v-if="result.minPrice"
                                        variant="information"
                                        class="rounded-top-end rounded-bottom-start"
                                    >
                                        {{ props.fromText }} {{ formattedPrice(result.minPrice) }}
                                    </VsBadge>

                                    <VsBadge
                                        v-if="result.startDate"
                                        variant="information"
                                        class="rounded-top-end rounded-top-start"
                                    >
                                        {{ setEventDate(result.startDate, result.endDate) }}
                                    </VsBadge>
                                </div>
                                <div class="position-absolute bottom-0 end-0 d-flex">
                                    <VsBadge
                                        v-if="
                                            result.categoryCard
                                                && cardCategoryLabels[result.categoryCard]"
                                        variant="highlight"
                                        class="rounded-top-start rounded-bottom-start mx-0"
                                    >
                                        {{ cardCategoryLabels[result.categoryCard] }}
                                    </VsBadge>
                                </div>
                            </div>
                        </template>

                        <template #vs-card-body>
                            <VsHeading
                                level="3"
                                heading-style="heading-xs"
                            >
                                <VsLink
                                    :href="setCardLink(result)"
                                    class="stretched-link"
                                    variant="secondary"
                                >
                                    {{ result.title }}
                                </VsLink>
                            </VsHeading>

                            <VsBody>
                                <p class="truncate-3-lines text-break">
                                    {{ result.description }}
                                </p>
                            </VsBody>
                        </template>

                        <template #vs-card-footer>
                            <div class="d-flex justify-content-end align-items-end mt-050">
                                <div
                                    class="d-flex align-items-start flex-grow-1"
                                    v-if="result.location"
                                >
                                    <VsIcon
                                        icon="fa-solid fa-location-dot"
                                        variant="highlight"
                                        class="me-050"
                                        size="sm"
                                    />
                                    <VsDetail
                                        no-margins
                                        color="tertiary"
                                    >
                                        {{ result.location }}
                                    </VsDetail>
                                </div>

                                <div>
                                    <VsIcon
                                        v-if="result.dataSrc === 'data-thistle'"
                                        icon="vs-icon-control-external-link"
                                        variant="highlight"
                                        size="sm"
                                    />
                                </div>
                            </div>
                        </template>
                    </VsCard>
                </VsCardGroup>

                <VsPagination
                    class="vs-federated-search__pagination"
                    v-if="federatedSearchStore.results && totalResultsPages > 1"
                    :number-of-pages="totalResultsPages"
                    :next-button-label="props.paginationLabels.nextButtonLabel"
                    :previous-button-label="props.paginationLabels.previousButtonLabel"
                    :page-label="props.paginationLabels.pageLabel"
                    :of-label="props.paginationLabels.ofLabel"
                    v-model="federatedSearchStore.currentPage"
                    @page-click="loadPage"
                />
            </div>
            <div
                v-if="isError.error"
                class="vs-federated-search__warning mb-300"
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
            class="vs-federated-search__error--no-js mb-300"
        >
            {{ props.searchLabels.noJs }}
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
    VsBadge,
    VsBody,
    VsDetail,
    VsCard,
    VsCardGroup,
    VsHeading,
    VsIcon,
    VsImg,
    VsLink,
    VsLoadingSpinner,
    VsPagination,
    VsWarning,
} from '@/components';
import useFederatedSearchStore from '@/stores/federatedSearch.store';
import getEnvValue from '@/utils/get-env-value';
import VsDivider from '@/custom-components/divider/Divider.vue';
import VsFedSearchInput from './components/FedSearchInput.vue';
import VsFedSearchSort from './components/FedSearchSort.vue';

import dataLayerComposable from './composables/dataLayerComposable';

const federatedSearchStore = useFederatedSearchStore();
const isError = ref(
    {
        message: '',
        error: false,
    },
);

const fallbackImg = 'https://static.visitscotland.com/img/fallback-img.png';

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
     * Base API endpoint for the events API
    */
    eventsApi: {
        type: String,
        default: getEnvValue('EVENTS_API_URL'),
    },
    /**
     * Array of filters.
    */
    filters: {
        type: Array,
        default: undefined,
    },
    /**
     * Array of sub filters.
    */
    subFilters: {
        type: Array,
        default: undefined,
    },
    /**
     * Object of error messages
     */
    errorMessages: {
        type: Object,
        required: true,
    },
    /**
     * Label for the 'From' text on each event card
     */
    fromText: {
        type: String,
        default: '',
    },
    /**
     * Labels for the pagination component
     */
    paginationLabels: {
        type: Object,
        required: true,
    },
    /**
     * Labels for the search component
     */
    searchLabels: {
        type: Object,
        required: true,
    },
    /**
     * Labels for the sort component.
     */
    sortLabels: {
        type: Object,
        required: true,
    },
    /**
     * Labels for the card category badge.
     */
    cardCategoryLabels: {
        type: Object,
        required: true,
        default: () => {},
    },
    /**
     * Site language used for the Events API.
     */
    siteLanguage: {
        type: String,
        default: 'en',
        validator: (value) => value.match(
            /(en|es|it|de|nl|fr)/,
        ),
    },
});

// Calculate the total number of pages for pagination.
const totalResultsPages = computed(() => {
    let pageCount;

    if (!federatedSearchStore.selectedCategoryKey) {
        pageCount = (
            federatedSearchStore.totalResultsCludo >= federatedSearchStore.totalResultsEvents
        )
            ? Math.ceil(federatedSearchStore.totalResultsCludo / 6)
            : Math.ceil(federatedSearchStore.totalResultsEvents / 6);
    } else if (federatedSearchStore.selectedCategoryKey !== 'events') {
        pageCount = Math.ceil(federatedSearchStore.totalResultsCludo / 12);
    } else if (federatedSearchStore.selectedCategoryKey === 'events') {
        pageCount = Math.ceil(federatedSearchStore.totalResultsEvents / 12);
    }

    return pageCount;
});

function calculateError() {
    if (
        // Start date is after end date
        federatedSearchStore.endDate
        && (federatedSearchStore.startDate > federatedSearchStore.endDate)
    ) {
        isError.value.error = true;
        isError.value.message = props.errorMessages.incorrectDateOrder;
    } else if (
        // Events API down
        federatedSearchStore.selectedCategoryKey === 'events'
        && federatedSearchStore.eventsApiError
        && !federatedSearchStore.isLoading
    ) {
        isError.value.error = true;
        isError.value.message = props.errorMessages.eventError;
    } else if (
        // Cludo down
        (federatedSearchStore.searchTerm || federatedSearchStore.selectedCategory)
        && federatedSearchStore.selectedCategoryKey !== 'events'
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
}

onMounted(() => {
    const dataLayerHelper = dataLayerComposable();

    dataLayerHelper.createDataLayerObject('siteSearchOpenEvent', {
        referrer_page: document.referrer,
    });

    federatedSearchStore.cludoCredentials = {
        apiKey: props.cludoApiKey,
        customerId: props.cludoCustomerId,
        engineId: props.cludoEngineId,
    };
    federatedSearchStore.eventsApi = props.eventsApi;
    federatedSearchStore.filters = props.filters;
    federatedSearchStore.siteLanguage = props.siteLanguage;

    calculateError();

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
    federatedSearchStore.navigateToResultsPage(true);
}

function updateEndDate(date) {
    federatedSearchStore.endDate = date;
    federatedSearchStore.navigateToResultsPage(true);
}

function updateSort(type) {
    federatedSearchStore.sortBy = type;
    federatedSearchStore.navigateToResultsPage(true);
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

function formattedPrice(price) {
    if (price === null) return '';

    const priceStr = price;

    return priceStr.match(/\b\d+\.\d\b/) ? `£${price}0` : `£${price}`;
};

function setCardLink(result) {
    if (result.url) {
        return result.url;
    }

    if (result.placeUrl) {
        return result.placeUrl;
    }

    const dataThistleBase = 'https://www.datathistle.com/event/';
    const title = encodeURIComponent(
        result.title
            .replaceAll(' ', '-')
            .toLowerCase(),
    );
    return `${dataThistleBase}${result.parentId}-${title}`;
}

onUpdated(() => {
    calculateError();
});
</script>

<style lang="scss">
.vs-federated-search {
    &__pagination {
        margin: $vs-spacer-400 $vs-spacer-0 $vs-spacer-300 $vs-spacer-0;

        @include media-breakpoint-down(lg) {
            margin: $vs-spacer-100 $vs-spacer-0 $vs-spacer-200 $vs-spacer-0;
        }
    }

    &__error--no-js {
        display: none;
    }

    &__results {
        display: flex;
        justify-content: space-between;
        margin-bottom: $vs-spacer-200;

        @include media-breakpoint-down(lg) {
            flex-direction: column;
            gap: $vs-spacer-200;
        }
    }
}

@include no-js {
    .vs-federated-search {
        &__container {
            display: none;
        }

        &__error--no-js {
            display: block;
        }
    }
}
</style>
