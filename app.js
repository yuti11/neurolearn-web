let currentRole = "";

// LOGIN
function login(){
let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

if(user === "" || pass === ""){
document.getElementById("error").innerHTML = "Fill all fields";
return;
}

localStorage.setItem("user", user);

document.getElementById("loginPage").style.display="none";
document.getElementById("homePage").style.display="block";

document.getElementById("welcomeUser").innerHTML="Welcome, "+user;
}

// START
function startApp(){
document.getElementById("homePage").style.display="none";
document.getElementById("mainPage").style.display="block";

let user=localStorage.getItem("user");
document.getElementById("userDisplay").innerHTML="User: "+user;
}

// LOGOUT
function logout(){
localStorage.clear();
location.reload();
}

// NAVIGATION
function showSection(s){

let sections=["rec","analysis","history","fav","profile","about","how","admin"];

sections.forEach(sec=>{
let el=document.getElementById(sec+"Section");
if(el) el.style.display="none";
});

document.getElementById(s+"Section").style.display="block";

if(s==="history") loadHistory();
if(s==="fav") loadFavorites();
if(s==="profile") loadProfile();
}

// RECOMMENDATION
function getRec(){

let id=document.getElementById("sid").value;
let role=document.getElementById("career").value;

currentRole=role;

if(id==""||role==""){
document.getElementById("result").innerHTML="Fill inputs";
return;
}

let data={
"Data Scientist":{skills:"Python, ML, Stats",courses:"ML, Pandas",values:[5,4,3],gap:"SQL"},
"Web Developer":{skills:"HTML, CSS, JS",courses:"Frontend",values:[5,4,3],gap:"React"},
"Data Analyst":{skills:"Excel, SQL",courses:"Analytics",values:[5,4,3],gap:"Viz"},
"AI Engineer":{skills:"DL, Python",courses:"AI",values:[5,4,3],gap:"Math"},
"Software Engineer":{skills:"Java, DSA",courses:"DSA",values:[5,4,3],gap:"Design"}
};

let r=data[role];
let confidence=Math.floor(Math.random()*20)+80;

document.getElementById("result").innerHTML=
"<b>Career:</b> "+role+
"<br><b>Confidence:</b> "+confidence+"%"+
"<br><b>Skills:</b> "+r.skills+
"<br><b>Gap:</b> "+r.gap;

saveHistory(role);

// GRAPH
let ctx=document.getElementById('chart').getContext('2d');
if(window.myChart) window.myChart.destroy();

window.myChart=new Chart(ctx,{
type:'bar',
data:{
labels:r.skills.split(", "),
datasets:[{data:r.values}]
}
});
}

// HISTORY
function saveHistory(role){
let h=JSON.parse(localStorage.getItem("history"))||[];
h.push(role);
localStorage.setItem("history",JSON.stringify(h));
}

function loadHistory(){
let h=JSON.parse(localStorage.getItem("history"))||[];
let list=document.getElementById("historyList");
list.innerHTML="";
h.slice(-5).reverse().forEach(i=>{
let li=document.createElement("li");
li.textContent=i;
list.appendChild(li);
});
}

// FAVORITES
function saveFavorite(){
let f=JSON.parse(localStorage.getItem("fav"))||[];
f.push(currentRole);
localStorage.setItem("fav",JSON.stringify(f));
loadFavorites();
}

function loadFavorites(){
let f=JSON.parse(localStorage.getItem("fav"))||[];
let list=document.getElementById("favList");
list.innerHTML="";
f.slice(-5).forEach(i=>{
let li=document.createElement("li");
li.textContent=i;
list.appendChild(li);
});
}

// PROFILE
function loadProfile(){
let user=localStorage.getItem("user");
let h=JSON.parse(localStorage.getItem("history"))||[];
let f=JSON.parse(localStorage.getItem("fav"))||[];

document.getElementById("profileName").innerHTML="User: "+user;
document.getElementById("totalSearch").innerHTML="Searches: "+h.length;
document.getElementById("favCareer").innerHTML="Fav: "+(f[0]||"None");
}
