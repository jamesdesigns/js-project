"use strict";

// JavaScript
(function(){
    // refactor to get rid of DRY code
    const buttons = document.querySelectorAll('.btn')
    const storeItems = document.querySelectorAll('.store-item')

    buttons.forEach((button)=> {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            const filter = e.target.dataset.filter
            
            storeItems.forEach((item)=> {
                if (filter === 'all'){
                    item.style.display = 'block'
                } else {
                    if (item.classList.contains(filter)){
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                }
            })
        })
    })

})();

//wire up filter search box
// (function(){

//     const searchBox = document.querySelector('#search-item')
//     const storeItems = document.querySelectorAll('.store-item')

//     searchBox.addEventListener('keyup', (e) => {
    
//         const searchFilter = e.target.value.toLowerCase().trim()
//         //display only items that contain filter input

//         storeItems.forEach((item) => {
//             if (item.textContent.includes(searchFilter)){
//                 item.style.display = 'block'
//             } else {
//                 item.style.display = 'none'
//             }
//         })
//     })

// })();

// JavaScript code 
function search_character() { 
	let input = document.getElementById('searchbar').value 
	input=input.toLowerCase(); 
	let x = document.getElementsByClassName('character'); 
	
	for (i = 0; i < x.length; i++) { 
		if (!x[i].innerHTML.toLowerCase().includes(input)) { 
			x[i].style.display="none"; 
		} 
		else { 
			x[i].style.display="list-item";				 
		} 
	} 
} 





logoSize = function () {
    // Get the real width of the logo image
    var theLogo = $("#thelogo");
    var newImage = new Image();
    newImage.src = theLogo.attr("src");
    var imgWidth = newImage.width;
    
    // distance over which zoom effect takes place
    var maxScrollDistance = 1300;
    
    // set to window height if larger
    maxScrollDistance = Math.min(maxScrollDistance, $(window).height());
    
    // width at maximum zoom out (i.e. when window has scrolled maxScrollDistance)
    var widthAtMax = 500;
    
    // calculate diff and how many pixels to zoom per pixel scrolled
    var widthDiff = imgWidth - widthAtMax;
    var pixelsPerScroll =(widthDiff / maxScrollDistance);

    $(window).scroll(function () {
        // the currently scrolled-to position - max-out at maxScrollDistance
        var scrollTopPos = Math.min($(document).scrollTop(), maxScrollDistance);
        
        // how many pixels to adjust by
        var scrollChangePx =  Math.floor(scrollTopPos * pixelsPerScroll);
        
        // calculate the new width
        var zoomedWidth = imgWidth - scrollChangePx;
        
        // set the width
        $('.logo').css('width', zoomedWidth);
    });
}

logoSize();


// fetch('./witcher.json')
//                 .then(res => res.json())
//                 .then(data => {
//                   console.log(data.name)
//                 })
//                 .catch(err => console.error(err));

