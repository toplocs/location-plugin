<template>
  <div class="flex flex-row items-center justify-between">
    
  </div>
</template>
//
<script setup lang="ts">
import { ref, computed } from 'vue';
import { useMap } from '@/composables/mapProvider';

const props = defineProps({
  parentId: String,
});
const { links } = useMap();
</script>
