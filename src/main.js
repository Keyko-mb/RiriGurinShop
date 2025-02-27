import './assets/main.css'

import { createApp } from 'vue'
import { initializeApp } from "firebase/app";
import App from './App.vue'
import router from './router'

const app = createApp(App)

const firebaseConfig = {
  apiKey: "AIzaSyCywYnyg_VGgXraFLNl-_KL0_c_mGW1ZjI",
  authDomain: "sample-firebase-ai-app-12744.firebaseapp.com",
  projectId: "sample-firebase-ai-app-12744",
  storageBucket: "sample-firebase-ai-app-12744.firebasestorage.app",
  messagingSenderId: "847143114704",
  appId: "1:847143114704:web:da49ae4e298365925c8bd5"
};

initializeApp(firebaseConfig);

app.use(router)
app.use(firebaseConfig)

app.mount('#app')
