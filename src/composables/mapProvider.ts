import { ref, inject, provide, computed, onMounted, onUnmounted } from 'vue';
import type { Ref, InjectionKey } from 'vue';
import gun from '../gun';

interface LocationData {
  lat: number;
  lng: number;
  zoom: number;
}

interface Place {
  id: string;
  title: string;
  position: {
    lat: number;
    lng: number;
  };
}

interface MapContext {
  current: Ref<LocationData | null>;
  places: Ref<Place[]>;
  createLocation: (formData: FormData) => Promise<any>;
}

const mapKey: InjectionKey<MapContext> = Symbol('map');

export function mapProvider(
  instance: string,
) {
  const current = ref<LocationData | null>(null);
  const places = ref<Place[]>([]);
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
    .once((data: any) => {
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
    .once(async (rel: any) => {
      if (rel && gun.lookup) {
        const populated = await gun.lookup('spheres', rel.one);
        if (locationToLocation.includes(rel.type)) {
          gun.get(`location-plugin/${rel.one}`)
          .once((data: any) => {
            if (data) {
              places.value.push({
                id: rel.one,
                title: populated?.title || '',
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

  provide(mapKey, {
    current,
    places,
    createLocation,
  });
}

export function useMap() {
  const data = inject(mapKey);

  if (!data) {
    throw new Error('Composable must have an map provider.');
  }

  return data;
}