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
interface IVideosState {
    videos: Video[],
}

const useVideoStore = defineStore('video', {
    state: (): IVideosState => ({
        videos: [],
    }),
    actions: {
        addVideo(newVideo: Video) {
            this.videos = [
                ...this.videos,
                newVideo,
            ];
        },
        getVideo(id: string) {
            return this.videos.find((video) => video.videoId === id);
        },
    },
});

export default useVideoStore;
