import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCdPPHEJc9F5uHsQzsJPayM7J7eU6Oouto",
    authDomain: "blog-5693c.firebaseapp.com",
    projectId: "blog-5693c",
    storageBucket: "blog-5693c.appspot.com",
    messagingSenderId: "669568799622",
    appId: "1:669568799622:web:2bc1abc2888cefcf9cd207"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);