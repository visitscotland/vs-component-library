<template>
    <VsCard
        class="vs-fed-card"
        card-style="elevated"
    >
        <template #vs-card-header>
            <div class="vs-fed-card--header">
                <VsImg
                    class="vs-fed-card--header__image w-100 rounded-1 object-fit-cover img-zoom-on-hover"
                    use-lazy-loading
                    :src="props.imgSrc || imgFallback"
                />
                <div class="vs-fed-card--header__attributes">
                    <VsDetail
                        v-if="props.price"
                        class="vs-fed-card--header__attribute vs-fed-card--header__attribute-price me-050 mb-0"
                    >
                        From £{{ formattedPrice() }}
                    </VsDetail>
                    <VsDetail
                        v-if="props.date"
                        class="vs-fed-card--header__attribute vs-fed-card--header__attribute-date mb-0"
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
                    class="vs-fed-card--body__description truncate-3-lines mt-050"
                    data-test="vs-fed-card-description"
                >
                    <!-- @slot Slot for description, clamped to 3 lines max-->
                    <slot name="fed-card-description" />
                </VsBody>
            </div>
        </template>
        <template #vs-card-footer>
            <div class="vs-fed-card--footer my-100 px-125">
                <div
                    v-if="$slots['fed-card-location']"
                    class="vs-fed-card--footer__location"
                    data-test="vs-fed-card-location"
                >
                    <VsIcon
                        icon="fa-solid fa-location-dot"
                        size="xs"
                        custom-colour="#A8308C"
                        class="me-025"
                    />
                    <VsDetail class="vs-fed-card--footer__location-detail">
                        <!-- @slot for location -->
                        <slot name="fed-card-location" />
                    </VsDetail>
                </div>
                <div
                    v-if="props.link"
                    class="vs-fed-card--footer_link"
                    data-test="vs-fed-card-link"
                >
                    <VsIcon
                        :icon="linkIconName()"
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
        required: true,
        default: 'images/placeholders/fallback-img.png',
    },
    /** Populates the price attribute */
    price: {
        type: String,
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
});

const imgFallback = 'images/placeholders/fallback-img.png';

const formattedPrice = () => (props.price.match(/\b\d+\.\d\b/) ? `${props.price}0` : props.price);

function linkIconName() {
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
    };
    return icon;
}
</script>

<style lang="scss">
.vs-fed-card {
    &--header {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        position: relative;
        height: auto;

        & img {
            height: 17.625rem;

            @include media-breakpoint-down(lg) {
                height: 15rem
            }
        }

        &__attribute {
            font-size: $vs-font-size-detail-s;
            background: $vs-color-background-information;
            border: none;
            border-radius: $vs-radius-tiny $vs-radius-tiny 0 0;
            padding: $vs-spacer-0125 $vs-spacer-075;
            color: $vs-color-text-primary;
            display: inline;
        }

        &__attributes {
            display: flex;
            justify-content: flex-start;
            position: absolute;
            bottom: 0px;
            left: 0px;
            z-index: 1;
        }
    }

    &--body {
        &__description {
            font-size: $vs-font-size-body-s;
            color: $vs-color-text-secondary;
        }
    }

    &--footer {
        display: flex;
        justify-content: space-between;
        font-size: $vs-font-size-detail-s;

        &__location-detail {
            color: $vs-color-text-tertiary;
            display: inline;
            flex-grow: 1;
            font-size: inherit;
        }

        &_link {
            flex-grow: 1;
            justify-content: flex-end;
            font-size: inherit;
            text-align: right;
        }
    }
}
</style>
