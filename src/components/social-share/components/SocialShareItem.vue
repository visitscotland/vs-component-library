<template>
    <VsCol
        class="vs-social-share-item"
        data-test="vs-social-share-item"
        :cols="4"
        :md="noJs ? 2 : 4"
    >
        <VsLink
            class="vs-social-share-item__link"
            :href="shareUrl"
            @click="copyToClipboard($event)"
            :id="`vs-share-${name}`"
        >
            <VsIcon
                :icon="iconName"
                :custom-colour="iconColour"
                size="xl"
                small-size="lg"
            />

            <span class="vs-social-share-item__text">
                {{ show ? linkCopiedText : linkText }}
            </span>
        </VsLink>
    </VsCol>
</template>

<script>
import VsLink from '@/components/link/Link.vue';
import VsIcon from '@/components/icon/Icon.vue';
import { VsCol } from '@/components/grid';
import dataLayerMixin from '../../../mixins/dataLayerMixin';

const socialMediaData = {
    facebook: {
        color: '#1877f2',
        icon: 'fa-brands fa-facebook',
        getUrl: (pageUrl, pageTitle) => `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}&t=${pageTitle}`,
    },
    'x-twitter': {
        color: '#0F1419',
        icon: 'fa-brands fa-x-twitter',
        getUrl: (pageUrl, pageTitle) => `https://twitter.com/intent/tweet?text=${pageTitle}%20@VisitScotland&url=${pageUrl}`,
    },
    pinterest: {
        color: '#E60023',
        icon: 'fa-brands fa-pinterest',
        getUrl: (pageUrl) => `https://www.pinterest.com/pin/create/button/?url=${pageUrl}`,
    },
    whatsapp: {
        color: '#455a64',
        icon: 'fa-brands fa-whatsapp',
        getUrl: (pageUrl, pageTitle) => `https://wa.me/?text=${pageTitle}%20-%20${pageUrl}`,
    },
    email: {
        color: '#000000',
        icon: 'fa-regular fa-envelope',
        getUrl: (pageUrl, pageTitle) => `mailto:?body=${pageTitle}%20-%20${pageUrl}&subject=${pageTitle}`,
    },
    link: {
        color: '#000000',
        icon: 'fa-regular fa-link',
        getUrl: () => '#',
    },
};

/**
 * This component displays an icon and link to a social sharing channel
 *
 * @displayName Social Share Item
 */
export default {
    name: 'VsSocialShareItem',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsCol,
        VsLink,
        VsIcon,
    },
    mixins: [
        dataLayerMixin,
    ],
    inject: {
        /**
        * Page URL to share - provided by parent SocialShare
        */
        referringPageUrl: {
            default: '',
        },
        /**
        * Page Title to share - provided by parent SocialShare
        */
        pageTitle: {
            default: '',
        },
        /**
        * Page Title to share - provided by parent SocialShare
        */
        noJs: {
            default: '',
        },
    },
    props: {
        /**
        * Type of link and icon to display
        */
        name: {
            type: String,
            required: true,
            validator: (value) => value.match(/(facebook|twitter|pinterest|link|email|whatsapp)/),
        },
        /**
        * Text to display within the link
        */
        linkText: {
            type: String,
            required: true,
        },
        /**
        * Text to display when link is copied
        */
        linkCopiedText: {
            type: String,
            default: '',
        },
    },
    emits: ['copyLinkClicked'],
    data() {
        return {
            show: false,
        };
    },
    computed: {
        iconColour() {
            return socialMediaData[this.name]?.color || '#200F2E';
        },
        iconName() {
            return socialMediaData[this.name]?.icon || 'fa-solid fa-link';
        },
        shareUrl() {
            const config = socialMediaData[this.name];
            return config?.getUrl(this.referringPageUrl, this.encodedPageTitle) || '#';
        },
        encodedPageTitle() {
            return encodeURI(this.pageTitle);
        },
    },
    methods: {
        copyToClipboard(event) {
            if (this.name === 'link') {
                this.$emit('copyLinkClicked');

                // Clipboard API supported?
                if (!navigator.clipboard) return;

                // copy text to clipboard
                if (navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(this.referringPageUrl);
                }

                // show success text on button
                this.show = true;
                setTimeout(() => { this.show = false; }, 2000);
            }

            this.trackShareClick(event);
        },
        trackShareClick(event) {
            this.createDataLayerObject('socialShareDataEvent', event, this.href);
        },
    },
};
</script>

<style lang="scss">
.vs-social-share-item{
    &__link.vs-link.vs-link--variant-primary{
        border: 1px solid $vs-color-border-primary;
        display: block;
        margin-bottom: $vs-spacer-050;
        padding: $vs-spacer-100 $vs-spacer-050;
        text-align: center;
        text-decoration: none;

        @include media-breakpoint-up(md) {
            padding: $vs-spacer-150;
            margin-bottom: $vs-spacer-150;
        }

        &:hover{
            .vs-social-share-item__text{
                text-decoration: none;
            }
        }

        &:focus, &:focus-visible{
            @extend %outline-link-focus;
        }

        .vs-icon{
            display: block;
            margin: 0 auto $vs-spacer-075;
        }
    }

    &__text{
        text-decoration: underline;
    }
}

@include no-js {
    .vs-social-share-item{
        &__link.vs-link.vs-link--variant-primary{
            margin-bottom: $vs-spacer-100;

            @include media-breakpoint-up(sm) {
                margin-bottom: $vs-spacer-150;
            }

            @include media-breakpoint-up(md) {
                margin-bottom: 0;
            }

            @include media-breakpoint-up(md) {
                padding: $vs-spacer-150 $vs-spacer-050;
            }
        }
    }
}
</style>
