<template>
  <Sidebar :parentId="props.parentId" />
</template>

<script setup lang="ts">
import Sidebar from '@/components/SideBar.vue';
import { linkProvider } from '@/composables/linkProvider';

const props = defineProps({
  parentId: String,
});

linkProvider(props.parentId);
</script>
