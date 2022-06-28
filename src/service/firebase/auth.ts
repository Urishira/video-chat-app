import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCA8yGuaaswKLs6F1syqpaQT2B96SYjzM4",
  authDomain: "video-chat-app-8542d.firebaseapp.com",
  projectId: "video-chat-app-8542d",
  storageBucket: "video-chat-app-8542d.appspot.com",
  messagingSenderId: "621898210979",
  appId: "1:621898210979:web:d5a934b666481ecd4b6916",
  measurementId: "G-D66NN144KK",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const signInWithgooglePopup = () => {
  return signInWithPopup(auth, provider)
    .then((result) => result)
    .catch((err) => err);
};
