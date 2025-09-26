<template>
    <div class="vs-fed-filter">
        <VsHeading
            v-if="$slots['fed-filter-header']"
            class="mb-075"
            heading-level="4"
            heading-style="heading-xxxs"
        >
            <!-- @slot Heading for the filter -->
            <slot name="fed-filter-header" />
        </VsHeading>
        <div class="vs-fed-filter--scroll-container">
            <VsButton
                v-if="scrollButtons"
                variant="secondary"
                icon="fa-regular fa-chevron-left"
                icon-only
                class="vs-fed-filter--scroll-button vs-fed-filter--scroll-button__left"
                @click="scroll('left')"
            >
                Scroll left
            </VsButton>
            <div
                class="vs-fed-filter--scroll-rail"
                :class="`vs-fed-filter--scroll-rail_${variant}`"
                :id="`vs-fed-filter--scroll-rail_${variant}`"
            >
                <VsButton
                    v-for="(filterCategory, index) in props.filterCategories"
                    :key="index"
                    class="vs-fed-filter--category-button"
                    :icon="variant === 'primary' ? filterCategory.icon : null"
                    :variant="activeFilter === filterCategory.Key ? 'primary' : 'secondary'"
                    :size="variant === 'secondary' ? 'sm' : 'md'"
                    @click="$emit('filter-updated', filterCategory.Key)"
                >
                    {{ filterCategory.Key }}
                </VsButton>
            </div>
            <VsButton
                v-if="scrollButtons"
                variant="secondary"
                icon="fa-regular fa-chevron-right"
                icon-only
                class="vs-fed-filter--scroll-button vs-fed-filter--scroll-button__right"
                @click="scroll('right')"
            >
                Scroll right
            </VsButton>
        </div>
        <VsWarning
            v-if="$slots['no-js']"
            class="vs-fed-filter__warning"
        >
            <!-- @slot Message to show when JS is disabled -->
            <slot name="no-js" />
        </VsWarning>
    </div>
</template>

<script setup>
// Buttons should be links on homepage!
import VsButton from '@/components/button/Button.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsWarning from '@/components/warning/Warning.vue';

/**
 * Fed Filter is used in the Federated Search engine.
 * Top level variant to pick between broad categories,
 * Second level variant for fine grain filtering.
 *
 * @displayName FedFilter
 */

const props = defineProps({
    /*
    * Array of filter options
    * filterCategories: {
    *   id: string,
    *   label: string,
    *   icon?: string,
    * }
    */
    filterCategories: {
        type: Array,
        required: true,
    },
    /**
     * Variant of filter:
     * Primary: medium buttons with icons and 1em gap
     * Secondary: small buttons, no icons and 0.5em gap
     */
    variant: {
        type: String,
        default: 'primary',
        validator: (value) => value.match(
            /(primary|secondary)/,
        ),
    },
    /**
     * ID of currently active filter
     */
    activeFilter: {
        type: String,
        default: '',
    },
    /**
     * Enables the scroll buttons on fitler
     */
    scrollButtons: {
        type: Boolean,
        default: false,
    },
    /**
     * Tells if JS is disabled
     */
    jsDisabled: {
        type: Boolean,
        default: false,
    },
});

defineEmits(['filter-updated']);

/**
 * This is not the best solution by any means
 * There is a better solution that doesn't rely on JS,
 * but is not stable across all browsers yet.
 * We should look to implent it, if we chose to keep it,
 * when it does become stable on Safari & Firefox.
 * https://developer.mozilla.org/en-US/docs/Web/CSS/::scroll-button
*/
function scroll(dir) {
    const scrollRail = document.getElementById(`vs-fed-filter--scroll-rail_${props.variant}`);

    if (dir === 'left') scrollRail?.scrollBy(-300, 0);
    else if (dir === 'right') scrollRail?.scrollBy(300, 0);
}
</script>

<style lang="scss">
    .vs-fed-filter {

        &--scroll-container{
            display: flex;
        }

        &--scroll-rail {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            align-items: center;

            &_primary {
                gap: $vs-spacer-100;
            }

            &_secondary {
                gap: $vs-spacer-050;
            }

            @media (prefers-reduced-motion: no-preference) {
                scroll-behavior: smooth;
            }
        }

        &--scroll-button {
            flex: 0 0 max-content;
            aspect-ratio: 1/1;

            &__left {
                margin-right: $vs-spacer-050;
            }

            &__right {
                margin-left: $vs-spacer-050;
            }
        }

        &--category-button {
            flex: 0 0 content;
            height: min-content;
            //margin-bottom: $vs-spacer-100;
        }
    }

    @include no-js {
        .vs-fed-filter {
            display: none;
        }

        .vs-warning {
            display: block;
        }
    }
</style>
