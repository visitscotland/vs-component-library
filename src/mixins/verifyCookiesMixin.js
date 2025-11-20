/* eslint-disable no-undef */

/**
 * Functionality of this mixin is currently duplicated as a composable
 * in src/custom-components/maps/main-map/componsables/verifyCookiesComposable.
 * Any changes here, need to be made there too.
 */

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
                        && CookieControl.getCategoryConsent(category) === true,
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
        window.addEventListener('cookieManagerLoaded', () => {
            this.managerLoaded();
        });

        window.addEventListener('cookiesUpdated', () => {
            this.cookiesUpdated();
        });
    },
};

export default cookieCheckerMixin;
