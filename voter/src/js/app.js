// Get the button element by its ID
// var navigateButton = document.getElementById("quiz-page");

// // Attach a click event listener to the button
// navigateButton.addEventListener("click", function () {
//   // Navigate to another HTML file
//   window.location.href = "quiz.html";
// });

// function quizPage() {
//   var navigateButton = document.getElementById("quiz-page");
//   // Attach a click event listener to the button
//   navigateButton.addEventListener("click", function () {
//     // Navigate to another HTML file
//     window.location.href = "quiz.html";
//   });
// }
function resultsPage() {
  var navigateButton = document.getElementById("results-page");
  // Attach a click event listener to the button
  navigateButton.addEventListener("click", function () {
    // Navigate to another HTML file
    window.location.href = "results.html";
  });
}

// document.getElementById("highlight-btn").addEventListener("click", function () {
//   this.classList.toggle("clicked");
// });

// function setColor(e) {
//   var target = e.target,
//     count = +target.dataset.count;

//   target.style.backgroundColor = count === 1 ? "#7FFF00" : "#FFFFFF";
//   target.dataset.count = count === 1 ? 0 : 1;
//   /*

//    () : ? - this is conditional (ternary) operator - equals

//    if (count === 1) {
//       target.style.backgroundColor = "#7FFF00";
//       target.dataset.count = 0;
//    } else {
//       target.style.backgroundColor = "#FFFFFF";
//       target.dataset.count = 1;
//    }
//    target.dataset - return all "data attributes" for current element,
//    in the form of object,
//    and you don't need use global variable in order to save the state 0 or 1
//   */
// }

function setColor(event, buttonIndex) {
  // Reset background color of all buttons
  var buttons = document.querySelectorAll(".circular-button");
  buttons.forEach(function (button) {
    button.style.backgroundColor = "";
  });

  // Set background color of clicked button
  var targetButton = event.target;
  targetButton.style.backgroundColor = "blue"; // Change color to blue, you can change to any color you want
}
