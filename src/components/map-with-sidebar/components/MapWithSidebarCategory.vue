<template>
    <div
        class="vs-main-map-category"
        data-test="vs-main-map-category"
    >
        <VsButton
            class="vs-main-map-category__button"
            :class="`vs-main-map-category__button--${type}`"
            data-test="vs-main-map-category__button"
            variant="transparent"
            icon="internal-link"
            icon-position="right"
            size="sm"
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
        </VsButton>
    </div>
</template>

<script>
import VsButton from '@components/button/Button.vue';
import VsMapMarkerIcon from '@components/map-marker-icon/MapMarkerIcon.vue';

export default {
    name: 'VsMapWithSidebarCategories',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsButton,
        VsMapMarkerIcon,
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
            background: $vs-color-border;
            height: 1px;
        }

        &__icon {
            vertical-align: middle;
            margin-right: $spacer-2;
        }

        @include map-button-themes;

        &__button.vs-button.btn-transparent {
            display: block!important;
            letter-spacing: normal;
            font-size: $font-size-5;
            font-weight: $font-weight-bold;
            text-transform: none;
            width: 100%;
            text-align: left;
            padding: $spacer-4 $spacer-4;
            border: none;

            .btn-content{
                justify-content: space-between;
            }

            .vs-icon--internal-link {
                color: $vs-color-icon-tertiary;
            }

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
                padding: $spacer-2 $spacer-4;
            }
        }

        @include media-breakpoint-up(lg) {
            padding: $spacer-2 0;
        }
    }
</style>
