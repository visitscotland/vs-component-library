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

const useVideoStore = defineStore('video', () => {
    const videos: Ref<Video[]> = ref([]);

    function getVideo() {
        return {
            videoId: '123456',
            videoDurationMsg: '1 minute video',
            videoDuration: '59',
            videoFullDuration: {
                minutes: 0,
                seconds: 59,
                roundedMinutes: 1,
            },
        };
    }

    return {
        videos,
        getVideo,
    };
});

export default useVideoStore;
