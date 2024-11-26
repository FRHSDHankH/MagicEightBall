//Putting variables for getElementById for easy stuff
let responseImg = document.getElementById('responseImg')
let responseText = document.getElementById('responseText')
let greeting = document.getElementById('greeting')

//Get and insert username
let userName = prompt("Hello, what is your name?");
userName
  ? (greeting.innerText = `Hello, ${userName}!`)
  : (greeting.innerText = "Hello, stranger!");

//Button function
function shakeBall() {
  //Get Question
  let userQuestion = prompt("Ask a question!");

  //DO NOT TOUCH THIS CODE!
  const randomNumber = Math.floor(Math.random() * 8);

  let eightBall;
  let imageChoice;

  switch (randomNumber) {
    case 0:
      eightBall = "it is certain";
      imageChoice = 'imgs/Certain.jpg'
      break;
    case 1:
      eightBall = "it is decidedly so";
      imageChoice = 'imgs/Decided.jpg'
      break;
    case 2:
      eightBall = "reply hazy try again";
      imageChoice = 'imgs/Later.webp'
      break;
    case 3:
      eightBall = "cannot predict now";
      imageChoice = 'imgs/Predict.png'
      break;
    case 4:
      eightBall = "do not count on it";
      imageChoice = 'imgs/count.png'
      break;
    case 5:
      eightBall = "my sources say no";
      imageChoice = 'imgs/sources.jpg'
      break;
    case 6:
      eightBall = "outlook not so good";
      imageChoice = 'imgs/outlook.jpg'
      break;
    case 7:
      eightBall = "signs point to yes";
      imageChoice = 'imgs/signs.jpg'
      break;
  }

  userName ? responseText.innerText = `${userName} has asked ${userQuestion}. The Magic 8 Ball says... ${eightBall}.` : responseText.innerText = `Stranger has asked ${userQuestion}. The Magic 8 Ball says... ${eightBall}.`

  responseImg.src = imageChoice;
}
