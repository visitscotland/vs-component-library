<template>
    <div
        class="vs-tourism-info"
        data-test="vs-tourism-info"
    >
        <VsContainer>
            <VsRow>
                <VsCol
                    cols="10"
                    offset="1"
                    md="8"
                    offset-md="2"
                    lg="6"
                    offset-lg="3"
                    class="vs-tourism-info__intro-content"
                >
                    <div
                        class="vs-tourism-info__links"
                        data-test="vs-tourism-info__standalone-links"
                        v-if="($slots['tourism-info-links'] && $slots['tourism-info-links']()) && !($slots['tourism-info-quote'] && $slots['tourism-info-quote']())"
                    >
                        <!-- @slot Holds the links (html expected) -->
                        <slot name="tourism-info-links" />
                    </div>
                </VsCol>

                <VsCol
                    cols="12"
                    md="10"
                    offset-md="1"
                    :class="{ 'vs-tourism-info__image-offset': ($slots['tourism-info-quote'] && $slots['tourism-info-quote']()) }"
                >
                    <!-- @slot Holds the main tourism-info image -->
                    <slot
                        name="tourism-info-image-with-caption"
                    />
                </VsCol>

                <VsCol
                    cols="12"
                    md="10"
                    offset-md="1"
                    lg="7"
                    offset-lg="5"
                    class="vs-tourism-info__quote-block-container"
                    v-if="($slots['tourism-info-quote'] && $slots['tourism-info-quote']())"
                >
                    <div class="vs-tourism-info__quote-block">
                        <!-- @slot Optional slot, holds the links (vs-quote expected) -->
                        <slot name="tourism-info-quote" />

                        <div
                            class="vs-tourism-info__links-contained"
                            data-test="vs-tourism-info__embedded-links"
                        >
                            <!-- @slot Holds the links (html expected) -->
                            <slot name="tourism-info-links" />
                        </div>
                    </div>
                </VsCol>
            </VsRow>
        </VsContainer>
    </div>
</template>

<script>
import {
    VsContainer, VsRow, VsCol,
} from '@/components/grid';

/**
 * A tourism information block with a name, cover image and an optional slot for an
 * embedded quote (either just text or a vs-quote element)
 *
 * @displayName Tourism Info
 */
export default {
    name: 'VsTourismInfo',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsContainer,
        VsRow,
        VsCol,
    },
};
</script>

<style lang="scss">
.vs-tourism-info {
    &__heading {
        margin-bottom: $spacer-300;

        @include media-breakpoint-up(lg) {
            margin-bottom: $spacer-200;
        }
    }

    &__logo {
        height: $spacer-300;
        margin-bottom: $spacer-200;
    }

    &__links {
        font-size: $font-size-5;
        margin-bottom: $spacer-300;

        @include media-breakpoint-up(lg) {
            line-height: $spacer-175;
        }
    }

    &__intro-content {
        text-align: center;
    }

    &__image-offset {
        @include media-breakpoint-down(sm) {
            padding: 0;

            figure {
                width: calc(100% + 2em);
                margin-left: -1em;
            }
        }

        @include media-breakpoint-up(lg) {
            margin-bottom: -22rem;
        }
    }

    &__quote-block-container {
        z-index: 2;
        text-align: left;
    }

    &__quote-block {
        background: $white;
        padding: $spacer-200 $spacer-200;

        @include media-breakpoint-up(md) {
            padding: $spacer-300 $spacer-400;
        }
    }

    &__links-contained {
        margin-bottom: $spacer-0;
        margin-top: $spacer-300;
        font-size: $font-size-5;

        @include media-breakpoint-up(lg) {
            line-height: $spacer-175;
        }
    }

    figure {
        margin-bottom: $spacer-0;
    }
}
</style>
