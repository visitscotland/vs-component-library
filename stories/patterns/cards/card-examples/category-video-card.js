export default `
    <VsCard card-style="overlay">
        <template #vs-card-image>
            <VsVideo
                ref="categoryVideo"
                video-type="html5"
                poster-image-src="fixtures/hero/images/lavendar-fields.jpg"
                video-src="fixtures/hero/video/lavendar-fields.mp4"
                :show-toggle="false"
                video-id="category-card-video"
            />
        </template>

        <template #vs-card-overlay-controls>
            <VsToggleButton
                variant="overlay"
                icon="vs-icon-control-pause"
                pressed-icon="vs-icon-control-play"
                label="Pause video"
                pressed-label="Play video"
                aria-controls="category-card-video"
                @click="(val) => toggleVideo('categoryVideo')"
            />
        </template>

        <template #vs-card-footer>
            <div class="px-125 pb-125">
                <VsHeading level="2" no-margins heading-style="heading-m">
                    <VsLink
                        href="#"
                        class="stretched-link text-decoration-none"
                        variant="on-dark"
                        no-visited-styles
                    >
                        Landscape & nature
                    </VsLink>
                </VsHeading>
            </div>
        </template>
    </VsCard>
`;
