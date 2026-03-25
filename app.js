function getRec(){

let id = document.getElementById("sid").value;
let role = document.getElementById("career").value;

if(id == "" || role == ""){
document.getElementById("result").innerHTML = "Please enter Student ID and select career role";
return;
}

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

// TEXT OUTPUT
document.getElementById("result").innerHTML =
"<b>Student ID:</b> " + id +
"<br><b>Career:</b> " + role +
"<br><b>Skills:</b> " + result.skills +
"<br><b>Courses:</b> " + result.courses;


// GRAPH

let ctx = document.getElementById('chart').getContext('2d');

// destroy old chart if exists (important)
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
},
options: {
responsive: true
}
});

}
