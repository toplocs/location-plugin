<template>
  <p>Map Plugin with Googlemaps</p>
  <MapComponent />
</template>

<script setup lang="ts">
import MapComponent from '@/components/MapComponent.vue';

const props = defineProps({
  parentId: String,
});
</script>
