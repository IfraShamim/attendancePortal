import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

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
document.getElementById("submit").onclick = function () {
    var name = document.getElementById('name').value;
    var fatherName = document.getElementById('fatherName').value;
    var rollNo = document.getElementById('rollNo').value;
    var contactNo = document.getElementById('contactNo').value;
    var cnicNo = document.getElementById('cnicNo').value;
    var CourseName = document.getElementById('CourseName').value;

console.log("Pass");
    // const user = userCredential.user;
    const uniqueId = auth.currentUser.uid;
    update(ref(database, 'users/' + rollNo), {
        name : name,
        fatherName : fatherName,
        rollNo : rollNo,
        contactNo : contactNo,
        cnicNo : cnicNo,
        CourseName : CourseName
    })
    console.log(uniqueId.rollNo);
    document.getElementById('name').value = "";
    document.getElementById('fatherName').value = "";
    document.getElementById('rollNo').value = "";
    document.getElementById('contactNo').value = "";
    document.getElementById('cnicNo').value = "";
    document.getElementById('CourseName').value = "";
};