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
`;
