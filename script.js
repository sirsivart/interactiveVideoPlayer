//*******************************Media JS Setings******



//*******************************Transcript Hightlight******
var vid = document.getElementById("video");

vid.ontimeupdate = function() {capHighlight();};

function capHighlight() {
  if (vid.currentTime > ".24" && vid.currentTime < 4.13) {
    $(".cap").removeClass("orange");
    $(".cap1").addClass("orange");
  } else if (vid.currentTime > 4.13 && vid.currentTime < 7.535) {
   $(".cap").removeClass("orange");
   $(".cap2").addClass("orange");
 } else if (vid.currentTime > 7.535 && vid.currentTime < 11.27) {
   $(".cap").removeClass("orange");
   $(".cap3").addClass("orange");
 } else if (vid.currentTime > 11.27 && vid.currentTime < 13.96) {
   $(".cap").removeClass("orange");
   $(".cap4").addClass("orange");
 } else if (vid.currentTime > 13.96 && vid.currentTime < 17.94) {
   $(".cap").removeClass("orange");
   $(".cap5").addClass("orange");
 } else if (vid.currentTime > 17.94 && vid.currentTime < 22.37) {
   $(".cap").removeClass("orange");
   $(".cap6").addClass("orange");
 } else if (vid.currentTime > 22.37 && vid.currentTime < 26.88) {
   $(".cap").removeClass("orange");
   $(".cap7").addClass("orange");
 } else if (vid.currentTime > 26.88 && vid.currentTime < 30.92) {
   $(".cap").removeClass("orange");
   $(".cap8").addClass("orange");
 } else if (vid.currentTime > 32.1 && vid.currentTime < 34.73) {
   $(".cap").removeClass("orange");
   $(".cap9").addClass("orange");
 } else if (vid.currentTime > 34.73 && vid.currentTime < 39.43) {
   $(".cap").removeClass("orange");
   $(".cap10").addClass("orange");
 } else if (vid.currentTime > 39.43 && vid.currentTime < 41.19) {
   $(".cap").removeClass("orange");
   $(".cap11").addClass("orange");
 } else if (vid.currentTime > 42.35 && vid.currentTime < 46.3) {
   $(".cap").removeClass("orange");
   $(".cap12").addClass("orange");
 } else if (vid.currentTime > 46.3 && vid.currentTime < 49.27) {
   $(".cap").removeClass("orange");
   $(".cap13").addClass("orange");
 } else if (vid.currentTime > 49.27 && vid.currentTime < 53.76) {
   $(".cap").removeClass("orange");
   $(".cap14").addClass("orange");
 } else if (vid.currentTime > 53.76 && vid.currentTime < 57.78) {
   $(".cap").removeClass("orange");
   $(".cap15").addClass("orange");
 } else if (vid.currentTime > 57.78 && vid.currentTime < 60.15) {
   $(".cap").removeClass("orange");
   $(".cap16").addClass("orange");
  }
}


//*******************************Transcript event handlers******


//*******************************Cap1 button
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
  vid.currentTime = ".24";
}


//*******************************Cap2 button
function handleBtnClick2(event) {
  toggleButton2(event.target);
}

function handleBtnKeyPress(event) {
  // Check to see if space or enter were pressed
  if (event.keyCode === 32 || event.keyCode === 13) {
    // Prevent the default action to stop scrolling when space is pressed
    event.preventDefault();
    toggleButton2(event.target);
  }
}

function toggleButton2(element) {
  // Check to see if the button is pressed
  var pressed = (element.getAttribute("aria-pressed") === "true");
  // Change aria-pressed to the opposite state
  element.setAttribute("aria-pressed", !pressed);
  vid.currentTime = 4.13;
}


//*******************************cap3 button
function handleBtnClick3(event) {
  toggleButton3(event.target);
}

function handleBtnKeyPress(event) {
  // Check to see if space or enter were pressed
  if (event.keyCode === 32 || event.keyCode === 13) {
    // Prevent the default action to stop scrolling when space is pressed
    event.preventDefault();
    toggleButton3(event.target);
  }
}

function toggleButton3(element) {
  // Check to see if the button is pressed
  var pressed = (element.getAttribute("aria-pressed") === "true");
  // Change aria-pressed to the opposite state
  element.setAttribute("aria-pressed", !pressed);
  vid.currentTime = 7.535;
}


