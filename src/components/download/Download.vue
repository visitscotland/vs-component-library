<template>
    <div class="vs-download" data-test="vs-download">
        <VsRow>
        <VsCol class="vs-download__file-content" sm="12" md="8" lg="8">
            <VsRow>
                <VsCol cols="1">
                    <VsIcon
                    name="pdf-link"
                    size="xl"></VsIcon>
                </VsCol>
                <VsCol cols="11">
                    <VsHeading
                    class="vs-download__file-name"
                    level="3"
                    overrideStyleLevel="5">
                    {{ props.fileName }}
                </VsHeading>
                <p class="vs-download__published">{{ props.published }}</p>
                <p class="vs-download__file-description">{{ props.description }}</p>
                </VsCol>
            </VsRow>
        </VsCol>
        <VsCol class="vs-download__download-button" sm="12" md="4" lg="4">
            <VsButton
            icon="download-link"
            icon-position="right">
                {{ props.buttonText }}
            </VsButton>
        </VsCol>
    </VsRow>
    </div>
    
</template>

<script setup lang="ts">
import { VsHeading, VsIcon } from '..';
import VsButton from '../button';
import { VsCol, VsRow } from '../grid';

const props = defineProps({
    /**
     * Descriptive name of file
     */
     fileName: {
        type: String,
        required: true,
    },
    /**
     * Date file was published
     */
    published: {
        type: String,
        default: null,
    },
    /**
     * Description of the contents of the file
     */
    description: {
        type: String,
        default: null,
    },
    /**
     * Text to be displayed on download button
     */
    buttonText: {
        type: String,
        default: null,
    },
    
})


</script>

<style lang="scss">
.vs-download{
    box-shadow: 0 3px 7px rgba(0,0,0,.16);
}

h3.vs-download__file-name{
    margin-top: $spacer-0;
    margin-bottom: $spacer-0;
}

.vs-download__published, .vs-download__file-description{
    font-size: $font-size-3;
}

.vs-download__published{
    margin-top: $spacer-0;
    margin-bottom: $spacer-025;
}

.vs-download__file-description{
    margin: $spacer-0;
}

.vs-download__file-content, .vs-download__download-button{
    padding: $spacer-100;
}

</style>