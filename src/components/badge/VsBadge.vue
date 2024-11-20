<template>
    <div
        class="vs-badge"
        data-test="vs-badge"
    >
        <BBadge>
            <!-- @slot The badge content goes here -->
            <slot />
        </BBadge>
    </div>
</template>

<script setup>
import { BBadge } from 'bootstrap-vue-next';
</script>

<style lang="scss">
.vs-badge {
    border: 1px solid $vs-color-new-border-secondary;
    border-radius: $border_radius_default;
    color: $vs-color-new-text-secondary;
    display: inline-block;
    font-size: $font-size-3;
    margin-right: $spacer-050;
    padding: $spacer-025 $spacer-050;
}
</style>
