<template>
    <div
        class="vs-visual-list__item"
        data-test="vs-visual-list__item"
    >
        <VsRow>
            <VsCol cols="2">
                <VsImg
                    src="https://placehold.co/600x400"
                    class="mt-3"
                />
            </VsCol>
            <VsCol cols="10">
                <VsHeading level="3">
                    <slot name="item-heading" />
                </VsHeading>

                <VsRichTextWrapper>
                    <slot />
                </VsRichTextWrapper>
            </VsCol>
        </VsRow>
    </div>
</template>

<script setup lang="ts">
import {
    VsCol,
    VsHeading,
    VsImg,
    VsRichTextWrapper,
    VsRow,
} from '@/components';
</script>

<style lang="scss">
.vs-visual-list__item {
    margin-bottom: $spacer-250;

    img {
        max-width: 100%;
    }
}
</style>
