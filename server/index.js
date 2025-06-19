const express = require('express');
const path = require('path');
const cors = require('cors');
const http = require('http');
const https = require('https');
const fs = require('fs');
const dotenv = require('dotenv').config();
const Gun = require('gun');

const port = Number(process.env.PORT || 8765);
const useSSL = process.env.USE_SSL === 'true';
const privkey = process.env.PRIVKEY;
const fullchain = process.env.FULLCHAIN;
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: ['https://toplocs.com', 'http://localhost:5173', 'http://localhost:5174'],
  optionsSuccessStatus: 200
}));

let server;
if (useSSL) {
  const sslOptions = {
    key: fs.readFileSync(privkey),
    cert: fs.readFileSync(fullchain)
  };

  server = https.createServer(sslOptions, app);
} else {
  server = http.createServer(app);
}

const gun = Gun({ web: server });

server.listen(port, () => {
  console.log(`Server with Gun running on ${useSSL ? 'https' : 'http'}://localhost:${port}`);
});

// initialize plugin to the gun eco
const chain = gun.get('location_plugin');
chain.once(data => {
  if (!data) {
    const node = chain.put({
      id: 'location_plugin',
      name: 'Location',
      url: 'http://localhost:3007/assets/plugin.js',
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

    console.warn('🧩 Location plugin has been added to the gun plugin list');
  }
});
