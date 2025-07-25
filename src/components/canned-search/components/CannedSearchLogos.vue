<template>
    <div class="vs-canned-search-logos">
        <VsTooltip
            :title="goodToGoLogo.name"
            v-if="goodToGoLogo"
            href="#"
            class="p-0"
            variant="subtle"
            data-test="vs-canned-search-logos__good-to-go"
            :disabled="!slideVisible()"
            :tabindex="!slideVisible() ? '-1' : '0'"
        >
            <VsImg
                :alt="goodToGoLogo.name"
                :src="goodToGoLogo.image"
                class="vs-canned-search-logos__logo"
            />
        </VsTooltip>
        <VsTooltip
            :title="safeTravelsLogo.name"
            v-if="safeTravelsLogo"
            href="#"
            class="p-0"
            variant="subtle"
            data-test="vs-canned-search-logos__safe-travels"
            :disabled="!slideVisible()"
            :tabindex="!slideVisible() ? '-1' : '0'"
        >
            <VsImg
                :alt="safeTravelsLogo.name"
                :src="safeTravelsLogo.image"
                class="vs-canned-search-logos__logo"
            />
        </VsTooltip>
        <VsTooltip
            v-for="award in awards"
            :title="award.name"
            :key="award.id"
            href="#"
            class="p-0"
            variant="subtle"
            :disabled="!slideVisible()"
            :tabindex="!slideVisible() ? '-1' : '0'"
        >
            <VsImg
                :src="award.image"
                :alt="award.name"
                class="vs-canned-search-logos__logo"
                data-test="vs-canned-search-logos__award-logo"
            />
        </VsTooltip>
        <VsTooltip
            :title="accessGuide.name"
            v-if="accessGuide"
            href="#"
            variant="subtle"
            class="vs-canned-search-logos__access p-0"
            data-test="vs-canned-search-logos__access-guide"
            :disabled="!slideVisible()"
            :tabindex="!slideVisible() ? '-1' : '0'"
        >
            <VsImg
                :src="accessGuide.image"
                :alt="accessGuide.name"
                class="vs-canned-search-logos__logo"
            />
        </VsTooltip>
    </div>
</template>

<script>
import VsTooltip from '@/components/tooltip/Tooltip.vue';
import VsImg from '@/components/img/Img.vue';

/**
* Component that displays a set of badges and awards for certain kinds of product card
* within canned search
*
* @displayName Canned Search Logos
*/

export default {
    name: 'VsCannedSearchLogos',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsTooltip,
        VsImg,
    },
    inject: ['slideVisible'],
    props: {
        /**
        * If set, the good to go logo appears. Should contain a unique `id` (String), a `name`
        * (String) that appears as a tooltip and a url to an `image` (String)
        */
        goodToGoLogo: {
            type: Object,
            default: null,
        },
        /**
        * If set, the safe travels logo appears. Should contain a unique `id` (String), a `name`
        * (String) that appears as a tooltip and a url to an `image` (String)
        */
        safeTravelsLogo: {
            type: Object,
            default: null,
        },
        /**
        * A set of award badges to display, each should contain a unique `id` (String), a `name`
        * (String) that appears as a tooltip and a url to an `image` (String)
        */
        awards: {
            type: Array,
            default: null,
        },
        /**
        * A specific award, should contain a `name` (String) and an `image` (String) - appears on
        * the right hand side of the award list
        */
        accessGuide: {
            type: Object,
            default: null,
        },
    },
};

</script>

<style lang="scss">
    .vs-canned-search-logos {
        margin-top: $spacer-300;
        min-height: $spacer-300;

        .vs-tooltip {
            z-index: 1;
            cursor: pointer;
        }

        &__logo {
            max-height: $spacer-300;

            &:not(:last-child) {
                padding-right: $spacer-050;
            }
        }

        &__access {
            float: right;
        }
    }
</style>
