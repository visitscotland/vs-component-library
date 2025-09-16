<template>
    <h1>This is federated search.</h1>
    <p>Is loading: {{ federatedSearchStore.isLoading }}</p>
</template>

<script setup lang="ts">
import useFederatedSearchStore from '@/stores/federatedSearch.store';

const federatedSearchStore = useFederatedSearchStore();
</script>
