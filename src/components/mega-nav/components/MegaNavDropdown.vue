<template>
    <div
        class="vs-mega-nav-dropdown"
        data-test="vs-mega-nav-dropdown"
    >
        <BDropdown
            variant="transparent"
            ref="dropdown"
            @show="dataLayerSubmit($event)"
        >
            <template #button-content>
                <!-- @slot For dropdown toggle button content  -->
                <slot name="button-content" />
            </template>

            <li role="menuitem">
                <VsContainer
                    fluid="lg"
                    class="px-0 px-lg-075"
                >
                    <VsRow class="g-0">
                        <VsCol
                            cols="12"
                            class="position-relative"
                        >
                            <!-- @slot Used to display the top menu link
                            at the top of the dropdown menu  -->
                            <slot name="cta-link" />

                            <!-- @slot The rest of the mega nav links put
                            here in the dropdown menu  -->
                            <slot name="dropdown-content" />

                            <VsButton
                                class="vs-mega-nav-dropdown__close-btn
                                d-none d-lg-block position-absolute"
                                icon="close"
                                icon-only
                                size="sm"
                                variant="transparent"
                                @click="closeMenu"
                                @keydown.tab="tabFromClose"
                            >
                                {{ menuToggleAltText }}
                            </VsButton>
                        </VsCol>
                    </VsRow>
                </VsContainer>
            </li>
        </BDropdown>

        <!-- No JS version -->
        <ul
            class="dropdown-menu dropdown-menu--fallback overflow-auto"
            role="menu"
        >
            <li role="menuitem">
                <VsContainer
                    fluid="lg"
                    class="px-0 px-lg-075"
                >
                    <VsRow class="g-0">
                        <VsCol
                            cols="12"
                            class="position-relative"
                        >
                            <!-- @slot Used to display the top menu link
                            at the top of the dropdown menu  -->
                            <slot name="cta-link" />

                            <!-- @slot The rest of the mega nav links put
                            here in the dropdown menu  -->
                            <slot name="dropdown-content" />

                            <VsButton
                                class="vs-mega-nav-dropdown__close-btn
                                d-none d-lg-block position-absolute"
                                icon="close"
                                icon-only
                                size="sm"
                                variant="transparent"
                                @click="closeMenu"
                            >
                                {{ menuToggleAltText }}
                            </VsButton>
                        </VsCol>
                    </VsRow>
                </VsContainer>
            </li>
        </ul>
    </div>
</template>

<script>
import {
    VsCol,
    VsRow,
    VsContainer,
} from '@/components/grid';
import { BDropdown } from 'bootstrap-vue-next';
import VsButton from '@/components/button/Button.vue';
import dataLayerMixin from '../../../mixins/dataLayerMixin';

/**
 *  This component includes a slot for toggle button content
 *  and slots for the mega nav dropdown menu content
 *
 * @displayName MegaNav Dropdown
 */
export default {
    name: 'VsMegaNavDropdown',
    status: 'prototype',
    release: '0.1.0',
    components: {
        BDropdown,
        VsCol,
        VsContainer,
        VsRow,
        VsButton,
    },
    mixins: [
        dataLayerMixin,
    ],
    props: {
        /**
         * Accessiblity alt text for the menu button
         */
        menuToggleAltText: {
            type: String,
            required: true,
        },
    },
    emits: ['menuToggled'],
    mounted() {
        // Listen for dropdown opening and closing and emit event
        if (this.emitter) {
            this.emitter.on('bv::dropdown::show', () => {
                /**
                 * Triggers when the dropdown is about to show
                 */
                this.$emit('menuToggled');
            });

            this.emitter.on('bv::dropdown::hide', () => {
                /**
                 * Triggers when the dropdown is about to close
                 */
                this.$emit('menuToggled');
            });
        }

        // Close menu on resize screen to fix toggle btn issues
        window.addEventListener('resize', this.closeMenu);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.closeMenu);
    },
    methods: {
        /**
         * Close the menu
         */
        closeMenu() {
            this.$refs.dropdown.hide();
        },
        /**
         * If tab pressed on close, check if user moving forwards
         * before closing menu
         */
        tabFromClose($event) {
            if (!$event.shiftKey) {
                this.closeMenu();
            }
        },
        /**
         * Submit event to dataLayer for tracking
         */
        dataLayerSubmit() {
            if (this.$slots['button-content']()[1] && this.$slots['button-content']()[1].children[0]) {
                const btnText = this.$slots['button-content']()[1].children[0].children;

                const clickEvent = {
                    target: {
                        text: btnText,
                    },
                };

                this.createDataLayerObject(
                    'menuNavigationDataEvent',
                    clickEvent,
                    null,
                );
            }
        },
    },
};
</script>

