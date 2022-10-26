//!TODO if user has not entered a new question, keep answer the same on repeat clicks
const outputArea = document.querySelector(".textbox");
const inputArea = document.querySelector(".input-area");
const triangle = document.querySelector(".triangle");
document.querySelector(".submit").addEventListener("click", randomPhrase);
// document.querySelector(".submit").addEventListener("click", removeClass);
document.querySelector(".submit").addEventListener("click", addEffect);

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
}

function addEffect() {
  // if ((triangle.classList.contains("triangle-result") && outputArea.classList.contains("text-result")) && (triangle.classList.contains("triangle") && outputArea.classList.contains("textbox"))) {
  //   triangle.classList.remove("triangle-result");
  //   outputArea.classList.remove("text-result");
  // } else {
  //   triangle.classList.add("triangle-result");
  //   outputArea.classList.add("text-result");
  // }
  triangle.classList.toggle("triangle-result");
  outputArea.classList.toggle("text-result");
  const timeout = function() {
    setTimeout(resetEffect, 2000);
  }
  timeout();
  return;
}
function resetEffect() {
  triangle.classList.toggle("triangle-result");
  outputArea.classList.toggle("text-result");
}






// function test() {
//   outputArea.innerText = "Hello World";
// }
// test()

// const eightball = {
//   output: document.querySelector(".textbox"),
//   test() {
//     this.output.innerHTML = "test";
//   }
// }
// eightball.test
// var words = [
//   'It is certain',
// 'It is decidedly so',
// 'Without a doubt',
// 'Yes definitely',
// 'You may rely on it',
// 'As I see it, yes',
// 'Most likely',
// 'Outlook good',
// 'Yes',
// 'Signs point to yes',
// 'Reply hazy try again',
// 'Ask again later',
// 'Better not tell you now',
// 'Cannot predict now',
// 'Concentrate and ask again',
// 'Do not count on it',
// 'My reply is no',
// 'My sources say no',
// 'Outlook not so good',
// 'Very doubtful'
//   ];

//   var getRandomWord = function () {
//     return words[Math.floor(Math.random() * words.length)];
//   };
// $(function() {$('.eball').mouseenter(function(){
//   $('.textbox').html(getRandomWord());
//   });

// });