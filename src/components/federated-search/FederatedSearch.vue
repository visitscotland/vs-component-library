<template>
    <h1>This is federated search.</h1>
    <p>Is loading: {{ federatedSearchStore.isLoading }}</p>
    <p>Search term: {{ federatedSearchStore.searchTerm }}</p>

    <div>
        <div class="vs-federated-search__search-input d-flex gap-2">
            <div class="d-flex flex-grow-1 me-100 position-relative">
                <label
                    for="federated-search"
                    class="vs-federated-search__label"
                >
                    <span class="visually-hidden">
                        Search for something
                    </span>
                    <VsIcon
                        icon="vs-icon-control-search"
                        size="xs"
                    />
                </label>
                <VsInput
                    :auto-complete="false"
                    class="vs-federated-search__input"
                    :disabled="federatedSearchStore.isLoading"
                    field-name="federated-search"
                    name="searchrequest"
                    placeholder="What are you looking for?"
                    type="search"
                    :value="searchTerm ? searchTerm : ''"
                    @input="updateSearchTerm"
                    @keydown.enter="search"
                />
                <!-- <div
                    v-if="searchSuggestions"
                    class="vs-federated-search__autocomplete"
                >
                    <VsList unstyled>
                        <li
                            v-for="suggestion in searchSuggestions"
                            :key="suggestion"
                            @click="searchFromSuggestion(suggestion)"
                            @keydown.enter="searchFromSuggestion(suggestion)"
                        >
                            {{ suggestion }}
                        </li>
                    </VsList>
                </div> -->
            </div>
            <VsButton
                class="d-none d-lg-block px-200"
                :disabled="federatedSearchStore.isLoading"
                @click="search"
            >
                Search
            </VsButton>
        </div>

        <hr>

        <VsLoadingSpinner v-if="federatedSearchStore.isLoading" />
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import {
    VsButton,
    VsIcon,
    VsInput,
    VsLoadingSpinner,
} from '@/components';
import useFederatedSearchStore from '@/stores/federatedSearch.store';

const federatedSearchStore = useFederatedSearchStore();

const props = defineProps({
    /**
     * API key, Customer ID, and engine ID for Cludo search.
    */
    cludoCredentials: {
        type: Object,
        required: true,
    },
});

onMounted(() => {
    federatedSearchStore.cludoCredentials = props.cludoCredentials;

    const params = new URLSearchParams(document.location.search);
    const paramSearchTerm = params.get('search-term');

    if (paramSearchTerm) {
        federatedSearchStore.searchTerm = paramSearchTerm;
    }
});

const searchTerm = ref('');

function updateSearchTerm(event) {
    const target = event.target;
    searchTerm.value = target.value;
}

function search() {
    if (!searchTerm.value) return;

    federatedSearchStore.searchTerm = searchTerm.value;
    federatedSearchStore.getSearchResults();
}
</script>

<style lang="scss">
.vs-federated-search {
    &__search-input {
        position: absolute;
        z-index: 1;

        @include media-breakpoint-up(lg) {
            padding: $vs-spacer-200 0;
        }
    }

    &__label {
        position: absolute;
        left: $vs-spacer-075;
        top: 50%;
        transform: translate(0, -50%);

        @include media-breakpoint-up(lg) {
            left: $vs-spacer-150;

            .vs-icon {
                font-size: $icon-size-sm;
            }
        }
    }

    .vs-input.form-control {
        font-size: $font-size-body;
        padding: $vs-spacer-075 $vs-spacer-125 $vs-spacer-075 2.5rem;
        margin: 0;

        &:focus{
            @include form-focus-state;
        }

        @include media-breakpoint-up(lg) {
            padding: $vs-spacer-100 $vs-spacer-100 $vs-spacer-100 $vs-spacer-400;
            font-size: $font-size-6;
            height: 64px;
        }
    }

    &__close-button {
        position: absolute;
        right: 8px;
        top: 6px;

        @include media-breakpoint-up(xl) {
            right: $vs-spacer-100;
            top: $vs-spacer-050;
        }
    }
}

// .autocomplete-suggestions {
//     background-color: #fff;
//     box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
//     cursor: pointer;
//     margin-top: 0.5rem;
//     padding: 1rem;
//     position: absolute;
//     top: 3rem;
//     left: 3rem;
//     width: 91%;
// }
</style>
