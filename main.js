// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeBtns = document.getElementsByClassName("like-glyph")
for (btn of likeBtns){
  btn.addEventListener("click", event => isLiked(event))
}

function isLiked(event){
  mimicServerCall()
    .then(() => colourHeart(event))
    .catch(msg => flashError(msg))
}

function flashError(msg){
  document.getElementById("modal-message").innerText = msg
  modal = document.getElementById("modal")
  modal.classList.remove("hidden")
  setTimeout(() => modal.classList.add("hidden"), 5000)
}

function colourHeart(event){
  if (event.target.className === "like-glyph activated-heart") {
    event.target.innerText = EMPTY_HEART
    event.target.classList.remove("activated-heart")
  } else {
    event.target.innerText = FULL_HEART
    event.target.classList.add("activated-heart")
  }
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
