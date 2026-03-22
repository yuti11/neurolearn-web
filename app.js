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

function getCareerRec(){

let role = document.getElementById("career").value;

if(role == ""){
document.getElementById("result").innerHTML = "Please select a career role";
return;
}

let data = {
"Data Scientist": {
skills: "Python, Machine Learning, Statistics",
courses: "ML Basics, Pandas, Data Science Intro"
},
"Web Developer": {
skills: "HTML, CSS, JavaScript",
courses: "Web Development, Frontend Basics, JS Advanced"
},
"Data Analyst": {
skills: "Excel, SQL, Python",
courses: "Data Analysis, SQL Basics, Excel Advanced"
},
"AI Engineer": {
skills: "Python, Deep Learning, TensorFlow",
courses: "Deep Learning, Neural Networks, AI Basics"
},
"Software Engineer": {
skills: "Java, DSA, OOP",
courses: "Data Structures, Algorithms, OOP Concepts"
}
};

let result = data[role];

document.getElementById("result").innerHTML =
"<b>Career:</b> " + role +
"<br><b>Skills:</b> " + result.skills +
"<br><b>Courses:</b> " + result.courses;

}
