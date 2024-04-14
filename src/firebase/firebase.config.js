// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDABbLB8Dg8LLRMa6RKxA3hGCi5Vq1_fcw',
  authDomain: 'homes-cde8f.firebaseapp.com',
  projectId: 'homes-cde8f',
  storageBucket: 'homes-cde8f.appspot.com',
  messagingSenderId: '890414971153',
  appId: '1:890414971153:web:7a1f71a47ab037f3e974b0',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default auth
