import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAoLvia_5V54PE774ZTCW_j6KJNa9ZUdlg",
  authDomain: "portfolio-e7e60.firebaseapp.com",
  projectId: "portfolio-e7e60",
  storageBucket: "portfolio-e7e60.firebasestorage.app",
  messagingSenderId: "52584848821",
  appId: "1:52584848821:web:c69289373688c4e4328dfc",
  measurementId: "G-YJPX3LJN9W"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
