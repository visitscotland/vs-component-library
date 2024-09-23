<template>
    <div class="vs-visual-list">
        <VsContainer>
            <VsRow>
                <VsCol>
                    <VsHeading level="2">
                        <slot name="title" />
                    </VsHeading>
                </VsCol>
            </VsRow>

            <slot />
        </VsContainer>
    </div>
</template>

<script setup lang="ts">
import {
    VsContainer, VsCol, VsRow,
} from '@/components/grid';
import VsHeading from '@/components/heading/Heading.vue';
</script>
