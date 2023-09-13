import {
    required,
    email,
    minLength,
    maxLength,
    helpers,
} from '@vuelidate/validators';

const postcode = helpers.regex(/^([A-Za-z][A-HJ-Ya-hj-y]?\d[A-Za-z\d]? ?\d[A-Za-z]{2}|GIR ?0A{2})$/);

const validateFormElementMixin = {
    data() {
        return {
            inputVal: this.value,
            isInvalid: this.invalid,
        };
    },
    computed: {
        /**
         * calculate whether element is required
         */
        isRequired() {
            if (typeof required !== 'undefined' && 'required' in this.validationRules) {
                return true;
            }

            return false;
        },
        /**
         * set rules object for validation
         * needed because `required`, `email` and other values
         * can't be key value pairs
         */
        rules() {
            let rulesObj = {
            };

            // eslint-disable-next-line
            for (const [key, value] of Object.entries(this.validationRules)) {
                // rules have to be either a function defined by
                // https://vuelidate-next.netlify.app/validators.html
                if (key === 'required') {
                    rulesObj = {
                        ...rulesObj,
                        required,
                    };
                } else if (key === 'email') {
                    rulesObj = {
                        ...rulesObj,
                        email,
                    };
                } else if (key === 'minLength') {
                    rulesObj = {
                        ...rulesObj,
                        minLength: minLength(value),
                    };
                } else if (key === 'maxLength') {
                    rulesObj = {
                        ...rulesObj,
                        maxLength: maxLength(value),
                    };
                } else if (key === 'invalidVal') {
                    const noInvalid = () => this.inputVal.indexOf(this.validationRules.invalidVal)
                        === -1;

                    rulesObj = {
                        ...rulesObj,
                        noInvalid,
                    };
                } else if (key === 'postcode') {
                    rulesObj = {
                        ...rulesObj,
                        postcode,
                    };
                }
            }

            if (typeof rulesObj !== 'undefined') {
                rulesObj = {
                    ...rulesObj,
                };

                return {
                    inputVal: rulesObj,
                };
            }

            return {
            };
        },
        errorsList() {
            const errorsArray = [];
            const rulesKeys = Object.keys(this.rules.inputVal);

            rulesKeys.forEach((key) => {
                if (this.v$.$errors) {
                    this.v$.$errors.forEach((error) => {
                        if (error.$validator === key) {
                            errorsArray.push(key);
                        }
                    });
                }
            });

            return errorsArray;
        },
    },
    watch: {
        errorsList(newValue) {
            if (newValue.length) {
                this.isInvalid = true;
            } else {
                this.isInvalid = false;
            }
        },
    },
    methods: {
        /**
         * manually run validation and emit to parent
         */
        manualValidate() {
            this.isInvalid = false;

            if ('required' in this.rules.inputVal && !this.inputVal) {
                if (this.errorsList.indexOf('required') === -1) {
                    this.errorsList.push('required');
                }
            } else {
                this.errorsList.forEach((error, index) => {
                    if (error === 'required') {
                        this.errorsList.splice(index, 1);
                    }
                });
            }

            if (this.errorsList.length) {
                this.isInvalid = true;
            }

            this.touched = true;

            /**
             * Emit watchable data when a field's validation
             * status is changed
             * @type {object}
             * @property {string} field the name of the field
             * @property {string} value the current value of the field
             * @property {array} errors a list of errors that the field has
             */
            this.$emit('status-update', {
                field: this.fieldName,
                value: this.inputVal,
                errors: this.errorsList,
            });
        },
        /**
         * Emit status of input - for automatic updating
         */
        emitStatus() {
            setTimeout(() => {
                this.manualValidate();
                this.touched = true;
                this.v$.$touch();
            }, 50);
        },
    },
};

export default validateFormElementMixin;
