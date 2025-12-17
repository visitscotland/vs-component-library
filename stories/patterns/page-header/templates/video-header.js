export default `
    <VsPageHeader menu-type="b2c">
        <template v-slot:heroSection>
            <VsHeroSection
                :heading="args.pageTitle"
                :lede="args.pageLede"
                :img-src="args.imgUrl"
                :img-caption="args.imgCaption"
                :img-credit="args.imgCredit"
                video-src="fixtures/hero/video/lavendar-fields.mp4"
                video-btn-text="Toggle video"
            />
        </template>
    </VsPageHeader>
`;
