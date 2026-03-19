export default `
    <VsCard>
        <template #vs-card-header>
            <div class="position-relative">
                <VsImg
                    src="./fixtures/megalinks/ashton-lane-wide.jpg"
                    class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                />
                <div class="position-absolute bottom-0 start-0 d-flex gap-2">
                    <VsBadge
                        variant="information"
                        class="rounded-top-end rounded-bottom-start"
                    >
                        From £10
                    </VsBadge>

                    <VsBadge 
                        variant="information"
                        class="rounded-top-end rounded-top-start"
                    >
                        25 Oct 2025
                    </VsBadge>
                </div>

                <div class="position-absolute bottom-0 end-0 d-flex">
                    <VsBadge
                        variant="highlight"
                        class="rounded-top-start rounded-bottom-start mx-0"
                    >
                        Event
                    </VsBadge>
                </div>
            </div>
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
                    Neuk presents: Edit Your Creative Scotland Bid with Truffle Pig
                </VsLink>
            </VsHeading>

            <VsBody>
                <p class="truncate-2-lines">
                    A special in-person workshop for Neuk Collective members.
                </p>
            </VsBody>
        </template>

        <template #vs-card-footer>
            <div class="d-flex justify-content-between align-items-end">
                <div class="d-flex align-items-center">
                    <VsIcon
                        icon="fa-solid fa-location-dot"
                        variant="highlight"
                        class="me-050"
                        size="sm"
                    />
                    <VsDetail no-margins color="tertiary">
                        Perth Theatre, Perth
                    </VsDetail>
                </div>

                <VsIcon 
                    icon="vs-icon-control-external-link"
                    variant="highlight"
                    size="sm"
                    class="ms-050"
                />
            </div>
        </template>
    </VsCard>
`;
