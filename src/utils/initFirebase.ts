import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const initFirebase = () => {
  // TODO set all firebase config with .env variables
  const firebaseConfig = {
    apiKey: 'AIzaSyA1OLgbFbE94bpC9p_xnHq0aIgGeqY3h3g',
    authDomain: 'naboo-test-tech.firebaseapp.com',
    projectId: 'naboo-test-tech',
    storageBucket: 'naboo-test-tech.appspot.com',
    messagingSenderId: '623847519924',
    appId: '1:623847519924:web:72bbfc82e94e08522d09e1',
    measurementId: 'G-DVXTWTHR94',
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  return {
    auth,
  };
};

export default initFirebase;
