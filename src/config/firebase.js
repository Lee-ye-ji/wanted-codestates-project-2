// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// import firebase from 'firebase';
// import 'firebaseInstance/storage';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGEING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// firebaseConfig 정보로 firebase 시작
// const app = initializeApp(firebaseConfig);
// const storage = app.storage();
// const analytics = getAnalytics(app);
// firebase.initializeApp(firebaseConfig);
// const storage = firebase.storage();
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;
