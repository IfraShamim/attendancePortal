import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

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
// Signup..
let signup = document.getElementById('signup');
signup && signup.addEventListener('click', (e) => {
  var userName = document.getElementById('userName').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var repeatPassword = document.getElementById('repeatPassword').value;
  var fullName = `${userName}`;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      set(ref(database, 'users/' + user.uid), {
        userName: userName,
        email: email,
        password : password,
        repeatPassword : repeatPassword,
      })
      document.getElementById('userName').value = "";
      document.getElementById('email').value = "";
      document.getElementById('password').value = "";
      document.getElementById('repeatPassword').value = "";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
})