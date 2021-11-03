const app = {};

// HAMBURGER MENU
// when user clicks on hamburger menu icon, show hidden menu
// when user clicks on x hide menu

//add event listener
app.listenForHamburgerMenuButton = function(){

  app.buttonEl.addEventListener('click', function(event){
   // check that the icon was clicked
    if (event.target.tagName === "I"){
      // if the icon is the bars(hamburger), show the nav
      // if the icon is the times, hide the nav
      if (event.target.className === 'fas fa-bars'){
        app.navEl.style.display = 'block';
      }else {
        app.navEl.style.display = 'none';
      }
      event.target.classList.toggle('fa-bars');
      event.target.classList.toggle('fa-times');
    }
  })
}
  

// FORM
// when user submits form
// separate event listeners for each form?
// store, name, email address and comment in variables
// get name and alert that message was recieved
// make email address field required

// event listener on form submit
app.listenForFormSubmission = function(){

  app.formEl.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(e);
   
    // get the userName from the input and save value as variable
    const inputNameEl = document.querySelector('input[name=userName]');
    const userName = inputNameEl.value;
  
    // get the email address from the input and save value as variable
    const inputEmailEl = document.querySelector('input[name=emailAddress]');
    const userEmail = inputEmailEl.value;
  
    // get the comment text from the input and save value as variable
    const inputCommentText = document.querySelector('textarea');
    const userComment = inputCommentText.value;
  
    console.log(userName, userEmail, userComment);
  
    if(userName && userEmail && userComment){
      // all fields were completed
      // alert user that info was recieved
      alert(`Thank you ${userName} for your submission.`);
  
      // clear the value of the form fields
      inputNameEl.value = '';
      inputEmailEl.value = '';
      inputCommentText.value = '';
    }else if (userName && userEmail && !userComment){
      // user left comment field empty
      const proceed = prompt('The comment field was empty. Would you like to submit it anyway? (yes / no)', 'y');
      if (proceed){
        // if not null convert to lower case
        proceed.toLowerCase();
      }
  
      if(proceed === 'yes' || proceed === 'y'){
        // user wishes to submit form (also default setting)
         // alert user that info was recieved
      alert(`Thank you ${userName} for your submission.`);
  
      // clear the value of the form fields
      inputNameEl.value = '';
      inputEmailEl.value = '';
      inputCommentText.value = '';
      }else {
        // user doesn't want to submit the form
        alert('Nothing was submitted. Please complete the form.');
      }
    }else {
      alert(' Nothing was submitted. Please include a name and email address');
    }; 
  
    
  
    // OPTION - could disable the submit button *ONLY* if want user to be able to submit it only once
    // const button = document.querySelector('button.submit');
    
    // button.addEventListener('click', function(){
    //   this.disabled = true;
    // }, {once: true})
    
  }); // end of event listener for form
}

app.init = function(){
  //get button element
  app.buttonEl = document.querySelector('button.hamburger');

  //get hamburger nav
  app.navEl = document.querySelector('nav.hamburger');

  // call event listener for hamburger menu button
  app.listenForHamburgerMenuButton();


  // get submitted form
  app.formEl = document.querySelector('form');


  app.listenForFormSubmission();

};

app.init();
