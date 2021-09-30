//Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 340px from the top of the document, show the button
window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  if (/*document.body.scrollTop > 20 ||*/ document.documentElement.scrollTop > 340) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  //document.body.scrollTop = 0;
  document.documentElement.scrollTop = 120;
}


//toggle Join mail on/off in the model
let mailList = document.getElementById("model-mail-list");
let joinButtonDiv = document.getElementById("join-the-group-div");
let joinButton = document.getElementById("join-btn");
let closeButton = document.getElementById("close-button");
let signUpButton = document.getElementById("sign-up-button");
let emailInput = document.getElementById("yourEmail");


joinButton.addEventListener('click', () => {
  console.log("button clicked")
  mailList.style.display = "block";
  joinButton.style.display = "none";
})

signUpButton.addEventListener('click', () => {
  mailList.style.display = "none";
  joinButton.style.display = "block";

  if (emailInput.value.indexOf("@") > 0) {
    alert(`Thanks for Joining the Group. 
You will receive an email to proceed with the payment if the minimum group size is reached`);
  } else {
    alert(`Invalid Email`);
  }

  emailInput.value = "";
})

closeButton.addEventListener('click', () => {
  mailList.style.display = "none";
  joinButton.style.display = "block";
})