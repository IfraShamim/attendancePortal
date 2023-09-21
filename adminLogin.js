import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getDatabase, set,ref ,update } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

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
login.addEventListener("click", () => {  
insertData();
function insertData() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let uniqueId = auth.currentUser.uid;
    // console.log(uniqueId.email);
    if(email === "ifra@gmail.com" && password === "Ifra@7890"){
        alert("Hello Admin");
        set(ref(database, "admin/" + uniqueId), {
            email:email,
            password:password,
        })
        const dt = new Date();
      update(ref(database, 'admin/' + uniqueId), {
        last_login: dt
      })
    }
    else{
        alert("Not a Admin.."); 
    }}})
//     console.log(uniqueId);
//     set(ref(database, "admin/" + uniqueId), {
//         email:email,
//         password:password,
//     }).then((resolve) => {
//       console.log("load Successfully");
  
//     }).catch((error) => {
//     //   console.log("Unload");
//       alert("Unload")
//     })
//   }})