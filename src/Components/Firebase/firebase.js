// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMRszoBuDNl9Avct4RKqEzr7IQ4YcHtZg",
  authDomain: "bigfeetzy.firebaseapp.com",
  projectId: "bigfeetzy",
  storageBucket: "bigfeetzy.appspot.com",
  messagingSenderId: "427383188439",
  appId: "1:427383188439:web:9c701abaf7bc7a16607992"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;