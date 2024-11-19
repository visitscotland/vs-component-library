<template>
    <VsDropdownItem
        class="vs-global-menu__languages__item"
        :href="languageLink"
        @click="setLanguage()"
    >
        {{ languageName }}
    </VsDropdownItem>
</template>

<script>
import VsDropdownItem from '@/components/dropdown/components/DropdownItem.vue';
import cookieMixin from '../../../mixins/cookieMixin';

/**
 * TODO: Document usage
 *
 * @displayName Global Menu Language Item
 */
export default {
    name: 'VsGlobalMenuLanguageItem',
    status: 'prototype',
    release: '0.1.0',
    components: {
        VsDropdownItem,
    },
    mixins: [
        cookieMixin,
    ],
    props: {
        /**
         * Language name to be shown.
         * Example: "English"
         */
        languageName: {
            type: String,
            default: null,
        },
        /**
         * Link for the translated page version
         */
        languageLink: {
            type: String,
            default: null,
        },
        /**
         * Language locale string.
         * Example: "en_GB"
         */
        language: {
            type: String,
            default: null,
        },
    },
    methods: {
        setLanguage() {
            const localeExists = this.cookieExists('vs_locale');
            const googleExists = this.cookieExists('googtrans');

            this.setCookie('vs_locale', this.localeCookie, !localeExists);
            this.setCookie('googtrans', this.translationCookie, !googleExists);
        },
    },
};
</script>

<style lang="scss">
.vs-dropdown .dropdown-menu {
    .vs-global-menu__languages__item {
        &:not(:last-of-type) {
            border-bottom: 1px solid $vs-color-border-inverse;
        }

        .dropdown-item {
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
}

@include no-js {
    .vs-global-menu__languages__item {
        width: 100%;
        border: none;

        @include media-breakpoint-up(md) {
            width: auto;
            padding: $spacer-075;
        }

        .dropdown-item {
            color: $vs-color-text-inverse;
            text-decoration: underline;
            font-size: $font-size-4;

            &:hover {
                background:transparent;
                text-decoration: none;
            }

            @include media-breakpoint-up(md) {
                padding: $spacer-025 $spacer-050;
            }

            @include media-breakpoint-up(lg) {
                padding: $spacer-025 $spacer-100;
            }
        }
    }
}
</style>
