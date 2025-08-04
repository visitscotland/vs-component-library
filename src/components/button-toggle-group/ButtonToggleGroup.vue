<template>
    <BFormGroup
        :label="buttonsLabel"
        v-slot="{ ariaDescribedby }"
        class="vs-button-toggle-group"
        data-test="vs-button-toggle-group"
    >
        <BFormRadioGroup
            class="vs-button-toggle-group--radios"
            id="btn-radios-1"
            v-model="selected"
            :aria-describedby="ariaDescribedby"
            name="radios-btn-default"
            buttons
            @change="toggleChange"
            :class="groupTabbedInto
                ? 'vs-button-toggle-group--tabbed-focus' : ''"
            @focusout="removeTabClass"
        >
            <div
                v-for="option in options"
                :key="option.text"
                class="vs-button-toggle-group--button"
                :class="selected === option.value
                    ? 'active' : ''"
                @keyup.tab="addTabClass"
                @focus`out="removeTabClass"
            >
                <BFormRadio
                    :value="option.value"
                    :key="option.text"
                >
                    <span>
                        <VsIcon
                            v-if="option.icon"
                            :icon="option.icon"
                            class="me-025"
                        />
                        {{ option.text }}
                    </span>
                </BFormRadio>
            </div>
        </BFormRadioGroup>
    </BFormGroup>
</template>

<script>
import {
    BFormGroup,
    BFormRadioGroup,
    BFormRadio,
} from 'bootstrap-vue-next';
import VsIcon from '@/components/icon/Icon.vue';

/**
 * A group of buttons that allow only one to be selected at a time
 *
 * @displayName Button Toggle Group
 */

export default {
    name: 'VsButtonToggleGroup',
    status: 'prototype',
    release: '0.0.1',
    components: {
        BFormGroup,
        BFormRadioGroup,
        BFormRadio,
        VsIcon,
    },
    props: {
        /**
         * An object of options for the
         * toggle buttons
         */
        options: {
            type: Array,
            required: true,
        },
        /**
         * Initially selected options
         */
        initialSelected: {
            type: String,
            default: '',
        },
        /**
         * Initially selected options
         */
        buttonsLabel: {
            type: String,
            required: true,
        },
    },
    emits: ['toggleChanged'],
    data() {
        return {
            selected: this.initialSelected,
            groupTabbedInto: false,
        };
    },
    watch: {
        initialSelected(newVal) {
            this.selected = newVal;
        },
    },
    mounted() {
        if (this.initialSelected === '') {
            this.selected = this.options[0].value;
        }
    },
    methods: {
        /**
         * Emit checked value when the selected
         * item changes
         */
        toggleChange(event) {
            const value = event.target.value;
            this.$emit('toggleChanged', value);
        },
        /**
         * Updates data value to signify that the element
         * has been tabbed into
         */
        addTabClass() {
            this.groupTabbedInto = true;
        },
        /**
         * Removes the 'tabbed into' class
         */
        removeTabClass(event) {
            if (event.target.tagName !== 'INPUT') {
                this.groupTabbedInto = false;
            }
        },
    },
};
</script>

<style lang="scss">
    .vs-button-toggle-group {
        width: 100%;
        display: flex;
        justify-content: center;

        legend {
            // sr-only styles
            border: 0;
            clip: rect(0, 0, 0, 0);
            overflow: hidden;
            position: absolute;
            height: 1px;
            margin: -1px;
            padding: 0;
            width: 1px;
        }

        &--radios {
            background-color: $vs-color-interaction-cta-subtle-hover;
            display: flex;
            border-radius: $vs-radius-full;
            overflow: hidden;

            input[type="radio"] {
                position: absolute;
                clip: rect(0,0,0,0);
                pointer-events: none;
            }

            label.btn-secondary {
                @extend %button-default-styles;
                color: $vs-color-text-cta-on-light;
                transition: none;
                padding-top: $vs-spacer-050;
                margin-bottom: $vs-spacer-0;
                padding-bottom: $vs-spacer-050;
                display: flex;
                align-items: center;

                .vs-icon{
                    transition: none;
                    color: $vs-color-text-cta-on-light;
                }

                & > span {
                    display: flex;
                    height: 32px;
                    align-items: center;
                    padding: 0 $vs-spacer-050;
                }

                &.focus {
                    box-shadow: none;
                }

                &:hover {
                    background-color: $vs-color-interaction-cta-hover;
                    border-color: $vs-color-interaction-cta-hover;
                    color: $vs-color-text-inverse;

                    .vs-icon {
                        color: $vs-color-icon-inverse;
                    }
                }
            }
        }

        &--tabbed-focus {
            input:focus {
                + label span {
                    border: 2px solid $vs-color-interaction-focus;
                }
            }
        }

        &--button {
            display: flex;

            &:first-child {
                border-top-left-radius: $vs-radius-full;
                border-bottom-left-radius: $vs-radius-full;

                &:not(:last-child) {
                    margin-right: -(#{$vs-spacer-100});
                }
            }

            &:last-child {
                border-top-right-radius: $vs-radius-full;
                border-bottom-right-radius: $vs-radius-full;
            }

            .btn {
                padding: 0 $vs-spacer-150;
            }

            &:not(:disabled):not(.disabled).active {
                label {
                    z-index: 2;
                    border-radius: $vs-radius-full;
                    cursor: default;

                    @include vs-button-variant(
                        $vs-color-interaction-cta-primary, $vs-color-interaction-cta-secondary, $vs-color-interaction-cta-primary,
                        $vs-color-interaction-cta-primary, $vs-color-interaction-cta-secondary, $vs-color-interaction-cta-primary,
                        $vs-color-interaction-cta-primary, $vs-color-interaction-cta-secondary, $vs-color-interaction-cta-primary,
                    );

                    @include media-breakpoint-up(lg) {
                        @include vs-button-variant(
                            $vs-color-interaction-cta-primary, $vs-color-interaction-cta-secondary, $vs-color-interaction-cta-primary,
                            $vs-color-interaction-cta-primary, $vs-color-interaction-cta-secondary, $vs-color-interaction-cta-primary,
                            $vs-color-interaction-cta-primary, $vs-color-interaction-cta-secondary, $vs-color-interaction-cta-primary,
                        );
                    }
                }
            }
        }
    }
</style>
