import pinia from '@/stores/index.ts';
import useCookiesStore from '@/stores/cookies.store.ts';

let cookieStore = null;

const cookieCheckerMixin = {
    computed: {
        cookiesSet() {
            if (cookieStore) {
                return cookieStore.allowedCookies;
            }

            return [];
        },
        onetrustActiveGroups() {
            return window.OnetrustActiveGroups;
        },
        requiredCookiesExist() {
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
            if (typeof this.onetrustActiveGroups === 'undefined' || this.cookiesSet.length === 0) {
                return true;
            }

            return true;
        },
    },
    mounted() {
        cookieStore = useCookiesStore(pinia());
    },
};

export default cookieCheckerMixin;
