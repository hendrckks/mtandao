import { useState, useEffect } from 'react';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { Analytics, getAnalytics, logEvent } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyBIEA3YKQe5VmgO01H-UlvSG6FhJuVjI5M',
  authDomain: 'dev-cook.web.app',
  projectId: 'dev-cook',
  storageBucket: 'dev-cook.appspot.com',
  messagingSenderId: '72819522086',
  appId: '1:72819522086:web:dcf557a74a481f5808c4e7',
  measurementId: 'G-4372MR8P8M',
};

export const useFirebase = () => {
  const [app, setApp] = useState<FirebaseApp | null>(null);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);

  useEffect(() => {
    const initFirebase = async () => {
      try {
        const firebaseApp = initializeApp(firebaseConfig);
        setApp(firebaseApp);

        const firebaseAnalytics = getAnalytics(firebaseApp);
        setAnalytics(firebaseAnalytics);

        logEvent(firebaseAnalytics, 'app_initialized');
      } catch (error) {
        console.error('Error initializing Firebase:', error);
      }
    };

    initFirebase();
  }, []);

  return { app, analytics };
};
