<template>
    <section
        class="vs-carousel"
        data-test="vs-carousel"
        ref="carousel"
    >
        <VsContainer>
            <VsRow>
                <VsCol
                    cols="10"
                    offset="1"
                    sm="12"
                    offset-sm="0"
                    class="position-relative"
                >
                    <div class="slider">
                        <VsButton
                            icon-only
                            v-if="!prevDisabled"
                            class="vs-carousel__control vs-carousel__control--prev"
                            @click="sliderNavigate($event, 'prev')"
                            @keypress="sliderNavigate($event, 'prev', true)"
                            icon="fa-regular fa-arrow-left"
                            ref="prevButton"
                        >
                            {{ prevText }}
                        </VsButton>

                        <VsRow
                            class="vs-carousel__track"
                            :style="{ transform: `translateX(${trackOffset})` }"
                        >
                            <!-- @slot default slot to contain slides -->
                            <slot />
                        </VsRow>

                        <VsButton
                            icon-only
                            v-if="!nextDisabled"
                            class="vs-carousel__control vs-carousel__control--next"
                            @keypress="sliderNavigate($event, 'next', true)"
                            @click="sliderNavigate($event, 'next')"
                            icon="fa-regular fa-arrow-right"
                            ref="nextButton"
                        >
                            {{ nextText }}
                        </VsButton>

                        <ul
                            v-if="totalSlides > slidesPerPage[currentWidth]"
                            class="vs-carousel__navigation"
                        >
                            <li
                                v-for="index in maxPages"
                                :key="index"
                            >
                                <button
                                    type="button"
                                    class="vs-carousel__navigation-item"
                                    :class="index === currentPage + 1
                                        ? 'vs-carousel__navigation-item--active' : ''"
                                    @click.prevent="sliderNavigate($event, index - 1)"
                                    @keypress.prevent="sliderNavigate($event, index - 1, true)"
                                    tabindex="0"
                                    :data-test="`vs-carousel__nav-${index}`"
                                >
                                    <span class="visually-hidden">
                                        <!-- @slot 'navigate to page' text to allow translation -->
                                        <slot name="vs-carousel-navigate" /> {{ index }}
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div
                        v-if="totalSlides > slidesPerPage[currentWidth]"
                        class="vs-carousel__mobile-pagination-wrapper"
                    >
                        <p
                            class="vs-carousel__mobile-pagination"
                            data-test="vs-carousel__mobile-pagination"
                        >
                            {{ currentPage + 1 }}
                            <!-- @slot 'of' text to allow translation -->
                            <slot name="vs-carousel-of" />
                            {{ totalSlides }}
                        </p>
                    </div>
                </VsCol>
            </VsRow>
        </VsContainer>
    </section>
</template>

<script>
import VsButton from '@/components/button';
import {
    VsContainer,
    VsRow,
    VsCol,
} from '@/components/grid';

/**
* Multi purpose carousel component to use
* for carousel and slider content
*
* @displayName Carousel
*/

