// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: 'AIzaSyCvkX26L4YS0lizKeJhcLE5fJdRdrZp4B8',
  authDomain: 'team-13-project-413be.firebaseapp.com',
  databaseURL:
    'https://team-13-project-413be-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'team-13-project-413be',
  storageBucket: 'team-13-project-413be.appspot.com',
  messagingSenderId: '849787238311',
  appId: '1:849787238311:web:9cb6055cfc3ae801272882',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
