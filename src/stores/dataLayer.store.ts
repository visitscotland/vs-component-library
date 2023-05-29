import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';

type Tag = {
    key: string,
    value: string,
};

export const useDataLayerStore = defineStore('datalayer', () => {
    const pageUrl: Ref<string> = ref('');
    const tagsTestRun: Ref<boolean> = ref(false);
    const GTMData: Ref<object> = ref({});

    function setTestRun(payload: boolean) {
        tagsTestRun.value = payload;
    }

    function setPageUrl(payload: string) {
        pageUrl.value = payload;
    }

    function processPayload(payload: Tag) {
        GTMData.value[payload.key] = payload.value;
    }

    function getValueFromKey(key: string) {
        return GTMData.value[key];
    }

    return {
        pageUrl,
        tagsTestRun,
        GTMData,
        getValueFromKey,
        setTestRun,
        setPageUrl,
        processPayload,
    }
});
