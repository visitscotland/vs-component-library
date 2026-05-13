export default function videoWithCaptionPartial({
    videoId = null,
    posterImageSrc = null,
    videoCaption = null,
    hasArticleSpacing = true,
    addTopMargin = false,
} = {
}) {
    return `
    <figure>
        <VsVideo 
            video-id="${videoId}"
            poster-image-src="${posterImageSrc}"
            error-message="Sorry, something's gone wrong. Please try again later"
            no-js-message="You need Javascript enabled to see this video"
            no-cookies-message="You need cookies enabled to see this video"
            cookie-btn-text="Manage cookies"
            class="rounded-2 w-100 ${addTopMargin ? 'mt-175' : ''}"
            lazyload
        />
        <figcaption>
            <VsMediaCaption 
                video-id="${videoId}"
                class="${hasArticleSpacing ? 'mb-100' : ''}"
            >
                <template v-slot:caption>
                    ${videoCaption}
                </template>
            </VsMediaCaption>
        </figcaption>
    </figure>
    `;
}
