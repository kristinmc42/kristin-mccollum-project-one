// HAMBURGER MENU
// when user clicks on hamburger menu icon, show hidden menu
// when user clicks on x hide menu

//get button element
const buttonEl = document.querySelector('button.hamburger');

//get hamburger nav
const navEl = document.querySelector('nav.hamburger');

//add event listener
buttonEl.addEventListener('click', function(event){
 // check that the icon was clicked
  if (event.target.tagName === "I"){
    // if the icon is the bars(hamburger), show the nav
    // if the icon is the times, hide the nav
    if (event.target.className === 'fas fa-bars'){
      navEl.style.display = 'block';
    }else {
      navEl.style.display = 'none';
    }
    event.target.classList.toggle('fa-bars');
    event.target.classList.toggle('fa-times');
  }
})
  