//*******************************cap4 button
function handleBtnClick4(event) {
  toggleButton4(event.target);
}

function handleBtnKeyPress(event) {
  // Check to see if space or enter were pressed
  if (event.keyCode === 32 || event.keyCode === 13) {
    // Prevent the default action to stop scrolling when space is pressed
    event.preventDefault();
    toggleButton4(event.target);
  }
}

function toggleButton4(element) {
  // Check to see if the button is pressed
  var pressed = (element.getAttribute("aria-pressed") === "true");
  // Change aria-pressed to the opposite state
  element.setAttribute("aria-pressed", !pressed);
  vid.currentTime = 11.27;
}


//*******************************cap5 button
function handleBtnClick5(event) {
  toggleButton5(event.target);
}

function handleBtnKeyPress(event) {
  // Check to see if space or enter were pressed
  if (event.keyCode === 32 || event.keyCode === 13) {
    // Prevent the default action to stop scrolling when space is pressed
    event.preventDefault();
    toggleButton5(event.target);
  }
}

function toggleButton5(element) {
  // Check to see if the button is pressed
  var pressed = (element.getAttribute("aria-pressed") === "true");
  // Change aria-pressed to the opposite state
  element.setAttribute("aria-pressed", !pressed);
  vid.currentTime = 13.96;
}


//*******************************cap6 button
function handleBtnClick6(event) {
  toggleButton6(event.target);
}

function handleBtnKeyPress(event) {
  // Check to see if space or enter were pressed
  if (event.keyCode === 32 || event.keyCode === 13) {
    // Prevent the default action to stop scrolling when space is pressed
    event.preventDefault();
    toggleButton6(event.target);
  }
}

function toggleButton6(element) {
  // Check to see if the button is pressed
  var pressed = (element.getAttribute("aria-pressed") === "true");
  // Change aria-pressed to the opposite state
  element.setAttribute("aria-pressed", !pressed);
  vid.currentTime = 17.94;
}


//*******************************cap7 button
function handleBtnClick7(event) {
  toggleButton7(event.target);
}

function handleBtnKeyPress(event) {
  // Check to see if space or enter were pressed
  if (event.keyCode === 32 || event.keyCode === 13) {
    // Prevent the default action to stop scrolling when space is pressed
    event.preventDefault();
    toggleButton7(event.target);
  }
}

function toggleButton7(element) {
  // Check to see if the button is pressed
  var pressed = (element.getAttribute("aria-pressed") === "true");
  // Change aria-pressed to the opposite state
  element.setAttribute("aria-pressed", !pressed);
  vid.currentTime = 22.37;
}


//*******************************cap8 button
function handleBtnClick8(event) {
  toggleButton8(event.target);
}

function handleBtnKeyPress(event) {
  // Check to see if space or enter were pressed
  if (event.keyCode === 32 || event.keyCode === 13) {
    // Prevent the default action to stop scrolling when space is pressed
    event.preventDefault();
    toggleButton8(event.target);
  }
}

function toggleButton8(element) {
  // Check to see if the button is pressed
  var pressed = (element.getAttribute("aria-pressed") === "true");
  // Change aria-pressed to the opposite state
  element.setAttribute("aria-pressed", !pressed);
  vid.currentTime = 26.88;
}


//*******************************cap9 button
function handleBtnClick9(event) {
  toggleButton9(event.target);
}

function handleBtnKeyPress(event) {
  // Check to see if space or enter were pressed
  if (event.keyCode === 32 || event.keyCode === 13) {
    // Prevent the default action to stop scrolling when space is pressed
    event.preventDefault();
    toggleButton9(event.target);
  }
}

function toggleButton9(element) {
  // Check to see if the button is pressed
  var pressed = (element.getAttribute("aria-pressed") === "true");
  // Change aria-pressed to the opposite state
  element.setAttribute("aria-pressed", !pressed);
  vid.currentTime = 32.1;
}


//*******************************cap10 button
function handleBtnClick10(event) {
  toggleButton10(event.target);
}

function handleBtnKeyPress(event) {
  // Check to see if space or enter were pressed
  if (event.keyCode === 32 || event.keyCode === 13) {
    // Prevent the default action to stop scrolling when space is pressed
    event.preventDefault();
    toggleButton10(event.target);
  }
}

