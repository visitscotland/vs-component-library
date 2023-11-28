const ariaDescriptionMixin = {
    computed: {
        ariaDescription() {
            if ((this.v$.inputVal && this.v$.inputVal.$anyError) || this.invalid) {
                return `error-${this.fieldName}`;
            }

            if (this.hintText) {
                return `hint-${this.fieldName}`;
            }

            return null;
        },
    },
};

export default ariaDescriptionMixin;
