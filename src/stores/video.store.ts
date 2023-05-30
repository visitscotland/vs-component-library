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

    function addVideo(newVideo: Video) {
        videos.value = [
            ...videos.value,
            newVideo,
        ];
    }

    function getVideo(id: string) {
        return videos.value.find((video) => video.videoId === id);
    }

    return {
        videos,
        addVideo,
        getVideo,
    };
});

export default useVideoStore;
