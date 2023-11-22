const srcSetMixin = {
    computed: {
        fullSrcSet() {
            if (!this.imgSrc) {
                return '';
            }

            let connector = '?';

            if (this.imgSrc.includes('?')) {
                connector = '&';
            }

            return `${this.imgSrc}${connector}size=xs 300w,
                ${this.imgSrc}${connector}size=sm 600w,
                ${this.imgSrc}${connector}size=md 1200w,
                ${this.imgSrc}${connector}size=lg 2048w`;
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
