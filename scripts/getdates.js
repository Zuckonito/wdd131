const currentYearSpan = document.getElementById("currentyear");
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}


const lastModifiedP = document.getElementById("lastModified");
if (lastModifiedP) {
    lastModifiedP.textContent = `Last Modification: ${document.lastModified}`;
}