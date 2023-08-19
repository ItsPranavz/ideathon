import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCFPZ1bRfj6fAroMSKI8WhVoiM6yT4ecXo",
  authDomain: "fir-9-tutorial-fbfd1.firebaseapp.com",
  projectId: "fir-9-tutorial-fbfd1",
  storageBucket: "fir-9-tutorial-fbfd1.appspot.com",
  messagingSenderId: "263906680188",
  appId: "1:263906680188:web:68b47a396e30757ce918f9"
};

const app = initializeApp(firebaseConfig);
const firebase = getFirestore(app);
export default firebase;