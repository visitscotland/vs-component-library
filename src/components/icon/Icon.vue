<template>
    <i
        :class="{
            fak: true,
            [`fa-${icon}`]: true,
            'vs-icon': true,
            [`vs-icon--size-${size}`]: true,
            [`vs-icon--sm-size-${smallSize}`]: smallSize,
            [`vs-icon--${formattedName}`]: true,
            ['icon--' + orientation]: orientation,
            [`vs-icon--variant-${variant}`]: variant,
            [`fa-duotone`]: duotone,
        }"
        :style="[customColour ? { color: customColour } : {}]"
        v-bind="$attrs"
        data-test="vs-icon"
    />
</template>

<script>
/**
 * Icons are used to visually communicate available actions
 * or ideas and can help users navigate the product.
 *
 * @displayName Icon
 */
export default {
    name: 'VsIcon',
    status: 'prototype',
    release: '0.1.0',
    props: {
        /**
         * The name of the icon to display, which will be the name of the icon file
         */
        name: {
            type: String,
            required: true,
            default: 'search',
        },
        /**
         * The color of the icon.
         * `default|primary|secondary|inverse|disabled|tertiary|danger|warning`
         */
        variant: {
            type: String,
            default: 'default',
            validator: (value) => value.match(
                /(default|primary|secondary|inverse|disabled|tertiary|danger|warning)/,
            ),
        },
        /**
         * Accepts a colour (hex code or colour name) for the icon, if this is
         * set it will override the given variant. This should be used for individual
         * exceptions but if one is being used regularly it should likely be a variant
         * instead.
         */
        customColour: {
            type: String,
            default: null,
        },
        /**
        * The orientation of the icon
        * `up|down|left|right`
        * @deprecated use the correct icon from FA instead
        */
        orientation: {
            type: String,
            default: null,
            validator: (value) => value.match(
                /(up|down|left|right)/,
            ),
        },
        /**
        * Size of icon
        * `xxs|xs|sm|md|lg|xl`
        */
        size: {
            type: String,
            default: 'md',
            validator: (value) => value.match(/(xxs|xs|sm|md|lg|xl)/),
        },
        /**
        * Changes the size of the icon at sm and xs viewports
        * `xxs|xs|sm|md|lg|xl`
        */
        smallSize: {
            type: String,
            default: null,
            validator: (value) => value.match(/(xxs|xs|sm|md|lg|xl)/),
        },
        /**
        * Uses FontAwesome Duotone
        */
        duotone: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            /*
                *  Some DMS feed categories are different
                    from the name of the icon file.  This lookup marries up discrepencies
                */
            iconLookup: [
                {
                    key: 'accesstoliet',
                    value: 'accessible-toilet',
                },
                {
                    key: 'accessparkdrop',
                    value: 'facility-accessparkdrop',
                },
                {
                    key: 'acco',
                    value: 'product-accommodation',
                },
                {
                    key: 'acti',
                    value: 'product-activities',
                },
                {
                    key: 'attr',
                    value: 'product-attractions',
                },
                {
                    key: 'audioloop',
                    value: 'facility-audioloop',
                },
                {
                    key: 'cafereston',
                    value: 'cafe',
                },
                {
                    key: 'cate',
                    value: 'product-food-and-drink',
                },
                {
                    key: 'cities',
                    value: 'city',
                },
                {
                    key: 'cycling',
                    value: 'cycle',
                },
                {
                    key: 'dsblaccess',
                    value: 'facility-dsblaccess',
                },
                {
                    key: 'wheelchairaccess',
                    value: 'facility-dsblaccess',
                },
                {
                    key: 'even',
                    value: 'product-events',
                },
                {
                    key: 'familyev',
                    value: 'family',
                },
                {
                    key: 'filmev',
                    value: 'film-tv',
                },
                {
                    key: 'hottub',
                    value: 'hot-tub',
                },
                {
                    key: 'parking',
                    value: 'facility-parking',
                },
                {
                    key: 'petswelcom',
                    value: 'facility-petswelcom',
                },
                {
                    key: 'wifi',
                    value: 'facility-wifi',
                },
                {
                    key: 'public',
                    value: 'public-transport',
                },
                {
                    key: 'pubtranrte',
                    value: 'public-transport',
                },
                {
                    key: 'reta',
                    value: 'product-shopping',
                },
                {
                    key: 'spahealth',
                    value: 'wellness',
                },
                {
                    key: 'vege',
                    value: 'vegan-vegetarian',
                },
                {
                    key: 'walking',
                    value: 'walk',
                },
                {
                    key: 'boat',
                    value: 'boat',
                },
                {
                    key: 'transport',
                    value: 'transport',
                },
                {
                    key: 'brekavail',
                    value: 'breakfast-available',
                },
                {
                    key: 'wetroom',
                    value: 'level-entry-shower',
                },
            ],
        };
    },
    computed: {
        icon() {
            return this.formattedName;
        },
        formattedName() {
            /*
             * To facilitate more readable icon names and
             * organise / group icons within the design system
             * there is a lookup for how keys may be passed from the backend
             */
            const formattedNameLookup = this.iconLookup.find(({ key }) => key === this.name);

            return formattedNameLookup !== undefined ? formattedNameLookup.value : this.name;
        },
    },
};
</script>

<style lang="scss">

$sizes: (
    xxs: $icon-size-xxs,
    xs: $icon-size-xs,
    sm: $icon-size-sm,
    md: $icon-size-md,
    lg: $icon-size-lg,
    xl: $icon-size-xl,
);

$variants: (
    default: $vs-color-icon-primary,
    primary: $vs-color-icon-cta-on-light,
    secondary: $vs-color-icon-secondary,
    tertiary: $vs-color-icon-highlight,
    inverse: $vs-color-icon-inverse,
    success: $vs-color-icon-success,
    danger: $vs-color-icon-error,
    warning: $vs-color-icon-warning,
    disabled: $vs-color-icon-disabled,
);

.vs-icon {
    overflow: visible;
    pointer-events: none;
    line-height: 1;
    transition: all $duration_base ease-in-out;

    @each $size in map-keys($sizes) {
        $this-size: map-get($sizes, $size);

        &.vs-icon--size-#{$size} {
            font-size: $this-size;
            padding: 0;
        }
    }

    // We need two separate loops through the sizes.
    // If you have one loop generating both sets you run into
    // specificity issues as the classes go sm-xs xs sm-sm sm etc etc,
    // and the later non-sm classes override the earlier sm ones
    @each $size in map-keys($sizes) {
        $this-size: map-get($sizes, $size);

        @include media-breakpoint-down(md) {
            &.vs-icon--sm-size-#{$size} {
                font-size: $this-size;
                padding: 0;
            }
        }
    }

    @each $variant in map-keys($variants) {
        &.vs-icon--variant-#{$variant} {
            color: map-get($variants, $variant);
        }
    }

    &.icon--down {
        transform: rotate(180deg);
    }

    &.icon--left {
        transform: rotate(270deg);
    }

    &.icon--right {
        transform: rotate(90deg);
    }
}
</style>
