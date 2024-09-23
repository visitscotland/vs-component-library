<template>
    <div
        class="vs-styled-list"
        :class="`vs-styled-list--${props.variant}`"
        data-test="vs-styled-list"
    >
        <VsContainer>
            <VsRow>
                <VsCol>
                    <VsHeading level="2">
                        <slot name="title" />
                    </VsHeading>

                    <slot name="intro" />
                </VsCol>
            </VsRow>
            <VsRow>
                <VsCol
                    :md="props.variant === 'icon' ? '8' : null"
                >
                    <ul class="vs-styled-list__list mt-8">
                        <slot />
                    </ul>
                </VsCol>
            </VsRow>
        </VsContainer>
    </div>
</template>

<script setup lang="ts">
import type { StyledListProps } from '@/types/component-props';
import VsHeading from '@/components/heading/Heading.vue';
import {
    VsContainer,
    VsRow,
    VsCol,
} from '@/components/grid';

const props = withDefaults(defineProps<StyledListProps>(), {
    variant: 'icon',
});
</script>

<style lang="scss">
.vs-styled-list {
    &__list {
        list-style: none;
    }

    &--icon {
        .vs-styled-list__list {
            padding: 0 $spacer-050;
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
