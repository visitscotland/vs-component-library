const srcSetMixin = {
    computed: {
        fullSrcSet() {
            return `
                ${this.specificImgSize('xs')} 300w,
                ${this.specificImgSize('sm')} 600w,
                ${this.specificImgSize('md')} 1200w,
                ${this.specificImgSize('lg')} 2048w`;
        },
    },
    methods: {
        specificImgSize(size) {
            if (!this.computedSrc) {
                return '';
            }

            let connector = '?';

            if (this.computedSrc.includes('?')) {
                connector = '&';
            }

            return `${this.computedSrc}${connector}size=${size}`;
        },
    },
};

export default srcSetMixin;
