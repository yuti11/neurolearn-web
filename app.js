function getRec(){

let id = document.getElementById("sid").value;

if(id == ""){
document.getElementById("result").innerHTML = "Please enter Student ID";
return;
}

document.getElementById("result").innerHTML =
"Student: " + id +
"<br>Recommended Path:" +
"<br>1. Python Basics" +
"<br>2. Data Structures" +
"<br>3. Machine Learning Foundation";

}
