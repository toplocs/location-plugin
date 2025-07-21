<template>
  <MainComponent />
</template>

<script setup lang="ts">
import MainComponent from '@/components/MainComponent.vue';
import { mapProvider } from '@/composables/mapProvider';

const props = defineProps({
  parentId: String,
});

mapProvider(props.parentId);
</script>
