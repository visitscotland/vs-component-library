<template>
    <div class="vs-details-wrapper">
        <details
            class="vs-details"
            :open="props.open || null"
        >
            <summary class="vs-details__summary">
                {{ props.summaryTitle }}
                <VsIcon name="chevron" />
            </summary>

            <!-- @slot Default slot for the detail content -->
            <slot />
        </details>
    </div>
</template>

<script setup>
import VsIcon from '@/components/icon/Icon.vue';

const props = defineProps({
    open: {
        type: Boolean,
        default: false,
    },
    summaryTitle: {
        type: String,
        required: true,
    },
});
</script>

<style lang="scss">
.vs-details-wrapper {
    border: solid 1px $vs-color-border-secondary;
}

.vs-details {
    padding: $spacer-075 $spacer-125;

    &__summary {
        align-items: baseline;
        display: flex;
        font-size: $font-size-4;
        font-weight: $font_weight_semi_bold;
        justify-content: space-between;

        .vs-icon {
            color: $vs-color-icon-highlight;
            transform: scale(-1, -1);
        }
    }

    &[open] {
        .vs-details {
            &__summary {
                margin-bottom: $spacer-075;

                .vs-icon {
                    transform: scale(1, 1);
                }
            }
        }
    }

    // label {
    //     display: flex;
    //     font-size: $font-size-body;
    //     gap: $spacer-050;
    // }
}
</style>
