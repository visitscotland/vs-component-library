<template>
    <VsDropdown
        variant="primary"
        class="vs-global-menu__languages"
    >
        <template #button-content>
            <VsIcon
                class="vs-global-menu__languages__icon"
                icon="fa-regular fa-globe"
                variant="inverse"
                size="xxs"
                focusable="false"
            />
            <!-- Tablet/Desktop -->
            <span class="vs-global-menu__languages__text">{{ languageLabel }}</span>
            <span class="vs-global-menu__languages__selected">{{ selectedLanguage }}</span>
        </template>

        <!-- No JS Version -->
        <li
            class="vs-global-menu__languages__label"
            role="menuitem"
        >
            <VsIcon
                icon="fa-regular fa-globe"
                variant="inverse"
                size="xxs"
                focusable="false"
            />
            {{ languageLabel }}
        </li>

        <!-- @slot Default slot for Global Menu Language Items  -->
        <slot />
    </VsDropdown>
</template>

<script>
import VsIcon from '@/components/icon/Icon.vue';
import VsDropdown from '@/components/dropdown/Dropdown.vue';
import cookieMixin from '../../../mixins/cookieMixin';

/**
 * TODO: Document usage
 *
 * @displayName Global Menu Language
 */
export default {
    name: 'VsGlobalMenuLanguage',
    status: 'prototype',
    release: '0.1.0',
    components: {
        VsDropdown,
        VsIcon,
    },
    mixins: [
        cookieMixin,
    ],
    props: {
        /**
         * 'Language' label to be shown or translated before language name.
         * Example: "Language": English.
         */
        languageLabel: {
            type: String,
            default: 'Language',
        },
        /**
         * Language locale string.
         * Example: "en_GB"
         */
        language: {
            type: String,
            default: 'en',
        },
    },
    mounted() {
        if (!this.cookieExists('vs_locale')) {
            this.setCookie('vs_locale', this.localeCookie, true);
        };

        if (!this.cookieExists('googtrans')) {
            this.setCookie('googtrans', this.translationCookie, true);
        };
    },
};
</script>

<style lang="scss">
.vs-global-menu__languages {
    position: static;

    .dropdown-menu {
        width: 100%;
        background: $vs-color-background-brand;
        font-size: $font-size-2;
        margin: 0;
        padding: 0;

        &.show {
            border: none;
        }

        @include media-breakpoint-up(lg) {
            width: 100%;
            min-width: 130px;
        }
    }

    .btn-primary.dropdown-toggle {
        font-size: $font-size-2;
        background: $vs-color-background-brand;
        border: none;

        @include media-breakpoint-up(lg) {
            padding: $vs-spacer-075 $vs-spacer-100 $vs-spacer-075 $vs-spacer-075;
        }

        &:not(:disabled):not(.disabled):active {
            background: $vs-color-background-inverse;
            color: $vs-color-text-primary;

            &:after, .vs-icon{
                color: $vs-color-text-primary;
                transition: $duration-base color;
            }
        }

        &:focus {
            box-shadow: $vs-focus-shadow-on-dark inset;
            background: $vs-color-background-brand;
        }

        &:hover {
            background: $vs-color-background-accent-heather-80;
        }
    }

    @include media-breakpoint-up(lg) {
        position: relative;
    }

    &__icon, &__text {
        display: none;

        @include media-breakpoint-up(lg) {
            display: inline;
        }
    }

    &__text {
        padding-left: $vs-spacer-025;
    }

    &__selected {
        @include media-breakpoint-up(lg) {
            padding-left: $vs-spacer-025;
        }
    }

    &__label {
        display: none;
    }

}

@include no-js {
    .vs-global-menu__languages {
        display: block;
        width: 100%;

        .dropdown-menu {
            @extend .show;
            max-height: 700px;
            opacity: $opacity-100;
            position: initial;
            display: flex!important;
            width: 100%;
            flex-wrap: wrap;
            transform: translate3d(0px, 0px, 0px) !important;
            text-align: center;
            max-height: none;
            border-top: $vs-border-width-sm solid $vs-color-border-inverse;
            padding: $vs-spacer-075 0;

            @include media-breakpoint-up(md) {
                display: inline-flex;
                flex-wrap: wrap;
                text-align: left;
            }
        }

        &__label {
            display: inline;
            color: $vs-color-text-inverse;
            padding: $vs-spacer-075;
            font-size: $font-size-4;
            margin: 0 auto;

            @include media-breakpoint-up(md) {
                padding: $vs-spacer-100 $vs-spacer-075;
                margin: 0;
            }

            @include media-breakpoint-up(lg) {
                padding: $vs-spacer-100 $vs-spacer-075 $vs-spacer-100 0;
            }
        }
    }
}
</style>
