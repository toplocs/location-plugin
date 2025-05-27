<template>
  <span
    class="flex flex-row items-center justify-between p-2 w-full border-b border-gray-100 dark:border-gray-700 hover:bg-blue-50 text-blue-500 dark:hover:bg-gray-800 transition duration-150 ease-in-out"
  >
    {{ link?.title || link?.href }}
    
    <TrashIcon
      class="w-6 h-6 text-blue-500 cursor-pointer"
      @click="handleRemove"
    />
  </span>
</template>

<script setup lang="ts">
import { TrashIcon } from '@heroicons/vue/24/outline';
import { useLinks } from '@/composables/linkProvider';

const props = defineProps({
  link: {
    type: Object,
    required: true,
  },
});
const { removeLink } = useLinks();

const handleRemove = async () => {
  await removeLink(props.link?.id);
}

</script>