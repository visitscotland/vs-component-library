<template>
    <VsCard
        class="vs-fed-card"
        card-style="elevated"
    >
        <template #vs-card-header>
            <div class="vs-fed-card__header">
                <VsImg
                    class="w-100 rounded-1 object-fit-cover img-zoom-on-hover"
                    data-test="vs-fed-card__header--image"
                    use-lazy-loading
                    :src="props.imgSrc || imgFallback"
                />
                <div class="vs-fed-card__header--attributes">
                    <VsDetail
                        v-if="props.price"
                        class="vs-fed-card__header--attribute me-050 mb-0"
                        data-test="vs-fed-card__header--attribute-price"
                    >
                        {{ props.fromText }} {{ formattedPrice }}
                    </VsDetail>
                    <VsDetail
                        v-if="props.date"
                        class="vs-fed-card__header--attribute mb-0"
                        data-test="vs-fed-card__header--attribute-date"
                    >
                        {{ props.date }}
                    </VsDetail>
                </div>
            </div>
        </template>
        <template #vs-card-body>
            <div class="px-125">
                <VsHeading
                    heading-level="4"
                    heading-style="heading-xxs"
                    v-if="$slots['fed-card-header']"
                    data-test="vs-fed-card-header"
                >
                    <VsLink
                        class="stretched-link"
                        :href="props.link"
                        variant="secondary"
                    >
                        <!-- @slot Heading passed to VsCard element -->
                        <slot name="fed-card-header" />
                    </VsLink>
                </VsHeading>
                <VsBody
                    v-if="$slots['fed-card-description']"
                    class="vs-fed-card__body--description truncate-3-lines mt-050"
                    data-test="vs-fed-card-description"
                >
                    <!-- @slot Slot for description, clamped to 3 lines max-->
                    <slot name="fed-card-description" />
                </VsBody>
            </div>
        </template>
        <template #vs-card-footer>
            <div class="vs-fed-card__footer my-100 px-125">
                <div
                    v-if="$slots['fed-card-location']"
                    class="vs-fed-card__footer--location"
                    data-test="vs-fed-card-location"
                >
                    <VsIcon
                        icon="fa-solid fa-location-dot"
                        size="xs"
                        variant="highlight"
                        class="me-025"
                    />
                    <VsDetail class="vs-fed-card__footer--location-detail">
                        <!-- @slot for location -->
                        <slot name="fed-card-location" />
                    </VsDetail>
                </div>
                <div
                    v-if="props.link"
                    class="vs-fed-card__footer--link"
                    data-test="vs-fed-card-link"
                >
                    <VsIcon
                        :icon="linkIconName"
                        size="xs"
                        custom-colour="#A8308C"
                        class="me-025"
                    />
                </div>
            </div>
        </template>
    </VsCard>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import VsCard from '@/components/card/Card.vue';
import VsImg from '@/components/img/Img.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsLink from '@/components/link/Link.vue';
import VsBody from '@/components/body/Body.vue';
import VsIcon from '@/components/icon/Icon.vue';
import VsDetail from '@/components/detail/Detail.vue';

const props = defineProps({
    /** Image to be displayed on card */
    imgSrc: {
        type: String,
        default: 'images/placeholders/fallback-img.png',
    },
    /** Populates the price attribute */
    price: {
        type: [String, Number],
        default: undefined,
    },
    /** Populates the data attribute */
    date: {
        type: String,
        default: undefined,
    },
    /** Card link */
    link: {
        type: String,
        default: undefined,
    },
    /** Denotes if link is internal or external */
    linkType: {
        type: String,
        default: undefined,
    },
    /** Populates the text for 'From' on event card */
    fromText: {
        type: String,
        default: undefined,
    },
});

const imgFallback = 'images/placeholders/fallback-img.png';

const formattedPrice = computed(() => {
    if (props.price === null) return '';

    const priceStr = props.price.toString();

    return priceStr.match(/\b\d+\.\d\b/) ? `£${props.price}0` : `£${props.price}`;
});

const linkIconName = computed(() => {
    let icon = '';
    switch (props.linkType) {
    case 'EXTERNAL':
        icon = 'fa-regular fa-square-arrow-up-right';
        break;
    case 'INTERNAL':
        icon = 'fa-regular fa-arrow-right';
        break;
    default:
        icon = '';
    }
    return icon;
});

</script>

<style lang="scss">
.vs-fed-card {
    &__header {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        position: relative;
        height: auto;

        & img {
            height: 17.625rem;

            @include media-breakpoint-down(lg) {
                height: 15rem;
            }
        }

        &--attribute {
            font-size: $vs-font-size-detail-s;
            background: $vs-color-background-information;
            border: none;
            border-radius: $vs-radius-tiny $vs-radius-tiny $vs-radius-none $vs-radius-none;
            padding: $vs-spacer-0125 $vs-spacer-075;
            color: $vs-color-text-primary;
            display: inline;
        }

        &--attributes {
            display: flex;
            justify-content: flex-start;
            position: absolute;
            bottom: 0px;
            left: 0px;
            z-index: 1;
        }
    }

    &__body {
        &--description {
            font-size: $vs-font-size-body-s;
            color: $vs-color-text-secondary;
        }
    }

    &__footer {
        display: flex;
        justify-content: space-between;
        font-size: $vs-font-size-detail-s;

        &--location-detail {
            color: $vs-color-text-tertiary;
            display: inline;
            flex-grow: 1;
            font-size: inherit;
        }

        &--link {
            flex-grow: 1;
            justify-content: flex-end;
            font-size: inherit;
            text-align: right;
        }
    }
}
</style>
