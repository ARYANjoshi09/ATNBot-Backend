
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3EPopzoobbwyYlKkq71lQmuouYPjeLVg",
  authDomain: "berabucks-71ead.firebaseapp.com",
  projectId: "berabucks-71ead",
  storageBucket: "berabucks-71ead.appspot.com",
  messagingSenderId: "626628372457",
  appId: "1:626628372457:web:4c0cfbecdc7423aede8d78",
  measurementId: "G-60CTPT9GY0"

  // apiKey: "AIzaSyCL4u2tDZYNaU_oh82l9z7pFDk5v4i23R4",
  // authDomain: "amongthenations-195b6.firebaseapp.com",
  // projectId: "amongthenations-195b6",
  // storageBucket: "amongthenations-195b6.appspot.com",
  // messagingSenderId: "897474413583",
  // appId: "1:897474413583:web:b19c36939f4efe77cdcf7a",
  // measurementId: "G-GNK14T42H3"
};


const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)