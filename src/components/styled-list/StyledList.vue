<template>
    <div
        class="vs-styled-list"
        :class="`vs-styled-list--${props.variant}`"
        data-test="vs-styled-list"
    >
        <VsContainer>
            <VsRow>
                <VsCol :md="props.variant === 'icon' ? '8' : null">
                    <ul class="vs-styled-list__list">
                        <!-- @slot default to contain a set of <StyledListItem> elements  -->
                        <slot />
                    </ul>
                </VsCol>
            </VsRow>
            <VsRow v-if="$slots['list-source'] && $slots['list-source']()">
                <div class="vs-styled-list__source">
                    <!-- @slot list-source to add source of list data  -->
                    <slot name="list-source" />
                </div>
            </VsRow>
        </VsContainer>
    </div>
</template>

<script setup>
import {
    VsContainer,
    VsRow,
    VsCol,
} from '@/components/grid';

const props = defineProps({
    /**
     * Text listing any sources for information displayed in the lists.
     */
    source: {
        type: String,
        default: null,
    },
    /**
     * Determines the list style.
     * @values icon, image, image-horizontal, numbered
     */
    variant: {
        type: String,
        default: 'icon',
        validator: (value) => ['icon', 'image', 'image-horizontal', 'numbered'].includes(value),
    },
});
</script>

<style lang="scss">
.vs-styled-list {
    &__list {
        list-style: none;
        margin-top: $spacer-200;
    }

    &--icon {
        .vs-styled-list__list {
            padding: 0 $spacer-050;
        }
    }

    &--image-horizontal .vs-styled-list {
        &__list {
            display: grid;
            grid-template-columns: 1fr;
            grid-auto-rows: 1fr;
            padding: 0;
            text-align: center;

            @include media-breakpoint-up(md) {
                grid-template-columns: repeat(4, 1fr);
                grid-auto-rows: auto;
            }
        }

        &__source {
            font-size: $font-size-3;
            margin-top: $spacer-300;
        }
    }

    &--numbered {
        .vs-styled-list__list {
            @include media-breakpoint-up(md) {
                margin-left: $spacer-200;
            }
        }
    }
}
</style>
