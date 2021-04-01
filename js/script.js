//*********HOME PAGE*******

// Scroll Button

if(document.getElementById("scrollBtn") !== null){

  const scroll = document.getElementById("scrollBtn")
  const arrow = document.getElementById("arrow")

  // alters button arrow to down 150ms after mouse enters
  scroll.addEventListener("mouseenter", function(){
    setTimeout(function(){
      arrow.classList.add("fa-arrow-down");
      arrow.classList.remove("fa-arrow-right");
    }, 150)
  });
  // alters button arrow to across 150ms after mouse leaves
  scroll.addEventListener("mouseleave", function(){
    setTimeout(function(){
      arrow.classList.add("fa-arrow-right");
      arrow.classList.remove("fa-arrow-down");
    }, 150)
  });

  // scrolls down the page by distance of screen height
  scroll.addEventListener('click', function(){
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });;
  })
}

const about = document.getElementById('about')

about.addEventListener('click', function(){
  setTimeout(function(){
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
  }, 00);
});

// ******CAROUSEL**********

if(document.getElementById("carousel") !== null){
// Images container
  var images = document.getElementById('images');

// Image caption
  var caption = document.getElementById('comment');

//*******Fetch gallery JSON object**********

  fetch("img/carousel.json")
  .then(function(res) {
    res.json().then(function(json) {
      json.forEach(function(element, i) {

        // Create a new image element.
        var image = document.createElement('img');

        // Set sattributes for source, alt and title.
        image.setAttribute('src', element.url);        
        image.setAttribute('alt', element.caption);    
        image.setAttribute('title', element.caption);  

        // Append this image to our carouselImages element
        images.appendChild(image);
      });
      
      // call main carousel function
      setupCarousel(json);
    });
  });

  function setupCarousel(json) {

    // Number of images in JSON
    const imgCount = (images.childElementCount-2);

    // selects first image in view
    var currentImage = 1;

    //initialises first caption
    caption.innerText = json[currentImage].caption;

    // automatically moves to next image
    setInterval(function(){
      
      //width of images (15% of screen width)
      //images are also set to 15% of screen width in CSS
      var imageWidth = (window.innerWidth)*0.15;

      // checks for last carousel image
      // starts at the beginning if end of carousel
      //sets the style so that the first image appears
      if(currentImage === imgCount){
        currentImage = 1;
        images.style.transition = "none"
      } else {
        images.style.transition = "left .5s ease-in-out"
      }

      ++currentImage;
      // Automaticaly move images into view over 3 seconds
      images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
      // Update caption
      caption.innerText = json[currentImage ].caption;
    }, 2000);
  }
}

//*******NAVBAR******* */

// hides navbar when scrolling down
// dispalys navbar when scrolling up
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-55px";
  }
  prevScrollpos = currentScrollPos;
}

//******IMAGE GALLERY******

//checks if id exists
//if it does, passes url and corresponding id to createGallery()
if(document.getElementById("falklands-gallery") !== null){
    const gallery = document.getElementById("falklands-gallery");
    createGallery ("img/falklands.JSON", gallery)

}else if(document.getElementById("antarctica-gallery") !== null){
  const gallery = document.getElementById("antarctica-gallery");
  createGallery ("img/antarctica.json", gallery)

}else if(document.getElementById("chili-gallery") !== null){
  const gallery = document.getElementById("chili-gallery");
  createGallery ("img/chili.json", gallery)

}else if(document.getElementById("scotland-gallery") !== null){
  const gallery = document.getElementById("scotland-gallery");
  createGallery ("img/scotland.json", gallery)

}else if(document.getElementById("climbing-gallery") !== null){
  const gallery = document.getElementById("climbing-gallery");
  createGallery ("img/climbing.json", gallery)

}else if(document.getElementById("morocco-gallery") !== null){
  const gallery = document.getElementById("morocco-gallery");
  createGallery ("img/morocco.json", gallery)

}else if(document.getElementById("croatia-gallery") !== null){
  const gallery = document.getElementById("croatia-gallery");
  createGallery ("img/croatia.json", gallery)
}

function createGallery (url, gallery){
  //fetch and parse images from JSON file
  fetch(url)
  .then(function(res) {
    res.json().then(function(json) {
      json.forEach(function(images) {
        
        // create new elements within the container
        // anchor, image and heading
        const link = document.createElement('a');
        const image = document.createElement('img');
        const caption = document.createElement('h3');

        link.classList.add('image-countainer')

        //assigns URL to anchor and new tab
        link.setAttribute('href', images.url);
        link.setAttribute('target', '_blank');

        //proetect website from new tab vulnerability
        link.setAttribute('rel', 'noreferrer noopener')

        //locates image and assigns alternate value
        image.setAttribute('src', images.url);  
        image.setAttribute('alt', images.comment); 
        image.setAttribute('title', images.comment);

        //adds comment to heading
        caption.innerText = images.comment;

        //inserts image and heading into anchor
        link.appendChild(image);
        link.appendChild(caption);

        //inserts anchor into gallery
        gallery.appendChild(link);
      });
    });
  });
}

