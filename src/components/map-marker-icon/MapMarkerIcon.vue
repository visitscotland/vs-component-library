<template>
    <div
        data-test="vs-map-marker-icon"
        class="vs-map-marker-icon"
        :class="parentClasses"
    >
        <VsIcon
            :name="mapMarkerType"
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
            :name="getIconDetails(id).name"
            size="xs"
            variant="color-white"
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
            let type = 'map-marker-filled';

            if (this.id === 'twnv') {
                type = 'places-map-pin';
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
            -webkit-text-stroke-color: $color-white;;
            -webkit-text-stroke-width: 1px;
        }
    }

    &__marker {
        &--outline {
            -webkit-text-stroke-color: $color-white;
            -webkit-text-stroke-width: 1px;
        }
    }

    &__count {
        color: $color-white;
        display: block;
        font-size: $font-size-4;
        font-family: $headings-font-family;
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
        top: 5px;
        transform: translateX(-50%);
        color: $color-white;
    }

    .vs-icon {
        margin: 0;
    }
}

// override transparent button styles
.vs-button.btn-transparent .vs-map-marker-icon__icon {
    color: $color-white;
}
</style>
