import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process?.env?.NEXT_PUBLIC_apiKey,
  authDomain: process?.env?.NEXT_PUBLIC_authDomain,
  projectId: process?.env?.NEXT_PUBLIC_projectId,
  storageBucket: process?.env?.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process?.env?.NEXT_PUBLIC_messagingSenderId,
  appId: process?.env?.NEXT_PUBLIC_appId,
  measurementId: process?.env?.NEXT_PUBLIC_measurementId,
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
// const analytics = getAnalytics(app);
export { firestore };
