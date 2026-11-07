const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentYear;

document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

const mainNav = document.querySelector('nav');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
  mainNav.classList.toggle('open');
  hambutton.classList.toggle('open');
});