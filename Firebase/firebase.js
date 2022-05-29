import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeA5oU9Q8yjGM1BTDlzpgi3kLpKpKbF4A",
  authDomain: "sentan-member.firebaseapp.com",
  projectId: "sentan-member",
  storageBucket: "sentan-member.appspot.com",
  messagingSenderId: "9686484064",
  appId: "1:9686484064:web:916af9643027c331b26f05",
  measurementId: "G-SR4H2Q12E8",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
