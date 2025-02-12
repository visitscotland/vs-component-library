<template>
    <nav
        aria-label="Pagination"
        class="vs-pagination"
        data-test="vs-pagination"
    >
        <div
            aria-live="polite"
            class="vs-pagination__count"
        >
            <p>{{ resultsText }}</p>
        </div>
        <div class="vs-pagination__controls">
            <div class="vs-pagination__prev">
                <VsButton
                    :disabled="currentPage === 1"
                    icon="internal-link-back"
                    size="sm"
                    variant="transparent"
                    @click="handleClick($event, currentPage - 1)"
                >
                    {{ props.previousButtonLabel }}
                </VsButton>
            </div>

            <ul class="vs-pagination__list">
                <li
                    v-for="(page, index) in pages"
                    :class="buttonClasses(page)"
                    :key="index"
                >
                    <span v-if="page === 'ellipses'">&ctdot;</span>

                    <VsButton
                        v-else
                        :aria-current="currentPage === page ? 'page' : null"
                        :aria-label="`Page ${page}`"
                        size="sm"
                        @click="handleClick($event, page)"
                    >
                        {{ page }}
                    </VsButton>
                </li>
            </ul>

            <div class="vs-pagination__next">
                <VsButton
                    :disabled="currentPage === props.numberOfPages"
                    icon="internal-link"
                    icon-position="right"
                    size="sm"
                    variant="transparent"
                    @click="handleClick($event, currentPage + 1)"
                >
                    {{ props.nextButtonLabel }}
                </VsButton>
            </div>
        </div>
    </nav>
</template>

<script setup>
import {
    computed,
    ref,
    watch,
} from 'vue';
import VsButton from '@/components/button/Button.vue';

const props = defineProps({
    /**
     * Label for the next button.
     */
    nextButtonLabel: {
        type: String,
        required: true,
    },
    /**
     * Total number of pages
     */
    numberOfPages: {
        type: Number,
        required: true,
    },
    /**
     * Label for "Page" within "Page x of xx" text.
     */
    pageLabel: {
        type: String,
        required: true,
    },
    /**
     * Label for "of" within "Page x of xx" text.
     */
    ofLabel: {
        type: String,
        required: true,
    },
    /**
     * Label for the previous button.
     */
    previousButtonLabel: {
        type: String,
        required: true,
    },
});

const emit = defineEmits(['page-click']);

// Track current page number.
const currentPage = ref(1);

// Number of page buttons to display.
const limit = 7;

// Format text shown above controls on mobile.
const resultsText = computed(() => `${props.pageLabel} ${currentPage.value} ${props.ofLabel} ${props.numberOfPages}`);

const buttonClasses = (page) => ({
    'vs-pagination__item': true,
    'vs-pagination__item--active': currentPage.value === page,
    'vs-pagination__item--ellipses': page === 'ellipses',
});

// Create list of page buttons.
const pages = computed(() => {
    // If there are fewer or equal pages than the limit, show all pages.
    if (props.numberOfPages <= limit) {
        // Create an array of numbers from 1 to the number of pages.
        return Array.from({
            length: props.numberOfPages,
        }, (_, i) => i + 1);
    }

    let buttons = [];
    const halfLimit = Math.floor(limit / 2);

    // If current page is within the first three pages then show the first
    // five pages, an ellipsis and the last page.
    if (currentPage.value <= halfLimit) {
        for (let index = 1; index < limit - 1; index++) {
            buttons = [...buttons, index];
        }

        buttons = [...buttons, 'ellipses', props.numberOfPages];

    // If current page is within the last three pages then show the first
    // pages, an ellipsis and the last five pages.
    } else if (currentPage.value > props.numberOfPages - halfLimit) {
        buttons = [1, 'ellipses'];

        const start = props.numberOfPages - limit + 2;
        for (let index = 1; index < limit - 1; index++) {
            buttons = [...buttons, start + index];
        }

    // If current page is not any of the above then show the first
    // page, an ellipsis, three middle pages, an ellipsis and the last pages.
    } else {
        const start = (currentPage.value - halfLimit) + 1;
        buttons = [1, 'ellipses'];

        for (let index = 1; index < limit - 3; index++) {
            buttons = [...buttons, start + index];
        }

        buttons = [...buttons, 'ellipses', props.numberOfPages];
    }

    return buttons;
});

// Emit event when a page button is clicked and update the current page.
const handleClick = (event, page) => {
    if (currentPage.value === page) return;

    emit('page-click', page);
    currentPage.value = page;
};

// Reset current page to 1 when number of pages changes.
watch(() => props.numberOfPages, () => {
    currentPage.value = 1;
});
</script>

<style lang="scss">
.vs-pagination {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: $font-size-4;

    &__count {
        display: flex;

        @include media-breakpoint-up(sm) {
            display: none;
        }
    }

    &__controls {
        display: flex;
        justify-content: center;
        width: 100%;

        @include media-breakpoint-down(md) {
            justify-content: space-between;
        }
    }

    &__list {
        display: flex;
        flex-direction: row;
        list-style: none;
        padding-left: $spacer-0;

        @include media-breakpoint-down(md) {
            display: none;
        }
    }

    &__item {
        margin-right: $spacer-050;

        &:first-child {
            margin-left: $spacer-050;
        }

        .vs-button {
            @include vs-button-variant(
                $vs-color-text-primary, $vs-color-background-inverse, $vs-color-border-inverse,
                $vs-color-text-primary, $vs-color-background-inverse, $vs-color-border-inverse,
                $vs-color-text-inverse, $vs-color-interaction-cta-primary, $vs-color-border-inverse,
            );
            padding: $spacer-025 $spacer-075;

            &:hover {
                text-decoration: underline;
            }
        }

        .vs-button.disabled {
            background-color: $vs-color-background-inverse !important;
        }

        &--active .vs-button {
            background-color: $vs-color-interaction-cta-primary;
            color: $vs-color-text-inverse;
            border-radius: $border-radius-pill;
            line-height: 1;
            padding: $spacer-050 $spacer-075;
        }

        &--ellipses {
            align-items: flex-end;
            display: flex;
        }
    }

    &__prev .vs-button,
    &__next .vs-button {
        border: none;
        margin-top: $spacer-025;

        &.disabled {
            background-color: $vs-color-background-inverse !important;
        }

        &:hover {
            background-color: $vs-color-background-inverse !important;
            text-decoration: underline;
        }
    }
}
</style>
