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
            let allowed = false;

            if (typeof CookieControl !== 'undefined') {
                allowed = this.requiredCookies.every(
                    (category) => CookieControl
                        && CookieControl.getCategoryConsent(category) !== false,
                );
            }

            this.requiredCookiesAllowed = allowed;

            if (typeof this.callbackOnUpdated !== 'undefined') {
                this.callbackOnUpdated();
            }
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
        // GTM can't call browser events directly, so we need to listen for window function calls
        // and then latch our code onto those. This should only happen once regardless of how many
        // cookie based components are on each page.
        if (!window.civicSetup) {
            window.cookieManagerLoaded = () => {
                window.dispatchEvent(new Event('cookieManagerLoaded'));
            };

            window.cookiesUpdated = () => {
                window.dispatchEvent(new Event('cookiesUpdated'));
            };

            window.civicSetup = true;
        }

        window.addEventListener('cookieManagerLoaded', () => {
            this.managerLoaded();
        });

        window.addEventListener('cookiesUpdated', () => {
            this.cookiesUpdated();
        });
    },
};

export default cookieCheckerMixin;
