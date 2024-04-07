import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDs6gqFMs-WkQbInXetcU_-Zmf2PW50_Rc",
  authDomain: "login-5dd90.firebaseapp.com",
  projectId: "login-5dd90",
  storageBucket: "login-5dd90.appspot.com",
  messagingSenderId: "118179120438",
  appId: "1:118179120438:web:8105afd780f8601edadf97",
  measurementId: "G-CXV4EZQL2Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
