<template>
    <div
        class="vs-styled-list"
        :class="`vs-styled-list--${props.variant}`"
        data-test="vs-styled-list"
    >
        <VsContainer>
            <VsRow>
                <VsCol>
                    <VsHeading
                        :id="props.anchorLink ? props.anchorLink : null"
                        level="2"
                    >
                        {{ props.title }}
                    </VsHeading>

                    <slot name="intro" />
                </VsCol>
            </VsRow>
            <VsRow>
                <VsCol :md="props.variant === 'icon' ? '8' : null">
                    <ul class="vs-styled-list__list">
                        <slot />
                    </ul>
                </VsCol>
            </VsRow>
            <VsRow v-if="props.source">
                <p class="vs-styled-list__source">
                    {{ props.source }}
                </p>
            </VsRow>
        </VsContainer>
    </div>
</template>

<script setup>
import VsHeading from '@/components/heading/Heading.vue';
import {
    VsContainer,
    VsRow,
    VsCol,
} from '@/components/grid';

const props = defineProps({
    anchorLink: {
        type: String,
        default: null,
    },
    source: {
        type: String,
        default: null,
    },
    title: {
        type: String,
        required: true,
    },
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
