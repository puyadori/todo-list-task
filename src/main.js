import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.min.css'


import store from './store/index.js'

// const store = createStore({
//     state(){
//       return{
//         count: 0
//       }
//     }
//   })
  

const app=createApp(App)
app.use(router).use(store)
app.mount('#app')
