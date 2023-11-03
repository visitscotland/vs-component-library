const cookieCheckerMixin = {
    data() {
        return {
            timesRun: 0,
            cookiesInitStatus: true,
            mockCookiesExist: false,
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
            return this.mockCookiesExist;
        },
    },
    mounted() {
        setTimeout(() => {
            this.mockCookiesExist = true;
        }, 50);
    },
};

export default cookieCheckerMixin;
