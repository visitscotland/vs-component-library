<template>
    <VsModuleWrapper
        v-show="products.length"
    >
        <template
            #vs-module-wrapper-heading
            v-if="heading"
        >
            {{ heading }}
        </template>
        <template
            #vs-module-wrapper-intro
            v-if="!!$slots['vs-canned-search-intro']"
        >
            <!--
                @slot Holds optional introduction copy
            -->
            <slot name="vs-canned-search-intro" />
        </template>
        <div
            class="vs-canned-search"
            data-test="vs-canned-search"
        >
            <VsContainer>
                <VsRow>
                    <VsCol
                        cols="10"
                        offset="1"
                        md="8"
                        offset-md="2"
                        lg="6"
                        offset-lg="3"
                        class="vs-canned-search__buttons"
                    >
                        <!-- @slot Holds one or more call to action buttons  -->
                        <slot
                            name="vs-canned-search-buttons"
                        />
                    </VsCol>
                </VsRow>
            </VsContainer>
            <VsCarousel
                :next-text="carouselNextText"
                :prev-text="carouselPreviousText"
                :slides-xs="1"
                :slides-md="2"
                :slides-lg="3"
                v-if="products.length"
            >
                <VsCannedSearchProductCard
                    v-for="(prod, index) in products"
                    :key="index"
                    :slide-index="'' + index"
                    :img-src="prod.images ? prod.images[0].mediaUrl : ''"
                    :title="prod.name"
                    :detail-link="{
                        link: prod.productLink.link,
                        label: prod.productLink.label,
                        type: prod.productLink.type.toLowerCase(),
                    }"
                    :description="prod.description"
                    :search-type="searchType"
                >
                    <template
                        v-if="searchType === 'tour'"
                        #vs-canned-search-tour-info
                    >
                        <div>
                            <VsCannedSearchTourRuns
                                v-if="prod.opening && prod.opening.period
                                    && prod.opening.period.startDay"
                                :label="prod.opening.period.label"
                                :start-day="prod.opening.period.startDay"
                                :end-day="prod.opening.period.endDay"
                            />
                            <VsCannedSearchTourDeparts
                                v-if="prod.tourOrigin && prod.tourOrigin.tourOrigin"
                                :label="prod.tourOrigin.label"
                                :origins="prod.tourOrigin.tourOrigin"
                            />
                        </div>
                    </template>
                    <template
                        #vs-canned-search-sub-heading
                    >
                        <VsCannedSearchSubHeading
                            :sub-heading="fetchSubHeading(prod)"
                            :line-limit="searchType === 'tour' ? 1 : 2"
                        />
                    </template>
                    <template
                        v-if="prod.grading"
                        #vs-canned-search-star-rating
                    >
                        <VsCannedSearchStars
                            :min="prod.grading.minStars"
                            :max="prod.grading.maxStars"
                        />
                    </template>
                    <template
                        v-if="prod.locations"
                        #vs-canned-search-categories
                    >
                        <VsCannedSearchCategories
                            :categories="prod.locations"
                        />
                    </template>
                    <template
                        v-if="showLogos"
                        #vs-canned-search-logos
                    >
                        <VsCannedSearchLogos
                            :good-to-go-logo="prod.covidInformation
                                && prod.covidInformation.goodToGo
                                ? prod.covidInformation.goodToGo : null"
                            :safe-travels-logo="prod.covidInformation
                                && prod.covidInformation.safeTravels
                                ? prod.covidInformation.safeTravels
                                : null"
                            :access-guide="prod.accessGuide || null"
                            :awards="prod.awards"
                        />
                    </template>
                    <template
                        #vs-canned-search-badges
                    >
                        <VsCannedSearchBadges
                            :badge-one="fetchBadgeOne(prod)"
                            :multi-badge-one="fetchMultiBadgeOne(prod)"
                            :badge-two="prod.offers"
                            :badge-three="fetchBadgeThree(prod)"
                        />
                    </template>
                    <template
                        #vs-canned-search-summary
                    >
                        <VsCannedSearchSummaryBox
                            :link-href="prod.website.link"
                            :link-type="prod.website.type"
                            :link-label="prod.website.label"
                            :link-title="prod.name"
                        >
                            <template
                                v-if="prod.opening && searchType !== 'tour'"
                                #vs-canned-search-summary-top
                            >
                                <VsCannedSearchDates
                                    :period="prod.opening.period"
                                    :label="prod.opening.period.label"
                                />
                            </template>

                            <template
                                #vs-canned-search-summary-left
                            >
                                <VsCannedSearchDuration
                                    v-if="searchType === 'tour' && prod.tourLength"
                                    :duration-intro="prod.tourLength.label"
                                    :duration="prod.tourLength.value"
                                />

                                <VsCannedSearchPrice
                                    v-else-if="prod.price && searchType !== 'tour'"
                                    :price-intro="prod.price.priceLabel"
                                    :price="prod.price.price"
                                    :price-outro="prod.price.priceBasis"
                                />

                                <VsCannedSearchCuisines
                                    v-else-if="prod.cuisines"
                                    :cuisines="prod.cuisines"
                                />
                            </template>
                            <template
                                v-if="prod.price && searchType === 'tour'"
                                #vs-canned-search-summary-centre
                            >
                                <VsCannedSearchPrice
                                    :price-intro="prod.price.priceLabel"
                                    :price="prod.price.price"
                                    :price-outro="prod.price.priceBasis"
                                />
                            </template>
                        </VsCannedSearchSummaryBox>
                    </template>
                </VsCannedSearchProductCard>
                <template #vs-carousel-of>
                    <!--
                        @slot Holds the translation for `of` in the carousel pagination
                    -->
                    <slot
                        name="vs-canned-search-of"
                    />
                </template>
            </VsCarousel>
            <VsContainer
                v-if="!!$slots['vs-canned-search-credit']"
                class="vs-canned-search__credit-container"
            >
                <!--
                    @slot Holds credit information for search data from third parties
                -->
                <slot
                    name="vs-canned-search-credit"
                />
            </VsContainer>
        </div>
    </VsModuleWrapper>
