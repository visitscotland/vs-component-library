export default `
    <VsPageHeader>
        <template v-slot:heroSection>
            <VsHeroSection
                :heading="args.pageTitle"
                :lede="args.pageLede"
                :img-src="args.imgUrl"
                :img-caption="args.imgCaption"
                :img-credit="args.imgCredit"
                :split="true"
            />
        </template>
    </VsPageHeader>
`;
