import VsCarousel from '@/components/patterns/carousel/Carousel.vue';
import VsCarouselSlide from '@/components/patterns/carousel/components/CarouselSlide.vue';

export default {
    component: VsCarouselSlide,
    title: 'Patterns/Carousel',
    tags: ['autodocs'],
    argTypes: {
        // Delete if empty
    },
};

const Template = (args) => ({
    components: {
        VsCarousel,
        VsCarouselSlide,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsCarousel
            :nextText="args.nextText"
            :prevText="args.prevText"
            :slidesXs="args.slidesXs"
            :slidesSm="args.slidesSm"
            :slidesMd="args.slidesMd"
            :slidesLg="args.slidesLg"
        >
            <VsCarouselSlide
                v-for="n in ['0','1','2','3','4','5','6','7','8','9','10','11']"
                :key="n"
                v-bind="args"
                :slide-index="n"
            >
                <template v-if="${'vs-carousel-slide-heading' in args}" v-slot:vs-carousel-slide-heading>${args['vs-carousel-slide-heading']}</template>
            </VsCarouselSlide>
        </VsCarousel>
    `,
});

const base = {
    nextText: 'Next Page',
    prevText: 'Prev Page',
    slidesXs: 1,
    slidesSm: 2,
    slidesMd: 3,
    slidesLg: 4,
    linkUrl: 'https://www.visitscotland.com',
    linkType: 'internal',
    imgSrc: 'https://cimg.visitscotland.com/cms-images/attractions/outlander/claire-standing-stones-craigh-na-dun-outlander?size=sm',
    imgAlt: '',
    category: 'Tours',
    days: '',
    transport: '',
    transportName: '',
    'vs-carousel-slide-heading': 'Tour Scotland with Outlander',
    slideIndex: '0',
};

export const Default = Template.bind({
});

Default.args = base;

export const WithPanels = Template.bind({
});

WithPanels.args = {
    ...base,
    days: '14',
    transport: 'bus',
    transportName: 'Bus',
};
