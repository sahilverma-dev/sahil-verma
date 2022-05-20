import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process?.env?.apiKey,
//   authDomain: process?.env?.authDomain,
//   projectId: process?.env?.projectId,
//   storageBucket: process?.env?.storageBucket,
//   messagingSenderId: process?.env?.messagingSenderId,
//   appId: process?.env?.appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBtP2zw0rwI78-lyM3zgOebapAbb5_zUUk",
  authDomain: "portfolio-b23c5.firebaseapp.com",
  projectId: "portfolio-b23c5",
  storageBucket: "portfolio-b23c5.appspot.com",
  messagingSenderId: "545823328957",
  appId: "1:545823328957:web:3afc7fada56196816ac5d4",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };
