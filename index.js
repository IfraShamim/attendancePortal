import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getDatabase, ref , update } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
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
let marked = document.getElementById("marked");
marked && marked.addEventListener('click',(userCredential)=>{
    var rollNo = document.getElementById('rollNo').value;
    var markAttend = document.getElementById('markAttend').value;
    // if(rollNo == users.rollNo){
    //     console.log("true");
    // }
    // else{
    //     console.log("false");
    // }
    const user = userCredential.user;
    update(ref(database, 'users/' + rollNo), {
        markAttend : markAttend,
    })
    document.getElementById('rollNo').value = "";
    document.getElementById('markAttend').value = "";

    })