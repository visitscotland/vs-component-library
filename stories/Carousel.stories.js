import VsCarousel from '@/components/carousel/Carousel.vue';
import VsCarouselSlide from '@/components/carousel/components/CarouselSlide.vue';

export default {
    component: VsCarouselSlide,
    title: 'Carousel',
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
        <div
            :class="args.jsDisabled ? 'no-js' : ''"
        >
            <VsCarousel
                :nextText="args.nextText"
                :prevText="args.prevText"
                :slidesXs="args.slidesXs"
                :slidesSm="args.slidesSm"
                :slidesMd="args.slidesMd"
                :slidesLg="args.slidesLg"
            >
                <VsCarouselSlide
                    v-for="n in ['0','1','2','3']"
                    :key="n"
                    v-bind="args"
                    :slide-index="n"
                >
                    <template
                        v-if="${'vs-carousel-slide-heading' in args}" v-slot:vs-carousel-slide-heading
                    >
                        ${args['vs-carousel-slide-heading']}
                    </template>

                    <template
                        v-if="args['vs-carousel-slide-content']"
                        #vs-carousel-slide-content
                    >
                        ${args['vs-carousel-slide-content']}
                    </template>
                </VsCarouselSlide>

                <template v-slot:vs-carousel-of>
                    of
                </template>
            </VsCarousel>
        </div>
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
    imgSrc: 'fixtures/carousel/claire-standing-stones-craigh-na-dun-outlander.jfif',
    imgAlt: '',
    category: 'Tours',
    days: '',
    transport: '',
    transportName: '',
    'vs-carousel-slide-heading': 'Tour Scotland with Outlander',
    slideIndex: '0',
    jsDisabled: false,
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

export const Mobile = Template.bind({
});

Mobile.args = base;

Mobile.parameters = {
    viewport: {
        defaultViewport: 'mobile2',
    },
};

export const NoJavascript = Template.bind({
});

NoJavascript.args = {
    ...base,
    days: '14',
    transport: 'bus',
    transportName: 'Bus',
    jsDisabled: true,
};

export const NoImage = Template.bind();

NoImage.args = {
    ...base,
    imgSrc: null,
    category: null,
    'vs-carousel-slide-heading': 'Wellness retreats in Scotland',
    'vs-carousel-slide-content': '<p>Everything you need to know about driving, or hiring, an electric vehicle in Scotland</p>',
};
