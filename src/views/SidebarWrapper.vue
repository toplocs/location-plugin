<template>
  <Sidebar :parentId="props.parentId" />
</template>

<script setup lang="ts">
import Sidebar from '@/components/SideBar.vue';
import { mapProvider } from '@/composables/mapProvider';

const props = defineProps({
  parentId: String,
});

mapProvider(props.parentId);
</script>
