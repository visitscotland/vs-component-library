import VsCarousel from '@/components/carousel/Carousel.vue';
import VsCarouselSlide from '@/components/carousel/components/CarouselSlide.vue';

export default {
    component: VsCarouselSlide,
    title: 'Carousel',
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
                    v-for="n in ['0','1','2','3','4','5','6','7','8','9','10','11']"
                    :key="n"
                    v-bind="args"
                    :slide-index="n"
                >
                    <template
                        v-if="${'vs-carousel-slide-heading' in args}" v-slot:vs-carousel-slide-heading
                    >
                        ${args['vs-carousel-slide-heading']}
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
    transport: 'fa-regular fa-bus',
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
    transport: 'fa-regular fa-bus',
    transportName: 'Bus',
    jsDisabled: true,
};
