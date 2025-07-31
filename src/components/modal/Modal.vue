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
        v-if="mounted"
        @hidden="hideModal"
    >
        <VsContainer>
            <VsRow>
                <VsCol
                    cols="12"
                    lg="1"
                    class="d-flex justify-content-end align-items-start order-lg-1"
                >
                    <VsButton
                        class="vs-modal__close-btn mb-125 mb-lg-0"
                        data-test="vs-modal__close-btn"
                        variant="subtle"
                        icon-only
                        icon="vs-icon-control-dismiss"
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
} from '@/components/grid';
import { BModal } from 'bootstrap-vue-next';
import VsButton from '@/components/button';

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
        /**
         * In the jest environment we don't want to have to wait for the mounted
         * trigger to occur before rendering the component, that fix is only necessary
         * for the SSR environment and it slows our tests down. There we can skip
         * through it and render the modal immediately.
         */
        autoMount: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            show: false,
            mounted: this.autoMount,
        };
    },
    mounted() {
        this.mounted = true;

        if (this.emitter) {
            this.emitter.on('showModal', (id) => this.showModal(id));
            this.emitter.on('hideModal', () => this.hideModal());

            if (this.isVideoModal) {
                this.emitter.on('showModal', (id) => {
                    this.emitter.emit('video-controls', {
                        action: 'modal-opened',
                        id,
                    });
                });
            }
        }
    },
    methods: {
        /**
         * Closes modal window
         */
        hideModal() {
            if (this.emitter) {
                this.emitter.emit('video-controls', {
                    action: 'modal-closed',
                    id: this.modalId,
                });
            }
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
        margin: $vs-spacer-200 auto;
        z-index: 1100;

        @include media-breakpoint-up(sm) {
            max-width: none;
            width: 100%;
        }
    }

    .modal-body {
        padding: $vs-spacer-125 $vs-spacer-0;

        @include media-breakpoint-up(sm) {
            padding: $vs-spacer-125 $vs-spacer-050;
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

    .row > [class*='col-'] {
        display: block;
    }
}

.b-overlay {
    .bg-dark {
        background-color: rgba(0, 0, 0, 0.5);
    }
}
</style>
