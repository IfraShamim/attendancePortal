import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getDatabase, ref , update } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
import { getAuth,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDq1oo3II642TYEEg5wABfWXyLlzCJ6kpg",
    authDomain: "attendanceportal-8e2ca.firebaseapp.com",
    databaseURL: "https://attendanceportal-8e2ca-default-rtdb.firebaseio.com",
    projectId: "attendanceportal-8e2ca",
    storageBucket: "attendanceportal-8e2ca.appspot.com",
    messagingSenderId: "316518349930",
    appId: "1:316518349930:web:dc9879abe63dfdb52a5e13"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
// Login...
login.addEventListener('click', (e) => {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const dt = new Date();
        update(ref(database, 'users/' + user.uid), {
          last_login: dt
        })
        document.getElementById('email').value = "";
      document.getElementById('password').value = "";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});