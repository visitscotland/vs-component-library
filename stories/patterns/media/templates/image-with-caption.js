export default `
<figure>
    <VsImg 
        src="./fixtures/image-with-caption/images/blair-castle.webp"
        fluid
    />
    <figcaption>
        <VsMediaCaption>
            <template v-slot:caption>
                Blair Castle, Blair Atholl, Perthshire
            </template>
            <template v-slot:credit>
                © VisitScotland / Paul Tomkins
            </template>
        </VsMediaCaption>
    </figcaption>
</figure>
`;
