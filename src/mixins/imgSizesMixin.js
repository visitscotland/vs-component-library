const imgSizesMixin = {
    /**
     * Inject the grid information from the closest ancestor VsCol component. If multiple nested
     * VsCols are present this will load from the closest one. With multiple nested VsCols an
     * image may end up being loaded larger than it needs to be, as this system naively assumes
     * that something 6 cols wide on a 12 column grid will always be 50% of the viewport width,
     * but it will never be smaller than it needs to be.
     *
     * In cases where images are sized without the use of VsCol they will continue to default to
     * assuming the image might need to be 100% of the viewport width.
     */
    inject: {
        cols: {
            default: 0,
        },
        sm: {
            default: 0,
        },
        md: {
            default: 0,
        },
        lg: {
            default: 0,
        },
        xl: {
            default: 0,
        },
    },
    computed: {
        /**
         * Generates a string of media queries for the image, which can be used in the `sizes`
         * attribute. This string is parsed left to right searching for the first match, so we
         * start with the largest viewport size and work down to the smallest, requesting an
         * image at an appropriate percent of the viewport width.
         */
        computedSizes() {
            const breakpoints = [
                {
                    viewportSize: 'xl',
                    minWidth: 1200,
                },
                {
                    viewportSize: 'lg',
                    minWidth: 992,
                },
                {
                    viewportSize: 'md',
                    minWidth: 769,
                },
                {
                    viewportSize: 'sm',
                    minWidth: 576,
                },
            ];

            const returnSizes = breakpoints
                .filter(({ viewportSize }) => this[viewportSize])
                .map(({ viewportSize, minWidth }) => {
                    const size = (this[viewportSize] / 12) * 100;
                    return `(min-width: ${minWidth}px) ${size}vw`;
                });

            if (this.cols) {
                returnSizes.push(`${(this.cols / 12) * 100}vw`);
            } else {
                returnSizes.push('100vw');
            }

            return returnSizes.join(', ');
        },
    },
};

export default imgSizesMixin;
