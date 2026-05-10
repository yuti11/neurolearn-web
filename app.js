// CURRENT ROLE
let currentRole = "";


// LOGOUT
function logout(){

localStorage.clear();

window.location.href = "index.html";

}


// FUNNY AI TEXTS
function funnyMessage(){

let role = document.getElementById("career").value;

let funnyText = document.getElementById("funnyText");

let messages = {

"Data Scientist":
"Data Scientist selected 📊 Statistics are already chasing you.",

"Web Developer":
"Web Developer chosen 🌐 Prepare to fight CSS daily.",

"Data Analyst":
"Data Analyst selected 📈 Excel sheets incoming at dangerous speed.",

"AI Engineer":
"AI Engineer chosen 🤖 Humanity is slightly concerned.",

"Software Engineer":
"Software Engineer selected 💻 Sleep schedule officially cancelled."

};

funnyText.innerHTML =
messages[role] || "AI waiting for your decision 🤖";

}


// AI RECOMMENDATION
function getRec(){

let id = document.getElementById("sid").value;

let role = document.getElementById("career").value;

currentRole = role;

if(id === "" || role === ""){

document.getElementById("result").innerHTML =
"⚠ AI says: Fill all fields first 😭";

return;

}


// SYNTHETIC DATA
let data = {

"Data Scientist":{
skills:"Python, Machine Learning, Statistics",
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

let confidence = Math.floor(Math.random()*10)+90;


// RESULT CARD
document.getElementById("result").innerHTML =

`

<h2 style="margin-bottom:20px;">
Prediction Complete 🚀
</h2>

<p>
<b>Student ID:</b> ${id}
</p>

<p>
<b>Recommended Career:</b> ${role}
</p>

<p>
<b>AI Confidence:</b> ${confidence}%
</p>

<p>
<b>Core Skills:</b> ${r.skills}
</p>

<p>
<b>Skill Gap:</b> ${r.gap}
</p>

<p style="margin-top:15px;color:#c4b5fd;">
"${role}? Interesting choice 👀"
</p>

`;


// SAVE HISTORY
saveHistory(role);


// GRAPH
let ctx = document.getElementById('chart').getContext('2d');

if(window.myChart){
window.myChart.destroy();
}


window.myChart = new Chart(ctx, {

type:'radar',

data:{

labels:r.skills.split(", "),

datasets:[{

label:'Skill Strength',

data:r.values,

backgroundColor:'rgba(139,92,246,0.2)',

borderColor:'#8b5cf6',

borderWidth:3,

pointBackgroundColor:'#60a5fa',

pointRadius:5

}]

},

options:{

responsive:true,

plugins:{
legend:{
labels:{
color:'white'
}
}
},

scales:{
r:{
grid:{
color:'rgba(255,255,255,0.1)'
},
angleLines:{
color:'rgba(255,255,255,0.1)'
},
pointLabels:{
color:'white'
},
ticks:{
display:false
}
}
}

}

});

}


// HISTORY
function saveHistory(role){

let history =
JSON.parse(localStorage.getItem("history")) || [];

history.push(role);

localStorage.setItem(
"history",
JSON.stringify(history)
);

}


// FAVORITES
function saveFavorite(){

if(currentRole === "") return;

let fav =
JSON.parse(localStorage.getItem("fav")) || [];

fav.push(currentRole);

localStorage.setItem(
"fav",
JSON.stringify(fav)
);

alert("Added to favorites ⭐");

}
