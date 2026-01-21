import VsMediaCaption from '@/components/media-caption/MediaCaption.vue';
import VsVideo from '@/components/video/Video.vue';
import VsImg from '@/components/img/Img.vue';

import EmbeddedVideoTemplate from './templates/embedded-video';
import ImageWithCaptionTemplate from './templates/image-with-caption';

const components = {
    VsMediaCaption,
    VsVideo,
    VsImg,
};

const decorators = {
    default: () => ({
        template: '<div style="max-width: 620px"><story /></div>',
    }),
};

const createStory = (template, decorator = decorators.default) => ({
    render: () => ({
        components,
        template,
    }),
    decorators: [decorator],
    parameters: {
        docs: {
            source: {
                code: template,
            },
        },
    },
});

export default {
    title: 'Patterns/Media',
};

export const EmbeddedVideo = createStory(EmbeddedVideoTemplate);
export const ImageWithCaption = createStory(ImageWithCaptionTemplate);
