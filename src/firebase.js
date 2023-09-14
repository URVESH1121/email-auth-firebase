// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnqbUeBCXsiqmzNkJSIVxOTppsb2DAKzI",
  authDomain: "auth-development-3e0d2.firebaseapp.com",
  projectId: "auth-development-3e0d2",
  storageBucket: "auth-development-3e0d2.appspot.com",
  messagingSenderId: "827384080542",
  appId: "1:827384080542:web:ce432e145b6e593fa3b38f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the 'auth' object for Firebase Authentication
const auth = getAuth(app);

// Export the Firebase app instance (optional, depending on your use case)
export { auth, app };
