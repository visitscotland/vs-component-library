const cookieCheckerMixin = {
    data() {
        return {
            requiredCookiesAllowed: true,
            cookieManagerLoaded: true,
        };
    },
    computed: {
        cookiesAllowed() {
            return this.requiredCookiesAllowed;
        },
        cookiesLoaded() {
            return this.cookieManagerLoaded;
        },
    },
};

export default cookieCheckerMixin;
