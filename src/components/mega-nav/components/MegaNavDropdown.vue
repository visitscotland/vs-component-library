<template>
    <div
        class="vs-mega-nav-dropdown"
        data-test="vs-mega-nav-dropdown"
        role="menuitem"
    >
        <!-- Toggle -->
        <button
            class="vs-mega-nav-dropdown__toggle"
            @click="toggleMenu"
            :class="{ 'is-active': isOpen }"
            aria-haspopup="menu"
            :aria-expanded="isOpen"
        >
            <slot name="button-content" />
        </button>

        <!-- Mega panel (NOT floating) -->
        <div
            v-if="isOpen"
            class="vs-mega-nav-dropdown__panel"
        >
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
                            icon="vs-icon-control-dismiss"
                            icon-only
                            size="sm"
                            variant="subtle"
                            @click="closeMenu"
                            @keydown.tab="tabFromClose"
                        >
                            {{ menuToggleAltText }}
                        </VsButton>
                    </VsCol>
                </VsRow>
            </VsContainer>
        </div>

        <!-- No JS version -->
        <ul
            class="dropdown-menu--fallback overflow-auto d-none"
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
                                icon="vs-icon-control-dismiss"
                                icon-only
                                size="sm"
                                variant="subtle"
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
    VsCol, VsRow, VsContainer,
} from '@/components/grid';
import VsButton from '@/components/button/Button.vue';
import dataLayerMixin from '../../../mixins/dataLayerMixin';

/**
 *  This component includes a slot for toggle button content
 *  and slots for the mega nav dropdown menu content
 *
 * @displayName MegaNav Dropdown
 */

let activeDropdown = null;

export default {
    name: 'VsMegaNavDropdown',
    status: 'prototype',
    release: '0.1.0',
    components: {
        VsCol,
        VsContainer,
        VsRow,
        VsButton,
    },
    mixins: [dataLayerMixin],
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
    data() {
        return {
            isOpen: false,
            instanceId: Math.random().toString(36).slice(2),
        };
    },
    mounted() {
        document.addEventListener('click', this.handleOutsideClick);
        document.addEventListener('keydown', this.handleEscape);
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleOutsideClick);
        document.removeEventListener('keydown', this.handleEscape);
    },
    methods: {
        toggleMenu() {
            // If another dropdown is open, close it
            if (activeDropdown && activeDropdown.id !== this.instanceId) {
                activeDropdown.__close?.();
            }
            this.isOpen = !this.isOpen;

            if (this.isOpen) {
                activeDropdown = {
                    id: this.instanceId,
                    __close: this.closeMenu,
                };
            } else {
                if (activeDropdown?.id === this.instanceId) {
                    activeDropdown = null;
                }
            }

            this.dataLayerSubmit();
            this.$emit('menuToggled', this.isOpen);
        },

        closeMenu() {
            this.isOpen = false;

            if (activeDropdown?.id === this.instanceId) {
                activeDropdown = null;
            }

            this.$emit('menuToggled', false);
        },
        handleOutsideClick(event) {
            if (!this.isOpen) return;

            const el = this.$el;

            // If click is inside component, ignore
            if (el.contains(event.target)) return;

            this.closeMenu();
        },

        handleEscape(event) {
            if (event.key === 'Escape' && this.isOpen) {
                this.closeMenu();
            }
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
            if (
                this.$slots['button-content']()[1] &&
                this.$slots['button-content']()[1].children[0]
            ) {
                const btnText =
                    this.$slots['button-content']()[1].children[0]
                        .children;

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
    padding: $vs-spacer-050 0 0 $vs-spacer-050;

    @include media-breakpoint-up(lg) {
        padding: 0;
    }

    .btn.vs-mega-nav-dropdown__close-btn {
        border: 0;
        height: 26px;
        width: 26px;
        font-size: 0;
        right: $vs-spacer-075;
        top: -36px;

        &:hover {
            .vs-icon {
                color: $vs-color-icon-cta-on-light;
            }
        }

        @include media-breakpoint-up(lg) {
            right: $vs-spacer-025;
            top: -4px;
        }
    }

    &__toggle {
        position: relative;
        font-weight: $vs-font-weight-regular;
        border-radius: $vs-radius-none;
        border: 0;
        height: 1.75rem;
        width: 1.75rem;
        font-size: 0;
        padding: 0.125rem;
        white-space: nowrap;
        color: $vs-color-text-primary;
        background: transparent;

        &:focus-visible {
            @extend %primary-button-focus;
            outline: none;
        }

        &:focus,
        &:active,
        &:active:focus {
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
            padding: $vs-spacer-075 $vs-spacer-050;
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
                background: $vs-color-interaction-cta-primary;
                transition: width $duration-base linear;
                border: 0;
                margin: 0;
            }

            &:hover {
                color: $vs-color-text-cta-on-light;

                &::after {
                    width: 100%;
                }
            }

            &.is-active {
                &::after {
                    width: 100%;
                }
            }
        }

        @include media-breakpoint-up(xl) {
            margin: 0 $vs-spacer-075;
        }
    }

    &__panel {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        z-index: 1000;
        background: $vs-color-background-inverse;
        padding: 0;
        margin: 0;
        border: 0;
        box-shadow:
            0px 9px 5px -7px rgba(0, 0, 0, 0.1),
            inset 0px 10px 6px -8px rgba(0, 0, 0, 0.15);

        @include media-breakpoint-up(lg) {
            padding: $vs-spacer-125 0 $vs-spacer-200;
            max-height: 595px;
            transform: translate3d(0px, 48px, 0px) !important;
        }

        .vs-mega-nav-accordion-item--level-1:first-child {
            > .vs-accordion-item__card-header {
                > .vs-accordion-toggle.btn {
                    box-shadow: inset 0px 10px 6px -8px
                        rgba(0, 0, 0, 0.16);

                    &:focus {
                        box-shadow: $vs-focus-shadow inset;
                    }
                }
            }
        }
    }
}

@include no-js {
    .vs-mega-nav-dropdown {
        &__toggle {
            padding: $vs-spacer-075 $vs-spacer-050;
            height: auto;
            width: auto;
            font-size: $font-size-4;
            margin-bottom: $vs-spacer-050;

            @include media-breakpoint-up(lg) {
                margin-bottom: 0;
            }

            &.disabled {
                opacity: $opacity-100;
            }

            &:focus {
                box-shadow: $vs-focus-shadow inset;

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
                color: $vs-color-text-cta-on-light;

                &::after {
                    width: 100%;
                    background: $vs-color-interaction-cta-primary;
                }
            }
        }

        &__close-btn {
            display: none !important;
        }

        .dropdown-menu--fallback {
            display: block !important;
            max-height: none;
            position: relative !important;
            border: 0;
            box-shadow: none;
            transform: none !important;
        }
    }
}
</style>
