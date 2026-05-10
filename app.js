let isLogin = true;
let currentRole = "";


// LOGIN
function login() {

let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

if(user === "" || pass === "") {

document.getElementById("error").innerHTML =
"AI says: Fill all fields 😭";

return;
}

localStorage.setItem("user", user);


// LOADING SCREEN
document.querySelector(".glass-card").innerHTML = `

<div class="loading-screen">

<h2>Initializing NeuroLearn AI...</h2>

<p>
Preparing personalized future insights 🚀
</p>

<div class="loader"></div>

</div>

`;


// REDIRECT
setTimeout(function(){

window.location.href = "welcome.html";

}, 3000);

}


// TOGGLE LOGIN / REGISTER
function toggleForm() {

let title = document.getElementById("formTitle");

let subText =
document.querySelector(".sub-text");

let button =
document.querySelector(".main-btn");

let switchBox =
document.querySelector(".switch-box");


if(isLogin){

title.innerHTML = "Register";

subText.innerHTML =
"Create your AI learning account";

button.innerHTML =
"Create Account";

switchBox.innerHTML = `
<p>
Already have an account?
<span onclick="toggleForm()">Login</span>
</p>
`;

isLogin = false;

}else{

title.innerHTML = "Login";

subText.innerHTML =
"Access your futuristic learning dashboard";

button.innerHTML =
"Enter Platform";

switchBox.innerHTML = `
<p>
Don't have an account?
<span onclick="toggleForm()">Register</span>
</p>
`;

isLogin = true;

}

}


// LOGOUT
function logout(){

localStorage.clear();

window.location.href = "index.html";

}


// FUNNY TEXT
function funnyMessage(){

let role =
document.getElementById("career").value;

let funnyText =
document.getElementById("funnyText");

let messages = {

"Data Scientist":
"Data Scientist selected 📊 Statistics are chasing you.",

"Web Developer":
"Web Developer chosen 🌐 CSS battles incoming.",

"Data Analyst":
"Data Analyst selected 📈 Excel fear unlocked.",

"AI Engineer":
"AI Engineer chosen 🤖 Humanity is nervous.",

"Software Engineer":
"Software Engineer selected 💻 Sleep schedule deleted."

};

funnyText.innerHTML =
messages[role] ||
"AI waiting for your decision 🤖";

}


// RECOMMENDATION
function getRec(){

let id =
document.getElementById("sid").value;

let role =
document.getElementById("career").value;

currentRole = role;


if(id === "" || role === ""){

document.getElementById("result").innerHTML =
"⚠ Fill all fields first";

return;
}


let data = {

"Data Scientist":{
skills:"Python, ML, Statistics",
gap:"SQL, Deep Learning",
values:[95,90,85]
},

"Web Developer":{
skills:"HTML, CSS, JavaScript",
gap:"React, Backend",
values:[90,85,80]
},

"Data Analyst":{
skills:"Excel, SQL, Visualization",
gap:"Power BI",
values:[88,82,78]
},

"AI Engineer":{
skills:"Deep Learning, Python, Neural Networks",
gap:"Advanced Mathematics",
values:[97,93,90]
},

"Software Engineer":{
skills:"Java, DSA, OOP",
gap:"System Design",
values:[92,87,83]
}

};


let r = data[role];

let confidence =
Math.floor(Math.random()*10)+90;


document.getElementById("result").innerHTML = `

<h2 style="margin-bottom:20px;">
Prediction Complete 🚀
</h2>

<p><b>Student ID:</b> ${id}</p>

<p><b>Recommended Career:</b> ${role}</p>

<p><b>AI Confidence:</b> ${confidence}%</p>

<p><b>Core Skills:</b> ${r.skills}</p>

<p><b>Skill Gap:</b> ${r.gap}</p>

`;


// CHART
let ctx =
document.getElementById("chart").getContext("2d");

if(window.myChart){
window.myChart.destroy();
}

window.myChart = new Chart(ctx, {

type:"radar",

data:{

labels:r.skills.split(", "),

datasets:[{

label:"Skill Strength",

data:r.values,

backgroundColor:"rgba(139,92,246,0.2)",

borderColor:"#8b5cf6",

borderWidth:3,

pointBackgroundColor:"#60a5fa",

pointRadius:5

}]

},

options:{

responsive:true,

plugins:{
legend:{
labels:{
color:"white"
}
}
},

scales:{
r:{
grid:{
color:"rgba(255,255,255,0.1)"
},
angleLines:{
color:"rgba(255,255,255,0.1)"
},
pointLabels:{
color:"white"
},
ticks:{
display:false
}
}
}

}

});

}
