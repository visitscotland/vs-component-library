import useCookiesStore from '@/stores/cookies.store';

const cookieCheckerMixin = {
    data() {
        return {
            bypassCookiesExist: false,
            cookiesStore: null,
        };
    },
    computed: {
        cookiesSet() {
            if (this.cookiesStore) {
                return this.cookiesStore.allowedCookies;
            }

            return [];
        },
        onetrustActiveGroups() {
            if (typeof window !== 'undefined') {
                return window.OnetrustActiveGroups;
            }
            return null;
        },
        requiredCookiesExist() {
            if (typeof window !== 'undefined' && window.bypassCookieChecks) {
                return this.bypassCookiesExist;
            }

            let cookiesExist = true;
            if (this.requiredCookies) {
                this.requiredCookies.forEach((cookieVal) => {
                    if (this.cookiesSet.indexOf(cookieVal) === -1) {
                        cookiesExist = false;
                    }
                });
            } else {
                cookiesExist = false;
            }

            return cookiesExist;
        },
        cookiesInitStatus() {
            if (typeof window !== 'undefined' && window.bypassCookieChecks) {
                return this.bypassCookiesExist;
            }

            if (typeof this.onetrustActiveGroups === 'undefined' || this.cookiesSet.length === 0) {
                return true;
            }

            return true;
        },
    },
    setup() {
        this.cookiesStore = useCookiesStore();
    },
    mounted() {
        setTimeout(() => {
            this.bypassCookiesExist = true;
        }, 50);
    },
};

export default cookieCheckerMixin;
