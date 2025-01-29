<template>
    <div
        class="vs-site-search-form"
        data-test="vs-site-search-form"
        v-if="showSearchForm"
    >
        <VsContainer fluid="lg">
            <VsRow>
                <VsCol cols="12">
                    <div
                        class="cludo-input-form d-flex align-items-start"
                        role="search"
                        id="cludo-search-input"
                    >
                        <div
                            class="d-flex flex-column flex-grow-1 position-relative"
                        >
                            <label
                                for="site-search"
                                class="vs-site-search-form__label"
                            >
                                <span class="visually-hidden">
                                    {{ labelText }}
                                </span>
                                <VsIcon
                                    name="search"
                                    size="xs"
                                />
                            </label>
                            <VsInput
                                class="vs-site-search-form__input cludo-input-form__input"
                                ref="searchInput"
                                name="searchrequest"
                                type="search"
                                field-name="site-search"
                                :placeholder="labelText"
                                :clear-button-text="clearButtonText"
                                :auto-complete="false"
                                @updated="updateVal"
                            />
                        </div>
                        <VsButton
                            type="submit"
                            class="vs-site-search-form__search-button
                            cludo-input-form__search-button"
                            variant="primary"
                            size="lg"
                            :rounded="false"
                            @click="closeSearchForm"
                        >
                            {{ submitButtonText }}
                        </VsButton>
                    </div>
                </VsCol>
            </VsRow>
        </VsContainer>

        <VsButton
            class="vs-site-search-form__close-button d-none d-lg-block"
            variant="transparent"
            icon="close"
            size="md"
            icon-only
            @click="closeSearchForm"
            @keydown.tab="tabFromClose"
        >
            {{ closeButtonText }}
        </VsButton>
    </div>
</template>

<script>
import VsIcon from '@/components/icon/Icon.vue';
import VsInput from '@/components/input/Input.vue';
import VsButton from '@/components/button/Button.vue';
import {
    VsCol, VsRow, VsContainer,
} from '@/components/grid';

/**
 * Search form used for the global site search.
 *
 * @displayName Site Search Form
 */
export default {
    name: 'VsSiteSearchForm',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsIcon,
        VsInput,
        VsButton,
        VsCol,
        VsRow,
        VsContainer,
    },
    props: {
        /**
         * Used to know if the search form is currently showing
         */
        isShowing: {
            type: Boolean,
            default: false,
        },
        /**
         * Text that renders in form label (visually-hidden) and input placeholder
         */
        labelText: {
            type: String,
            default: '',
        },
        /**
         * Text that renders inside the submit button
         */
        submitButtonText: {
            type: String,
            default: '',
        },
        /**
         * Text that renders inside the clear button (visually-hidden)
         */
        clearButtonText: {
            type: String,
            default: '',
        },
        /**
         * Text that renders inside the close button (visually-hidden)
         */
        closeButtonText: {
            type: String,
            default: '',
        },
    },
    emits: ['toggleAction'],
    data() {
        return {
            searchTerm: '',
            showSearchForm: true,
        };
    },
    watch: {
        /**
         * Watches for search form opening
         */
        isShowing(formOpen) {
            if (formOpen) {
                this.focusOnInput();
            }
        },
    },
    methods: {
        /**
         * Puts focus on input when form is opened
         */
        focusOnInput() {
            this.$nextTick(() => this.$refs.searchInput.$refs.input.focus());
        },
        /**
         * If tab pressed on close, check if user moving forwards
         * before closing form
         */
        tabFromClose($event) {
            if (!$event.shiftKey) {
                this.closeSearchForm();
            }
        },
        /**
         * Update searchTerm value with returned data
         */
        updateVal(data) {
            this.searchTerm = data.value;
        },
        /**
         * Only submit if the field has a vale
         */
        onSubmit(e) {
            if (this.searchTerm === '') {
                e.preventDefault();
            }
        },
        /**
         * Closes the search form popover
         */
        closeSearchForm() {
            this.$emit('toggleAction', this.showSearchForm);
        },
    },
};
</script>

<style lang="scss">

.vs-site-search-form {
    background-color: rgba($vs-color-background-secondary, 0.75);
    backdrop-filter: blur(30px);
    padding: $spacer-125 0;
    position: absolute;
    width: 100%;
    z-index: 1030;

    @include media-breakpoint-up(lg) {
        padding: $spacer-200 0;
    }

    .cludo-input-form{
        margin: 0;

        @include media-breakpoint-up(lg) {
            margin: $spacer-050 0;
        }
        @include media-breakpoint-up(xl) {
            margin: $spacer-100 0;
        }
    }

    &__label {
        position: absolute;
        left: $spacer-075;
        top: 50%;
        transform: translate(0, -50%);

        @include media-breakpoint-up(lg) {
            left: $spacer-150;

            .vs-icon{
                font-size: $icon-size-sm;
            }
        }
    }

    .vs-input--site-search.form-control {
        @extend %reset-clear;
        font-size: $font-size-body;
        height: 50px;
        padding: $spacer-075 $spacer-125 $spacer-075 2.5rem;
        margin: 0;
        border-color: $vs-color-border-inverse;

        &:focus{
            @include form-focus-state;
        }

        @include media-breakpoint-up(lg) {
            padding: $spacer-100 $spacer-400;
            font-size: $font-size-6;
            height: 64px;
        }
    }

    &__search-button{
        &.btn-lg{
            height: 50px;
            padding: $spacer-075 $spacer-050;
            font-size: $font-size-3;

            @include media-breakpoint-up(lg) {
                height: 64px;
                padding: $spacer-075 $spacer-200;
                font-size: $font-size-4;
            }
        }
    }

    &__close-button {
        position: absolute;
        right: 8px;
        top: 6px;

        @include media-breakpoint-up(xl) {
            right: $spacer-100;
            top: $spacer-050;
        }
    }
}
</style>
