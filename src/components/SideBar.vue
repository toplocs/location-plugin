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
        <LinkForm />

        <SubmitButton
          @click.stop="closeDialog(false)"
          className="w-full mt-1"
        > Close
        </SubmitButton>
      </template>
    </Dialog>
  </div>

  <div 
    v-for="link of links"
    :key="link"
    class="mb-2 dark:text-white"
  > • 
    <a
      :key="link.href"
      :href="link.href"
      target="_blank"
      class="cursor-pointer text-blue-500 hover:text-blue-700 underline"
    > {{ link.title || link.href }}
    </a>
  </div>
</template>
//
<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import Title from './common/Title.vue';
import ActionButton from '@/components/common/ActionButton.vue';
import Dialog from '@/components/common/Dialog.vue';
import SubmitButton from '@/components/common/SubmitButton.vue';
import LinkForm from '@/components/forms/LinkForm.vue';
import { useMap } from '@/composables/mapProvider';

const props = defineProps({
  parentId: String,
});
const { links } = useMap();
</script>