<style lang="scss">

.vs-mega-nav-dropdown {
    padding: $spacer-050 0 0 $spacer-050;

    @include media-breakpoint-up(lg) {
        padding: 0;
    }

    .btn.vs-mega-nav-dropdown__close-btn{
        border: 0;
        height: 26px;
        width: 26px;
        font-size: 0;
        right: $spacer-075;
        top: -36px;

        &:hover {
            .vs-icon{
                color: $vs-color-new-icon-cta-on-light;
            }
        }

        @include media-breakpoint-up(lg) {
            right: $spacer-025;
            top: -4px;
        }
    }

    .btn.dropdown-toggle {
        position: relative;
        letter-spacing: 0;
        font-weight: $font-weight-normal;
        line-height: $line-height-standard;
        border-radius: 0;
        border: 0;
        height: $spacer-175;
        width: $spacer-175;
        font-size: 0;
        padding: .125rem;

        &:focus-visible {
            @extend %primary-button-focus;
        }

        &:focus, &:active, &:active:focus {
            z-index: 1001;
        }

        &::after {
            display: none;
        }

        &.show {
            &::after {
                width: 100%;
            }
        }

        @include media-breakpoint-up(lg) {
            padding: $spacer-075 $spacer-050;
            height: auto;
            width: auto;
            font-size: $font-size-4;

            &::after {
                content: '';
                position: absolute;
                display: block;
                bottom: 0;
                left: 0;
                width: 0;
                height: 4px;
                background: $vs-color-new-interaction-cta-primary;
                transition: width $duration-base linear;
                border: 0;
                margin: 0;
            }

            &:hover {
                color: $vs-color-new-text-cta-on-light;

                &::after {
                    width: 100%;
                }
            }
        }

        @include media-breakpoint-up(xl) {
            margin: 0 $spacer-075;
        }
    }

    .dropdown-menu {
        background: $vs-color-background-inverse;
        width: 100% !important;
        top: 0 !important;
        left: 0 !important;
        right: 0;
        padding: 0;
        margin: 0;
        border: 0;
        box-shadow: 0px 9px 5px -7px rgba(0,0,0,0.1),
        inset 0px 10px 6px -8px rgba(0, 0, 0, 0.15);
        transform: translate3d(0px, 45px, 0px) !important;

        @include media-breakpoint-up(lg) {
            padding: $spacer-125 0 $spacer-200;
            max-height: 595px;
            transform: translate3d(0px, 48px, 0px) !important;
        }

        .vs-mega-nav-accordion-item--level-1:first-child{
            > .vs-accordion-item__card-header{
                > .vs-accordion-toggle.btn {
                    box-shadow: inset 0px 10px 6px -8px rgba(0, 0, 0, 0.16);

                    &:focus{
                        box-shadow: $vs-box-shadow-focus inset;
                    }
                }
            }
        }

    }

}

@include no-js {
    .vs-mega-nav-dropdown {
        .btn.dropdown-toggle {
            padding: $spacer-075 $spacer-050;
            height: auto;
            width: auto;
            font-size: $font-size-4;
            margin-bottom: $spacer-050;

            @include media-breakpoint-up(lg) {
                margin-bottom: 0;
            }

            &.disabled {
                opacity: $opacity-100;
            }

            &:focus {
                box-shadow: $vs-box-shadow-focus inset;

                &::after {
                    display: none;
                }
            }

            &::after {
                content: '';
                position: absolute;
                display: block;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 4px;
                transition: width $duration-base linear;
                border: 0;
                margin: 0;
            }

            &:hover {
                color: $vs-color-new-text-cta-on-light;

                &::after {
                    width: 100%;
                    background: $vs-color-new-interaction-cta-primary;
                }
            }
        }

        &__close-btn {
            display: none!important;
        }

        .dropdown-menu {
            display: none;
        }

        .dropdown-menu--fallback {
            display: block !important;
            max-height: none;
            position: relative !important;
            border: 0;
            box-shadow: none;
            transform: none!important;
        }
    }
}
</style>
