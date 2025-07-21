import { ref, inject, provide, computed, onMounted, onUnmounted } from 'vue';
import gun from '../services/gun';

export function mapProvider(
  instance: string,
) {
  const current = ref(null);
  const places = ref([]);
  const locationToLocation = ['in']; //über gun lösen

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

    // get relations
    gun.get(instance)
    .get('relations')
    .map()
    .once(async (rel) => {
      if (rel) {
        const populated = await gun.lookup('spheres', rel.one);
        if (locationToLocation.includes(rel.type)) {
          gun.get(`location-plugin/${rel.one}`)
          .once((data) => {
            if (data) {
              places.value.push({
                id: rel.one,
                title: populated.title,
                position: {
                  lat: Number(data.lat),
                  lng: Number(data.lng),
                },
              });
            }
          });
        }
      }
    });
  });

  provide('map', {
    current,
    places,
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