</template>

<script>
import VsCannedSearchProductCard from '@/components/canned-search/components/CannedSearchProductCard.vue';
import VsCannedSearchStars from '@/components/canned-search/components/CannedSearchStars.vue';
import VsCannedSearchLogos from '@/components/canned-search/components/CannedSearchLogos.vue';
import VsCannedSearchCategories from '@/components/canned-search/components/CannedSearchCategories.vue';
import VsCannedSearchPrice from '@/components/canned-search/components/CannedSearchPrice.vue';
import VsCannedSearchDuration from '@/components/canned-search/components/CannedSearchDuration.vue';
import VsCannedSearchSummaryBox from '@/components/canned-search/components/CannedSearchSummaryBox.vue';
import VsCannedSearchDates from '@/components/canned-search/components/CannedSearchDates.vue';
import VsCannedSearchBadges from '@/components/canned-search/components/CannedSearchBadges.vue';
import VsCannedSearchCuisines from '@/components/canned-search/components/CannedSearchCuisines.vue';
import VsCannedSearchSubHeading from '@/components/canned-search/components/CannedSearchSubHeading.vue';
import VsCannedSearchTourRuns from '@/components/canned-search/components/CannedSearchTourRuns.vue';
import VsCannedSearchTourDeparts from '@/components/canned-search/components/CannedSearchTourDeparts.vue';
import VsCarousel from '@/components/carousel/Carousel.vue';
import VsModuleWrapper from '@/components/module-wrapper/ModuleWrapper.vue';
import {
    VsContainer, VsRow, VsCol,
} from '@/components/grid';

import axios from 'axios';

/**
* The canned search component displays a selection of
* relevant products to a user based on defined search terms.
*
* @displayName Canned Search
*/

