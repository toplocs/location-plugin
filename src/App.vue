<template>
  <div className="m-8 max-w-[200px]">
    <SidebarWrapper parentId="test" />
  </div>
  <SettingsWrapper parentId="test" />
</template>

<script setup lang="ts">
import './assets/main.css';
import SidebarWrapper from './views/SidebarWrapper.vue';
import SettingsWrapper from './views/SettingsWrapper.vue';
</script>
