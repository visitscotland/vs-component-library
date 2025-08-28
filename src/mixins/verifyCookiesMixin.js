/* eslint-disable no-undef */

const cookieCheckerMixin = {
    data() {
        return {
            requiredCookies: [],
            requiredCookiesAllowed: false,
            cookieManagerLoaded: false,
        };
    },
    methods: {
        managerLoaded() {
            this.cookieManagerLoaded = true;
        },
        cookiesUpdated() {
            const allowed = this.requiredCookies.every(
                (category) => CookieControl && CookieControl.getCategoryConsent(category) !== false,
            );

            this.requiredCookiesAllowed = allowed;
        },
    },
    computed: {
        cookiesAllowed() {
            if (typeof window !== 'undefined' && window.bypassCookiesRequired) {
                return true;
            }

            return this.requiredCookiesAllowed;
        },
        cookiesLoaded() {
            if (typeof window !== 'undefined' && window.bypassCookiesLoaded) {
                return true;
            }

            return this.cookieManagerLoaded;
        },
    },
    mounted() {
        window.addEventListener('cookieManagerLoaded', () => {
            this.managerLoaded();
        });

        window.addEventListener('cookiesUpdated', () => {
            this.cookiesUpdated();
        });
    },
};

export default cookieCheckerMixin;