export default {
    name: 'VsCannedSearch',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsCannedSearchProductCard,
        VsCannedSearchStars,
        VsCannedSearchLogos,
        VsCannedSearchCategories,
        VsCannedSearchPrice,
        VsCannedSearchDuration,
        VsCannedSearchSummaryBox,
        VsCannedSearchDates,
        VsCannedSearchBadges,
        VsCannedSearchCuisines,
        VsCannedSearchSubHeading,
        VsCannedSearchTourRuns,
        VsCannedSearchTourDeparts,
        VsCarousel,
        VsContainer,
        VsRow,
        VsCol,
        VsModuleWrapper,
    },
    props: {
        /**
        * The url that products should be retrieved from for display
        */
        apiUrl: {
            type: String,
            default: '',
        },
        /**
        * The type of product that is being search for via our API - this determines how the product
        * cards are displayed. Currently these are:
        *
        * `even` - events
        * `acco` - accomodation
        * `cate` - food & drink
        * `acti` - things to do
        * `tour` - tours
        */
        searchType: {
            type: String,
            default: '',
        },
        /**
        * Optional header that appears above the canned search carousel, rendered as an h2
        */
        heading: {
            type: String,
            default: '',
        },
        /**
        * Accessible text for next carousel control, passed to vs-carousel
        */
        carouselNextText: {
            type: String,
            default: 'Next slide',
        },
        /**
        * Accessible text for next carousel control, passed to vs-carousel
        */
        carouselPreviousText: {
            type: String,
            default: 'Previous slide',
        },
    },
    data() {
        return {
            products: [],
        };
    },
    computed: {
        showLogos() {
            for (let x = 0; x < this.products.length; x++) {
                const product = this.products[x];

                if (
                    (product.awards && product.awards.length)
                    || product.accessGuide
                    || (product.covidInformation && product.covidInformation.goodToGo)
                    || (product.covidInformation && product.covidInformation.safeTravels)
                ) {
                    return true;
                }
            }

            return false;
        },
    },
    mounted() {
        if (this.apiUrl) {
            this.retrieveProducts();
        }
    },
    methods: {
        /**
         * Invoked when mounted, retrieves products from the dms and sets them
         * to the component
         */
        retrieveProducts() {
            axios.get(this.apiUrl)
                .then((response) => {
                    this.products = response.data.data.products;
                })
                .catch(() => {
                    this.products = [];
                });
        },
        /**
         * Returns an appropriate subheading for the product card based on the search type,
         * tours display a comma separated list of categories, non-tours display a formatted
         * address
         */
        fetchSubHeading(product) {
            if (this.searchType === 'tour') {
                return this.fetchCategoryStrings(product);
            }
            return this.fetchAddress(product);
        },
        /**
         * Returns a comma separated list of all the categories on the product
         */
        fetchCategoryStrings(product) {
            if (product.category && product.category.length) {
                return product.category.map((item) => item.name).join(', ');
            }
            return '';
        },
        /**
         * Returns the address string for each card, dependent on whether the event is
         * online and what type of product the search is looking for
         *
         * Defaults to `city, country` if no exception present
         */
        fetchAddress(product) {
            if (product.onlineEvent) {
                return product.onlineEvent;
            }

            if (!product.address) {
                return '';
            }
            if (this.searchType === 'even') {
                return `${product.eventVenue}, ${product.address.city}`;
            }

            return `${product.address.city}, ${product.address.county}`;
        },
        /**
         * Returns the elements to display in the first badge, usually a category
         */
        fetchBadgeOne(product) {
            if (this.searchType !== 'tour') {
                if (product.category && product.category.length) {
                    if (product.category[0]) {
                        return product.category[0].name;
                    }

                    return null;
                }
            }

            return null;
        },
        /**
         * Returns the elements to display in the first badge section if there are multiple
         * of them, usually occurs for tours and lists modes of transport
         */
        fetchMultiBadgeOne(product) {
            if (this.searchType === 'tour') {
                if (product.tourVehicles && product.tourVehicles.length) {
                    return product.tourVehicles.map((item) => item.name);
                }
            }
            return null;
        },
        /**
         * Returns the elements to display in the first badge if covid opening information is
         * provided return that, otherwise if a nowOn status for an event is provided return that
         */
        fetchBadgeThree(product) {
            if (product.covidInformation && product.covidInformation.weAreOpen) {
                return product.covidInformation.weAreOpen;
            }

            if (product.opening && product.opening.nowOn) {
                return product.opening.nowOn;
            }

            return '';
        },
    },
};

</script>

<style lang="scss">
    .vs-canned-search {
        .vs-carousel > .container > .row > div {
            @include media-breakpoint-down(md) {
                margin-left: 0;
                max-width: 100%;
                flex: 0 0 100%;
            }
        }
    }

    .vs-canned-search__buttons {
        margin-bottom: $spacer-300;

        .vs-button {
            margin: $spacer-0 $spacer-050 $spacer-050;
        }
    }

    .vs-canned-search__credit-container {
        text-align: right;
        font-size: $font-size-2;
    }
</style>
