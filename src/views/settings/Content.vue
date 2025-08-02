<template>
  <section class="mb-4">
    <Title>Map Settings</Title>
    <Divider />
  </section>

  <section class="mb-4">
    <MapForm />
  </section>
</template>

<script setup lang="ts">
import Title from '@/components/common/Title.vue';
import Divider from '@/components/common/Divider.vue';
import MapForm from '@/components/forms/MapForm.vue';
import { mapProvider } from '@/composables/mapProvider';

const props = defineProps({
  parentId: String,
});

console.log("Location plugin settings content loaded: ", props.parentId);

// Call mapProvider immediately to set up the provide/inject context
mapProvider(props.parentId ?? 'test');
</script>