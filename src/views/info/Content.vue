<template>
  <MainComponent />
</template>

<script setup lang="ts">
import MainComponent from '@/components/MainComponent.vue';
import { mapProvider } from '@/composables/mapProvider';

const props = defineProps({
  parentId: String,
});

console.log("Location plugin info content loaded: ", props.parentId);

// Call mapProvider immediately to set up the provide/inject context
mapProvider(props.parentId ?? 'test');
</script>