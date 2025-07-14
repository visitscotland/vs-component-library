<template>
    <div
        data-test="vs-map-marker-icon"
        class="vs-map-marker-icon"
        :class="parentClasses"
    >
        <VsIcon
            :icon="mapMarkerType"
            class="vs-map-marker-icon__marker"
            :class="markerClasses"
            size="xl"
        />

        <span
            v-if="number"
            class="vs-map-marker-icon__count"
        >
            <span class="visually-hidden">
                Stop
            </span>
            {{ number }}
        </span>

        <VsIcon
            v-else
            class="vs-map-marker-icon__icon"
            :icon="getIconDetails(id).name"
            size="xs"
        />
    </div>
</template>

<script>
import VsIcon from '@/components/icon/Icon.vue';
import mapIconMapping from '../../mixins/mapIconMapping';

export default {
    name: 'VsMapMarkerIcon',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsIcon,
    },
    mixins: [
        mapIconMapping,
    ],
    props: {
        id: {
            type: String,
            required: true,
        },
        isHovered: {
            type: Boolean,
            default: false,
        },
        number: {
            type: String,
            default: '',
        },
        isMapMarker: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        mapMarkerType() {
            let type = 'fa-solid fa-location-pin';

            if (this.id === 'twnv') {
                type = 'fa-solid fa-location-dot';
            }

            return type;
        },
        parentClasses() {
            return this.isMapMarker ? 'vs-map-marker-icon--map-marker' : '';
        },
        markerClasses() {
            return [
                `vs-map-marker-icon__marker--${this.id}`,
                this.isHovered ? 'vs-map-marker-icon__marker--outline' : '',
            ];
        },
    },
};

</script>

<style lang="scss">
@include map-button-themes;

.vs-map-marker-icon {
    position: relative;
    display: inline-block;

    &--map-marker {
        .vs-map-marker-icon__marker {
            -webkit-text-stroke-color: $vs-color-border-inverse;
            -webkit-text-stroke-width: 1px;
        }
    }

    &__marker {
        &--outline {
            -webkit-text-stroke-color: $vs-color-border-inverse;
            -webkit-text-stroke-width: 1px;
        }
    }

    &__count {
        color: $vs-color-text-inverse;
        display: block;
        font-size: $font-size-4;
        font-family: $vs-font-family-display;
        position: absolute;
        top: 4px;
        left: 0;
        transition: $transition-base;
        text-align: center;
        width: 100%;
    }

    &__icon.vs-icon {
        position: absolute;
        left: 50%;
        top: 6px;
        transform: translateX(-50%);
        color: $vs-color-icon-inverse;
    }

    .vs-icon {
        margin: 0;
    }
}
</style>
