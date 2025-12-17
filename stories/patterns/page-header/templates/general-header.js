export default `
    <VsPageHeader>
        <template v-slot:breadcrumb>
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
                                text="Advice and Support"
                            />
                            <VsBreadcrumbItem
                                href="#"
                                text="Improve your business"
                                active
                            />
                        </VsBreadcrumb>
                    </VsCol>
                </VsRow>
            </VsContainer>
        </template>

        <template v-slot:heroSection>
            <VsContainer>
                <VsRow>
                    <VsCol>
                        <VsHeroSection
                            :heading="args.pageTitle"
                            :lede="args.pageLede"
                        />
                    </VsCol>
                </VsRow>
            </VsContainer>
        </template>
    </VsPageHeader>
`;
