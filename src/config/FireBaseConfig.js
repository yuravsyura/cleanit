import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyDwB0awWo46AcYu2Oma_fJRFXlqn1Nntyo",
    authDomain: "clean-work-c52bb.firebaseapp.com",
    projectId: "clean-work-c52bb",
    storageBucket: "clean-work-c52bb.appspot.com",
    messagingSenderId: "57801915620",
    appId: "1:57801915620:web:f65c3a1e001e25896380f1"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

