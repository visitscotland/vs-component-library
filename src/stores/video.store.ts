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
interface IVideosState {
    videos: VideoSet,
}

const useVideoStore = defineStore('video', {
    state: (): IVideosState => ({
        videos: {
        },
    }),
    actions: {
        addVideo(newVideo: Video) {
            this.videos[newVideo.videoId] = {
                ...newVideo,
            };
        },
    },
});

export default useVideoStore;
