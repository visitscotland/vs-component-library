import { mapState } from 'pinia';
import useCookiesStore from '@/stores/cookies.store.ts';

const cookieCheckerMixin = {
    computed: {
        ...mapState(useCookiesStore, {
            cookiesSet(store) {
                return store.allowedCookies;
            },
        }),
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
};

export default cookieCheckerMixin;
