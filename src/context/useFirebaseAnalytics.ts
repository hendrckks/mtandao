// src/hooks/useFirebaseAnalytics.ts
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from '../firebaseConfig';
import { logEvent } from 'firebase/analytics';

export const useFirebaseAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    logEvent(analytics, 'page_view', {
      page_path: location.pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location]);

  const logCustomEvent = (eventName: string, eventParams?: object) => {
    logEvent(analytics, eventName, eventParams);
  };

  return { logCustomEvent };
};