export default {
    name: 'VsCarousel',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsContainer,
        VsRow,
        VsCol,
        VsButton,
    },
    provide() {
        const slideCols = {
        };

        const visibleSlides = this.activeSlides;

        Object.keys(this.slidesPerPage).forEach((key) => {
            const colSpan = 12 / this.slidesPerPage[key];
            slideCols[key] = colSpan;
        });

        return {
            slideCols,
            visibleSlides,
        };
    },
    props: {
        /**
        * Accessible text for previous
        * carousel control
        */
        prevText: {
            type: String,
            default: 'Previous slide',
        },
        /**
        * Accessible text for next
        * carousel control
        */
        nextText: {
            type: String,
            default: 'Next slide',
        },
        /**
        *  Number of slides to appear
        *  at 'xs' screen size
        */
        slidesXs: {
            type: Number,
            default: 1,
        },
        /**
        *  Number of slides to appear
        *  at 'sm' screen size
        */
        slidesSm: {
            type: Number,
            default: 2,
        },
        /**
        *  Number of slides to appear
        *  at 'md' screen size
        */
        slidesMd: {
            type: Number,
            default: 3,
        },
        /**
        *  Number of slides to appear
        *  at 'lg' screen size
        */
        slidesLg: {
            type: Number,
            default: 4,
        },
    },
    data() {
        return {
            totalSlides: null,
            currentPage: 0,
            maxPages: 1,
            nextDisabled: false,
            prevDisabled: true,
            currentWidth: 'lg',
            activeSlides: [],
            remainderOffset: 0,
            navigating: false,
        };
    },
    computed: {
        slidesPerPage() {
            const slidesPerPage = {

            };
            slidesPerPage.lg = this.slidesLg;
            slidesPerPage.md = this.slidesMd;
            slidesPerPage.sm = this.slidesSm;
            slidesPerPage.xs = this.slidesXs;

            return slidesPerPage;
        },
        trackOffset() {
            // how much the carousel track should be offset by
            // to show the current active slides
            if (this.remainderOffset) {
                return `-${((this.currentPage - 1) * 100) + this.remainderOffset}%`;
            }

            return `-${((this.currentPage) * 100)}%`;
        },
    },
    mounted() {
        window.addEventListener('resize', () => {
            this.setActivePage();

            this.sliderNavigate(null, this.currentPage);
        });
        this.defineActiveSlides();
        this.initNavigation();
    },
    methods: {
        defineActiveSlides(remainder) {
            this.calcViewport();
            this.activeSlides.length = 0;
            const allSlides = this.$refs.carousel
                .getElementsByClassName('vs-carousel-slide__card');
            let slideCount = 0;

            // iterate through child slides and evaluate if they're active
            // if they are, add to the activeSlides array
            if (allSlides.length > 0) {
                const allSlidesArr = Array.from(allSlides);
                allSlidesArr.forEach((slide, index) => {
                    const activeSlideStart = this.currentPage
                        * this.slidesPerPage[this.currentWidth];
                    // eslint-disable-next-line function-paren-newline
                    const activeSlideEnd = parseInt(
                        this.currentPage * this.slidesPerPage[this.currentWidth], 10,
                    // eslint-disable-next-line function-paren-newline
                    ) + parseInt(this.slidesPerPage[this.currentWidth], 10);

                    // if we're at a final slide that has a remainder
                    // the last slides that fit on a page are active
                    if (remainder && typeof remainder !== 'undefined') {
                        if (index >= this.totalSlides - this.slidesPerPage[this.currentWidth]) {
                            this.activeSlides.push(index);
                        }
                    } else if (index >= activeSlideStart && index < activeSlideEnd) {
                        this.activeSlides.push(index);
                    }

                    slideCount += 1;
                });
            }

            // update total slide number for mobile navigation
            this.totalSlides = slideCount;

            // calculate total number of pages in carousel
            this.maxPages = Math.ceil(slideCount / this.slidesPerPage[this.currentWidth]);
        },
        calcViewport() {
            if (window.matchMedia('(min-width: 1200px)').matches) {
                this.currentWidth = 'lg';
            } else if (window.matchMedia('(min-width: 992px)').matches) {
                this.currentWidth = 'md';
            } else if (window.matchMedia('(min-width: 576px)').matches) {
                this.currentWidth = 'sm';
            } else {
                this.currentWidth = 'xs';
            }
        },
        setActivePage() {
            // method to calculate active page after resize
            // and ensure user sees same slides
            let firstActiveItem;

            // calculate first active item for reference when resizing
            if (this.currentWidth === 'xs' && this.slidesXs === 1) {
                firstActiveItem = this.currentPage + 1;
            } else {
                firstActiveItem = (this.currentPage * this.slidesPerPage[this.currentWidth]) + 1;
            }

            // work out which viewport we're currently on
            this.calcViewport();

            // calculate which page we're on in the new viewport
            // based on the first active item
            let newFirstPage;
            if (this.currentWidth === 'xs' && this.slidesXs === 1) {
                newFirstPage = firstActiveItem;
            } else {
                newFirstPage = Math.ceil(
                    firstActiveItem / this.slidesPerPage[this.currentWidth],
                );
            }

            this.currentPage = newFirstPage - 1;

            // navigate to the correct page to keep the user at
            // the same position they were at before the resize
            this.sliderNavigate(null, this.currentPage);
        },
        sliderNavigate(event, direction) {
            const initialFirstActive = this.activeSlides[0];
            if (event) {
                event.preventDefault();
            }

            if (this.navigating) {
                return;
            }

            this.navigating = true;

            setTimeout(() => {
                this.navigating = false;
            }, 250);

            if (direction === 'next') {
                // increase the current page if not already at the max pages amount
                if (this.currentPage + 1 < this.maxPages) {
                    this.currentPage += 1;
                }
            } else if (direction === 'prev') {
                // decrease the current page if not already at zero
                if (this.currentPage > 0) {
                    this.currentPage -= 1;
                }
            } else {
                this.currentPage = direction;
            }

            this.initNavigation();

            // calculate if the slides don't neatly fit into the pages
            // this will highlight if there's an 'odd' number of slides
            // on the final page of the carousel
            const totalSlideSpaces = this.slidesPerPage[this.currentWidth] * (this.currentPage + 1);
            let finalSlideRemainder = false;

            if (totalSlideSpaces > this.totalSlides) {
                this.remainderOffset = this.checkRemainder(totalSlideSpaces);
                finalSlideRemainder = true;
            } else {
                this.remainderOffset = 0;
            }

            this.defineActiveSlides(finalSlideRemainder);

            if (direction === 'next') {
                // if 'next' movement has happened via keypress automatically focus
                // on the next slide link
                const firstActiveSlide = this.getFirstActiveSlide();
                if (firstActiveSlide) {
                    const firstLink = firstActiveSlide.querySelectorAll('a')[0];
                    setTimeout(() => {
                        firstLink.focus();
                    }, 250);
                }
            } else if (direction === 'prev' && this.currentPage >= 0) {
                // if 'previous' movement has happened via keypress automatically focus
                // on the previous item to the one that was shown first
                const previousActive = this.$refs.carousel
                    .querySelectorAll('.card')[initialFirstActive - 1];
                if (previousActive) {
                    const newFocus = previousActive.querySelectorAll('a')[0];

                    setTimeout(() => {
                        newFocus.focus();
                    }, 250);
                }
            }
        },
        getFirstActiveSlide() {
            return this.$refs.carousel
                .querySelectorAll('.card')[this.currentPage * this.slidesPerPage[this.currentWidth]];
        },
        getLastActiveSlide() {
            return this.$refs.carousel
                .querySelectorAll('.card')[this.currentPage * this.slidesPerPage[this.currentWidth]
                    + this.slidesPerPage[this.currentWidth] - 1];
        },
        initNavigation() {
            // method to enable/disable arrow controls for carousel
            // depending on current position
            if (this.currentPage + 1
                >= this.totalSlides / this.slidesPerPage[this.currentWidth]) {
                this.nextDisabled = true;
            } else {
                this.nextDisabled = false;
            }

            if (this.currentPage > 0) {
                this.prevDisabled = false;
            } else {
                this.prevDisabled = true;
            }
        },
        checkRemainder(totalSpaces) {
            // this method checks if there's an 'odd' number of slides
            // meaning the final navigation shouldn't move a full page width
            const slideRemainder = this.slidesPerPage[this.currentWidth]
                - (totalSpaces - this.totalSlides);
            const singleSlideOffset = 100 / this.slidesPerPage[this.currentWidth];
            const remainderOffset = singleSlideOffset * slideRemainder;

            return remainderOffset;
        },
    },
};
</script>

