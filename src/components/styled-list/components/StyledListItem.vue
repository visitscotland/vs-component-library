<template>
    <li
        class="vs-styled-list__item"
        data-test="vs-styled-list__item"
    >
        <VsRow>
            <VsCol
                v-if="props.imageSrc"
                cols="12"
                md="2"
            >
                <VsImg
                    :src="props.imageSrc"
                />
            </VsCol>
            <VsCol
                :md="props.imageSrc ? '10' : '12'"
            >
                <VsHeading level="3">
                    <slot name="item-heading" />
                </VsHeading>

                <VsRichTextWrapper>
                    <slot />
                </VsRichTextWrapper>
            </VsCol>
        </VsRow>
    </li>
</template>

<script setup lang="ts">
import type { StyledListItemProps } from '@/types/component-props';
import VsHeading from '../../heading/Heading.vue';
import VsImg from '../../img/Img.vue';
import VsRichTextWrapper from '../../rich-text-wrapper/RichTextWrapper.vue';
import {
    VsRow,
    VsCol,
} from '../../grid';

const props = withDefaults(defineProps<StyledListItemProps>(), {
    imageSrc: null,
});
</script>

<style lang="scss">
.vs-styled-list--numbered .vs-styled-list__item {
    counter-increment: section;
    padding: 0 0 $spacer-150 $spacer-150;
    position: relative;

    @include media-breakpoint-up(md) {
        padding: 0 0 $spacer-200 $spacer-200;
    }

    &::before {
        background-color: $vs-color-background-accent-heather;
        color: white;
        content: counter(section);
        font-size: $font-size-4;
        padding: $spacer-025 $spacer-075;
        position: absolute;
        right: 100%;
        top: 0;

        @include media-breakpoint-up(md) {
            padding: $spacer-025 $spacer-175;
        }
    }

    &:not(:last-child)::after {
        position: absolute;
        content: '';
        width: $spacer-025;
        height: 100%;
        background-color: $vs-color-border-accent-heather;
        right: 100%;
        top: 0;
    }

    h3 {
        margin-top: 0;
    }
}

.vs-styled-list--icon .vs-styled-list__item {
    padding: 0 0 $spacer-150 $spacer-300;
    position: relative;

    &::before {
        content: '\e085';
        color: $vs-color-text-accent-glencoe;
        font-family: 'Font Awesome Kit';
        font-size: $font-size-8;
        position: absolute;
        top: $spacer-2;
        left: 0;
    }
}

.vs-styled-list--image {
    margin-bottom: $spacer-250;

    img {
        max-width: 100%;
    }
}
</style>
