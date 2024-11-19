<template>
    <VsDropdown
        :text="dropdownLabel"
        variant="primary"
        class="vs-global-menu__dropdown"
    >
        <VsDropdownItem
            v-for="site in websites"
            :key="site.siteName"
            :href="site.siteUrl"
            :class="
                (site.siteUrl == activeSite)
                    ? 'd-none'
                    : ''
            "
            :target="
                (site.siteUrl == activeSite)
                    ? '_self'
                    : '_blank'
            "
            role="menuitem"
        >
            {{ site.siteName }}
        </VsDropdownItem>
    </VsDropdown>
</template>

<script>
import VsDropdown from '@/components/dropdown/Dropdown.vue';
import VsDropdownItem from '@/components/dropdown/components/DropdownItem.vue';

/**
 * This component is the dropdown used inside the Global Menu component.
 * It holds the list of websites to be shown on smaller devices.
 *
 * @displayName Global Menu Dropdown
 */

export default {
    name: 'VsGlobalMenuDropdown',
    status: 'prototype',
    release: '0.1.0',
    components: {
        VsDropdown,
        VsDropdownItem,
    },
    props: {
        /**
         * Determines the active website
         */
        activeSite: {
            type: String,
            required: true,
        },
        /**
         * Translation text for the "Our Websites" label
         */
        dropdownLabel: {
            type: String,
            default: 'Our Websites',
        },
        /**
         * List of websites to be rendered
         */
        websites: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="scss">
.vs-global-menu__dropdown .btn,
.vs-global-menu__dropdown {
    position: initial;
    flex: auto;
    padding: 0;
    background: transparent;
    border: none;

    .btn-primary.dropdown-toggle {
        padding: 0.3rem $spacer-075;
        font-size: $font-size-2;
        align-items: center;

        &:not(:disabled):not(.disabled):active {
            background: $vs-color-background-inverse;
            color: $vs-color-new-text-primary;

            &:after, .vs-icon{
                color: $vs-color-new-text-primary;
                transition: $duration-base color;
            }
        }

        &:focus {
            box-shadow: $vs-box-shadow-focus-on-dark inset;
        }

        &:hover {
            background: $vs-color-new-background-accent-heather-80;
        }
    }

    ~ .vs-global-menu__languages .dropdown-menu {
        min-width: auto;
        margin: 0;
        background: $vs-color-new-background-brand;
        max-height: 0;
        overflow: hidden;
        opacity: $opacity-0;

        @include media-breakpoint-down(lg) {
            width: 100%!important;
        }

        li {
            &:not(:last-of-type) {
                border-bottom: 1px solid $vs-color-border-inverse;
            }

            .dropdown-item {
                font-size: $font-size-2;
                padding: $spacer-075;
                color: $vs-color-background-inverse;
                text-decoration: none;
                line-height: $line-height-xs;

                &:hover {
                    background: $vs-color-new-background-accent-heather-80;
                }

                &:focus {
                    background: $vs-color-new-background-brand;
                    box-shadow: $vs-box-shadow-focus-on-dark inset;
                }
            }
        }

        &.show {
            max-height: 500px;
            opacity: $opacity-100;
            border: none;
            padding: 0;
        }
    }

    @include no-js {
        display: none;
    }
}

@include no-js {
    .vs-global-menu__dropdown ~ .vs-global-menu__languages {
        display: none;
    }

    .vs-global-menu__dropdown ~ .vs-global-menu__languages.vs-dropdown--fallback {
        display: block;
    }

    .vs-global-menu__dropdown ~ .vs-global-menu__languages .dropdown-menu {
        position: relative !important;

        li {
            border-bottom: 0;
        }
    }
}

</style>
