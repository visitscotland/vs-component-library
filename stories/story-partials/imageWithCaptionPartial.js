export default function imageWithCaptionPartial({
    imageSrc = null,
    imageCaption = null,
    imageCredit = null,
    hasArticleSpacing = true,
    addTopMargin = false,
} = {
}) {
    if (!imageSrc) return '';
    return `
    <figure>
        <VsImg 
            src="${imageSrc}"
            fluid
            use-lazy-loading
            class="rounded-2 w-100 ${addTopMargin ? 'mt-175' : ''}"
        />
        <figcaption>
            <VsMediaCaption class="${hasArticleSpacing ? 'mb-100' : ''}">
                <template v-slot:caption>
                    ${imageCaption ?? ''}
                </template>
                <template v-slot:credit>
                    ${imageCredit ?? ''}
                </template>
            </VsMediaCaption>
        </figcaption>
    </figure>
    `;
}
