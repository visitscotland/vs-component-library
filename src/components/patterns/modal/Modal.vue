<template>
    <BModal
        modal-class="vs-modal"
        data-test="vs-modal"
        :ref="`modal-${modalId}`"
        :id="modalId"
        size="xl"
        hide-footer
        hide-header
        :static="isVideoModal"
        v-model="show"
    >
        <VsContainer>
            <VsRow>
                <VsCol
                    cols="12"
                    lg="1"
                    class="d-flex justify-content-end align-items-start order-lg-1"
                >
                    <VsButton
                        icon-with-text
                        on-dark
                        class="vs-modal__close-btn mb-5 mb-lg-0"
                        data-test="vs-modal__close-btn"
                        variant="transparent"
                        icon="close-circle"
                        @click="hideModal"
                    >
                        {{ closeBtnText }}
                    </VsButton>
                </VsCol>
                <VsCol
                    cols="12"
                    lg="11"
                >
                    <slot />
                </VsCol>
            </VsRow>
        </VsContainer>
    </BModal>
</template>

<script>
import {
    VsCol, VsRow, VsContainer,
} from '@components/elements/grid';
import { BModal } from 'bootstrap-vue-next';
import VsButton from '@components/elements/button';

/**
 * The modal is used as a dialog prompt for users
 *
 * @displayName Modal
 */
export default {
    name: 'VsModal',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsCol,
        VsRow,
        VsContainer,
        VsButton,
        BModal,
    },
    props: {
        /**
         * The ID for the modal, each modal must have a
         * unique ID.
         */
        modalId: {
            type: String,
            required: true,
        },
        /**
         * Text to display on close button
         */
        closeBtnText: {
            type: String,
            required: true,
        },
        /**
         * Whether or not the modal contains an embedded
         * video
         */
        isVideoModal: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            show: false,
        };
    },
    mounted() {
        this.emitter.on('showModal', (id) => this.showModal(id));

        if (this.isVideoModal) {
            this.emitter.on('showModal', (id) => {
                this.emitter.emit('video-controls', 'modal-opened', id);
            });
        }
    },
    methods: {
        /**
         * Closes modal window
         */
        hideModal() {
            this.show = false;
        },
        showModal(id) {
            if (id === this.modalId) {
                this.show = true;
            }
        },
    },
};
</script>

<style lang="scss">
.vs-modal {
    display: block;

    .modal-dialog {
        margin: $spacer-8 auto;
        z-index: 1100;

        @include media-breakpoint-up(sm) {
            max-width: none;
            width: 100%;
        }
    }

    .modal-body {
        padding: $spacer-5 $spacer-0;

        @include media-breakpoint-up(sm) {
            padding: $spacer-5 $spacer-2;
        }

        .vs-video {
            width: 100%;
        }
    }

    @include media-breakpoint-up(lg) {
        .modal-lg, .modal-xl {
            max-width: 924px;
        }
    }

    @include media-breakpoint-up(xl) {
        .modal-xl {
            max-width: 1140px;
        }
    }

    .modal-content {
        background-color: $color-black;

        p {
            color: $color-white;
        }
    }

    .row > [class*='col-'] {
        display: block;
    }
}
</style>
