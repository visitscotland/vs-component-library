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
            <video
                loop
                muted
                autoplay
                playsinline
                preload="auto"
                poster="fixtures/hero/images/lavendar-fields.jpg"
                aria-hidden="true"
                fetchpriority="high"
            >
                <source
                    src="fixtures/hero/video/lavendar-fields.mp4"
                    type="video/mp4"
                >
            </video>
        </template>
    </VsCard>
`;
