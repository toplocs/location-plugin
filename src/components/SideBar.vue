<template>
  <div class="flex flex-row items-center justify-between">
    <Title>Links</Title>
    <Dialog>
      <template #trigger="{ openDialog }">
        <ActionButton
          title="Add"
          @click="openDialog"
        />
      </template>

      <template #content="{ closeDialog }">
        <LinkDialog
          :closeDialog="(x) => {
            closeDialog()
          }"
        />
      </template>
    </Dialog>
  </div>

  <div 
    v-for="link of links"
    :key="link"
    class="mb-2 dark:text-white"
  > • 
    <a
      :key="link"
      :href="link"
      target="_blank"
      class="text-blue-500 hover:text-blue-700 underline"
    > {{ link }}
    </a>
  </div>
</template>

<script setup lang="ts">
import '../assets/main.css';
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import Title from './common/Title.vue';
import ActionButton from '@/components/common/ActionButton.vue';
import Dialog from '@/components/common/Dialog.vue';
import LinkDialog from '@/components/dialog/LinkDialog.vue';
import { useLinks } from '@/composables/linkProvider';

const props = defineProps({
  parentId: String,
})
const { links } = useLinks();
</script>
