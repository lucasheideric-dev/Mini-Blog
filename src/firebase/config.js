import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPyc_1JRNNgXliUmEizjwmBUmcvHMCN8Y",
  authDomain: "miniblog-c9d99.firebaseapp.com",
  projectId: "miniblog-c9d99",
  storageBucket: "miniblog-c9d99.firebasestorage.app",
  messagingSenderId: "314736695026",
  appId: "1:314736695026:web:079d09e69100f74f15e26b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };