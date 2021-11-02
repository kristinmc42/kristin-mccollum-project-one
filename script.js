// HAMBURGER MENU
// when user clicks on hamburger menu icon, show hidden menu
// when user clicks on x hide menu

//get button element
const buttonEl = document.querySelector('button.hamburger');

//get hamburger nav
const navEl = document.querySelector('nav.hamburger');
console.log(navEl);

//add event listener
buttonEl.addEventListener('click', function(event){
  console.log(event);
  if (event.target.tagName === "I"){
    // show hamburger menu and x icon, hide bars icon
    event.target.classList.toggle('fa-bars');
    event.target.classList.toggle('fa-times');
    event.target.parentElement.previousElementSibling.style.display = "block";
  }
})
  




