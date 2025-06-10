import { ref, inject, provide, computed, onMounted, onUnmounted } from 'vue';
import gun from '../gun';

export function mapProvider(
  instance: string,
) {
  const current = ref(null);
  const children = ref([]);

  const createLocation = async (formData: FormData) => {
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    const node = gun.get(`location-plugin/${instance}`).put(data); //remove and then add again
    gun.get('locations').set(node);

    return node;
  }

  onMounted(async () => {
    gun.get(`location-plugin/${instance}`)
    .once((data) => {
      if (data) {
        current.value = {
          lat: Number(data.lat),
          lng: Number(data.lng),
          zoom: Number(data.zoom),
        }
      }
    });

    gun.get('relations')
    .get(instance)
    .map()
    .once((data) => {
      if (data) {
        console.log(data);
        const exists = children.value.some(x => x.href === data.href);
        if (!exists) {
          children.value.push(data);
        }
      }
    });
  });

  provide('map', {
    current,
    children,
    createLocation,
  });
}

export function useMap() {
  const data = inject('map');

  if (!data) {
    throw new Error('Composable must have an map provider.');
  }

  return data;
}