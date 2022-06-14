
import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAsMXs8J_Lgj1N5N4jPMbYwwAXVmmRysyg",
  authDomain: "instagram-clone-f9276.firebaseapp.com",
  projectId: "instagram-clone-f9276",
  storageBucket: "instagram-clone-f9276.appspot.com",
  messagingSenderId: "719743440175",
  appId: "1:719743440175:web:565f798ba092b5df80fdda",
  measurementId: "G-GBTRSFC5LJ"
};


const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

