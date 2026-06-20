function generateResume() {


const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const address = document.getElementById("address").value;
const summary = document.getElementById("summary").value;
const skills = document.getElementById("skills").value;
const education = document.getElementById("education").value;
const projects = document.getElementById("projects").value;
const experience = document.getElementById("experience").value;
const certifications = document.getElementById("certifications").value;

const skillsList = skills
    .split(",")
    .map(skill => skill.trim())
    .filter(skill => skill !== "")
    .map(skill => `<li>${skill}</li>`)
    .join("");

document.getElementById("resume").innerHTML = `
    <div class="resume-header">
        <h1>${name}</h1>
        <p>${email}</p>
        <p>${phone}</p>
        <p>${address}</p>
    </div>

    <div class="resume-section">
        <h3>Professional Summary</h3>
        <p>${summary}</p>
    </div>

    <div class="resume-section">
        <h3>Skills</h3>
        <ul>
            ${skillsList}
        </ul>
    </div>

    <div class="resume-section">
        <h3>Education</h3>
        <p>${education.replace(/\n/g, "<br>")}</p>
    </div>

    <div class="resume-section">
        <h3>Projects</h3>
        <p>${projects.replace(/\n/g, "<br>")}</p>
    </div>

    <div class="resume-section">
        <h3>Experience</h3>
        <p>${experience.replace(/\n/g, "<br>")}</p>
    </div>

    <div class="resume-section">
        <h3>Certifications</h3>
        <p>${certifications.replace(/\n/g, "<br>")}</p>
    </div>

`;


}

function downloadPDF() {
generateResume();


const originalTitle = document.title;
document.title = "ATS_Resume";

window.print();

document.title = originalTitle;


}
