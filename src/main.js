import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { getAuth, onAuthStateChanged } from "@/configs/firebase";


import App from './App.vue'
import router from './router'
import './assets/style/tailwind.css'
import './assets/style/global.css'

// import './assets/main.css'

import { registerGlobalComponents } from './utils/import'

let app;

onAuthStateChanged(getAuth(), () => {
    if (!app) {
        app = createApp(App)

        registerGlobalComponents(app)

        app.use(createPinia())
        app.use(router)

        app.mount('#app')

    }
})

