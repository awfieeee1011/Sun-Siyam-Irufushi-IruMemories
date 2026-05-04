// auth.js

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function for user signup
export const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

// Function for user login
export const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

// Function to monitor authentication state
export const onAuthChange = (callback) => {
    return onAuthStateChanged(auth, callback);
};

// Check user role (example based on email domains)
export const getUserRole = (user) => {
    if (!user) return null;
    const emailParts = user.email.split('@');
    const domain = emailParts[1];
    if (domain === 'admin.example.com') {
        return 'admin';
    } else {
        return 'user';
    }
};