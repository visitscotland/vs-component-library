export default `
    <VsCard card-style="overlay">
        <template #vs-card-footer>
            <div class="px-125 pb-125">
                <VsHeading
                    level="2"
                    no-margins
                    heading-style="heading-m"
                >
                    <VsLink
                        href="#"
                        class="stretched-link text-decoration-none"
                        variant="on-dark"
                    >
                        Food & drink
                    </VsLink>
                </VsHeading>
            </div>
        </template>

        <template #vs-card-image>
            <VsImg 
                src="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2024/11/05/creel-seafood?size=md" 
                class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
            />
        </template>
    </VsCard>
`;
