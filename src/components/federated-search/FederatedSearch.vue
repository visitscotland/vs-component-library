<template>
    <div
        class="vs-federated-search"
        data-test="vs-federated-search"
    >
        <VsFedSearchInput :cludo-credentials="props.cludoCredentials" />

        <!-- <div class="vs-federated-search__search-input d-flex gap-2"> -->
        <!-- <div class="vs-federated-search__search-input"> -->
        <!-- <div class="d-flex flex-grow-1 me-100 position-relative"> -->
        <!-- <div class="">
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
                    class="vs-federated-search__input"
                    :disabled="federatedSearchStore.isLoading"
                    field-name="federated-search"
                    name="searchrequest"
                    placeholder="What are you looking for?"
                    type="search"
                    :value="searchTerm ? searchTerm : ''"
                    @input="updateSearchTerm"
                    @keydown.enter="search"
                /> -->
        <!-- <div
                    v-if="searchSuggestions"
                    class="vs-federated-search__autocomplete"
                >
                    <VsList unstyled>
                        <li
                            v-for="suggestion in searchSuggestions"
                            :key="suggestion"
                            @click="searchFromSuggestion(suggestion)"
                            @keydown.enter="searchFromSuggestion(suggestion)"
                        >
                            {{ suggestion }}
                        </li>
                    </VsList>
                </div> -->
        <!-- </div>
            <VsButton
                class="d-none d-lg-block px-200"
                :disabled="federatedSearchStore.isLoading"
                @click="search"
            >
                Search
            </VsButton>
        </div>

        <VsFedFilter
            :filter-categories="props.filterCategories"
            @filter-updated="updateSelectedCategory"
        /> -->

        <!-- TODO: Replace this with the new divider component -->
        <!-- <hr> -->

        <VsLoadingSpinner v-if="federatedSearchStore.isLoading" />

        <div v-if="!federatedSearchStore.isLoading && federatedSearchStore.results">
            <VsCardGroup
                :cards-per-row="3"
                :scroll-snap="true"
            >
                <VsCard
                    v-for="result in federatedSearchStore.results"
                    :key="result.id"
                    card-style="elevated"
                >
                    <template #vs-card-header>
                        <VsImg
                            :src="result.imgSrc"
                            class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                        />
                    </template>

                    <template #vs-card-body>
                        <VsHeading
                            level="3"
                            heading-style="heading-s"
                        >
                            <VsLink
                                :href="result.url"
                                class="stretched-link"
                                variant="secondary"
                            >
                                {{ result.title }}
                            </VsLink>
                        </VsHeading>

                        <VsBody>
                            {{ result.description }}
                        </VsBody>
                    </template>
                </VsCard>
            </VsCardGroup>
            <VsPagination
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
    VsBody,
    VsCard,
    VsCardGroup,
    VsHeading,
    VsImg,
    VsLink,
    VsLoadingSpinner,
    VsPagination,
} from '@/components';
import useFederatedSearchStore from '@/stores/federatedSearch.store';
// import VsFedFilter from './components/FedFilter.vue';
import VsFedSearchInput from './components/FedSearchInput.vue';

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
     * Top level filter categories.
    */
    filterCategories: {
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

// const searchTerm = ref('');

// function updateSearchTerm(event) {
//     const target = event.target;
//     searchTerm.value = target.value;
// }

// function search() {
//     if (!searchTerm.value) return;

//     federatedSearchStore.searchTerm = searchTerm.value;
//     federatedSearchStore.getSearchResults();
// }

function loadPage(pageNumber) {
    federatedSearchStore.currentPage = pageNumber;

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });

    federatedSearchStore.navigateToResultsPage();

    // TODO: Update url params with page number.
    // const params = new URLSearchParams(document.location.search);
    // params.set('page', pageNumber);
    // window.location.search = params;
}

// function updateSelectedCategory(label) {
//     federatedSearchStore.selectedCategory = label;
//     federatedSearchStore.getSearchResults();
// }
</script>

<style lang="scss">
.vs-federated-search {
    &__search-input {
        position: relative;
        z-index: 1;

        @include media-breakpoint-up(lg) {
            padding: $vs-spacer-200 0;
        }
    }

    &__label {
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

    .vs-input.form-control {
        font-size: $font-size-body;
        padding: $vs-spacer-075 $vs-spacer-125 $vs-spacer-075 2.5rem;
        margin: 0;

        &:focus{
            @include form-focus-state;
        }

        @include media-breakpoint-up(lg) {
            padding: $vs-spacer-100 $vs-spacer-100 $vs-spacer-100 $vs-spacer-400;
            font-size: $font-size-6;
            height: 64px;
        }
    }

//     &__close-button {
//         position: absolute;
//         right: 8px;
//         top: 6px;

//         @include media-breakpoint-up(xl) {
//             right: $vs-spacer-100;
//             top: $vs-spacer-050;
//         }
//     }
}

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
</style>
