export default `
    <VsCard 
        card-style="elevated"
        fill-color="vs-color-background-primary"
        accent-bar
    >
        <template #vs-card-header>
            <VsBadge 
                variant="subtle"
                class="mt-125 mx-075"
            >
                Article
            </VsBadge>
        </template>

        <template #vs-card-body>
            <div class="px-125">
                <VsHeading
                    level="3"
                    heading-style="heading-xs"
                >
                    <VsLink
                        href="#"
                        class="stretched-link"
                        variant="secondary"
                    >
                        Managing your website
                    </VsLink>
                </VsHeading>

                <VsBody class="mb-150">
                    <p class="truncate-3-lines">
                        Find out what makes a good accessible website including key pages and booking systems, and how you can develop and improve this digital channel.
                    </p>
                </VsBody>
            </div>
        </template>

         <template #vs-card-footer>
            <VsArticleDetails 
                class="px-125"
                article-read-time="2 minute read"
            />
        </template>
    </VsCard>
`;
