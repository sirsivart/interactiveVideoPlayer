var vid = document.getElementById("video")

vid.ontimeupdate = function() {myFunction()};

function myFunction() {
  if (vid.currentTime > ".24" && vid.currentTime < 4.13) {
    $(".cap").removeClass("orange");
    $(".cap1").addClass("orange");
  } else if (vid.currentTime > 4.13 && vid.currentTime < 7.535) {
   $(".cap1").removeClass("orange");
   $(".cap2").addClass("orange");
  }
}


//*******************************Transcript event handler

function handleBtnClick1(event) {
  toggleButton1(event.target);
}

function handleBtnKeyPress(event) {
  // Check to see if space or enter were pressed
  if (event.keyCode === 32 || event.keyCode === 13) {
    // Prevent the default action to stop scrolling when space is pressed
    event.preventDefault();
    toggleButton1(event.target);
  }
}

function toggleButton1(element) {
  // Check to see if the button is pressed
  var pressed = (element.getAttribute("aria-pressed") === "true");
  // Change aria-pressed to the opposite state
  element.setAttribute("aria-pressed", !pressed);
  vid.currentTime = 5;
}
