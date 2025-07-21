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

mapProvider(props.parentId);
</script>
