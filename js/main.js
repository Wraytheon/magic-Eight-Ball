//!TODO if user has not entered a new question, keep answer the same on repeat clicks
const outputArea = document.querySelector(".textbox");
const inputArea = document.querySelector(".input-area");
const triangle = document.querySelector(".triangle");
const ball = document.querySelector(".ball");
document.querySelector(".ball").addEventListener("click", shakeIt);

function shakeIt () {
  ball.classList.add("shake");
  shakeTimeout();
}

function shakeTimeout () {
  console.log("Shake timeout");
  setTimeout(addEffect, 500);
}

function addEffect() {
  if (triangle.classList.contains("triangle-result")  && outputArea.classList.contains("text-result")) {
    triangle.classList.remove("triangle-result");
    outputArea.classList.remove("text-result");
    // ball.classList.remove("shake");
    console.log("classes removed");
    effectTimeout();
  } else {
    triangle.classList.add("triangle-result");
    outputArea.classList.add("text-result");
    // ball.classList.add("shake");
    console.log("classes added");
    randomPhrase();
  }

}
function effectTimeout() {
  console.log('Triangle timeout');
  setTimeout(resetEffect, 1000);
}

function resetEffect() {
  triangle.classList.toggle("triangle-result");
  outputArea.classList.toggle("text-result");
  ball.classList.toggle("shake");
  // ball.classList.toggle("shake");
  randomPhrase();
}

function randomPhrase() {
  const randomNum = Math.floor(Math.random() * 9) + 1;
  switch (randomNum) {
    case 0:
      
      outputArea.innerHTML = "Not likely";
      console.log(0);
      break;
    case 1:
      
      outputArea.innerHTML = "Likely";
      console.log(1);
      break;
    case 2:
      
      outputArea.innerHTML = "Unforeseen";
      console.log(2);
      break;
    case 3:
      
      outputArea.innerHTML = "Reply hazy try again later";
      console.log(3);
      break;
    case 4:
      
      outputArea.innerHTML = "All signs point to yes";
      console.log(4);
      break;
    case 5:
      
      outputArea.innerHTML = "Not a chance";
      console.log(5);
      break;
    case 6:
      
      outputArea.innerHTML = "Outlook good";
      console.log(6);
      break;
    case 7:
      
      outputArea.innerHTML = "Yes";
      console.log(7);
      break;
    case 8:
      
      outputArea.innerHTML = "No";
      console.log(8);
      break;
    case 9:
      
      outputArea.innerHTML = "Don't count on it";
      console.log(9);
      break;
    default:
      outputArea.innerHTML = "";
      break;
  }
  console.log("text result")
}


