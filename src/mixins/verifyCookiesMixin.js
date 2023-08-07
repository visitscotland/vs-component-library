import pinia from '@/stores/index.ts';
import useCookiesStore from '@/stores/cookies.store.ts';

let cookieStore = null;

const cookieCheckerMixin = {
    data() {
        return {
            timesRun: 0,
            cookiesInitStatus: null,
        };
    },
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
    },
    mounted() {
        cookieStore = useCookiesStore(pinia());

        // check for cookies being set by OneTrust
        const setCookieStatus = () => {
            // if the interval has been run 50 times (5 seconds) without
            // cookies being set declare an error
            if (this.timesRun > 50) {
                clearStatusInterval(); // eslint-disable-line no-use-before-define
                if (typeof this.onetrustActiveGroups === 'undefined' || this.cookiesInitStatus === null) {
                    this.cookiesInitStatus = 'error';
                }
            } else if (this.cookiesSet.length > 0) {
                clearStatusInterval(); // eslint-disable-line no-use-before-define
                this.cookiesInitStatus = true;
            }
        };
        const cookieStatus = setInterval(() => {
            this.timesRun += 1;
            setCookieStatus(this.timesRun);
        }, 100);
        const clearStatusInterval = () => {
            clearInterval(cookieStatus);
        };
    },
};

export default cookieCheckerMixin;
