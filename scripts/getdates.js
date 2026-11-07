// Dynamic current year in footer
const currentYearSpan = document.getElementById("currentyear");
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// Last modified date in footer
const lastModifiedP = document.getElementById("lastModified");
if (lastModifiedP) {
    lastModifiedP.textContent = `Last Modification: ${document.lastModified}`;
}