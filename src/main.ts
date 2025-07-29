import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import gun from './gun';
/*
const chain = gun.get('location_plugin');
chain.once(data => {
	if (!data) {
		const node = chain.put({
			id: 'location_plugin',
			name: 'Location',
			url: 'http://localhost:3007/plugin.js',
		});

		const paths = gun.get('location_plugin/paths');
		//paths.set({ path: 'location', component: 'CommunityView' });

		const slots = gun.get('location_plugin/slots');
		slots.set({ slot: 'InfoView', component: 'Main' });
		slots.set({ slot: 'Settings', component: 'Dialog' });

		const tabs = gun.get('location_plugin/tabs');
		//tabs.set({ value: 'Community', href: 'location' });
		
		node.get('paths').put(paths);
		node.get('slots').put(slots);
		node.get('tabs').put(tabs);
		gun.get('plugins').set(node);

		console.log('Location plugin has been added to the gun plugin list', node);
	}
});
*/

const app = createApp(App)

app.mount('#location-plugin')