import { createApp } from 'vue';
import { setActivePinia } from 'pinia';
import { createTestingPinia } from '@pinia/testing';
import createAppPinia from '@/stores';
import useVideoStore from '@/stores/video.store';
import useGoogleBaseMapStore from '@/stores/googleMap.store';

describe('application Pinia instances', () => {
    it('keeps real store actions isolated between applications', () => {
        const firstPinia = createAppPinia();
        const secondPinia = createAppPinia();
        setActivePinia(firstPinia);
        const first = useVideoStore(firstPinia);
        const second = useVideoStore(secondPinia);

        first.addVideo({
            videoId: 'first-app',
            videoDuration: 42,
        });

        expect(firstPinia).not.toBe(secondPinia);
        expect(first.videos['first-app'].videoDuration).toBe(42);
        expect(second.videos).toEqual({
        });
    });

    it('uses the host plugin for library stores', () => {
        const pinia = createAppPinia();
        setActivePinia(pinia);
        const seen = [];
        pinia.use(({ store }) => {
            seen.push(store.$id);
        });
        createApp({
        }).use(pinia);

        useGoogleBaseMapStore(pinia);
        useVideoStore(pinia);

        expect(seen).toEqual(['googleBaseMap', 'video']);
    });

    it('retains testing-plugin action stubs with Pinia 4', () => {
        const pinia = createTestingPinia({
            createSpy: jest.fn,
        });
        const store = useVideoStore(pinia);

        store.addVideo({
            videoId: 'stubbed',
        });

        expect(store.addVideo).toHaveBeenCalledWith({
            videoId: 'stubbed',
        });
        expect(store.videos).toEqual({
        });
    });
});
