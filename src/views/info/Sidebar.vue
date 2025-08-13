<template>
  <div class="p-4 space-y-4">
    <div class="bg-blue-50 border border-blue-200 rounded-lg p-3">
      <h3 class="font-semibold text-blue-900 mb-2">Location Plugin</h3>
      <p class="text-blue-700 text-sm">Parent ID: {{ parentId || 'Not specified' }}</p>
    </div>
    
    <div class="bg-gray-100 border border-gray-300 rounded-lg p-3">
      <div class="w-full h-32 bg-gray-200 rounded flex items-center justify-center">
        <span class="text-gray-500 text-sm">Map placeholder (API key needed)</span>
      </div>
    </div>

    <div class="space-y-2">
      <div class="text-sm text-gray-600">Places:</div>
      <div v-if="places.length === 0" class="text-sm text-gray-400 italic">
        No places found
      </div>
      <div v-for="place in places" :key="place.id" class="bg-white border rounded p-2 text-sm">
        <div class="font-medium">{{ place.title }}</div>
        <div class="text-gray-500">{{ place.position.lat }}, {{ place.position.lng }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mapProvider } from '@/composables/mapProvider';
import { useMap } from '@/composables/mapProvider';

const props = defineProps({
  parentId: String,
});

console.log("Location plugin sidebar: ", props.parentId);
mapProvider(props.parentId ?? 'test');

const { places } = useMap();
</script>