<template>
    <div
        class="vs-file-download"
        data-test="vs-file-download"
    >
        <VsRow>
            <VsCol
                cols="12"
                md="8"
            >
                <VsRow>
                    <VsCol cols="2" md="1">
                        <VsIcon
                            class="vs-file-download__icon"
                            :name="fileIcon"
                            size="xl"
                        />
                    </VsCol>
                    <VsCol cols="10" md="11">
                        <VsHeading
                            class="vs-file-download__title"
                            level="3"
                            overrideStyleLevel="5"
                        >
                            {{ props.title }}
                        </VsHeading>
                        <p class="vs-file-download__published">
                            {{ props.publishedDate }}
                        </p>
                        <p class="vs-file-download__file-description">
                            {{ props.description }}
                        </p>
                    </VsCol>
                </VsRow>
            </VsCol>
            <VsCol
                class="align-middle"
                cols="12"
                md="4"
                offset="2"
                offset-md="0"
            >
                <VsButton
                    download
                    :href="props.filename"
                >
                    {{ props.buttonText }}
                    <VsIcon
                        name="download-link"
                        size="sm"
                    />
                </VsButton>
            </VsCol>
        </VsRow>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import VsButton from '@/components/button/Button.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsIcon from '@/components/icon/Icon.vue';
import {
    VsCol,
    VsRow,
} from '@/components/grid';

const props = defineProps({
    /**
     * Text to be displayed on download button.
     */
    buttonText: {
        type: String,
        default: 'Download',
    },
    /**
     * Description of the contents of the file.
     */
    description: {
        type: String,
        default: null,
    },
    /**
     * Download file url.
     */
    filename: {
        type: String,
        required: true,
    },
    /**
     * Descriptive name of file.
     */
    title: {
        type: String,
        required: true,
    },
    /**
     * Date file was published.
     */
    publishedDate: {
        type: String,
        default: null,
    },
});

const getFileExtension = computed(() => props.filename.substring(props.filename.lastIndexOf('.') + 1, props.filename.length) || props.filename);

const fileIcon = computed(() => {
    if (getFileExtension.value === 'pdf') {
        return 'pdf-link';
    }
    return 'tick';
});
</script>

<style lang="scss">
.vs-file-download {
    box-shadow: 0 3px 7px rgba(0,0,0,.16);
    padding: $spacer-100;

    .vs-heading.vs-file-download__title {
        margin: 0;
    }

    .vs-icon.vs-file-download__icon {
        margin-top: $spacer-025;
    }

    &__published,
    &__file-description {
        font-size: $font-size-3;
    }

    &__published {
        margin-top: $spacer-0;
        margin-bottom: $spacer-025;
    }

    &__file-description {
        margin: $spacer-0;
    }
}
</style>
