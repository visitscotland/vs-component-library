import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';

type FullDuration = {
    minutes: number,
    seconds: number,
    roundedMinutes: string,
};

type Video = {
    videoId: string,
    videoDurationMsg: string,
    videoDuration: number,
    videoFullDuration: FullDuration,
}

type VideoSet = {
    [key: string]: Video,
}

const testVideo : Video = {
    videoId: '123456',
    videoDurationMsg: '1 minute video',
    videoDuration: 59,
    videoFullDuration: {
        minutes: 0,
        seconds: 59,
        roundedMinutes: '1',
    },
};

const useVideoStore = defineStore('video', () => {
    const videos: Ref<VideoSet> = ref({
        123456: testVideo,
    });

    return {
        videos,
    };
});

export default useVideoStore;