<style lang="scss">
    .vs-carousel {
        overflow: hidden;

        &__track {
            flex-wrap: nowrap;
            transition: transform $duration-slowly ease-out;
            margin-bottom: $spacer-300;
        }

        &__control {
            position: absolute !important;
            top: 25%;
            z-index: 20;

            &--next {
                right: 0;
            }

            &--prev {
                left: 0;
            }
        }

        &__navigation {
            display: none;
            justify-content: center;
            list-style: none;

            @include media-breakpoint-up(sm) {
                display: flex;
            }

            li {
                display: flex;
                margin-left: $spacer-025;
                margin-right: $spacer-025;
            }
        }

        &__navigation-item {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 5px;
            background: $vs-color-background-accent-heather-30;
            transform: translateY(2px);
            margin: 0 2px;
            border: none;
            box-shadow: none;
            cursor: pointer;
            padding: 0;

            &:hover {
                background: $vs-color-interaction-cta-hover;
            }

            &:focus {
                @extend %primary-button-focus;
                outline: none;
            }

            &--active {
                width: 14px;
                height: 14px;
                border-radius: 7px;
                background: $vs-color-interaction-cta-primary;
                transform: none;
                cursor: default;

                &:hover {
                    background: $vs-color-interaction-cta-primary;
                }
            }

            @media (hover: none) {
                &:hover {
                    background: $vs-color-interaction-cta-hover;
                }

                &--active {
                    &:hover {
                        background: $vs-color-interaction-cta-primary;
                    }
                }
            }
        }

        &__mobile-pagination-wrapper {
            display: flex;
            justify-content: center;
            margin-top: $spacer-200;

            @include media-breakpoint-up(sm) {
                display: none;
            }
        }

        &__mobile-pagination {
            background: $vs-color-background-secondary;
            color: $vs-color-text-primary;
            padding: $spacer-025 $spacer-050;
            font-size: $font-size-2;
            font-weight: $vs-font-weight-strong;
            margin: 0;
        }
    }

    @include no-js {
        .vs-carousel {
            &__control {
                display: none;
            }

            &__navigation,
            &__mobile-pagination-wrapper {
                display: none;
            }

            &__track {
                flex-wrap: wrap;

                & > [class^="col-"] {
                    width: 100%;
                    max-width: 100%;
                    flex: 0 0 100%;
                    margin-bottom: $spacer-200;

                    @include media-breakpoint-up(md) {
                        width: 50%;
                        max-width: 50%;
                        flex: 0 0 50%;
                    }
                }
            }
        }
    }
</style>
