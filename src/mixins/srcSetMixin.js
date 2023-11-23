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
            if (!this.imgSrc) {
                return '';
            }

            let connector = '?';

            if (this.imgSrc.includes('?')) {
                connector = '&';
            }

            return `${this.imgSrc}${connector}size=${size}`;
        },
    },
};

export default srcSetMixin;
