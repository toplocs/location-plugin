<template>
  <div class="flex flex-row items-center justify-between">
    <!-- Sidebar content for Location Plugin -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useMap } from '@/composables/mapProvider';

const props = defineProps({
  parentId: String,
});
const { places } = useMap();
</script>
