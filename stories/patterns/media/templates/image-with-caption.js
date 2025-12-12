export default `
    <VsImg 
        src="./fixtures/image-with-caption/images/blair-castle.webp"
        fluid
    />
    <VsMediaCaption>
        <template v-slot:caption>
            Blair Castle, Blair Atholl, Perthshire
        </template>
        <template v-slot:credit>
            © VisitScotland / Paul Tomkins
        </template>
    </VsMediaCaption>
`;
