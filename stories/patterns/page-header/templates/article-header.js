export default `
    <VsPageHeader menu-type="b2c">
        <template #breadcrumb>
            <VsContainer class="mt-075 mt-lg-200">
                <VsRow>
                    <VsCol
                        cols="10"
                        lg="8"
                    >
                        <VsBreadcrumb>
                            <VsBreadcrumbItem
                                href="#"
                                text="Home"
                            />
                            <VsBreadcrumbItem
                                href="#"
                                text="Things to do"
                            />
                            <VsBreadcrumbItem
                                href="#"
                                text="Events"
                            />
                            <VsBreadcrumbItem
                                href="#"
                                text="Highland Games"
                                active
                            />
                        </VsBreadcrumb>
                    </VsCol>
                </VsRow>
            </VsContainer>
        </template>

        <template #heroSection>
            <VsHeroSection
                :heading="args.pageTitle"
                :lede="args.pageLede"
                :img-src="args.imgUrl"
                :img-caption="args.imgCaption"
                :img-credit="args.imgCredit"
                inset
            >
                <template #hero-section-article-details>
                    <VsArticleDetails
                        article-author="Frank Smith"
                        article-publish-date="May 10, 2025"
                        article-read-time="2 minute read"
                    />
                </template>
            </VsHeroSection>
        </template>
    </VsPageHeader>
`;
