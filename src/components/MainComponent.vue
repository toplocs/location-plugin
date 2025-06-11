<template>
  <MapComponent
    v-model="current"
    :disabled="true"
    :places="places"
  />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import Title from '@/components/common/Title.vue';
import MapComponent from '@/components/MapComponent.vue';
import { useMap } from '@/composables/mapProvider';

const { current, places } = useMap();
</script>
