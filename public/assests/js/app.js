$(document).ready(function () {
  $('.toggle').click(function () {
    $('.toggle').toggleClass('active');
    $('nav').toggleClass('active');
  })
});

$(document).ready(function(){
  $("h1").delay("1000").fadeIn();
  $("#back-top").hide();
  $(function () {
      $(window).scroll(function () {
          if ($(this).scrollTop() > 500) {
              $('#back-top').fadeIn();
          } else {
              $('#back-top').fadeOut();
          }
      });
      $('a#back-top').click(function () {
          $('body,html').animate({
              scrollTop: 0
          }, 800);
          return false;
      });
  });
});

document.addEventListener('DOMContentLoaded', init);

function init(event) {

	regForm = document.forms['contact-me-form'];

	regForm['submit'].onclick = validateForm; 
}

function validateForm(event) {

  var errorMessages = Array();
  
  let re = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

	if(!regForm['name'].value) {
		errorMessages.push('** Please enter your first name');
  }

  if(!regForm['name'].value.length < 2) {
		errorMessages.push('** Your first name must be at least 2 characters long');
  }
  
  if(!regForm['lastName'].value) {
		errorMessages.push('** Please enter your last name');
  }

  if(!regForm['lastName'].value.length < 2) {
		errorMessages.push('** Your last name must be at least 2 characters long');
  }
  
  if(!regForm['email'].value) {
		errorMessages.push('** Please enter your email');
  }
  
  if(!re.test(regForm['email'].value)) {
		errorMessages.push('** Your email is incorrect');
	}

	if(!regForm['message'].value) {
		errorMessages.push('** Please enter your message');
  }

	if(!regForm['message'].value.length < 10) {
		errorMessages.push('** Your message must be at least 10 characters long');
	}

	displayErrors(errorMessages);
  
	if(errorMessages.length) {
		return false;
	}
  
  
}

function displayErrors(errors) {
	var errorBox = document.getElementById('errorMessages');
  
	if(!errors.length) {
		errorBox.innerHTML = '';
    return false;
	}

	var errorBox = document.getElementById('errorMessages');

	var messageString = '<div class="error-title">Errors<ul class="pad-0 margin-0">';

	for(var i=0; i<errors.length; i++) {
		messageString += '<li class="error-item">' + errors[i] + '</li>';
	}

	messageString += '</ul></div>';

	errorBox.innerHTML = messageString;
}