import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaN25imxz85f1ijSXiS3qmi_mJidiE5b0",
  authDomain: "satisfying-you-bc1bb.firebaseapp.com",
  projectId: "satisfying-you-bc1bb",
  storageBucket: "satisfying-you-bc1bb.firebasestorage.app",
  messagingSenderId: "551331731904",
  appId: "1:551331731904:web:f108b7234b8b957999d025"
};

const app = initializeApp(firebaseConfig);

const auth_mod = getAuth(app)

const db = initializeFirestore(app, {experimentalForceLongPolling: true});

export { app, auth_mod, db };
