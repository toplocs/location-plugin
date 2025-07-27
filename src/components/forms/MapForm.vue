<template>
  <form
    ref="form"
    @submit.prevent="onSubmit"
    class="space-y-2"
  >
    <Title>
      Set the location point
    </Title>

    <Callout v-if="errorMessage" color="red">
      {{ errorMessage }}
    </Callout>
    <Callout v-if="successMessage" color="green">
      {{ successMessage }}
    </Callout>


    <MapComponent v-model="location" />

    <SubmitButton className="w-full mt-4">
      Submit
    </SubmitButton>
  </form>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Title from '@/components/common/Title.vue';
import TextInput from '@/components/common/TextInput.vue';
import SubmitButton from '@/components/common/SubmitButton.vue';
import Callout from '@/components/common/Callout.vue';
import MapComponent from '@/components/MapComponent.vue';
import { useMap } from '@/composables/mapProvider';

interface LocationValue {
  lat: number;
  lng: number;
  zoom: number;
}

const { createLocation } = useMap();
const form = ref<HTMLFormElement | null>(null);
const errorMessage = ref('');
const successMessage = ref('');
const location = ref<LocationValue | null>(null);

const onSubmit = async () => {
  try {
    if (!location.value) throw new Error('No location was selected')
    if (errorMessage.value.length) return;
    const formData = new FormData(form.value ?? undefined);
    formData.append('lat', String(location.value.lat));
    formData.append('lng', String(location.value.lng));
    formData.append('zoom', String(location.value.zoom));
    const node = await createLocation(formData);
    successMessage.value = 'The location has been saved successfully!';

    form.value?.reset();
  } catch (error: any) {
    console.error(error);
    errorMessage.value = error?.response?.data || 'An error occurred';
  }
}

onMounted(() => {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        location.value = {
          lat: pos.coords?.latitude,
          lng: pos.coords?.longitude,
          zoom: 15,
        };
      }, (error) => {
      console.warn('Geolocation error:', error);
    });
  } else {
    console.warn('Geolocation not supported');
  }
});
</script>
