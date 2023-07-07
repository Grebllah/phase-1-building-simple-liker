// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector("#modal")
modal.setAttribute("class", "hidden")
console.log(modal)
const likeButtons = document.querySelectorAll(".like-glyph")
function handleClick (e) {
const heart = e.target
  // console.log(mimicServerCall)
  mimicServerCall("fakeURL")
  .then(() => {
    console.log(heart)
    if (heart.innerText === EMPTY_HEART){
      heart.innerText = FULL_HEART
      heart.className = "activated-heart"
    }
    else {heart.innerText = EMPTY_HEART
    heart.className = ""
    }
  })
  .catch((error) => {
    // find element
    modal.className = ""
    modal.innerText = error
    setTimeout(() => modal.className = "hidden", 3000)
    // set class off of hidden
    // throw new Error("Fail")
  })
}

likeButtons.forEach(likeButton => likeButton.addEventListener("click", handleClick))



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
