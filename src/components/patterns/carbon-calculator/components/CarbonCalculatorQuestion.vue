<template>
    <BFormGroup
        :label="label"
        :label-for="labelFor"
        :class="fieldClass"
    >
        <div
            :class="fieldClass"
        >
            <template v-if="fieldType === 'radio'">
                <VsHeading
                    level="3"
                >
                    {{ fieldCategory }}
                </VsHeading>

                <!-- eslint-disable -->
                <label
                    class="vs-carbon-calculator__question"
                    :for="fieldName"
                >
                    {{ label }}
                </label>
                <!-- eslint-enable -->

                <BFormRadioGroup
                    :id="fieldName"
                >
                    <div
                        class="vs-carbon-calculator__radio"
                        v-for="
                            (option, optionIndex) in
                                options
                        "
                        :key="optionIndex"
                    >
                        <BFormRadio
                            :value="option.value"
                            :hint-text="hintText"
                            :name="fieldName"
                            :id="fieldName + option.value"
                            @change="valueChanged({
                                field: fieldName,
                                value: option.value,
                            })"
                        >
                            <div class="vs-carbon-calculator__radio-icon">
                                <VsIcon
                                    :name="option.icon"
                                    size="xl"
                                />
                            </div>
                            {{ option.text }}
                        </BFormRadio>
                    </div>
                </BFormRadioGroup>
            </template>
        </div>
    </BFormGroup>
</template>

<script>
import {
    BFormGroup,
    BFormRadioGroup,
    BFormRadio,
} from 'bootstrap-vue-next';
import VsHeading from '@components/elements/heading/Heading.vue';
import VsIcon from '@components/elements/icon/Icon.vue';

/**
 * @displayName Carbon Form Question
 */
export default {
    name: 'VsCarbonCalculatorQuestion',
    status: 'prototype',
    release: '0.0.1',
    components: {
        BFormGroup,
        BFormRadioGroup,
        BFormRadio,
        VsHeading,
        VsIcon,
    },
    props: {
        label: {
            type: String,
            required: true,
        },
        labelFor: {
            type: String,
            required: true,
        },
        fieldClass: {
            type: String,
            required: true,
        },
        fieldType: {
            type: String,
            required: true,
        },
        fieldName: {
            type: String,
            required: true,
        },
        fieldCategory: {
            type: String,
            required: true,
        },
        hintText: {
            type: String,
            required: true,
        },
        options: {
            type: Array,
            required: true,
        },
    },
    methods: {
        valueChanged(newData) {
            this.$emit('updateFieldData', newData);
        },
    },
};
</script>

<style lang='scss'>

</style>
