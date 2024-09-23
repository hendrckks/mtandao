// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyBIEA3YKQe5VmgO01H-UlvSG6FhJuVjI5M',
  authDomain: 'dev-cook.firebaseapp.com',
  projectId: 'dev-cook',
  storageBucket: 'dev-cook.appspot.com',
  messagingSenderId: '72819522086',
  appId: '1:72819522086:web:dcf557a74a481f5808c4e7',
  measurementId: 'G-4372MR8P8M',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
