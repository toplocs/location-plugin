<template>
  <div class="max-w-xl mx-auto">
    <MainComponent />
  </div>
</template>

<script setup lang="ts">
import './assets/main.css';
import MapForm from '@/components/forms/MapForm.vue';
import MainComponent from '@/components/MainComponent.vue';
import { mapProvider } from '@/composables/mapProvider';

mapProvider('0aa63ffe-5452-4057-bcd5-8501a1862cee');
</script>
