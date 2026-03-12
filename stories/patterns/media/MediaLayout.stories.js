import VsMediaCaption from '@/components/media-caption/MediaCaption.vue';
import VsVideo from '@/components/video/Video.vue';
import VsImg from '@/components/img/Img.vue';

import {
    VsCol, VsRow, VsContainer,
} from '@/components/grid';
import VsCardGroup from '@/components/card-group/CardGroup.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsCarousel from '@/components/carousel/Carousel.vue';
import VsCarouselSlide from '@/components/carousel/components/CarouselSlide.vue';

import EmbeddedVideoTemplate from './templates/embedded-video';
import ImageWithCaptionTemplate from './templates/image-with-caption';
import PortraitVideoGridTemplate from './templates/portrait-video-grid';

const components = {
    VsMediaCaption,
    VsVideo,
    VsImg,
    VsCol,
    VsRow,
    VsContainer,
    VsCardGroup,
    VsHeading,
    VsCarousel,
    VsCarouselSlide,
};

const decorators = {
    default: () => ({
        template: '<story />',
    }),
    customWidth: () => ({
        template: '<div style="max-width: 620px"><story /></div>',
    }),
};

const createStory = (template, decorator) => ({
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

export const EmbeddedVideo = createStory(EmbeddedVideoTemplate, decorators.customWidth);

export const ImageWithCaption = createStory(ImageWithCaptionTemplate, decorators.customWidth);

export const PortraitVideoGrid = createStory(PortraitVideoGridTemplate, decorators.default);
