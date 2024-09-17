<template>
    <div
        class="vs-styled-numbered-list"
        data-test="vs-styled-numbered-list"
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
                <VsCol>
                    <ul class="vs-styled-numbered-list__list mt-8">
                        <slot />
                    </ul>
                </VsCol>
            </VsRow>
        </VsContainer>
    </div>
</template>

<script setup lang="ts">
import VsHeading from '../heading/Heading.vue';
import {
    VsContainer,
    VsRow,
    VsCol,
} from '../grid';
</script>

<style lang="scss">
.vs-styled-numbered-list .vs-styled-numbered-list__list {
    list-style: none;

    @include media-breakpoint-up(md) {
        margin-left: $spacer-200;
    }
}
</style>
