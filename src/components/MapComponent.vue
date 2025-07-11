<template>
  <GoogleMap
    mapId="3d8941b79754f0de"
    ref="mapRef"
    :api-key="apiKey"
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="15"
    :streetViewControl="false"
    @zoom_changed="setZoom"
    @click="setMarker"
  >
    <AdvancedMarker
      :options="marker"
      :pin-options="pinOptions"
    />

    <AdvancedMarker
      v-for="opt of places"
      :key="opt.id"
      :options="opt"
    >
      <InfoWindow>
        <div class="flex flex-col gap-2">
          <b class="font-bold">{{ opt.title }}</b>
          <router-link :to="`/sphere/${opt.id}`">
            <a class="cursor-pointer text-blue-500">
              Go to this location
            </a>
          </router-link>
        </div>
      </InfoWindow>
    </AdvancedMarker>
  </GoogleMap>
</template>

//
<script setup>
import { ref, watch } from 'vue';
import { GoogleMap, AdvancedMarker, InfoWindow } from 'vue3-google-map'

const apiKey = import.meta.env.VITE_MAPS_API_KEY;
const pinOptions = { background: '#fb923c' };

const props = defineProps({
  modelValue: {
    type: Object,
    required: false
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  places: {
    type: Array,
    required: false,
  }
});
const emit = defineEmits(['update:modelValue']);

const mapRef = ref(null)
const center = { lat: 0, lng: 0 }
const zoom = ref(15);
const marker = ref({ position: center, title: 'Point zero' });

const setZoom = (e) => {
  if (!props.disabled) {
    zoom.value = mapRef.value?.map?.getZoom();
    emit('update:modelValue', {
      ...marker.value?.position,
      zoom: zoom.value,
    });
  }
}

const setMarker = (e) => {
  if (!props.disabled) {
    marker.value = {
      position: {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      },
      title: 'Location-Plugin'
    };
    emit('update:modelValue', {
      ...marker.value?.position,
      zoom: zoom.value,
    });
  }
}

const stop = watch(() => props.modelValue, (newValue) => {
  if (props.modelValue) {
    mapRef.value?.map.setCenter(props.modelValue);
    mapRef.value?.map.setZoom(props.modelValue.zoom);
    marker.value = {
      position: { ...props.modelValue },
      title: 'Location-Plugin'
    };
    emit('update:modelValue', {
      ...marker.value?.position,
      zoom: zoom.value,
    });
  }
  stop();
});
</script>
