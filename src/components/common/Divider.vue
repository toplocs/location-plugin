<template>
  <div
    :class="[
      'bg-gray-300',
      direction === 'vertical' ? 'w-px h-full' : 'h-px w-full',
      'my-1'
    ]"
  ></div>
</template>

<script setup lang="ts">
const props = defineProps<{
  direction?: 'horizontal' | 'vertical'
}>();

// Provide default value
const direction = props.direction || 'horizontal';
</script>