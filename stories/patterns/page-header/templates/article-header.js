export default `
    <VsPageHeader>
        <template v-slot:heroSection>
            <VsPageIntro has-toc>
                <template #vs-intro-breadcrumb>
                    <VsBreadcrumb>
                        <VsBreadcrumbItem
                            href="#"
                            text="Home"
                        />
                        <VsBreadcrumbItem
                            href="#"
                            text="Advice and Support"
                        />
                        <VsBreadcrumbItem
                            href="#"
                            text="Manage your social media"
                            active
                        />
                    </VsBreadcrumb>
                </template>

                <template #vs-intro-heading>
                    {{ args.pageTitle }}
                </template>

                <template #vs-article-data>
                    <VsArticleDetails
                        article-publish-date="Last updated: May 10, 2023"
                        article-read-time="Reading time: 2 minutes"
                    />
                </template>

                <template #vs-intro-content>
                    <p>
                        Social media channels let people create and share content with online
                        friends and followers, and take in information and inspiration from their
                        favourite brands and influencers.
                    </p>

                    <p>
                        Social media channels have become an integral part of many people's lives,
                        with average usage figures of 2 hours 30 minutes a day. Think about the impact
                        social media could have on your business and learn how to use social calendars
                        and moderation to manage your channels. Check our some top tips for social media,
                        and how to monitor the performance over time.
                    </p>
                </template>

                <template #vs-intro-table-of-contents>
                    <VsLinkList toc>
                        <template #heading>
                            In this article:
                        </template>
                        <VsLinkListItem href="#">
                            Understand social media
                        </VsLinkListItem>
                        <VsLinkListItem href="#">
                            How to manage your social media channels
                        </VsLinkListItem>
                        <VsLinkListItem href="#">
                            Top tips for managing your social media accounts
                        </VsLinkListItem>
                    </VsLinkList>
                </template>
            </VsPageIntro>
        </template>
    </VsPageHeader>

    <VsArticle
        title="What social media channels are most used?"
        business-support
    >
        <template #vs-article-intro>
            Optional lead paragraph to introduce the article and its contents.
            Vivamus et ante ex. In a tincidunt magna. Nullam aliquam, nibh vel
            faucibus posuere, tellus ante laoreet lectus, hendrerit ultrices
            erat felis sit amet dolor. Vivamus ut scelerisque tortor.
        </template>

        <VsArticleSection
            sidebar-align="right"
            business-support
        >
            <template #article-sidebar>
                <VsArticleSidebar sidebar-align="right">
                    <template #vs-article-sidebar-img>
                        <VsImageWithCaption
                            alt-text="Mountain stream"
                            image-src="fixtures/article/images/mountain-stream.jpg"
                        >
                            <template #img-caption>
                                <VsCaption>
                                    <template #caption>
                                        Mountain stream
                                    </template>
                                    <template #credit>
                                        © CutMedia / Chris Rowland
                                    </template>
                                </VsCaption>
                            </template>
                        </VsImageWithCaption>
                    </template>
                </VsArticleSidebar>
            </template>

            <VsHeading
                level="3"
                heading-style="heading-l"
            >
                Vestibulum sit amet finibus lorem
            </VsHeading>

            <p>
                Nullam in ultricies sapien. Nunc faucibus, orci non
                imperdiet vehicula, ipsum metus porta lorem,
                ut pretium nisl augue quis augue. Pellentesque
                finibus rutrum massa nec pretium. Aliquam eget urna ac
                lectus facilisis placerat sed ultricies metus.
                Sed sed molestie leo, ac congue tortor. Ut tempus dictum diam,
                interdum ullamcorper massa congue ut.
            </p>
            <p>
                Praesent aliquet luctus mauris et viverra. Nunc vel libero convallis,
                iaculis eros a, imperdiet tortor. Mauris tempor eget quam sit amet
                malesuada. Integer lorem magna, commodo a justo a, pellentesque
                vehicula lacus. Aenean dignissim nunc id erat semper euismod. Donec
                fermentum vulputate tortor, nec rhoncus eros luctus ut. Phasellus
                eget interdum ante, ut maximus augue. Vivamus cursus dolor ac gravida pulvinar.
            </p>

            <VsHeading
                level="3"
                heading-style="heading-l"
            >
                Aliquam eget urna ac lectus facilisis
            </VsHeading>
            <p>
                Praesent aliquet luctus mauris et viverra. Nunc vel libero convallis,
                iaculis eros a, imperdiet tortor. Mauris tempor eget quam sit amet malesuada.
                Integer lorem magna, commodo a justo a, pellentesque vehicula lacus.
                Aenean dignissim nunc id erat semper euismod. Donec fermentum vulputate
                tortor, nec rhoncus eros luctus ut. Phasellus eget interdum ante,
                ut maximus augue. Vivamus cursus dolor ac gravida pulvinar.
                Cras non eros et lorem ultrices viverra.
            </p>
            <VsHeading
                level="3"
                heading-style="heading-l"
            >
                Aliquam erat volutpat
            </VsHeading>

            <p>
                Nullam in ultricies sapien. Nunc faucibus, orci non
                imperdiet vehicula, ipsum metus porta lorem,
                ut pretium nisl augue quis augue. Pellentesque
                finibus rutrum massa nec pretium. Aliquam eget urna ac
                lectus facilisis placerat sed ultricies metus.
                Sed sed molestie leo, ac congue tortor. Ut tempus dictum diam,
                interdum ullamcorper massa congue ut.
            </p>
        </VsArticleSection>

        <VsArticleSection
            sidebar-align="right"
            business-support
        >
            <template #article-sidebar>
                <VsArticleSidebar sidebar-align="right">
                    <template #vs-article-sidebar-img>
                        <VsImageWithCaption
                            alt-text="Mountain stream"
                            image-src="fixtures/article/images/mountain-stream.jpg"
                        >
                            <template #img-caption>
                                <VsCaption>
                                    <template #caption>
                                        Mountain stream
                                    </template>
                                    <template #credit>
                                        © CutMedia / Chris Rowland
                                    </template>
                                </VsCaption>
                            </template>
                        </VsImageWithCaption>
                    </template>
                </VsArticleSidebar>
            </template>

            <VsHeading
                level="3"
                heading-style="heading-l"
            >
                Vestibulum sit amet finibus lorem
            </VsHeading>

            <p>
                Nullam in ultricies sapien. Nunc faucibus, orci non
                imperdiet vehicula, ipsum metus porta lorem,
                ut pretium nisl augue quis augue. Pellentesque
                finibus rutrum massa nec pretium. Aliquam eget urna ac
                lectus facilisis placerat sed ultricies metus.
                Sed sed molestie leo, ac congue tortor. Ut tempus dictum diam,
                interdum ullamcorper massa congue ut.
            </p>
            <p>
                Praesent aliquet luctus mauris et viverra. Nunc vel libero convallis,
                iaculis eros a, imperdiet tortor. Mauris tempor eget quam sit amet
                malesuada. Integer lorem magna, commodo a justo a, pellentesque
                vehicula lacus. Aenean dignissim nunc id erat semper euismod. Donec
                fermentum vulputate tortor, nec rhoncus eros luctus ut. Phasellus
                eget interdum ante, ut maximus augue. Vivamus cursus dolor ac gravida pulvinar.
            </p>
        </VsArticleSection>
    </VsArticle>
`;
