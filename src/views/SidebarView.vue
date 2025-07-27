<template>

</template>

<script setup lang="ts">
import Sidebar from '@/components/SideBar.vue';
import { mapProvider } from '@/composables/mapProvider';

const props = defineProps({
  parentId: String,
});

console.log("SideBar instance: ", props.parentId);
mapProvider(props.parentId ?? 'test');
</script>
