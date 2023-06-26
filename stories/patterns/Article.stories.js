import VsArticle from '@/components/patterns/article/Article.vue';
import VsArticleSidebar from '@/components/patterns/article/components/ArticleSidebar.vue';
import VsArticleSection from '@/components/patterns/article/components/ArticleSection.vue';
import VsHeading from '@/components/elements/heading/Heading.vue';
import VsImageWithCaption from '@/components/patterns/image-with-caption/ImageWithCaption.vue';
import VsImg from '@/components/elements/img/Img.vue';
import VsCaption from '@/components/patterns/caption/Caption.vue';
import VsQuote from '@/components/patterns/quote/Quote.vue';

export default {
    component: VsArticle,
    title: 'Patterns/Article',
    tags: ['autodocs'],
    argTypes: {
        vsArticleIntro: {
            control: {
                type: 'text',
            },
        },
        sidebarAlign: {
            options: [
                'left',
                'right',
            ],
            control: {
                type: 'radio',
            },
        },
    },
};

const Template = (args) => ({
    components: {
        VsArticle,
        VsArticleSidebar,
        VsArticleSection,
        VsHeading,
        VsImageWithCaption,
        VsImg,
        VsCaption,
        VsQuote,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsArticle v-bind="args">
            <template
                v-if="args['vs-article-img']"
                v-slot:vs-article-img
            >
                <VsImageWithCaption>
                    <VsImg
                        :src="args['vs-article-img'].src"
                        :alt="args['vs-article-img'].alt"
                        :use-lazy-loading="args['vs-article-img'].useLazyLoading"
                    />
                    <template v-slot:img-caption>
                        <VsCaption>
                            <template v-slot:caption>{{ args['vs-article-img'].caption }}</template>
                            <template v-slot:credit>{{ args['vs-article-img'].credit }}</template>
                        </VsCaption>
                    </template>
                </VsImageWithCaption>
            </template>

            <template
                v-if="args['vs-article-intro']"
                v-slot:vs-article-intro
            >
                {{ args['vs-article-intro'] }}
            </template>

            <VsArticleSection :sidebar-align="args.sidebarAlign">
                <template v-slot:article-sidebar>
                    <VsArticleSidebar :sidebar-align="args.sidebarAlign">
                        <template v-slot:vs-article-sidebar-img>
                            <VsImageWithCaption>
                                <VsImg
                                    :src="args.sidebarImg.src"
                                    :alt="args.sidebarImg.alt"
                                    :use-lazy-loading="args.sidebarImg.useLazyLoading"
                                />

                                <template v-slot:img-caption>
                                    <VsCaption>
                                        <template v-slot:caption>
                                            {{ args.sidebarImg.caption }}
                                        </template>

                                        <template v-slot:credit>
                                            {{ args.sidebarImg.credit }}
                                        </template>
                                    </VsCaption>
                                </template>
                            </VsImageWithCaption>
                        </template>

                        <template v-slot:vs-article-sidebar-quote>
                            <VsQuote>
                                <template v-slot:quote-content>
                                    <p>
                                        {{ args.sidebarQuote }}
                                    </p>
                                </template>
                            </VsQuote>
                        </template>
                    </VsArticleSidebar>
                </template>

                <p v-for="paragraph in args.default">{{ paragraph }}</p>

            </VsArticleSection>
        </VsArticle>
    `,
});

const base = {
    title: 'Experiencing Ben Nevis',
    'vs-article-intro': 'Scotland\'s landscape is scattered with Munros and mist-shrouded hills...',
    sidebarAlign: 'left',
    sidebarImg: {
        src: 'src/assets/fixtures/article/images/mountain-stream.jpg',
        alt: 'Mountain stream',
        useLazyLoading: true,
        caption: 'Mountain stream',
        credit: '© CutMedia / Chris Rowland',
    },
    sidebarQuote: 'Scotland\'s largest mountain was once a massive active volcano which exploded and collapsed inwards on itself millions of years ago.',
    default: [
        'Ben Nevis is the king of them all. In the north west Highlands, near the town of Fort William and part of the Grampian Mountain range, the famous peak attracts 125k walkers a year. Whether you\'re an avid ambler or you just love beautiful landscapes, bagging \'the Ben\' is likely to feature near the top of your Scottish bucket list.',
        'An ancient giant of the land, Ben Nevis was once a massive active volcano which exploded and collapsed inwards on itself millions of years ago. At the summit, there is evidence of an explosion in the form of light-coloured granite. The name itself has two translations from the ancient Gaelic language, meaning \'mountain with its head in the clouds\', thanks to its iconic mist-shrouded peak, or it can also mean \'venomous mountain\' - you can decide which translation you prefer after the climb!',
        'Read on for an overview of walking routes up the mountain, or visit Walk Highlands for detailed maps, difficulty levels and walking advice.',
        'Remember it\'s never \'easy\' to bag a Scottish Munro or Corbett. You\'ll need a good amount of hillwalking experience, fitness, hill craft and navigation skills using a map and compass, before attempting any Scottish mountains, even more so in winter.',
    ],
};

export const Default = Template.bind({
});

Default.args = base;

export const CoverImage = Template.bind({
});

CoverImage.args = {
    ...base,
    'vs-article-img': {
        src: 'src/assets/fixtures/article/images/corpach-sea-lock-and-lighthouse.jpg',
        alt: 'Ben Nevis',
        useLazyLoading: true,
        caption: 'Corpach Sea Lock and Lighthouse in the Shadow of Ben Nevis, Loch Eil by Fort William',
        credit: '© VisitScotland / Kenny Lam',
    },
};
