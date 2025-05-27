<template>
  <Title>Link Settings</Title>

  <LinkForm />
</template>

<script setup lang="ts">
import '../assets/main.css';
import Title from '@/components/common/Title.vue';
import LinkForm from '@/components/forms/LinkForm.vue';
import { linkProvider } from '@/composables/linkProvider';

const props = defineProps({
  parentId: String,
});

linkProvider(props.parentId);
</script>
