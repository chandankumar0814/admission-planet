// Load Courses from CSV
if(document.getElementById("course-container")){
fetch("data/courses.csv")
.then(response => response.text())
.then(data => {
const rows = data.split("\n").slice(1);
let output = "";
rows.forEach(row=>{
const cols = row.split(",");
if(cols.length > 1){
output += `
<div class="card">
<h3>${cols[1]}</h3>
<p>Category: ${cols[2]}</p>
<p>Fees: ₹${cols[3]}</p>
<p>Duration: ${cols[4]}</p>
</div>
`;
}
});
document.getElementById("course-container").innerHTML = output;
});
}

// EmailJS Setup
(function(){
emailjs.init("YOUR_PUBLIC_KEY");
})();