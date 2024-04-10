import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC1TqDa-subE34cSXfmKt_FS46RjvitvHM",
  authDomain: "water-monitoring-bracelet.firebaseapp.com",
  databaseURL: "https://water-monitoring-bracelet-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "water-monitoring-bracelet",
  storageBucket: "water-monitoring-bracelet.appspot.com",
  messagingSenderId: "154543313054",
  appId: "1:154543313054:web:45400cf560c97986fd6b8f"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {database}