<template>
  <div class="max-w-md mx-auto">
    <MainComponent />
    <MapForm />
  </div>
</template>

<script setup lang="ts">
import './assets/main.css';
import MapForm from '@/components/forms/MapForm.vue';
import MainComponent from '@/components/MainComponent.vue';
import { mapProvider } from '@/composables/mapProvider';

mapProvider('Test');
</script>
