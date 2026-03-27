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
                        Landscape & nature
                    </VsLink>
                </VsHeading>
            </div>
        </template>
        <template #vs-card-image>
            <VsVideo 
                video-type="html5"
                poster-image-src="fixtures/hero/images/lavendar-fields.jpg"
                video-src="fixtures/hero/video/lavendar-fields.mp4"
            />
        </template>
    </VsCard>
`;
