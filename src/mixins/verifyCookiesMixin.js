/* eslint-disable no-undef */

const cookieCheckerMixin = {
    data() {
        return {
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
            if (window.bypassCookiesRequired) {
                return true;
            }

            return this.requiredCookiesAllowed;
        },
        cookiesLoaded() {
            if (window.bypassCookiesLoaded) {
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
