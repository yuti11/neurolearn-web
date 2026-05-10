let isLogin = true;

// LOGIN FUNCTION
function login(){

let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

if(user === "" || pass === ""){
document.getElementById("error").innerHTML =
"AI says: Fill all fields 😭";
return;
}

localStorage.setItem("user", user);

// COOL LOADING EFFECT
document.querySelector(".glass-card").innerHTML = `

<div class="loading-screen">

<h2>Initializing NeuroLearn AI...</h2>

<p>
Preparing personalized future insights 🚀
</p>

<div class="loader"></div>

</div>

`;

setTimeout(()=>{

window.location.href = "welcome.html";

},3000);

}


// REGISTER / LOGIN SWITCH
function toggleForm(){

let title = document.getElementById("formTitle");

if(isLogin){

title.innerHTML = "Register";

document.querySelector(".sub-text").innerHTML =
"Create your AI learning account";

document.querySelector(".main-btn").innerHTML =
"Create Account";

document.querySelector(".switch-box").innerHTML =
`
<p>
Already have an account?
<span onclick="toggleForm()">Login</span>
</p>
`;

isLogin = false;

}else{

title.innerHTML = "Login";

document.querySelector(".sub-text").innerHTML =
"Access your futuristic learning dashboard";

document.querySelector(".main-btn").innerHTML =
"Enter Platform";

document.querySelector(".switch-box").innerHTML =
`
<p>
Don't have an account?
<span onclick="toggleForm()">Register</span>
</p>
`;

isLogin = true;

}

}
