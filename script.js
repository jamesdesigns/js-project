// "use strict";
var counter = 0;  
const geralt = 'Geralt of Rivia';

// JavaScript code 
function search_character() { 
	let input = document.getElementById('searchbar').value; 
	input=input.toLowerCase(); 
	let x = document.getElementsByClassName('character'); 
	
	for (i = 0; i < x.length; i++) { 
		if (!x[i].innerHTML.toLowerCase().includes(input)) { 
			x[i].style.display="none"; 
		} else { 
			x[i].style.display="list-item";				 
		} 
	} 
} 

document.addEventListener("DOMContentLoaded", function() {
	let lazyloadImages = document.querySelectorAll("img.lazy-load");
	let lazyloadThrottleTimeout;

	function lazyload() {
	  if(lazyloadThrottleTimeout) {
		clearTimeout(lazyloadThrottleTimeout);
	  }
	  lazyloadThrottleTimeout = setTimeout(function() {
		let scrollTop = window.pageYOffset;
		lazyloadImages.forEach(function(img) {
		  if(img.offsetTop < (window.innerHeight + scrollTop)) {
			img.src = img.dataset.src;
			img.classList.remove('lazy');
		  }
		});
		if(lazyloadImages.length == 0) {
		  document.removeEventListener("scroll", lazyload);
		  window.removeEventListener("resize", lazyload);
		  window.removeEventListener("orientationChange", lazyload);
		}
	  }, 20);
	}
	document.addEventListener("scroll", lazyload);
	window.addEventListener("resize", lazyload);
	window.addEventListener("orientationChange", lazyload);
  });

  // This controls the Like Buttons
  function geraltOfRivia(x) {
	window.onload = function() {
	// Store
	 var character1 = localStorage.setItem("name", "Geralt of Rivia");
	 return character1;
	}
	// Retrieve
	var charName1 = localStorage.getItem("name");
	document.getElementById("myresult").innerHTML = charName1;
	x.classList.toggle("fa-heartbeat");
	document.querySelector('.favorite').innerHTML = counter += 1;
  }


  // This controls the menu
  function openNav() {
	document.getElementById("myNav").style.width = "100%";
	document.getElementById("myNav").style.transitionDuration = ".5s";
  }
  
  function closeNav() {
	document.getElementById("myNav").style.width = "0%";
	document.getElementById("myNav").style.transitionDuration = ".5s";
  }
