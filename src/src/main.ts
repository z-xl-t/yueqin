import 'normalize.css'
import './assets/main.css'
// Import Quasar css
import 'quasar/src/css/index.sass'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar, Notify } from 'quasar'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(Quasar, {
  plugins: { Notify } // import Quasar plugins and add here
})
app.use(createPinia())
app.use(router)

app.mount('#app')
