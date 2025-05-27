import { ref, inject, provide, computed, onMounted, onUnmounted } from 'vue';
import gun from '../gun';

export function linkProvider(
  instance: string,
) {
  const links = ref([]);

  const createLink = async (formData: FormData) => {
    const id = crypto.randomUUID();
    const data = Object.fromEntries(formData.entries());
    data.id = id;
    links.value.push(data);

    const node = gun.get(`link-plugin/${id}`).put(data);
    gun.get('links').get(instance).set(node);

    return node;
  }


  const removeLink = async (id: string) => {
    const node = gun.get(`link-plugin/${id}`);
    node.then(() => {
      gun.get('links').get(instance).unset(node);
    });
  }

  onMounted(() => {
    gun.get('links')
    .get(instance)
    .map()
    .once((data) => {
      if (data) {
        const exists = links.value.some(x => x.href === data.href);
        if (!exists) {
          links.value.push(data);
        }
      }
    });
  });

  onUnmounted(() => {
    gun.get('links')
    .get(instance)
    .map()
    .off();
  });

  provide('link', {
    links,
    createLink,
    removeLink,
  });
}

export function useLinks() {
  const data = inject('link');

  if (!data) {
    throw new Error('Composable must have an link provider.');
  }

  return data;
}