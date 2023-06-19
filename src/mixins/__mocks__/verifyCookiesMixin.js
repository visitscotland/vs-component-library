const cookieCheckerMixin = {
    data() {
        return {
            timesRun: 0,
            cookiesInitStatus: true,
            mockCookiesExist: true,
        };
    },
    computed: {
        cookiesSet() {
            return [];
        },
        onetrustActiveGroups() {
            return [];
        },
        requiredCookiesExist() {
            return this.cookiesExist;
        },
    },
};

export default cookieCheckerMixin;
