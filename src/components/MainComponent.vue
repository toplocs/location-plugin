<template>
  <MapComponent
    v-model="current"
    :disabled="true"
  />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import Title from '@/components/common/Title.vue';
import MapComponent from '@/components/MapComponent.vue';
import { useMap } from '@/composables/mapProvider';

const { current } = useMap();
</script>