//******ADVENTURE NAVIGATION PAGE******

if(document.getElementById("adventureGallery") !== null){
  adventureNavigation();
}

function adventureNavigation (){
  gallery = document.getElementById("adventureGallery")
  //fetch and parse images from JSON file
  fetch("img/adventure.json")
  .then(function(res) {
    res.json().then(function(json) {
      json.forEach(function(images) {
        
        // assigns elements to variables
        const link = document.createElement('a');
        const header1 = document.createElement('h1');
        const header2 = document.createElement('h2');
        const image = document.createElement('img');
      
        //creates class for link(anchor) Used for CSS
        link.classList.add('link')


        //assigns url and alternative to image
        image.setAttribute('src', images.url);  
        image.setAttribute('alt', images.h1); 
        image.setAttribute('title', images.h1);
        //image.setHeader('set-cookie', ["samesite=none; secure"])
        //assigns hyperlink location
        link.setAttribute('href', images.link);

        //proetect website from new tab vulnerability
        link.setAttribute('rel', 'noreferrer noopener')
        
        //inserts text
        header1.innerText = images.h1;
        header2.innerText = images.h2;
        
        //add text and image elements to anchor
        link.appendChild(header2);
        link.appendChild(header1);
        link.appendChild(image);

        //adds anchor(plus previously inserted elements) to gallery
        gallery.appendChild(link);

        // Hover media Query for tablets '500px'
        //images viable for screens less than 500px wide
        if((window.matchMedia("(max-width: 500px)")).matches){
          image.style.opacity = 1;
        }else{
          
          // image visable when mouse hover, opaque when exits
          link.addEventListener("mouseover", function(){
            image.style.opacity = 1;
          });
  
          link.addEventListener("mouseout", function(){
            image.style.opacity = 0.8;
          });
        }
      })
    })
  })
}
        

// ******COLOUR PICKER******

if(document.getElementById("color1") !== null){

  const color1 = document.getElementById("color1");
  const color2 = document.getElementById("color2");
  const background = document.querySelector(".background");

  setGradient();

  // sets gradient of background
  function setGradient () {
    background.style.background =
    `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  }

  // listens to color picker input
  color1.addEventListener("input", setGradient);
  color2.addEventListener("input", setGradient);
}

// ******CONTACT******

// contact form

if(document.getElementById("contact-btn") !== null){
  const contactBtn = document.getElementById("contact-btn");
  const form = document.getElementById("contactForm");
  const close = document.getElementById("close");
  const contactPrompt = document.getElementById("contactMessage")

  // displays contact prompt after 3 secs
  window.setTimeout(function(){
    // displays contactPrompt showing where contact button is
    contactPrompt.style.display = "block"
    animation();
  }, 3000)

  // removes contact prompt after 9 secs (6 secs of being displayed)
  window.setTimeout(function(){
    contactPrompt.style.display = "none"
  }, 9000)

  // animation to raise a propt of where the contact button is
  function animation(){
    // start time
    let timeStart = Date.now(); 

    // moves contact prompt up every 0.02 secs
    let timer = setInterval(function() {
      // time passed since the start
      let timePassed = Date.now() - timeStart;

      // finish the move after 1 second
      if (timePassed >= 1000) {
        clearInterval(timer); 
        return;
      }

      // Move the contactPrompt box
      move(timePassed);
    }, 20);

    // as timePassed goes from 0 to 1sec
    // bottom positioning gets values from 40px to 65px
    function move(timePassed) {
      contactPrompt.style.bottom = timePassed / 15 + 'px';
    }
  }

  // initiate form not being displayed
  form.style.display = "none";

  // toggles contact form display using contact button
  // contact button text alters between 'contact' and 'Close' according to functionality
  function toggleForm () {
    
    if(form.style.display === "none"){
      form.style.display = "block";
      contactBtn.value = "Close";
    } else {
      form.style.display = "none";
      contactBtn.value = "Contact";
    }
  }

  contactBtn.addEventListener("click", toggleForm);

  // extra closing option to improve UX
  // closes form when 'X' is clicked
  close.addEventListener("click", function(){
    form.style.display = "none";
    contactBtn.value = "Contact";
  });
}

// Google Maps API
//API guide - https://developers.google.com/maps/documentation/javascript/overview

if(document.getElementById("map") !== null){
  let map;

  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 53.0711, lng:-4.1286 },
      zoom: 10,
    });
  }

  initMap();
}
