export default `
    <VsCard>
        <template #vs-card-header>
            <VsImg
                src="./fixtures/megalinks/ashton-lane-wide.jpg"
                class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
            />
        </template>

        <template #vs-card-body >
            <VsHeading
                level="3"
                heading-style="heading-xs"
            >
                <VsLink
                    href="#"
                    class="stretched-link"
                    variant="secondary"
                >
                    Unusual accommodation in Scotland
                </VsLink>
            </VsHeading>

            <VsBody>
                <p class="truncate-2-lines">
                    Fancy staying somewhere a little different? From castles to lighthouses, teepees to brochs, there's lots of unusual choices.
                </p>
            </VsBody>
        </template>
    </VsCard>
`;
