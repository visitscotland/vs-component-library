<template>
    <hr
        class="vs-divider"
        :class="props.variant ? `vs-divider--variant-${props.variant}` : null"
        data-test="vs-divider"
    >
</template>

<script>
export default {
    name: 'VsBadge',
};
</script>

<script setup>
/**
 * Divider used to visually seperate information on the site.
 *
 * @displayName Divider
 */

const props = defineProps({
    /*
    * The color of the border.
    * `primary|secondary|inverse`
    */
    variant: {
        type: String,
        required: false,
        validator: (value) => value.match(
            /(primary|secondary|inverse)/,
        ),
        default: 'primary',
    },
});
</script>

<style lang="scss">

$variants: (
    primary: $vs-color-border-primary,
    secondary: $vs-color-border-secondary,
    inverse: $vs-color-border-inverse,
);

.vs-divider {
    margin: $vs-spacer-100 auto;
    border-top: 1px solid;

    @each $variant in map-keys($variants) {
        &.vs-divider--variant-#{$variant} {
            color: map-get($variants, $variant);
        }
    }
}
</style>
