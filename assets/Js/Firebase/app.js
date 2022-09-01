
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBufq0NbM3P_9ibom_P2hPkdOdeQxxBvgE",
    authDomain: "projeto-stranger-things-edb87.firebaseapp.com",
    projectId: "projeto-stranger-things-edb87",
    storageBucket: "projeto-stranger-things-edb87.appspot.com",
    messagingSenderId: "397076400352",
    appId: "1:397076400352:web:af6995457a6d2d01916885"
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
	
  export default app