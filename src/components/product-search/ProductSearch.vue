<template>
    <div
        class="vs-product-search"
        data-test="vs-product-search"
    >
        <VsContainer>
            <VsRow>
                <VsCol
                    class="vs-product-search__col vs-product-search__col--left"
                    xl="7"
                >
                    <VsHeading
                        level="2"
                        headingStyle="heading-l"
                        class="vs-product-search__heading mt-0"
                    >
                        <!-- @slot Text for the module heading -->
                        <slot name="vs-module-heading" />
                    </VsHeading>

                    <div class="vs-product-search__intro">
                        <!-- @slot Text for the module intro -->
                        <slot name="vs-module-intro" />
                    </div>
                </VsCol>
                <VsCol
                    class="vs-product-search__col vs-product-search__col--right"
                    xl="5"
                >
                    <VsProductSearchEmbed
                        class="vs-product-search__widget"
                        :default-location="defaultLocation"
                        :default-locale="defaultLocale"
                        :default-prod="defaultProd"
                    />

                    <VsWarning class="vs-product-search__no-js">
                        {{ noJsMessage }}
                    </VsWarning>
                </VsCol>
            </VsRow>
        </VsContainer>
    </div>
</template>

<script>
import {
    VsContainer,
    VsRow,
    VsCol,
} from '@/components/grid';
import VsHeading from '@/components/heading/Heading.vue';
import VsWarning from '@/components/warning/Warning.vue';
import VsProductSearchEmbed from './components/ProductSearchEmbed.vue';

/**
 * A module housing the PSR widget, a title and optional text
 *
 * @displayName Product Search
 */

export default {
    name: 'VsProductSearch',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsContainer,
        VsRow,
        VsCol,
        VsProductSearchEmbed,
        VsHeading,
        VsWarning,
    },
    props: {
        /**
         * Message to show when Javascript is disabled
         */
        noJsMessage: {
            type: String,
            required: true,
        },
        /**
         * Autofilled location field
         */
        defaultLocation: {
            type: String,
            default: '',
        },
        /**
         * Autofilled product field
         */
        defaultProd: {
            type: String,
            default: 'acti,attr,reta',
        },
        /**
         * Locale to set language
         */
        defaultLocale: {
            type: String,
            default: 'en',
        },
    },
};
</script>

<style lang="scss">
    .vs-product-search {
        width: 100%;
        background: $vs-color-background-accent-heather;
        padding: $spacer-8 $spacer-1;
        font-family: $font-family-sans-serif;

        &__no-js {
            display: none;
        }

        &__heading,
        &__intro {
            color: $vs-color-text-inverse;
        }

        &__col--left {
            background: $vs-color-background-accent-heather;
            font-family: $font-family-sans-serif;
            margin-bottom: $spacer-9;
        }

        &__col--right {
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: $vs-color-background-accent-bluebell;
            padding: $spacer-6 $spacer-4;
        }

        @include media-breakpoint-up(sm) {
            padding-left: $spacer-3;
            padding-right: $spacer-3;
        }

        @include media-breakpoint-up(xl) {
            padding: 0;
            background: transparent;

            &__heading,
            &__intro {
                color: $vs-color-text-inverse;
                margin-left: $spacer-10;
                max-width: 70%;
            }

            &__col {
                min-height: 458px;
            }

            &__col--left {
                padding: $spacer-12;
                margin-bottom: 0;
            }

            &__col--right.col-lg-4 {
                padding: $spacer-8;
            }
        }
    }

    @include no-js {
        .vs-product-search {
            &__col--right {
                padding: 0;
            }

            &__no-js {
                display: flex;
            }

            &__widget {
                display: none;
            }
        }
    }
</style>
