<template>
    <div
        class="vs-main-map-category"
        data-test="vs-main-map-category"
    >
        <button
            type="button"
            class="vs-main-map-category__button"
            :class="`vs-main-map-category__button--${type}`"
            data-test="vs-main-map-category__button"
            @click="selectCategory(type)"
            @mouseover="isHovered = true"
            @mouseout="isHovered = false"
            @focusin="isHovered = true"
            @focusout="isHovered = false"
        >
            <div>
                <VsMapMarkerIcon
                    class="vs-main-map-category__icon"
                    :id="type"
                    :is-hovered="isHovered"
                />
                {{ categoryName }}
            </div>

            <VsIcon
                icon="fa-regular fa-arrow-right"
                variant="highlight"
                size="xs"
                class="vs-main-map-category__icon align-self-center me-0"
            />
        </button>
    </div>
</template>

<script>
import VsMapMarkerIcon from '@/components/map-marker-icon/MapMarkerIcon.vue';
import VsIcon from '@/components/icon/Icon.vue';

export default {
    name: 'VsMapWithSidebarCategories',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsMapMarkerIcon,
        VsIcon,
    },
    props: {
        /**
         * Name of category
         */
        categoryName: {
            type: String,
            required: true,
        },
        /**
         * Category type - for use with markers
         * and data
         */
        type: {
            type: String,
            required: true,
        },
        /**
         * If the category has a subcategory
         */
        hasSubCat: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isHovered: false,
        };
    },
    methods: {
        /**
         * Emits category type
         */
        selectCategory(type) {
            if (this.hasSubCat) {
                this.$parent.$emit('set-subcategory', type);
            } else {
                this.$parent.$emit('set-category', type);
                this.$parent.$emit('set-stage', 1);
            }
        },
    },
};
</script>

<style lang="scss">
    .vs-main-map-category {
        position: relative;
        display: flex;
        align-items: center;

        &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background: $vs-color-border-primary;
            height: 1px;
        }

        &__icon {
            vertical-align: middle;
            margin-right: $spacer-050;
        }

        @include map-button-themes;

        &__button {
            background: transparent;
            display: flex !important;
            letter-spacing: normal;
            font-size: $font-size-5;
            font-weight: $font-weight-button;
            text-transform: none;
            transform: none;
            width: 100%;
            text-align: left;
            padding: $spacer-100 $spacer-100;
            border: none;
            justify-content: space-between;
            line-height: $line-height-standard;

            &::after {
                display: none;
            }

            &:hover {
                border: none;

                &::after {
                    display: none;
                }
            }

            &:focus {
                box-shadow: $vs-box-shadow-focus inset;
                background: $vs-color-background-inverse;
            }

            @include media-breakpoint-up(lg) {
                font-size: $font-size-6;
                font-weight: $font-weight-normal;
                padding: $spacer-050 $spacer-100;
            }
        }

        @include media-breakpoint-up(lg) {
            padding: $spacer-050 0;
        }
    }
</style>