function toggleButton10(element) {
  // Check to see if the button is pressed
  var pressed = (element.getAttribute("aria-pressed") === "true");
  // Change aria-pressed to the opposite state
  element.setAttribute("aria-pressed", !pressed);
  vid.currentTime = 34.73;
}


//*******************************Cap11 button
function handleBtnClick11(event) {
  toggleButton11(event.target);
}

function handleBtnKeyPress(event) {
  // Check to see if space or enter were pressed
  if (event.keyCode === 32 || event.keyCode === 13) {
    // Prevent the default action to stop scrolling when space is pressed
    event.preventDefault();
    toggleButton11(event.target);
  }
}

function toggleButton11(element) {
  // Check to see if the button is pressed
  var pressed = (element.getAttribute("aria-pressed") === "true");
  // Change aria-pressed to the opposite state
  element.setAttribute("aria-pressed", !pressed);
  vid.currentTime = 39.43;
}


//*******************************cap12 button
function handleBtnClick12(event) {
  toggleButton12(event.target);
}

function handleBtnKeyPress(event) {
  // Check to see if space or enter were pressed
  if (event.keyCode === 32 || event.keyCode === 13) {
    // Prevent the default action to stop scrolling when space is pressed
    event.preventDefault();
    toggleButton12(event.target);
  }
}

function toggleButton12(element) {
  // Check to see if the button is pressed
  var pressed = (element.getAttribute("aria-pressed") === "true");
  // Change aria-pressed to the opposite state
  element.setAttribute("aria-pressed", !pressed);
  vid.currentTime = 42.35;
}


//*******************************cap13 button
function handleBtnClick13(event) {
  toggleButton13(event.target);
}

function handleBtnKeyPress(event) {
  // Check to see if space or enter were pressed
  if (event.keyCode === 32 || event.keyCode === 13) {
    // Prevent the default action to stop scrolling when space is pressed
    event.preventDefault();
    toggleButton13(event.target);
  }
}

function toggleButton13(element) {
  // Check to see if the button is pressed
  var pressed = (element.getAttribute("aria-pressed") === "true");
  // Change aria-pressed to the opposite state
  element.setAttribute("aria-pressed", !pressed);
  vid.currentTime = 46.3;
}


//*******************************cap14 button
function handleBtnClick14(event) {
  toggleButton14(event.target);
}

function handleBtnKeyPress(event) {
  // Check to see if space or enter were pressed
  if (event.keyCode === 32 || event.keyCode === 13) {
    // Prevent the default action to stop scrolling when space is pressed
    event.preventDefault();
    toggleButton14(event.target);
  }
}

function toggleButton14(element) {
  // Check to see if the button is pressed
  var pressed = (element.getAttribute("aria-pressed") === "true");
  // Change aria-pressed to the opposite state
  element.setAttribute("aria-pressed", !pressed);
  vid.currentTime = 49.27;
}


//*******************************cap15 button
function handleBtnClick15(event) {
  toggleButton15(event.target);
}

function handleBtnKeyPress(event) {
  // Check to see if space or enter were pressed
  if (event.keyCode === 32 || event.keyCode === 13) {
    // Prevent the default action to stop scrolling when space is pressed
    event.preventDefault();
    toggleButton15(event.target);
  }
}

function toggleButton15(element) {
  // Check to see if the button is pressed
  var pressed = (element.getAttribute("aria-pressed") === "true");
  // Change aria-pressed to the opposite state
  element.setAttribute("aria-pressed", !pressed);
  vid.currentTime = 53.76;
}


//*******************************cap16 button
function handleBtnClick16(event) {
  toggleButton16(event.target);
}

function handleBtnKeyPress(event) {
  // Check to see if space or enter were pressed
  if (event.keyCode === 32 || event.keyCode === 13) {
    // Prevent the default action to stop scrolling when space is pressed
    event.preventDefault();
    toggleButton16(event.target);
  }
}

function toggleButton16(element) {
  // Check to see if the button is pressed
  var pressed = (element.getAttribute("aria-pressed") === "true");
  // Change aria-pressed to the opposite state
  element.setAttribute("aria-pressed", !pressed);
  vid.currentTime = 57.78;
}
