import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getDatabase, ref, update,onValue } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
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
    let addDataButton = document.getElementById("addDataButton");
    addDataButton && addDataButton.addEventListener('click',()=>{
    var rollNo = document.getElementById('rollNo').value;
    var classTimings = document.getElementById('classTimings').value;
    var schedule = document.getElementById('schedule').value;
    var teacherName = document.getElementById('teacherName').value;
    var sectionName = document.getElementById('sectionName').value;
    var courseName = document.getElementById('courseName').value;
    var batchNumber = document.getElementById('batchNumber').value;
    const uniqueId = auth.currentUser.uid;
    update(ref(database, 'users/' + rollNo), {
        classTimings: classTimings,
        schedule: schedule,
        teacherName: teacherName,
        sectionName: sectionName,
        courseName: courseName,
        batchNumber: batchNumber,
    })
    .then((resolve) => {
        console.log(`successfully Login`);
    }).catch((error) => {
        console.log("not Successfully");
    })
    // document.getElementById('classTimings').value = "";
    // document.getElementById('schedule').value = "";
    // document.getElementById('teacherName').value = "";
    // document.getElementById('sectionName').value = "";
    // document.getElementById('courseName').value = "";
    // document.getElementById('batchNumber').value = "";
});
let readData = document.getElementById("readData");
readData && readData.addEventListener('click',()=>{
    var rollNo = document.getElementById('rollNo').value;
    var classTimings = document.getElementById('classTimings').value;
    var schedule = document.getElementById('schedule').value;
    var teacherName = document.getElementById('teacherName').value;
    var sectionName = document.getElementById('sectionName').value;
    var courseName = document.getElementById('courseName').value;
    var batchNumber = document.getElementById('batchNumber').value;
const studentRef = ref(database, "users/" + rollNo);
onValue(studentRef, (snapshot) => {
  const data = snapshot.val();
  if (data) {
    document.getElementById('classTimings').value = data.classTimings || "";
    document.getElementById('schedule').value = data.schedule || "";
    document.getElementById('teacherName').value = data.teacherName || "";
    document.getElementById('sectionName').value = data.sectionName || "";
    document.getElementById('courseName').value = data.courseName || "";
    document.getElementById('batchNumber').value = data.batchNumber || "";
  } else {
    // Handle the case where the data doesn't exist
    alert("Data does not exist of this Roll Number..:", rollNo);
  }
}, (error) => {
  // Handle any database read errors here
  alert("Error reading data:", error);
});
});
// let updateData = document.getElementById("updateData");
// updateData && updateData.addEventListener('click',()=>{
// var rollNo = document.getElementById('rollNo').value;
// var classTimings = document.getElementById('classTimings').value;
// var schedule = document.getElementById('schedule').value;
// var teacherName = document.getElementById('teacherName').value;
// var sectionName = document.getElementById('sectionName').value;
// var courseName = document.getElementById('courseName').value;
// var batchNumber = document.getElementById('batchNumber').value;
// var attendance = document.getElementById('attendance').value;
// const uniqueId = auth.currentUser.uid;
// update(ref(database, 'users/' + rollNo), {
//     classTimings: classTimings,
//     schedule: schedule,
//     teacherName: teacherName,
//     sectionName: sectionName,
//     courseName: courseName,
//     batchNumber: batchNumber,
//     attendance:attendance
// })
// .then((resolve) => {
//     console.log(`successfully Login`);
// }).catch((error) => {
//     console.log("not Successfully");
// })
// document.getElementById('classTimings').value = "";
// document.getElementById('schedule').value = "";
// document.getElementById('teacherName').value = "";
// document.getElementById('sectionName').value = "";
// document.getElementById('courseName').value = "";
// document.getElementById('batchNumber').value = "";
// });