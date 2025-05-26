import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import gun from './gun';

const chain = gun.get('link_plugin');
chain.once(data => {
	if (!data) {
		const node = chain.put({
			id: 'link_plugin',
			name: 'Link',
			url: 'http://localhost:3005/assets/plugin.js',
		});

		const slots = gun.get('link_plugin/slots');
		slots.set({ slot: 'InfoView', component: 'Sidebar' });
		slots.set({ slot: 'Settings', component: 'Sidebar' });
		
		node.get('slots').put(slots);
		gun.get('plugins').set(node);

		console.log('Link plugin has been added to the gun plugin list', node);
	}
});


const app = createApp(App)

app.mount('#link-plugin')