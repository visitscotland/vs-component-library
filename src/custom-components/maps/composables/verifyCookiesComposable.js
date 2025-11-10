/* eslint-disable no-undef */

import {
    computed,
    onMounted,
    ref,
} from 'vue';

const cookieCheckerComposable = () => {
    const requiredCookies = ref([]);
    const requiredCookiesAllowed = ref(false);
    const cookieManagerLoaded = ref(false);

    const cookiesAllowed = computed(() => {
        if (typeof window !== 'undefined' && window.bypassCookiesRequired) {
            return true;
        };

        return requiredCookiesAllowed.value;
    });

    const cookiesLoaded = computed(() => {
        if (typeof window !== 'undefined' && window.bypassCookiesLoaded) {
            return true;
        }

        return {
            cookieManagerLoaded,
        };
    });

    function managerLoaded() {
        cookieManagerLoaded.value = true;
    }

    function cookiesUpdated() {
        let allowed = false;

        if (typeof CookieControl !== 'undefined') {
            allowed = requiredCookies.value.every(
                (category) => CookieControl
                    && CookieControl.getCategoryConsent(category) !== false,
            );
        };

        requiredCookiesAllowed.value = allowed;
    }

    onMounted(() => {
        window.addEventListener('cookieManagerLoaded', () => {
            managerLoaded();
        });

        window.addEventListener('cookiesUpdated', () => {
            cookiesUpdated();
        });
    });

    return {
        requiredCookies,
        cookiesAllowed,
        cookiesLoaded,
    };
};

export default cookieCheckerComposable;
