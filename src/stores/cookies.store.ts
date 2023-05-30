import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';

const useCookiesStore = defineStore('cookies', () => {
    const allowedCookies: Ref<string[]> = ref([]);
    const cookiesTestRun: Ref<boolean> = ref(false);

    function setCookieArray(payload: string[]) {
        allowedCookies.value = [];

        payload.forEach((cookie) => {
            allowedCookies.value.push(cookie);
        });
    };

    function setTestRun(payload: boolean) {
        cookiesTestRun.value = payload;
    }

    return {
        allowedCookies,
        cookiesTestRun,
        setCookieArray,
        setTestRun,
    };
});

export default useCookiesStore;
