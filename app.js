function login(){

let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

if(user === "" || pass === ""){
document.getElementById("error").innerHTML = "Please fill all fields";
return;
}

localStorage.setItem("user", user);

// show home
document.getElementById("loginPage").style.display = "none";
document.getElementById("homePage").style.display = "block";

document.getElementById("welcomeUser").innerHTML = "Welcome, " + user ;
}

function startApp(){

document.getElementById("homePage").style.display = "none";
document.getElementById("mainPage").style.display = "block";

let user = localStorage.getItem("user");
document.getElementById("userDisplay").innerHTML = "Welcome, " + user;
}

function logout(){
localStorage.removeItem("user");

document.getElementById("mainPage").style.display = "none";
document.getElementById("homePage").style.display = "none";
document.getElementById("loginPage").style.display = "block";
}

function getRec(){

let id = document.getElementById("sid").value;
let role = document.getElementById("career").value;

if(id == "" || role == ""){
document.getElementById("result").innerHTML = "Please enter Student ID and select career role";
return;
}

document.getElementById("result").innerHTML = "Analyzing...";

setTimeout(() => {

let data = {
"Data Scientist": {
skills: "Python, Machine Learning, Statistics",
courses: "ML Basics, Pandas, Data Science Intro",
values: [5,4,3]
},
"Web Developer": {
skills: "HTML, CSS, JavaScript",
courses: "Web Development, Frontend Basics, JS Advanced",
values: [5,4,3]
},
"Data Analyst": {
skills: "Excel, SQL, Python",
courses: "Data Analysis, SQL Basics, Excel Advanced",
values: [5,4,3]
},
"AI Engineer": {
skills: "Python, Deep Learning, TensorFlow",
courses: "Deep Learning, Neural Networks, AI Basics",
values: [5,4,3]
},
"Software Engineer": {
skills: "Java, DSA, OOP",
courses: "Data Structures, Algorithms, OOP Concepts",
values: [5,4,3]
}
};

let result = data[role];

document.getElementById("result").innerHTML =
"<h3>Recommendation Result</h3>" +
"<p><b>Student ID:</b> " + id + "</p>" +
"<p><b>Career:</b> " + role + "</p>" +
"<p><b>Skills:</b> " + result.skills + "</p>" +
"<p><b>Courses:</b> " + result.courses + "</p>";

let ctx = document.getElementById('chart').getContext('2d');

if(window.myChart){
window.myChart.destroy();
}

window.myChart = new Chart(ctx, {
type: 'bar',
data: {
labels: result.skills.split(", "),
datasets: [{
label: 'Skill Importance',
data: result.values
}]
}
});

}, 500);
}
