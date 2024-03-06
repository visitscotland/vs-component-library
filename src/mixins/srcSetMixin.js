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
            if (!this.src) {
                return '';
            }

            let connector = '?';

            if (this.src.includes('?')) {
                connector = '&';
            }

            return `${this.src}${connector}size=${size}`;
        },
    },
};

export default srcSetMixin;
